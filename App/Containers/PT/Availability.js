// @flow

import React from 'react'
import { ScrollView, Text,Platform, Image, View,Switch,Alert, TouchableHighlight,TouchableOpacity,Dimensions,Picker,StatusBar } from 'react-native'
import { Container, Content,Input,Form,Item,Body, ListItem,Icon,Thumbnail,List,Button,Card, CardItem,Label,Left,Right,Grid,Col } from 'native-base';
import { Images,Colors,Fonts } from '../../Themes'
import DayButton from '../../Components/DayButton'
import Hr from 'react-native-hr'
import NavItems from '../../Navigation/NavItems'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import styles from './Styles/AvailabilityStyle'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-simple-modal';
const { width, height } = Dimensions.get('window')
var PickerItemIOS = Picker.Item;
import { connect } from 'react-redux'
import {api} from  "../../Services/Api"
import { call, put, takeEvery, takeLatest} from 'redux-saga/effects'
var moment = require('moment');
var Days = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
var FullDays = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];

class AvailabilityScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hour : 3,
      minute : 30,
      ampm : 'pm',
      EndHour : 6,
      EndMinute : 30,
      EndAmpm : 'pm',
      selectedDay : 'MO',
      selectedFullDay : 'MONDAY',
      selectedDayIndex : 0,
      open: false,
      editAvailVisible : false,
      endTime : false,
      show:true,
      schedules : {},
      loaded : false
    }
    this.dayPressed = this.dayPressed.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
    this.handleChangeHour = this.handleChangeHour.bind(this);
    this.handleChangeMinute = this.handleChangeMinute.bind(this);
    this.handleChangeAmpm = this.handleChangeAmpm.bind(this);
    this.addScheduleAPI = this.addScheduleAPI.bind(this);
    this.startEditAvailability = this.startEditAvailability.bind(this);
    this.deleteSchedule = this.deleteSchedule.bind(this);
  }

  componentWillMount () {
    this.setState({
      selectedDay : moment().format("dd").toUpperCase(),
      selectedFullDay : moment().format("dddd").toUpperCase(),
      selectedDayIndex : Days.indexOf(moment().format("dd").toUpperCase())
   })
  }


  componentDidMount () {

    this.getSchedulesFromAPI()

  }

  getSchedulesFromAPI () {
    console.log('access token at Availability screen : ',this.props.user.accessToken)
    api.getSchedules(this.props.user.userId, this.props.user.accessToken)
    .then((response) => {
       this.setState({schedules : response.data, loaded : true})
         console.log('schedules : ', response.data)

    })
  }

  dayPressed (day, i) {
    console.log(i)
    this.setState({
      selectedDay : day,
      selectedFullDay : FullDays[i],
      selectedDayIndex : i

    })

  }

  setModalVisible() {
    this.setState({open: true});
  }

  handleChangeHour(value) {

     if(this.state.endTime) {

         this.setState({
           EndHour: value,
         });

     }else{
       this.setState({
         hour: value,
       });
     }
   }

   handleChangeMinute(value) {

      if(this.state.endTime) {
        this.setState({EndMinute: value});
      }else{
        this.setState({minute: value});
      }
    }

    handleChangeAmpm(value) {

       if(this.state.endTime) {
         this.setState({EndAmpm: value});
       }else{
         this.setState({ampm: value});
       }
     }


     addScheduleAPI(type) {

       const start = this.state.hour + ":" + this.state.minute + " " + this.state.ampm.toUpperCase()
       const end = this.state.EndHour + ":" + this.state.EndMinute + " " + this.state.EndAmpm.toUpperCase()


       var startTime = moment(start, 'h:mm a')
       var endTime = moment(end, 'h:mm a')

       if(endTime.diff(startTime,'minutes') <= 0){

         alert('End time should be greater than start time.')
         return false
       }

       if(type === 'new'){
         const schedule = {
                              "day": this.state.selectedDay,
                              "start_time": start,
                              "end_time": end,
                              "userId": this.props.user.userId
                          }
         api.postSchedules(this.props.user.userId, this.props.user.accessToken, schedule)
         .then((response) => {

              console.log('schedule added response : ', response)
              this.getSchedulesFromAPI()
              this.setState({open: false})

         })
       }
       else if(type === 'update'){
         const schedule = {
                              "start_time": start,
                              "end_time": end,
                          }
         api.updateSchedules(this.props.user.userId, this.state.editScheduleId, this.props.user.accessToken, schedule)
         .then((response) => {

              console.log('schedule updated response : ', response)
              this.getSchedulesFromAPI()
              this.setState({editAvailVisible: false})

         })
       }

     }

     startEditAvailability(schedule) {
       console.log(schedule)

       var startString = schedule.start_time
       var st = startString.split(':')
       var hour = parseInt(st[0]);
       var mm = st[1];

       var mins = mm.split(' ')
       var minute = parseInt(mins[0]);
       var ampm = mins[1];

       var endString = schedule.end_time
       var et = endString.split(':')
       var Ehour = parseInt(et[0]);
       var emm = et[1];

       var emins = emm.split(' ')
       var Eminute = parseInt(emins[0]);
       var Eampm = emins[1];

       this.setState({
         hour : hour,
         minute : minute,
         ampm : (ampm === 'AM') ? 'am' : 'pm' ,
         EndHour : Ehour,
         EndMinute : Eminute,
         EndAmpm : (Eampm === 'AM') ? 'am' : 'pm',
         editAvailVisible : true,
         editScheduleId : schedule.id
       })

     }

     deleteSchedule() {


       api.deleteSchedules(this.props.user.userId, this.state.editScheduleId, this.props.user.accessToken)
       .then((response) => {

         console.log(response);
          if(response.ok){
            console.log('schedule delete response : ', response)
            this.getSchedulesFromAPI()
            this.setState({editAvailVisible: false})
          }
          else{
            alert('Error while removing availability.')
          }


       })

     }

  render () {


    var hours = [];
    var minutes = [];
    for(i = 1; i <= 12; i++) {

        hours.push(<PickerItemIOS key={i} value={i} label={i.toString()} />)

    }
    for(i = 0; i < 60; i++) {
      if(i <= 9){
        minutes.push(<PickerItemIOS key={"0" + i} value={"0" +i} label={"0" + i.toString()} />)
      }
      else{
        minutes.push(<PickerItemIOS key={i} value={i} label={i.toString()} />)
      }
    }
    var scheduleButtons = [];
    (this.state.schedules.length > 0) ?
    this.state.schedules.map((schedule, i) => {
      if(schedule.day === this.state.selectedDay) {
        scheduleButtons.push(
          <Button block bordered block large key={i} style={Fonts.style.grayButtonAvailability} onPress={() => this.startEditAvailability(schedule)}>
                  <Text style={[Fonts.style.subHeading,{color:'rgb(102,102,102)'}]}>{schedule.start_time}</Text>
                  <Icon name="ios-arrow-round-forward" style={{color:'rgb(102,102,102)', marginLeft:20,marginRight:20,}}/>
                  <Text style={[Fonts.style.subHeading,{color:'rgb(102,102,102)'}]}>{schedule.end_time}</Text>
              </Button>
        )
      }
    })
    : null




    return (



      <Container>
      <StatusBar barStyle='light-content' backgroundColor={Colors.background}/>

          <View style={styles.headerView}>
                <View style={styles.navbarview}>
                  <View style={{marginTop:(this.props.fromSettings) ? 5 : 10,marginLeft :5}}>
                    {
                      (this.props.fromSettings) ?
                      <TouchableOpacity style={{marginLeft : 10}} onPress={NavigationActions.pop}>
                        <FontAwesome name='angle-left' size={30} style={{color:"rgb(255, 255, 255)"}} />
                      </TouchableOpacity>
                      : NavItems.hamburgerButton()
                    }
                  </View>
                  <View style={[styles.navbarCenterView,{marginBottom:5}]}>
                      <Text style={[Fonts.style.h1,Fonts.style.textWhite,{textAlign:'center',flex:1}]}> AVAILABILITY </Text>
                  </View>

                  <Button transparent onPress={() => this.setState({open: true})}>
                      <Ionicons name="md-add" size={30} style={{color:'white',justifyContent:'center'}}/>
                  </Button>


              </View>
          </View>
            <Content style={{marginBottom: (Platform.OS === 'ios') ? (width >= 325) ? 110 : 90 : 90}}>
            <View style={styles.topView}>
                <Text style={[Fonts.style.h2,styles.dayTitle]}>{this.state.selectedFullDay}</Text>
                <View style={styles.buttonsView}>
                {
                  Days.map((day, i) => {

                    if(i === this.state.selectedDayIndex){
                      return <DayButton text={day} key={day}
                        onPress={() => this.dayPressed(day, i)} style={{borderColor:'rgb(172,14,250)'}}/>
                    }
                    return <DayButton text={day} key={day}
                      onPress={() => this.dayPressed(day, i)} />
                  })
                }
                  </View>
            </View>
            <Hr lineColor='rgb(234, 234, 234)' />

            <View style={styles.emptyView}>
                <View style={{width:'80%'}}>

                {
                  (scheduleButtons.length > 0 ) ? scheduleButtons : <EmptyAvailability callback={this.setModalVisible}/>

                }

                </View>
            </View>


           </Content>
          <Save />
          <Modal
              offset={this.state.offset}
              open={this.state.open}
              overlayBackground={Colors.popupoverlayBackground}
              modalDidOpen={() => console.log('modal did open')}
              modalDidClose={() => this.setState({open: false})}
              style={{alignItems: 'center'}}>
              <View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{marginLeft:20,flex:1}}></Text>
                    <Text style={[Fonts.style.h2,{flex:(width >= 375) ? 4 : 6,textAlign:'center',fontSize:(Platform.OS === 'ios') ? 13 : 16}]}>ADD AVAILABILITY</Text>
                    <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                    <Button transparent onPress={() => this.setState({open: false})} >
                        <MaterialCommunityIcons name="close" size={22} color="rgb(102,102,102)"/>
                    </Button>
                    </View>
                </View>

                <Text style={styles.modelText}>
                  CHOOSE YOUR TIME OF AVAILABILITY FOR <Text style={styles.dayBold}>{this.state.selectedFullDay}</Text>
                </Text>

                <Grid style={{marginTop:20}}>
                    <Col style={{ height: 25,width:'41%' }}>
                      <Text style={!this.state.endTime ? styles.textHours : styles.textMinutes} onPress={() => this.setState({endTime : false})}>
                        {this.state.hour + ":" +this.state.minute + " " + this.state.ampm}
                      </Text>
                    </Col>
                    <Col style={{height: 25,alignItems:'center',width:'20%'  }}>
                      <Icon name="ios-arrow-round-forward" style={{color:'rgba(102,102,102,0.5)'}}/>
                    </Col>
                    <Col style={{height: 25,width:'41%' }} >

                      <Text style={this.state.endTime ? styles.textHours : styles.textMinutes} onPress={() => this.setState({endTime : true})}>
                        {this.state.EndHour + ":" +this.state.EndMinute + " " + this.state.EndAmpm}
                      </Text>

                    </Col>
                </Grid>


              <View style={{flexDirection:'row',marginLeft:'15%',marginTop:20}}>
                <Picker
                  style={{width:(Platform.OS === 'ios') ? 70 : 90, marginTop:(Platform.OS === 'android') ? 20 : 0}}
                  selectedValue={!this.state.endTime ? this.state.hour : this.state.EndHour}
                  itemStyle={styles.pickerStyle}
                  onValueChange={(value) => this.handleChangeHour(value)}>

                  {hours}

                </Picker>
                <Picker
                  style={{width:(Platform.OS === 'ios') ? 70 : 90,marginTop:(Platform.OS === 'android') ? 20 : 0}}
                  selectedValue={!this.state.endTime ? this.state.minute : this.state.EndMinute}
                  itemStyle={styles.pickerStyle}
                  onValueChange={(value) => this.handleChangeMinute(value)}>

                  {minutes}

                </Picker>
                <Picker
                  style={{width:(Platform.OS === 'ios') ? 90 : 90,marginTop:(Platform.OS === 'android') ? 20 : 0}}
                  selectedValue={!this.state.endTime ? this.state.ampm : this.state.EndAmpm}
                  itemStyle={styles.pickerStyle}
                  onValueChange={(value) => this.handleChangeAmpm(value)}>
                    <PickerItemIOS key="am" value="am" label="am" />
                    <PickerItemIOS key="pm" value="pm" label="pm" />
                </Picker>
              </View>
                <View style={[Fonts.style.mt15,Fonts.style.mb15]}>
                  <Button light full rounded bordered style={Fonts.style.bordered}  onPress={() => this.addScheduleAPI('new')}>
                      <Text style={[Fonts.style.buttonTextNormalGrey]}>ADD</Text>
                  </Button>
                </View>

              </View>
            </Modal>

            {/* Edit availability Modal*/}

            <Modal
                offset={this.state.offset}
                open={this.state.editAvailVisible}
                overlayBackground={Colors.popupoverlayBackground}
                modalDidOpen={() => console.log('modal did open')}
                modalDidClose={() => this.setState({editAvailVisible: false})}
                style={{alignItems: 'center'}}>
                <View>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                      <Text style={{marginLeft:20,flex:1}}></Text>
                      <Text style={[Fonts.style.h2,{flex:(width >= 375) ? 4 : 6,textAlign:'center',fontSize:(Platform.OS === 'ios') ? 13 : 16}]}>EDIT AVAILABILITY</Text>
                      <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                      <Button transparent onPress={() => this.setState({editAvailVisible: false})} >
                          <MaterialCommunityIcons name="close" size={22} color="rgb(102,102,102)"/>
                      </Button>
                      </View>
                  </View>

                  <Text style={styles.modelText}>
                    EDIT YOUR TIME OF AVAILABILITY FOR <Text style={styles.dayBold}>{this.state.selectedFullDay}</Text>
                  </Text>

                  <Grid style={{marginTop:20}}>
                      <Col style={{ height: 25,width:'41%' }}>
                        <Text style={!this.state.endTime ? styles.textHours : styles.textMinutes} onPress={() => this.setState({endTime : false})}>
                          {this.state.hour + ":" +this.state.minute + " " + this.state.ampm}
                        </Text>
                      </Col>
                      <Col style={{height: 25,alignItems:'center',width:'20%'  }}>
                        <Icon name="ios-arrow-round-forward" style={{color:'rgba(102,102,102,0.5)'}}/>
                      </Col>
                      <Col style={{height: 25,width:'41%' }} >

                        <Text style={this.state.endTime ? styles.textHours : styles.textMinutes} onPress={() => this.setState({endTime : true})}>
                          {this.state.EndHour + ":" +this.state.EndMinute + " " + this.state.EndAmpm}
                        </Text>

                      </Col>
                  </Grid>


                <View style={{flexDirection:'row',marginLeft:'15%',marginTop:20}}>
                  <Picker
                    style={{width:(Platform.OS === 'ios') ? 70 : 90, marginTop:(Platform.OS === 'android') ? 20 : 0}}
                    selectedValue={!this.state.endTime ? this.state.hour : this.state.EndHour}
                    itemStyle={styles.pickerStyle}
                    onValueChange={(value) => this.handleChangeHour(value)}>

                    {hours}

                  </Picker>
                  <Picker
                    style={{width:(Platform.OS === 'ios') ? 70 : 90,marginTop:(Platform.OS === 'android') ? 20 : 0}}
                    selectedValue={!this.state.endTime ? this.state.minute : this.state.EndMinute}
                    itemStyle={styles.pickerStyle}
                    onValueChange={(value) => this.handleChangeMinute(value)}>

                    {minutes}

                  </Picker>
                  <Picker
                    style={{width:(Platform.OS === 'ios') ? 70 : 90,marginTop:(Platform.OS === 'android') ? 20 : 0}}
                    selectedValue={!this.state.endTime ? this.state.ampm : this.state.EndAmpm}
                    itemStyle={styles.pickerStyle}
                    onValueChange={(value) => this.handleChangeAmpm(value)}>
                      <PickerItemIOS key="am" value="am" label="am" />
                      <PickerItemIOS key="pm" value="pm" label="pm" />
                  </Picker>
                </View>
                  <View style={[Fonts.style.mt15,Fonts.style.mb15]}>
                    <Button light full rounded bordered style={Fonts.style.bordered}  onPress={() => this.addScheduleAPI('update')}>
                        <Text style={[Fonts.style.buttonTextNormalGrey]}>SAVE</Text>
                    </Button>
                  </View>

                  <View style={[Fonts.style.mt5,Fonts.style.mb15]}>
                    <Button light full rounded bordered style={Fonts.style.borderedRed}  onPress={() => Alert.alert(
                          'Alert',
                          'Are you sure to remove this Availability ?',
                          [
                            {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                            {text: 'OK', onPress:this.deleteSchedule},
                          ]
                        )}>
                        <Text style={[Fonts.style.buttonTextNormalRed]}>REMOVE</Text>
                    </Button>
                  </View>

                </View>
              </Modal>

        </Container>
    )
  }
}


class EmptyAvailability extends React.Component {

constructor(props) {
         super(props);
         this.state = {

        }
        this.openModal = this.openModal.bind(this);
}

openModal() {
  this.props.callback()
}
  render () {
    return (

      <View style={styles.emptyView}>
          <Image source={Images.emptyAvailability} style={{height:height * 0.28, width:width * 0.60,marginTop:5}} />
          <Text style={[Fonts.style.buttonTextNormalGrey,styles.emptyText]}>
            YOU HAVE NOT ADDED YOUR AVAILABILITY ON THE CALENDAR YET
          </Text>

          <Button transparent style={{marginTop:-12,alignSelf:'center'}} onPress={this.openModal}>
            <Text style={[Fonts.style.buttonTextNormalGrey,styles.btnEmptyText,{color:Colors.purpleColor}]}>CLICK HERE TO DO SO </Text>
          </Button>

      </View>
    )
  }
}



class Save extends React.Component {

  render () {
    return (


            <View style={styles.bottomview}>
              <Button light full rounded style={Fonts.style.default}>
                  <Text style={[Fonts.style.buttonText, Fonts.style.textBold]}>SAVE</Text>
              </Button>
            </View>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(AvailabilityScreen)
