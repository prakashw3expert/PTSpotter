import React from 'react'
import { ScrollView,StatusBar,Alert, Text, Image, View,Dimensions,TouchableOpacity } from 'react-native'
import { Container, Content,DeckSwiper, Left,Icon, Body, Right, ListItem, Thumbnail,List,Button,Card, CardItem,Grid,Col, Badge } from 'native-base';

import { Images, Fonts } from '../../Themes'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Swiper from "react-native-deck-swiper";
import styles from './Styles/HomeComponentsStyle'
const { width, height } = Dimensions.get('window')

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Hr from 'react-native-hr'

export default class Sessions extends React.Component {

   constructor(props) {
         super(props);
         this.state = {
           cardIndex: 0,
           sessionRequests : [
             {
               name : 'Tarun Bardawa',
               image : Images.user2,
               gym : 'Albert',
               actionTaken : false,
               status : 0,

             },
             {
               name : 'Anita Khoja',
               image : Images.user1,
               gym : 'Definite',
               actionTaken : false,
               status : 0,
             },
             {
               name : 'Hitesh',
               image : Images.user3,
               gym : 'Albert',
               actionTaken : false,
               status : 0,
             },
             {
               name : 'Savi Soman',
               image : Images.user4,
               gym : 'Definite',
               actionTaken : false,
               status : 0,
             }
           ]
         }
         this.cardSwipped = this.cardSwipped.bind(this);
         this.Accepted = this.Accepted.bind(this);
  }

  componentWillMount(){

  }

  cardSwipped (cardIndex) {

    (this.state.sessionRequests[cardIndex].actionTaken === true) ?
      null
    :
    Alert.alert(
          'Alert',
          'Are you want to accept or decline session request with ' + this.state.sessionRequests[cardIndex].name + '? ',
          [
            {text: 'Decline', onPress: () => this.Declined(cardIndex)},
            {text: 'Accept', onPress: () => this.Accepted(cardIndex)},
          ]
        )
  }

  Accepted(cardIndex) {
    this.state.sessionRequests[cardIndex].actionTaken = true;
    this.state.sessionRequests[cardIndex].status = 1;
  }

  Declined(cardIndex) {
    this.state.sessionRequests[cardIndex].actionTaken = true;
    this.state.sessionRequests[cardIndex].status = 2;
  }


