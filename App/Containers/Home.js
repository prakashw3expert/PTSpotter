// @flow

import React from 'react'
import { ScrollView, Text, Image, View,Dimensions } from 'react-native'
import { Container, Content, Left,Icon, Body, Right, ListItem, Thumbnail,List,Button,Card, CardItem,Grid,Col } from 'native-base';

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
                                  <Text style={styles.listText}>{item.Time}</Text>
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
                <Button iconRight dark transparent >
                      <Icon name='refresh' />
                  </Button>
            </View>

               <Content>
               <Card>
                  <CardItem onPress={this.goToDetailScreen}>
                          <Body>
                              <Text style={[styles.listText,]}>Natural Home Remedies For Oily Skin</Text>
                              <Text note style={styles.cardDate}>23/03/2017</Text>
                          </Body>
                      <Right>
                            <Image source={Images.articleArrow} />
                      </Right>
                    </CardItem>
                    <CardItem content>
                        <Text style={styles.cardContent}>Modern medicine has known a rapid progress in the last decades and many traditional
                         forms of treatment have been replaced by new, improved medical techniques. 
                         While in the past open surgery was the only option available for most patients…</Text>
                    </CardItem>
                    <CardItem cardBody button onPress={this.goToDetailScreen} >
                          <Image source={Images.ignite} style={styles.cardImage} resizeMode="contain"/>
                    </CardItem>

                    <CardItem>
                        <Grid>
                            <Col style={{  height: 40, width:65 }}>
                              <Button transparent>
                                <Image source={Images.likeIcon} />
                            </Button>
                            </Col>
                            <Col style={{height: 40,width:40  }}>
                              <Left>
                                <Thumbnail small source={Images.avatarImage}/>
                              </Left>
                            </Col>
                            <Col style={{height: 40,width:40  }}>
                              <Left>
                                <Thumbnail small source={Images.avatarImage}/>
                              </Left>
                            </Col>
                            <Col style={{height: 40,width:40  }}>
                              <Left>
                                <Thumbnail small source={Images.avatarImage}/>
                              </Left>
                            </Col>
                            <Col style={{height: 40,width:40  }}>
                              <Left>
                                <Thumbnail small source={Images.avatarImage}/>
                              </Left>
                            </Col>
                            <Col style={{height: 40,width:40  }}>
                              <Left>
                                <Thumbnail small source={Images.avatarImage}/>
                              </Left>
                            </Col>
                        </Grid>
                    </CardItem>
                    <CardItem style={{marginTop:-12}}>
                        <Grid>
                            <Col>
                              <Button transparent>
                                <Image source={Images.commentIcon} />
                                <Text style={styles.commentText}>5 comments</Text>
                            </Button>
                            </Col>
                        </Grid>
                    </CardItem>
                </Card>

               </Content>

         </View>

   )
 }
}
