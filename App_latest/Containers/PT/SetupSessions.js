import React, { Component } from 'react';
import { ScrollView,Dimensions, Text, Image, View,TouchableOpacity,Picker,Platform } from 'react-native'
import {Container,Content, TabHeading, Badge,List,Input, ListItem, Left, Body, Right, Icon,Grid, Col, Button  } from 'native-base';

import { Images, Colors, Fonts, Metrics } from '../../Themes'

import { Actions as NavigationActions } from 'react-native-router-flux'
import styles from './Styles/SessionsScreenStyle'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-simple-modal';
var PickerItemIOS = Picker.Item;
import Hr from 'react-native-hr'
import { connect } from 'react-redux'
import {api} from  "../../Services/Api"
import { call, put, takeEvery, takeLatest} from 'redux-saga/effects'
const { width, height } = Dimensions.get('window')


export default class Daily extends React.Component {

  constructor(props) {
         super(props);
         this.state = {
              selectedGym : '',
              selectedDate : 1,
              selectedMonth : 'January',
              selectedYear : 2017,
              open:false,
              modalVisible: false,
              dateOpen : false,
              dateModalVisible : false,
              monthOpen : false,
              monthModalVisible : false,
              yearOpen : false,
              yearModalVisible : false,
              gymsOpen : false,
              gymsModalVisible : false,
              categories : [],
              myWorkouts : [],
              results: {
                 items: [
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user4,
                     "location" : "BLOK London Gym",
                     "bordered" : false,
                   },


                 ]
             }
         }
         this.addInterest = this.addInterest.bind(this);
         this.removeInterest = this.removeInterest.bind(this);
         this.handleInterest = this.handleInterest.bind(this);
     }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }


  componentDidMount () {

    // api.getCategories(this.props.user.accessToken)
    //  .then((response) => {
    //     this.setState({categories : response.data})
    //       console.log('category List : ', this.state.categories)
    //  })
    this.props.trainer.myInterests ?
    this.setState({categories : this.props.trainer.myInterests}) : this.setState({categories : []})
  }

  addInterest = (item) => {

    this.setState(prevState => ({
      myWorkouts: [...prevState.myWorkouts, { "id" : item.id, "name" : item.name}],

    }));
    console.log('After Adding My Interest : ',this.state.myWorkouts);


  }

  removeInterest = (item) => {

    this.setState({
      myWorkouts: this.state.myWorkouts.filter((itm, i) => itm.id !== item.id)

    })

      console.log('After Remove My Interest : ',this.state.myWorkouts);


  }

  handleInterest = (item) => {
    console.log('item : ', item);
    var selected = false;
    this.state.myWorkouts.map(itm => {
      if(itm.id === item.id) {
        selected = true
      }
    })

    if(selected === true) {
      console.log('already')
      this.removeInterest(item)
      selected = false
    }
    else{
      console.log('Not Have')
      this.addInterest(item)
    }

  }

  render () {

    var colors = ['rgb(251, 99, 39)', 'rgb(36, 240, 133)', 'rgb(251, 179, 39)', 'rgb(36, 195, 200)', 'rgb(31, 199, 116)'];
    var days = [];
    var monthArray = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var years =[];
    var months = [];
    for(i = 1; i <= 31; i++) {

      days.push(<PickerItemIOS key={i} value={i} label={i.toString()} />)
    }

    for(i = 0; i < 12; i++) {

      months.push(<PickerItemIOS key={monthArray[i]} value={monthArray[i]} label={monthArray[i]} />)
    }

    for(i = 2017; i < 2030; i++) {

      years.push(<PickerItemIOS key={i} value={i} label={i.toString()} />)
    }

    var gyms = [];

    this.props.trainer.myGyms ? this.props.trainer.myGyms.map((gym, i) => {
      gyms.push(<PickerItemIOS key={i} value={gym.name} label={gym.name} />)
    })
    : null




    return (
      <Container>
        <View style={{height:Metrics.screenHeight}}>
            <View style={[styles.tabHeading, {paddingLeft:20, paddingRight:20,paddingHorizontal: 5,flexDirection: 'row',
            justifyContent: 'space-between',backgroundColor:Colors.background, height:Metrics.navBarHeight,paddingTop: Metrics.titleBarTop}]}>
              <TouchableOpacity >
              <Text style={ Fonts.style.textCenter} onPress={() => this.props.callback()}>
                <Icon name="md-close"  style={{color:'white'}}/>
              </Text>
              </TouchableOpacity>
              <Text style={ Fonts.style.textCenter}>
                <Text style={[Fonts.style.h1, Fonts.style.textWhite]}>SETUP SESSION</Text>
              </Text>
              <Text style={ Fonts.style.textCenter} onPress={() => this.setState({open: true})}>
                <Icon name="md-add" style={{fontSize:28, color:'rgb(221,221, 221)', fontWeight:'bold'}} />
              </Text>
            </View>


              <List>
                  <ListItem button avatar style={{borderBottomWidth:1, borderColor:'rgb(234, 234, 234)', marginRight:19, paddingTop:0, paddingBottom:10}}>
                  <Left>
                    <Image source={Images.user4} style={Fonts.style.avatar}/>
                  </Left>
                  <Body style={{borderBottomWidth:0}}>
                    <Text style={styles.usernameSet} note>{this.props.trainer.name}</Text>
                    <Text style={styles.locationSet} note> {this.props.trainer.location.address}</Text>
                  </Body>
                  <Right style={{borderBottomWidth:0, alignItems:'center'}}>
                      <Icon name="arrow-forward" style={{fontSize:22, color:'rgb(221,221, 221)'}} />
                  </Right>
                  </ListItem>
               </List>

               <Content style={{marginBottom: (Platform.OS === 'ios') ? (width >= 325) ? 110 : 90 : 90}}>

               <View style={{marginTop:16, marginRight:20,marginLeft:20}}>
                 <Text style={{fontSize:10,fontFamily:Fonts.type.bold,letterSpacing : 0.5,color:Colors.mutedColor,textAlign:'center', marginBottom:16}}>SELECT GYM</Text>

                 <TouchableOpacity onPress={() => this.setState({gymsOpen: true})}>
                   <View style={styles.selectBox} >
                     <Text style={styles.selectBoxText}> {(this.state.selectedGym === '') ? "Select Gym" : this.state.selectedGym }</Text>
                     <FontAwesome name="angle-down" style={{fontSize:(width > 325) ? 22 : 20, color:'rgb(102,102, 102)',marginLeft : (width > 325) ? 20 : 20}} />
                   </View>
                 </TouchableOpacity>
              </View>
              <View style={{marginTop:16, marginRight:20,marginLeft:20}}>
                <Text style={{fontSize:10,fontFamily:Fonts.type.bold,letterSpacing : 0.5,color:Colors.mutedColor,textAlign:'center', marginBottom:16}}>SESSION DATE</Text>

                <View style={{marginTop:10,marginLeft : 5, flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>

                  <TouchableOpacity onPress={() => this.setState({dateOpen: true})}>
                    <View style={styles.selectBox} >
                      <Text style={styles.selectBoxText}> {this.state.selectedDate} </Text>
                      <FontAwesome name="angle-down" style={{fontSize:(width > 325) ? 22 : 20, color:'rgb(102,102, 102)',marginRight : (width > 325) ? 0 : 1}} />
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => this.setState({monthOpen: true})}>
                    <View style={styles.selectBox} >
                      <Text style={styles.selectBoxText}>{this.state.selectedMonth} </Text>
                      <FontAwesome name="angle-down" style={{fontSize:(width > 325) ? 22 : 20, color:'rgb(102,102, 102)',marginRight : (width > 325) ? 0 : 1}} />
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => this.setState({yearOpen: true})}>
                    <View style={styles.selectBox} >
                      <Text style={styles.selectBoxText}>{this.state.selectedYear} </Text>
                      <FontAwesome name="angle-down" style={{fontSize:(width > 325) ? 22 : 20, color:'rgb(102,102, 102)',marginRight : (width > 325) ? 0 : 1}} />
                    </View>
                  </TouchableOpacity>

                </View>
              </View>

              <View style={{marginTop:20,marginHorizontal : 20, flexDirection:'row', flexWrap : 'wrap'}}>
                 {

                   this.state.myWorkouts.map((workout, i) => {
                      return <Button rounded small key={i} style={{
                        paddingLeft:(width >= 325) ? 15 : 10,
                        paddingRight:(width >= 325) ? 15 : 10,
                        paddingTop : 0,
                        paddingBottom : 0,
                        height:(width >= 325) ? 40 : 35,
                        backgroundColor : colors[i % 5],
                        marginRight : 5,
                        marginBottom : 5
                      }}
                      onPress={() => this.setState({open: true})}>
                            <Text style={Fonts.style.categoryTagText}>{workout.name}</Text>
                          </Button>
                   })

                }
              </View>

            </Content>

            <SaveButton />


        </View>

        <Modal
          offset={this.state.offset}
          open={this.state.open}
          overlayBackground={Colors.popupoverlayBackground}
          modalDidOpen={() => console.log('modal did open')}
          modalDidClose={() => this.setState({open: false})}
          style={{alignItems: 'center'}}>
          <View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={{marginLeft:20}}></Text>
                <Text style={[Fonts.style.h2,{flex:1,textAlign:'center',marginLeft:20,fontSize:(width >= 325) ? 16 : 12}]}>ADD NEW WORKOUT</Text>
                <Button transparent onPress={() => this.setState({open: false})}>
                    <MaterialCommunityIcons name="close" size={22} color="rgb(102,102,102)"/>
                </Button>
            </View>

            {/*<Text style={styles.modelText}>
              SEARCH AND ADD WORKOUTS FOR 10 OF OCTOBER
            </Text> */}

            <View style={styles.containers}>

                <View style={[Fonts.style.inputWrapperBordered, {paddingRight:5}]}>
                  <Input  style={Fonts.style.inputBordered} placeholder='SEARCH AND ADD' placeholderTextColor={Fonts.colors.input}/>
                  <View style={{backgroundColor:'rgb(172,14,250)', width:30,height:30, borderRadius:100, marginTop:7, paddingRight:20,marginRight:5}}><Icon name='search' style={Fonts.style.borderedIconRight} /></View>
                </View>

                <ScrollView style={{height:200}}>
                <View style={{marginTop:10, flexDirection:'row',flexWrap :'wrap',}}>
                  {
                    this.state.categories.map((item,i) => {
                      var selected = false
                      this.state.myWorkouts.map(val => {
                        if(item.id === val.id){
                          //console.log('called');
                          selected = true
                        }

                      })
                    if(selected === true){

                      selected = false
                      return <Button key={i} rounded small style={Fonts.style.categoryTagPink} onPress={() => this.handleInterest(item)}>
                                  <Text style={Fonts.style.categoryTagText}>{item.name}</Text>
                                  <MaterialCommunityIcons name="close" size={18} color="rgb(255,255,255)" style={{paddingTop:3,backgroundColor:'transparent'}}/>
                                </Button>
                    }
                    else{
                      selected = false
                      return <Button key={i} rounded small style={{
                        paddingLeft:(width >= 325) ? 15 : 10,
                        paddingRight:(width >= 325) ? 15 : 10,
                        paddingTop : 0,
                        paddingBottom : 0,
                        height:(width >= 325) ? 35 : 30,
                        backgroundColor : colors[i % 5],
                        marginRight : 5,
                        marginBottom : 5
                      }} onPress={() => this.handleInterest(item)}>
                                <Text style={Fonts.style.categoryTagText}>{item.name}</Text>
                                <MaterialCommunityIcons name="plus" size={18} color="rgb(255,255,255)" style={{paddingTop:3, backgroundColor:'transparent'}}/>
                              </Button>

                    }



                        })


                  }

                </View>
                </ScrollView>
                {/*<View style={{marginTop:10, flexDirection:'row'}}>
                   <Button rounded small style={Fonts.style.categoryTagPink}><Text style={Fonts.style.categoryTagText}>Yoga <MaterialCommunityIcons name="close" size={18} color="rgb(255,255,255)" style={{paddingTop:10}}/></Text></Button>
                   <Button rounded small style={Fonts.style.categoryTagPink}><Text style={Fonts.style.categoryTagText}>Cardio <MaterialCommunityIcons name="close" size={18} color="rgb(255,255,255)"/></Text></Button>
                </View>*/}

            </View>

          </View>
        </Modal>


        <Modal
          offset={this.state.offset}
          open={this.state.dateOpen}
          overlayBackground={Colors.popupoverlayBackground}
          modalDidOpen={() => console.log('modal day did open')}
          modalDidClose={() => this.setState({dateOpen: false})}
          style={{alignItems: 'center'}}>
          <View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={{marginLeft:20,flex:1}}></Text>
                <Text style={[Fonts.style.h2,{flex:(width >= 375) ? 4 : 6,textAlign:'center',fontSize:13}]}>SELECT DAY</Text>
                <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                <Button transparent onPress={() => this.setState({dateOpen: false})} >
                    <MaterialCommunityIcons name="close" size={22} color="rgb(102,102,102)"/>
                </Button>
                </View>
            </View>
          <View style={{marginTop:10,alignItems:'center',justifyContent:'center'}}>
            <Picker
              selectedValue={this.state.selectedDate}
              style={{width : 80}}
              itemStyle={styles.pickerStyle}
              onValueChange={(value) => this.setState({selectedDate : value})}>

              {days}


            </Picker>
          </View>
          </View>
        </Modal>

        <Modal
          offset={this.state.offset}
          open={this.state.monthOpen}
          overlayBackground={Colors.popupoverlayBackground}
          modalDidOpen={() => console.log('modal did open')}
          modalDidClose={() => this.setState({monthOpen: false})}
          style={{alignItems: 'center'}}>
          <View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={{marginLeft:20,flex:1}}></Text>
                <Text style={[Fonts.style.h2,{flex:(width >= 375) ? 4 : 6,textAlign:'center',fontSize:13}]}>SELECT MONTH</Text>
                <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                <Button transparent onPress={() => this.setState({monthOpen: false})} >
                    <MaterialCommunityIcons name="close" size={22} color="rgb(102,102,102)"/>
                </Button>
                </View>
            </View>
          <View style={{marginTop:10,alignItems:'center',justifyContent:'center'}}>
            <Picker
              selectedValue={this.state.selectedMonth}
              style={{width : 200}}
              itemStyle={[styles.pickerStyle,{width:200}]}
              onValueChange={(value) => this.setState({selectedMonth : value})}>

              {months}


            </Picker>
          </View>
          </View>
        </Modal>

        <Modal
          offset={this.state.offset}
          open={this.state.yearOpen}
          overlayBackground={Colors.popupoverlayBackground}
          modalDidOpen={() => console.log('modal did open')}
          modalDidClose={() => this.setState({yearOpen: false})}
          style={{alignItems: 'center'}}>
          <View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={{marginLeft:20,flex:1}}></Text>
                <Text style={[Fonts.style.h2,{flex:(width >= 375) ? 4 : 6,textAlign:'center',fontSize:13}]}>SELECT YEAR</Text>
                <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                <Button transparent onPress={() => this.setState({yearOpen: false})} >
                    <MaterialCommunityIcons name="close" size={22} color="rgb(102,102,102)"/>
                </Button>
                </View>
            </View>
          <View style={{marginTop:10,alignItems:'center',justifyContent:'center'}}>
            <Picker
              selectedValue={this.state.selectedYear}
              itemStyle={styles.pickerStyle}
              style={{width : 80}}
              onValueChange={(value) => this.setState({selectedYear : value})}>

              {years}


            </Picker>
          </View>
          </View>
        </Modal>

        {/* Gyms Modal is here*/}

        <Modal
          offset={this.state.offset}
          open={this.state.gymsOpen}
          overlayBackground={Colors.popupoverlayBackground}
          modalDidOpen={() => console.log('modal did open')}
          modalDidClose={() => this.setState({gymsOpen: false})}
          style={{alignItems: 'center'}}>
          <View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={{marginLeft:20,flex:1}}></Text>
                <Text style={[Fonts.style.h2,{flex:(width >= 375) ? 4 : 6,textAlign:'center',fontSize:18}]}>SELECT GYM</Text>
                <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                <Button transparent onPress={() => this.setState({gymsOpen: false})} >
                    <MaterialCommunityIcons name="close" size={22} color="rgb(102,102,102)"/>
                </Button>
                </View>
            </View>
          <View style={{marginTop:10,alignItems:'center',justifyContent:'center'}}>
            <Picker
              selectedValue={(this.state.selectedGym === '') ? 'January' : this.state.selectedGym}
              style={{width : 200}}
              itemStyle={[styles.pickerStyleGym,{width:200}]}
              onValueChange={(value) => this.setState({selectedGym : value})}>

              { gyms.length > 0 ? gyms : null}


            </Picker>
          </View>
          </View>
        </Modal>
      </Container>



    )
  }
}

class EmptyWorkouts extends React.Component {

  render () {
    return (
          <View style={{marginTop:40,alignItems: 'center'}}>
            <Image source={Images.workoutEmpty} style={{height:172, width:218}} />
            <Text style={[Fonts.style.buttonTextNormalGrey,styles.emptyText]}>
              NO WORKOUTS FOR SELECTED DATE.
            </Text>

            <Button transparent style={{marginTop:-12,alignSelf:'center'}}>
              <Text style={[Fonts.style.buttonTextNormalGrey,styles.btnEmptyText,{color:Colors.purpleColor}]}>CLICK HERE TO ADD WORKOUTS </Text>
            </Button>
          </View>
    )
  }
}

class SaveButton extends React.Component {

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