  render () {
    return (
          <View style={styles.sessionView}>
              <Text style={[Fonts.style.h2, Fonts.style.textCenter, Fonts.style.mb10]}>
                SESSION REQUESTS
              </Text>
              <View style={{paddingTop:5, marginBottom:0, height :140}}>
              <Card style={Fonts.style.sessionCard}>
                    <CardItem style={{marginBottom:0, paddingBottom:0}}>
                        <Left>
                            <Thumbnail large source={Images.user2} />
                            <Body style={{ marginBottom:10}}>
                                <Text style={styles.CardHeading}>ABCD</Text>
                                <Text style={styles.CardText}>809 Gleason Mills Suite 263</Text>
                                <View style={{marginTop:10, flexDirection:'row'}}>
                                   <Button rounded small style={Fonts.style.categoryTag}><Text style={Fonts.style.categoryTagText}>Yoga</Text></Button>
                                   <Button rounded small style={Fonts.style.categoryTagGray}><Text style={Fonts.style.categoryTagText}>Cardio</Text></Button>
                                </View>
                            </Body>
                        </Left>
                      </CardItem>
               </Card>
              <Swiper
                  ref={swiper => {
                    this.swiper = swiper;
                  }}
                  onSwiped={(cardIndex) => {this.cardSwipped(cardIndex)}}
                  cards={this.state.sessionRequests}
                  cardIndex={this.state.cardIndex}
                  cardVerticalMargin={80}
                  backgroundColor={'transparent'}
                  cardVerticalMargin={10}
                  cardHorizontalMargin={15}
                  infinite={true}
                  cardStyle={{height : 138}}
                  verticalSwipe={false}
                  renderCard={ item =>
                    <Card style={(item.status === 0) ? Fonts.style.commnetBox2 : (item.status === 1) ? Fonts.style.commnetBoxGreen : Fonts.style.commnetBoxRed}>
                          <CardItem style={{height: 105,marginBottom:0, paddingBottom:0,backgroundColor:(item.status === 0) ? '#fff' : (item.status === 1) ? 'rgb(31,199,116)' : 'rgb(255,113,113)'}}>
                              <Left>
                                  <Thumbnail large source={item.image} />



                              </Left>
                              <Body style={{ marginBottom:10, flex:1.5}}>
                                  {
                                      (item.status !== 0) ?
                                        <Text style={styles.CardHeadingWhite}>{(item.status === 1) ? 'ACCEPTED' : 'DECLINED'}</Text>
                                      : null
                                  }
                                  <Text style={(item.actionTaken) ? styles.CardTextWhite : styles.CardHeading}>{item.name}</Text>
                                  <Text style={(item.actionTaken) ? styles.CardTextWhiteSmall : styles.CardText}>{item.gym}</Text>
                                  {
                                    (item.status === 0) ?
                                    <View style={{marginTop:10, flexDirection:'row'}}>
                                     <Button rounded small style={Fonts.style.categoryTag}><Text style={Fonts.style.categoryTagText}>Yoga</Text></Button>
                                     <Button rounded small style={Fonts.style.categoryTagGray}><Text style={Fonts.style.categoryTagText}>Cardio</Text></Button>
                                  </View>
                                  :
                                  null
                                }
                              </Body>
                              {
                                (item.status === 2) ?
                                <Right style={{flex:0.3,height:100}}>
                                  <TouchableOpacity>
                                    <Image source={Images.messageIcon} style={{height:25, width:25}} />
                                  </TouchableOpacity>
                                </Right>
                                : null
                              }
                            </CardItem>
                     </Card>
                  }
                />

                  {/*<Card style={Fonts.style.sessionCard}>
                        <CardItem style={{marginBottom:0, paddingBottom:0}}>
                            <Left>
                                <Thumbnail large source={Images.user2} />
                                <Body style={{ marginBottom:10}}>
                                    <Text style={styles.CardHeading}>ABCD</Text>
                                    <Text style={styles.CardText}>809 Gleason Mills Suite 263</Text>
                                    <View style={{marginTop:10, flexDirection:'row'}}>
                                       <Button rounded small style={Fonts.style.categoryTag}><Text style={Fonts.style.categoryTagText}>Yoga</Text></Button>
                                       <Button rounded small style={Fonts.style.categoryTagGray}><Text style={Fonts.style.categoryTagText}>Cardio</Text></Button>
                                    </View>
                                </Body>
                            </Left>
                          </CardItem>
                   </Card>

                <DeckSwiper ref={(deck) => this.deck = deck}
                    onSwipe={(index) => alert(index)}
                    dataSource={this.state.sessionRequests}
                    renderItem={item =>
                         <Card style={Fonts.style.commnetBox2}>
                               <CardItem style={{marginBottom:0, paddingBottom:0, height : 110}}>
                                   <Left>
                                       <Thumbnail large source={item.image} />
                                       <Body style={{ marginBottom:10}}>
                                           <Text style={styles.CardHeading}>{item.name}</Text>
                                           <Text style={styles.CardText}>809 Gleason Mills Suite 263</Text>
                                           <View style={{marginTop:10, flexDirection:'row'}}>
                                              <Button rounded small style={Fonts.style.categoryTag}><Text style={Fonts.style.categoryTagText}>Yoga</Text></Button>
                                              <Button rounded small style={Fonts.style.categoryTagGray}><Text style={Fonts.style.categoryTagText}>Cardio</Text></Button>
                                           </View>
                                       </Body>
                                   </Left>
                                 </CardItem>
                          </Card>

                        }
                        />*/}

              </View>
          </View>
    )
  }
}
