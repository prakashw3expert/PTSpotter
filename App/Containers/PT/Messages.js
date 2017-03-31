// @flow

import React from 'react'
import { ScrollView, Text, Image, View,Switch,Dimensions,Modal,TouchableHighlight,Slider } from 'react-native'
import { Container, Content,Input,Form,Item,Body, ListItem,Icon,Thumbnail,List,Button,Card, CardItem,Label,Left,Right,Tabs,Tab,TabHeading, } from 'native-base';
import { Images,Colors,Fonts } from '../../Themes'
import { Actions as NavigationActions } from 'react-native-router-flux'
// Styles
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './Styles/MessageScreenStyle'
const { width, height } = Dimensions.get('window')

export default class MessageScreen extends React.Component {

  render () {
    return (

        <Container>
          <View style={styles.headerView}>
            <View style={styles.navbarview}>
              <View style={{flex:1}}>
                <Button transparent iconLeft onPress={NavigationActions.pop}>
                  <Ionicons name="ios-arrow-back-outline" size={30} style={{color:'white'}}/>
                </Button>
              </View>
              <View style={styles.navbarCenterView}>
                  <Text style={[Fonts.style.h1,Fonts.style.textWhite,{textAlign:'center',flex:1}]}> MESSAGES </Text>
              </View>
              <View style={{flex:1}}>
              <Button transparent>
                  <Text></Text>
              </Button>
              </View>

          </View>
        </View>

        <Content>
          <DataListView />
          </Content>
      </Container>
      
    )
  }
}



class DataListView extends React.Component {

  constructor(props) {
         super(props);
         this.state = {
             results: {
                 items: [
                   {
                     "Name" : "Ernest Woods",
                     "image" : require('../../Images/dummy/user1.jpg'),
                     "last_message" : "Hey ! whats about our meeting on friday",
                   },
                   {
                     "Name" : "Arthur Moran",
                     "image" : require('../../Images/dummy/user2.jpeg'),
                     "last_message" : "waiting in gym!",
                   },
                   {
                     "Name" : "Curtis Stone",
                     "image" : require('../../Images/dummy/user3.jpg'),
                     "last_message" : "Google has announced that its bringing the Google Assistant to more Android phones starting this week...",
                   },
                   {
                     "Name" : "Mike Nguyen",
                     "image" : require('../../Images/dummy/user4.jpeg'),
                     "last_message" : "All phones running Android 6.0 Marshmallow and 7.0",
                   },
                   {
                     "Name" : "Jesus McDonald",
                     "image" : require('../../Images/dummy/user6.jpeg'),
                     "last_message" : "The Google Assistant will begin rolling out this week.",
                   },
                   

                 ]
             }
         }
     }

     navigateToChat() {

        NavigationActions.chatScreen()
     }

  render () {
    return (

          <View style={styles.scheduleView}>
            
                <Content>
                <List dataArray={this.state.results.items}  renderRow={(item)  =>
                            <ListItem button avatar onPress={this.navigateToChat} style={{marginTop:10,marginBottom:2}}>
                                <Left>
                                  <Thumbnail source={item.image} style={{margin:-5}}/>
                                </Left>
                                <Body>
                                  <Text style={styles.senderName}>{item.Name}</Text>
                                  <Text style={styles.lastMessage} note>{item.last_message}</Text>
                                </Body>
                                <Right>
                                  <View style={styles.unreadCircle}>
                                    <Text style={styles.unreadCounterText}>05</Text>
                                  </View>
                                  <Text style={styles.messageTime}>3:20 pm </Text>
                                </Right>
                            </ListItem>
                        } />
              </Content>
        </View>

    )
  }
}

class NoMessages extends React.Component {

  render () {
    return (

      <View style={styles.emptyView}>
          <Image source={Images.emptyMessage} style={{height:120, width:120,marginTop:22}} />
          <Text style={[Fonts.style.buttonTextNormalGrey,styles.emptyText]}>
           YOU DON’T HAVE ANY MESSAGES YET. 
           <Text style={styles.btnEmptyText} onPress={NavigationActions.search}>GO TO THE SEARCH SCREEN </Text> AND FIND YOUR FIRST CLIENT.
          </Text>

          
        
      </View>
    )
  }
}



