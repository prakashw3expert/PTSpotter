// @flow

import React from 'react'
import { ScrollView, Text, Image, View,Dimensions } from 'react-native'
import { Container, Content, Left,Icon, Body, Right, ListItem, Thumbnail,List,Button,Card, CardItem } from 'native-base';

import { Images } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
// Styles
import styles from './Styles/HomeScreenStyle'
const { width, height } = Dimensions.get('window')
//<Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
export default class HomeScreen extends React.Component {


  render () {
    return (
      <View style={styles.mainContainer}>

        <ScrollView style={styles.container}>

          <Schedule />
          <HealthFeeds />

        </ScrollView>
      </View>
    )
  }
}
 class Schedule extends React.Component {

   constructor(props) {
         super(props);
         this.state = {
             results: {
                 items: [
                   {
                     "Time" : "11:00 am",
                     "image" : require('../Images/avatar.jpg'),
                     "title" : "Meeting with Edward Snowden",
                   },
                   {
                     "Time" : "08:30 pm",
                     "image" : require('../Images/avatar.jpg'),
                     "title" : "Intense cardio training with Mark Zuckerberg",
                   },
                   {
                     "Time" : "",
                     "image" : require('../Images/avatar.jpg'),
                     "title" : "SHOW 6 MORE EVENTS",
                   }

                 ]
             }
         }
     }
  render () {
    return (

          <View style={styles.scheduleView}>
            <Text style={styles.titleText}>
              TODAYS SCHEDULE
            </Text>

                <Content>
                <List dataArray={this.state.results.items} renderRow={(item) =>
                            <ListItem button avatar >
                                <Left>
                                  <Thumbnail source={item.image} />
                                </Left>
                                <Body>
                                  <Text style={styles.listTime}>{item.Time}</Text>
                                  <Text style={styles.listDetail} note>{item.title}</Text>
                                </Body>
                            </ListItem>
                        } />
                </Content>


          </View>

    )
  }
}

class HealthFeeds extends React.Component {

goToDetailScreen(){
  NavigationActions.postDetail()
}

 render () {
   return (

         <View style={styles.HealthFeedsView}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={{flex:1}}></Text>
                <Text style={styles.HealthFeedstitle}>
                  HEALTH FEED
                </Text>

                <Button iconRight dark transparent style={{height:45}}>
                      <Icon name='refresh' />

                  </Button>

            </View>


               <Content>
               <Card >
                        <CardItem>
                            <Left>

                                <Body>
                                    <Text>Natural Home Remedies For Oily Skin</Text>
                                    <Text note>GeekyAnts</Text>
                                </Body>
                            </Left>
                          </CardItem>
                          <CardItem cardBody button onPress={this.goToDetailScreen} >
                              <Image source={Images.ignite} style={{height:180,width:width, margin:10,alignSelf:'center'}} resizeMode="contain"/>
                          </CardItem>
                          <CardItem content>
                              <Text>Wait a minute. Wait a minute, Doc. Uhhh...
                              Are you telling me that you built a time machine... out of a DeLorean?!
                              Whoa. This is heavy.</Text>
                          </CardItem>
                          <CardItem>
                              <Left>
                                  <Button transparent>
                                      <Icon active name="thumbs-up" />
                                      <Text>12 Likes</Text>
                                  </Button>
                              </Left>
                            <Body>
                                <Button transparent>
                                    <Icon active name="chatbubbles" />
                                    <Text>4 Comments</Text>
                                </Button>
                            </Body>
                            <Right>
                                <Text>11h ago</Text>
                            </Right>
                        </CardItem>
                   </Card>
                   <Card >
                            <CardItem>
                                <Left>

                                    <Body>
                                        <Text>NativeBase</Text>
                                        <Text note>GeekyAnts</Text>
                                    </Body>
                                </Left>
                              </CardItem>
                              <CardItem cardBody >
                                  <Image source={Images.ignite} style={{height:180,width:width, margin:10,alignSelf:'center'}} resizeMode="contain"/>
                              </CardItem>
                              <CardItem content>
                                  <Text>Wait a minute. Wait a minute, Doc. Uhhh...
                                  Are you telling me that you built a time machine... out of a DeLorean?!
                                  Whoa. This is heavy.</Text>
                              </CardItem>
                              <CardItem>
                                  <Left>
                                      <Button transparent>
                                          <Icon active name="thumbs-up" />
                                          <Text>12 Likes</Text>
                                      </Button>
                                  </Left>
                                <Body>
                                    <Button transparent>
                                        <Icon active name="chatbubbles" />
                                        <Text>4 Comments</Text>
                                    </Button>
                                </Body>
                                <Right>
                                    <Text>11h ago</Text>
                                </Right>
                            </CardItem>
                       </Card>
                       <Card >
                            <CardItem>
                                <Left>

                                    <Body>
                                        <Text>NativeBase</Text>
                                        <Text note>GeekyAnts</Text>
                                    </Body>
                                </Left>
                              </CardItem>
                              <CardItem cardBody >
                                  <Image source={Images.ignite} style={{height:180,width:width, margin:10,alignSelf:'center'}} resizeMode="contain"/>
                              </CardItem>
                              <CardItem content>
                                  <Text>Wait a minute. Wait a minute, Doc. Uhhh...
                                  Are you telling me that you built a time machine... out of a DeLorean?!
                                  Whoa. This is heavy.</Text>
                              </CardItem>
                              <CardItem>
                                  <Left>
                                      <Button transparent>
                                          <Icon active name="thumbs-up" />
                                          <Text>12 Likes</Text>
                                      </Button>
                                  </Left>
                                <Body>
                                    <Button transparent>
                                        <Icon active name="chatbubbles" />
                                        <Text>4 Comments</Text>
                                    </Button>
                                </Body>
                                <Right>
                                    <Text>11h ago</Text>
                                </Right>
                            </CardItem>
                       </Card>
               </Content>

         </View>

   )
 }
}
