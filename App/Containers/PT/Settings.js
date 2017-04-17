import React, { Component } from 'react';
import { ScrollView, Text, Image, View,Switch, TouchableHighlight,Dimensions,PickerIOS,StatusBar, Picker } from 'react-native'
import { Container, Content, Input,
  Form, Item, Icon, List, ListItem, Right, Button, Body, Left, Grid, Col  } from 'native-base';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Images, Colors, Fonts } from '../../Themes'
import RoundedButton from '../../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
import styles from './Styles/SettingScreenStyle'
import FullButton from '../../Components/FullButton'
import Modal from 'react-native-simple-modal';
var PickerItemIOS = Picker.Item;
const { width, height } = Dimensions.get('window')

import { connect } from 'react-redux'

class SettingScreen extends React.Component {

state = {
      open: false,
      locationTrueSwitchIsOn: true,
      locationFalseSwitchIsOn: false,
      modalVisible: false,
    };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
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
                          onValueChange={(value) => this.setState({locationTrueSwitchIsOn: value})}
                          onTintColor="rgb(172,14,250)"
                          thumbTintColor="#fff"
                          tintColor="#777777"
                          style={{marginRight:10}}
                          value={this.state.locationTrueSwitchIsOn} />
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
                    <List style={Fonts.style.settingList}>
                    <ListItem >

                        <Text style={styles.listText}>10 Minutes Prior</Text>
                        <Right>
                          <MaterialCommunityIcons name="close" size={(width >= 375) ? 18 : 16} color="rgb(178,178,178)"/>
                        </Right>
                    </ListItem>
                    <ListItem>

                        <Text style={styles.listText}>1 Hour 12 Minutes Prior</Text>
                        <Right>
                          <MaterialCommunityIcons name="close" size={(width >= 375) ? 18 : 16} color="rgb(178,178,178)"/>
                        </Right>
                    </ListItem>
                    </List>

                    <Text style={[Fonts.style.h2,Fonts.style.ml20,{marginTop:20}]}>
                          GENERAL
                    </Text>


                    <List style={Fonts.style.settingList}>

                    {(this.props.username === 'trainer@ptspotter.co.uk') ? <ListItem >
                        <Ionicons name="md-time" size={(width >= 375) ? 18 : 16} color="rgb(213,134,252)"/>
                        <Text style={styles.listText}>Availability</Text>
                        <Right>
                          <FontAwesome name='angle-right' style={{fontSize:20,color:"rgba(102, 102, 102, 0.5)"}} />
                        </Right>
                    </ListItem> : null}

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
                    <ListItem>
                        <MaterialCommunityIcons name="information-outline" size={(width >= 375) ? 18 : 16} color="rgb(213,134,252)" />
                        <Text style={styles.listText}>About</Text>
                        <Right>
                          <FontAwesome name='angle-right' style={{fontSize:20,color:"rgba(102, 102, 102, 0.5)"}} />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Ionicons name="md-list-box" size={(width >= 375) ? 18 : 16} color="rgb(213,134,252)" />
                        <Text style={styles.listText}>Terms of Service</Text>
                        <Right>
                          <FontAwesome name='angle-right' style={{fontSize:20,color:"rgba(102, 102, 102, 0.5)"}} />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <SimpleLineIcons name="eye" size={(width >= 375) ? 18 : 16} color="rgb(213,134,252)" />
                        <Text style={styles.listText}>Privacy Policy</Text>
                        <Right>
                          <FontAwesome name='angle-right' style={{fontSize:20,color:"rgba(102, 102, 102, 0.5)"}} />
                        </Right>
                    </ListItem>
                    </List>


                      <View style={styles.bottomView}>
                          <Button bordered rounded block style={{height: 57,borderColor:'rgb(255,113,113)', borderWidth:2,}} onPress={NavigationActions.login}>
                              <Text style={[Fonts.style.buttonText,{color:'rgb(255,113,113)'}]}> LOG OUT</Text>
                          </Button>
                      </View>
                      <Modal
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
                              selectedValue={3}
                              style={{width:90, alignItems : 'center'}}
                              itemStyle={styles.pickerStyle}
                              onValueChange={(hour) => this.setState({location: hour})}>

                              {hours}

                            </Picker>
                            <Picker
                              selectedValue={25}
                              style={{width:90, alignItems : 'center'}}
                              itemStyle={styles.pickerStyle}
                              onValueChange={(hour) => this.setState({location: hour})}>

                              {minutes}

                            </Picker>
                          </View>
                            <View style={[Fonts.style.mt15,Fonts.style.mb15]}>
                              <Button light full rounded bordered style={Fonts.style.bordered}  onPress={() => this.setState({open: false})}>
                                  <Text style={[Fonts.style.buttonTextNormalGrey]}>ADD</Text>
                              </Button>
                            </View>

                          </View>
                        </Modal>
                </Form>
            </View>
        </ScrollView>
        </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.login.username
  }
}

export default connect(mapStateToProps)(SettingScreen)
