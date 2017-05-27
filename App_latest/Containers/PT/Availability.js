// @flow

import React from 'react'
import { ScrollView, Text,Platform, Image, View,Switch, TouchableHighlight,Dimensions,Picker,StatusBar } from 'react-native'
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
import Modal from 'react-native-simple-modal';
const { width, height } = Dimensions.get('window')
var PickerItemIOS = Picker.Item;
import { connect } from 'react-redux'
import {api} from  "../../Services/Api"
import { call, put, takeEvery, takeLatest} from 'redux-saga/effects'

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
       this.setState({EndHour: value});
     }else{
       this.setState({hour: value});
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

     addScheduleAPI() {


       const start = this.state.hour + ":" + this.state.minute + " " + this.state.ampm.toUpperCase()
       const end = this.state.EndHour + ":" + this.state.EndMinute + " " + this.state.EndAmpm.toUpperCase()
       this.setState({open: false})
       const schedule = {
                            "day": this.state.selectedDay,
                            "start_time": start,
                            "end_time": end,
                            "userId": this.props.user.userId,
                            "created": new Date(),
                            "modified": new Date()
                        }
       api.postSchedules(this.props.user.userId, this.props.user.accessToken, schedule)
       .then((response) => {

            console.log('schedule added response : ', response)
            this.getSchedulesFromAPI()

       })
     }

  render () {


    var hours = [];
    var minutes = [];
    for(i = 0; i < 24; i++) {

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
    for(i = 0; i < this.state.schedules.length; i++) {
      if(this.state.schedules[i].day === this.state.selectedDay) {
        scheduleButtons.push(
          <Button block bordered block large key={i} style={Fonts.style.purpleButtonAvailability}>
                  <Text style={[Fonts.style.subHeading,{color:'white'}]}>{this.state.schedules[i].start_time}</Text>
                  <Icon name="ios-arrow-round-forward" style={{color:'white', marginLeft:20,marginRight:20,}}/>
                  <Text style={[Fonts.style.subHeading,{color:'white'}]}>{this.state.schedules[i].end_time}</Text>
              </Button>
        )
      }
    }



    return (



      <Container>
      <StatusBar barStyle='light-content' backgroundColor={Colors.background}/>

          <View style={styles.headerView}>
                <View style={styles.navbarview}>
                  <View style={{marginTop:10,marginLeft :5}}>
                    {NavItems.hamburgerButton()}
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
                  style={{width:(Platform.OS === 'ios') ? 70 : 90,marginTop:(Platform.OS === 'android') ? 20 : 0}}
                  selectedValue={!this.state.endTime ? this.state.ampm : this.state.EndAmpm}
                  itemStyle={styles.pickerStyle}
                  onValueChange={(value) => this.handleChangeAmpm(value)}>
                    <PickerItemIOS key="am" value="am" label="am" />
                    <PickerItemIOS key="pm" value="pm" label="pm" />
                </Picker>
              </View>
                <View style={[Fonts.style.mt15,Fonts.style.mb15]}>
                  <Button light full rounded bordered style={Fonts.style.bordered}  onPress={this.addScheduleAPI}>
                      <Text style={[Fonts.style.buttonTextNormalGrey]}>ADD</Text>
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
