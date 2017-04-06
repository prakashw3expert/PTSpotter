import React from 'react'
import { ScrollView,StatusBar, Text, Image, View,Dimensions } from 'react-native'
import { Container, Content, Left,Icon, Body, Right, ListItem, Thumbnail,List,Button,Card, CardItem,Grid,Col, Badge } from 'native-base';

import { Images, Fonts } from '../../Themes'
import RoundedButton from '../../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

import styles from './Styles/HomeComponentsStyle'
const { width, height } = Dimensions.get('window')

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Hr from 'react-native-hr'

export default class HealthFeeds extends React.Component {

goToDetailScreen(){
  NavigationActions.postDetail()
}

 render () {
   return (
         <View style={styles.HealthFeedsView}>
              <View style={{flexDirection:'row',alignItems:'center', marginBottom : 20}}>
                  <Text style={{flex:1}}></Text>
                  <Text style={[Fonts.style.h2, Fonts.style.textCenter, {flex:4}]}>
                    HEALTH FEED
                  </Text>
                  <Button iconRight dark transparent >
                        <Icon name='md-refresh' style={{color:"rgb(102, 102, 102)", marginRight : 5}} />
                    </Button>
              </View>

               <Content>
                 <Hr lineColor='rgb(234, 234, 234)' />
                 <Card style={{borderWidth:0,shadowColor:'#fff', elevation:0}}>
                      <CardItem onPress={this.goToDetailScreen} style={{ paddingBottom : 0, marginBottom : 0}}>
                            <Body>
                                <Text style={[styles.listText,]}>Natural Home Remedies For Oily Skin</Text>
                                <Text note style={styles.cardDate}>23/03/2017</Text>
                            </Body>
                        <Right>
                              <FontAwesome name='angle-right' style={{fontSize:28,color:"rgb(102, 102, 102)"}} />
                        </Right>
                      </CardItem>
                      <CardItem content style={{ paddingBottom : 0, marginBottom : 0}}>
                          <Text style={styles.cardContent}>Modern medicine has known a rapid progress in the last decades and many traditional
                           forms of treatment have been replaced by new, improved medical techniques.
                           While in the past open surgery was the only option available for most patients…</Text>
                      </CardItem>
                      <CardItem cardBody button onPress={this.goToDetailScreen} style={{marginLeft:-13}}>
                            <Image source={Images.blogImage} style={styles.cardImage} />
                      </CardItem>

                      <CardItem style={{paddingTop: 0}}>
                        <Grid>
                            <Col style={{height:30,width:30, marginRight : 13}}>
                                <Icon name='md-heart' style={{color:"rgb(255, 113, 113)", fontSize : 40}} />
                            </Col>
                            <Col style={{height:30,width:30, marginRight : 13}}>
                                <Thumbnail small source={Images.user1}  />
                            </Col>
                            <Col style={{height:30,width:30, marginRight : 13}}>
                                <Thumbnail small source={Images.user2}  />
                            </Col>
                            <Col style={{height:30,width:30, marginRight : 13}}>
                                <Thumbnail small source={Images.user3} />
                            </Col>
                            <Col style={{height:30,width:30, marginRight : 13}}>
                                <Thumbnail small source={Images.user4}  />
                            </Col>
                            <Col style={{height:30,width:30, marginRight : 13}}>
                                <Thumbnail small source={Images.avatar}  />
                            </Col>
                            <Col style={{height:30,width:30, marginRight : 13}}>
                                <Thumbnail small source={Images.user4}  />
                            </Col>
                            <Col style={{height:30,width:30, marginRight : 10}}>
                              <Badge primary style={{width:35, height : 35, borderRadius : 35, backgroundColor:'rgb(178, 178, 178)', padding:7, paddingTop:8, paddingLeft:8}}><Text style={{fontSize:16, color:'white', fontFamily:Fonts.style.bold}}>16</Text></Badge>
                            </Col>
                        </Grid>
                      </CardItem>
                      <CardItem>
                          <Grid>
                              <Col  style={{height:30,width:30}}>
                                  <Image source={Images.commentIcon} style={{width : 30, height : 30, resizeMode: 'contain'}} />
                              </Col>
                              <Col>
                                  <Text style={styles.commentText}>5 comments</Text>
                              </Col>
                          </Grid>
                      </CardItem>
                  </Card>
                  <Hr lineColor='rgb(234, 234, 234)' />
                  <Card style={{borderWidth:0,shadowColor:'#fff', elevation:0}}>
                       <CardItem onPress={this.goToDetailScreen} style={{ paddingBottom : 0, marginBottom : 0}}>
                             <Body>
                                 <Text style={[styles.listText,]}>What Can Happen If High Blood Pressure Is Left Untreated</Text>
                                 <Text note style={styles.cardDate}>10/25/2017</Text>
                             </Body>
                         <Right>
                               <FontAwesome name='angle-right' style={{fontSize:28,color:"rgb(102, 102, 102)"}} />
                         </Right>
                       </CardItem>
                       <CardItem content style={{ marginTop : 0, marginBottom : 0, paddingBottom : 0}}>
                           <Text style={styles.cardContent}>When vision becomes cloudy, normally due to age factor, you can suspect cataract. The primary effect of cataract is blurred vision. Then, what is cataract and how does it develop? The word cataract is derived from Latin word cataracta which means waterfall…</Text>
                       </CardItem>
                       <CardItem cardBody button onPress={this.goToDetailScreen} style={{marginLeft:-13, marginTop : 0, marginBottom : 0, paddingBottom : 0}}>
                             <Image source={Images.blog2} style={styles.cardImage} />
                       </CardItem>

                       <CardItem style={{paddingTop: 0, marginTop : 0, marginBottom : 0}}>
                         <Grid>
                             <Col style={{height:35,width:35, marginRight : 13, marginTop:2}}>
                                 <FontAwesome name='heart-o'  size={32} color="rgb(178, 178, 178)"  />
                             </Col>
                             <Col style={{height:30,width:30, marginRight : 13}}>
                                 <Thumbnail small source={Images.user3}  />
                             </Col>
                             <Col style={{height:30,width:30, marginRight : 13}}>
                                 <Thumbnail small source={Images.user4}  />
                             </Col>
                             <Col style={{height:30,width:30, marginRight : 13}}>
                                 <Thumbnail small source={Images.user6} />
                             </Col>

                         </Grid>
                       </CardItem>
                       <CardItem>
                           <Grid>
                               <Col  style={{height:30,width:30}}>
                                   <Image source={Images.commentIcon} style={{width : 30, height : 30, resizeMode: 'contain'}} />
                               </Col>
                               <Col>
                                   <Text style={styles.commentText}>10 comments</Text>
                               </Col>
                           </Grid>
                       </CardItem>
                   </Card>
                <Hr lineColor='rgb(234, 234, 234)' />
               </Content>

         </View>

   )
 }
}
