import React, { Component } from 'react';
import { ScrollView, Text, Alert,Linking, Image, View,Switch, TouchableHighlight,TouchableOpacity,Dimensions,StatusBar, Picker,Modal } from 'react-native'
import { Container, Content, Input,
  Form, Item, Icon, List, ListItem, Right, Button, Body, Left, Grid, Col  } from 'native-base';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Hr from 'react-native-hr'
import { Images, Colors, Fonts } from '../../Themes'
import RoundedButton from '../../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
import styles from './Styles/SettingScreenStyle'
import FullButton from '../../Components/FullButton'
import Modalss from 'react-native-simple-modal';
var PickerItemIOS = Picker.Item;
const { width, height } = Dimensions.get('window')

import { connect } from 'react-redux'
import {api} from  "../../Services/Api"
import { call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import LoginActions from '../../Redux/UserRedux'
import About from '../About'
import Terms from '../Terms'
import PrivacyPolicy from '../PrivacyPolicy'

class SettingScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hour : 1,
      minute : 15,
      open: false,
      geolocation: false,
      modalVisible: false,
      aboutVisible :  false,
      termsVisible : false,
      privacyVisible : false,
      notification_alerts : []
    }
    this.addAlert = this.addAlert.bind(this);
    this.removeAlert = this.removeAlert.bind(this);
    this.navigateToAvailability = this.navigateToAvailability.bind(this);
    this.closeAbout = this.closeAbout.bind(this);
    this.closeTerms = this.closeTerms.bind(this);
    this.closePrivacy = this.closePrivacy.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.logoutPressed = this.logoutPressed.bind(this);
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  componentDidMount () {
    this.setState({geolocation : this.props.user.profile.geolocation})
    api.getNotificationAlert(this.props.user.userId, this.props.user.accessToken)
    .then((response) => {
      if(response.ok){
        this.setState({notification_alerts : response.data})
        console.log('Notification times for User : ' + response.data)
      }
      else{
        alert('server timeout')
      }


    })
  }


  addAlert() {
    this.setState(prevState => ({
      notification_alerts: [...prevState.notification_alerts, { "id" : Math.random().toString(36).substring(7), "hours" : this.state.hour, "minutes" : this.state.minute}],
      open : false,
    }));

    const info = {
      "userId" : this.props.user.userId,
      "hours" : this.state.hour,
      "minutes" : this.state.minute
    }
    api.postNotificationAlert(this.props.user.userId, this.props.user.accessToken, info)
    .then((response) => {
      if(response.ok){
         console.log('Notification times for User after add: ' + response.data)
      }
      else{
        alert('server timeout')
      }


    })
  }

  removeAlert = (notification) => {

    api.deleteNotificationAlert(this.props.user.userId, notification.id, this.props.user.accessToken)
    .then((response) => {
      if(response.ok){
         console.log('after Delete alert : ' + response.data)
      }
      else{
        alert('server timeout')
      }


    })

    this.setState({
      notification_alerts: this.state.notification_alerts.filter((noti, i) => noti.id !== notification.id)
    })

  }

  navigateToAvailability () {
    NavigationActions.availability({fromSettings : true})
  }

  closeAbout() {
    this.setState({aboutVisible : false})
  }

  closeTerms(){
    this.setState({termsVisible : false})
  }

  closePrivacy() {
    this.setState({privacyVisible :  false })
  }

  handleLocation (value) {
    this.setState({geolocation : value})

    const info = {
      geolocation : value,
    }

    this.props.attemptUpdateProfile(this.props.user.accessToken, this.props.user.userId, info )

  }

  logoutPressed() {
    this.props.logout()
  }

  render () {

    var hours = [];
    var minutes = [];
    for(i = 0; i < 24; i++) {

      hours.push(<Picker.Item key={i} value={i} label={i.toString()} />)
    }
    for(i = 0; i < 60; i++) {

      minutes.push(<Picker.Item key={i} value={i} label={i.toString()} />)
    }
    return (

      <View style={styles.mainContainer}>
      <StatusBar barStyle='light-content' backgroundColor={Colors.background}/>
        <ScrollView style={styles.container}>
            <View style={styles.mainView}>
                <Form>
                    <ListItem style={{borderBottomWidth:0, marginTop : 20}}>
                        <Body >
                            <Text style={[Fonts.style.h2,{marginLeft:5}]}>
                              LOCATION
                            </Text>
                        </Body>
                        <Switch
                          onValueChange={(value) => this.handleLocation(value)}
                          onTintColor="rgb(172,14,250)"
                          thumbTintColor="#fff"
                          tintColor="#777777"
                          style={{marginRight:10}}
                          value={this.state.geolocation} />
                    </ListItem>

                    <Text style={[Fonts.style.h2,Fonts.style.ml20,{marginTop : 20}]}>
                          ALERTS
                    </Text>

                    <ListItem style={{borderBottomWidth:0}} onPress={() => this.setState({open: true})}>
                        <Body>
                            <Text style={[Fonts.style.h2,styles.chooseText]}>
                              Choose the amount of time prior to any event you would like to be notified
                            </Text>
                        </Body>
                        <FontAwesome name='angle-right' style={{fontSize:24,color:"rgba(102, 102, 102, 0.5)"}} />
                    </ListItem>

                    <List style={Fonts.style.settingList} dataArray={this.state.notification_alerts} renderRow={(notification) =>
                      <ListItem >
                          <Text style={styles.listText}>{(notification.hours > 0) ? notification.hours + " Hour " + notification.minutes + " Minutes Prior" : notification.minutes + " Minutes Prior"}</Text>
                          <Right>
                            <MaterialCommunityIcons name="close" size={(width >= 375) ? 18 : 16} color="rgb(178,178,178)" onPress={() => Alert.alert(
                                  'Alert',
                                  'Are you sure to remove this alert ? ',
                                  [
                                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                                    {text: 'OK', onPress: () => this.removeAlert(notification)},
                                  ]
                                )}/>
                          </Right>
                      </ListItem>
                      } />


                    <Text style={[Fonts.style.h2,Fonts.style.ml20,{marginTop:20}]}>
                          GENERAL
                    </Text>


                    <List style={Fonts.style.settingList}>

                    {(this.props.user.profile.role === 'trainer') ?
                    <ListItem onPress={this.navigateToAvailability}>
                        <Ionicons name="md-time" size={(width >= 375) ? 18 : 16} color="rgb(213,134,252)"/>
                        <Text style={styles.listText}>Availability</Text>
                        <Right>
                          <FontAwesome name='angle-right' style={{fontSize:20,color:"rgba(102, 102, 102, 0.5)"}} />
                        </Right>
                    </ListItem> : null}

                    {/*onPress={() => Linking.openURL('mailto:support@ptspotter.com?subject=abcdefg&body=body')}*/}
                    <ListItem>
                        <MaterialCommunityIcons name="comment-text-outline" size={(width >= 375) ? 18 : 16} color="rgb(213,134,252)"/>
                        <Text style={styles.listText}>Leave Feedback</Text>
                        <Right>
                          <FontAwesome name='angle-right' style={{fontSize:20,color:"rgba(102, 102, 102, 0.5)"}} />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <MaterialIcons name="help-outline" size={(width >= 375) ? 18 : 16} color="rgb(213,134,252)" />
                        <Text style={styles.listText}>Support</Text>
                        <Right>
                          <FontAwesome name='angle-right' style={{fontSize:20,color:"rgba(102, 102, 102, 0.5)"}} />
                        </Right>
                    </ListItem>
                    <ListItem onPress={() => this.setState({aboutVisible : true})}>
                        <MaterialCommunityIcons name="information-outline" size={(width >= 375) ? 18 : 16} color="rgb(213,134,252)" />
                        <Text style={styles.listText}>About</Text>
                        <Right>
                          <FontAwesome name='angle-right' style={{fontSize:20,color:"rgba(102, 102, 102, 0.5)"}} />
                        </Right>
                    </ListItem>
                    <ListItem onPress={() => this.setState({termsVisible : true})}>
                        <Ionicons name="md-list-box" size={(width >= 375) ? 18 : 16} color="rgb(213,134,252)" />
                        <Text style={styles.listText}>Terms of Service</Text>
                        <Right>
                          <FontAwesome name='angle-right' style={{fontSize:20,color:"rgba(102, 102, 102, 0.5)"}} />
                        </Right>
                    </ListItem>
                    <ListItem onPress={() => this.setState({privacyVisible : true})}>
                        <SimpleLineIcons name="eye" size={(width >= 375) ? 18 : 16} color="rgb(213,134,252)" />
                        <Text style={styles.listText}>Privacy Policy</Text>
                        <Right>
                          <FontAwesome name='angle-right' style={{fontSize:20,color:"rgba(102, 102, 102, 0.5)"}} />
                        </Right>
                    </ListItem>
                    </List>


                      <View style={styles.bottomView}>
                          <Button bordered rounded block style={{height: 57,borderColor:'rgb(255,113,113)', borderWidth:2,}} onPress={this.logoutPressed}>
                              <Text style={[Fonts.style.buttonText,{color:'rgb(255,113,113)'}]}>LOG OUT</Text>
                          </Button>
                      </View>
                      <Modalss
                          offset={-100}
                          open={this.state.open}
                          overlayBackground={Colors.popupoverlayBackground}
                          modalDidOpen={() => console.log('modal did open')}
                          modalDidClose={() => this.setState({open: false})}
                          style={{alignItems: 'center'}}>
                          <View>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Text style={{marginLeft:20,flex:1}}></Text>
                                <Text style={[Fonts.style.h2,{flex:4,textAlign:'center'}]}>ADD ALERT</Text>
                                <Button transparent onPress={() => this.setState({open: false})}>
                                    <MaterialCommunityIcons name="close" size={22} color="rgb(102,102,102)"/>
                                </Button>
                            </View>

                            <Text style={styles.modelText}>
                              CHOOSE THE AMOUNT OF TIME PRIOR TO ANY EVENT YOU WOULD LIKE TO BE NOTIFIED
                            </Text>

                            <Grid style={{marginTop:20}}>
                                <Col style={{ height: 20 }}>
                                  <Text style={styles.textHours}>HOURS</Text>
                                </Col>
                                <Col style={{height: 20  }}>
                                  <Text style={styles.textMinutes}> MINUTES </Text>
                                </Col>
                            </Grid>

                          <View style={{flexDirection:'row',marginLeft:'15%',marginTop:10}}>
                            <Picker
                              selectedValue={this.state.hour}
                              style={{width:90, alignItems : 'center'}}
                              itemStyle={styles.pickerStyle}
                              onValueChange={(value) => this.setState({hour: value})}>

                              {hours}

                            </Picker>
                            <Picker
                              selectedValue={this.state.minute}
                              style={{width:90, alignItems : 'center'}}
                              itemStyle={styles.pickerStyle}
                              onValueChange={(value) => this.setState({minute: value})}>

                              {minutes}

                            </Picker>
                          </View>
                            <View style={[Fonts.style.mt15,Fonts.style.mb15]}>
                              <Button light full rounded bordered style={Fonts.style.bordered} onPress={this.addAlert}>
                                  <Text style={[Fonts.style.buttonTextNormalGrey]}>ADD</Text>
                              </Button>
                            </View>

                          </View>
                        </Modalss>
                </Form>
            </View>

            <Modal
              animationType={"slide"}
              transparent={false}
              visible={this.state.aboutVisible}
              onRequestClose={() => this.setState({aboutVisible : false})}>

               <About callback={this.closeAbout}/>
          </Modal>

          {/* terms of Service modal here*/}

          <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.termsVisible}
            onRequestClose={() => this.setState({termsVisible : false})}>

            <Terms callback={this.closeTerms}/>

          </Modal>

        {/* Privacy Policy Modal here*/}

        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.privacyVisible}
          onRequestClose={() => this.setState({termsVisible : false})}>

          <PrivacyPolicy callback={this.closePrivacy} />

        </Modal>
        </ScrollView>




        </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptUpdateProfile: (token, userId, data) => dispatch(LoginActions.updateProfile(token, userId, data)),
    logout: () => dispatch(LoginActions.logout())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen)
