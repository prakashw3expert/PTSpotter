
import React from 'react'
import { ScrollView, Text, Image, View, TouchableHighlight, Modal,Dimensions } from 'react-native'
import { Container, Content, Input,Switch,
  Form, Item, Icon, List, ListItem, Right, Button, Body, Left  } from 'native-base';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import { Images, Colors, Fonts } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
import styles from './Styles/SettingScreenStyle'
import FullButton from '../Components/FullButton'
const { width, height } = Dimensions.get('window')

export default class SettingScreen extends React.Component {

state = {
      locationTrueSwitchIsOn: true,
      locationFalseSwitchIsOn: false,
    };

    timepicker() {
      alert('Chhose time')
    }

    state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render () {
    return (

      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
            <View style={styles.mainView}>
                <Form>
                    <ListItem style={{borderBottomWidth:0}}>
                        <Body >
                            <Text style={[Fonts.style.h2,{marginLeft:5}]}>
                              LOCATION
                            </Text>
                        </Body>
                        <Switch
                          onValueChange={(value) => this.setState({locationTrueSwitchIsOn: value})}
                          onTintColor="rgb(172,14,250)"
                          tintColor="#777777"
                          style={{marginRight:10}}
                          value={this.state.locationTrueSwitchIsOn} />
                        
                    </ListItem>
                
                    <Text style={[Fonts.style.h2,Fonts.style.ml20]}>
                          ALERTS
                    </Text>
                    
                         <ListItem style={{borderBottomWidth:0}} onPress={() => {this.setModalVisible(true) }}>
                        <Body >
                            <Text style={[Fonts.style.h2,styles.chooseText]}>
                              Choose the amount of time prior to any event you would like to be notified
                            </Text>
                        </Body>
                        <Icon name="arrow-forward" style={{color:Fonts.colors.input}}/>
                    </ListItem>
                        
                    <Text style={[Fonts.style.h2,Fonts.style.ml20]}>
                          GENERAL
                    </Text>
                    

                    <List style={Fonts.style.settingList}>
                    <ListItem >
                        <Ionicons name="md-time" size={16} />
                        <Text style={styles.listText}>Availability</Text>
                        <Right>
                          <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <MaterialCommunityIcons name="comment-text-outline" size={16}/>
                        <Text style={styles.listText}>Leave Feedback</Text>
                        <Right>
                          <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <MaterialIcons name="help-outline" size={16} />
                        <Text style={styles.listText}>Support</Text>
                        <Right>
                          <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <MaterialCommunityIcons name="information-outline" size={16} />
                        <Text style={styles.listText}>About</Text>
                        <Right>
                          <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Ionicons name="md-list-box" size={16} />
                        <Text style={styles.listText}>Terms of Service</Text>
                        <Right>
                          <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <SimpleLineIcons name="eye" size={16} />
                        <Text style={styles.listText}>Privacy Policy</Text>
                        <Right>
                          <Icon name="arrow-forward" />
                        </Right>
                    </ListItem>
                    </List>
                        

                      <View style={{ justifyContent:'flex-end'}}>
                          <Button bordered rounded block style={{height: 57,borderColor:'#ff8d8e', borderWidth:2,marginTop:20,marginBottom:26,marginLeft:20,marginRight:20}}>
                              <Text style={{color:'#ff8d8e', fontWeight:'600'}}> LOG OUT</Text>
                          </Button>
                      </View>

                      <Modal
                          animationType={"fade"}
                          transparent
                          visible={this.state.modalVisible}
                          position={"center"}
                          onRequestClose={() => {alert("Modal has been closed.")}}
                      >
                             <View style={{marginTop: 0, backgroundColor:Colors.themeColor,height:height}}>
                                <View style={styles.navbarview}>
                                    <Button transparent iconLeft onPress={() => {
                                          this.setModalVisible(!this.state.modalVisible)
                                        }}>
                                    <Icon name='arrow-back' style={{color:'white'}}/>

                                    </Button>
                                    <Text style={{flex:1, textAlign:'center',color:'white',fontWeight:'bold'}}> FILTER </Text>
                                    <Button transparent>
                                        <Text></Text>
                                    </Button>

                                    
                                 </View>
                                 <View style={{flex:10}}>
                                      <Text style={{color:'white'}}> Time picker </Text>
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

