import React, { Component } from 'react';
import { ScrollView, Text, Image, View } from 'react-native'
import {Container,Content, TabHeading, Badge,List, ListItem, Left, Body, Right, Icon,Grid, Col, Button  } from 'native-base';

import { Images, Colors, Fonts } from '../../Themes'

import { Actions as NavigationActions } from 'react-native-router-flux'
import styles from './Styles/SessionsScreenStyle'

import FontAwesome from 'react-native-vector-icons/FontAwesome';


import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';


import Hr from 'react-native-hr'

export default class SettingScreen extends React.Component {

  render () {

    return (
      <Container>
          <View style={[styles.mainContainer]}>
            <ScrollableTabView
            locked={true}

              tabBarStyle={{borderWidth:0, height:40}}
              tabBarBackgroundColor={Colors.background}
              tabBarActiveTextColor={Colors.white}
              tabBarInactiveTextColor={Colors.whiteMuted}
              tabBarUnderlineStyle={Fonts.style.tabBorderSytel}
              tabBarTextStyle={[styles.tabText]}
              tabBarTabStyle={{paddingBottom:0}}
              renderTabBar={() => <DefaultTabBar />}>

              <Daily tabLabel='Daily' />

              <Monthly tabLabel='Monthly' />

              <Yearly tabLabel='Yearly' />

            </ScrollableTabView>

            </View>
            </Container>
    )
  }
}




class Daily extends React.Component {

  constructor(props) {
         super(props);
         this.state = {
             results: {
                 items: [
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user1,
                     "location" : "BLOK London Gym",
                     "bordered" : true,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user2,
                     "location" : "Equinox",
                     "bordered" : true,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user3,
                     "location" : "Another Space Gym",
                     "bordered" : false,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user1,
                     "location" : "BLOK London Gym",
                     "bordered" : true,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user2,
                     "location" : "Equinox",
                     "bordered" : false,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user3,
                     "location" : "Another Space Gym",
                     "bordered" : true,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user1,
                     "location" : "BLOK London Gym",
                     "bordered" : true,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user2,
                     "location" : "Equinox",
                     "bordered" : true,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user3,
                     "location" : "Another Space Gym",
                     "bordered" : false,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user1,
                     "location" : "BLOK London Gym",
                     "bordered" : true,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user2,
                     "location" : "Equinox",
                     "bordered" : false,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user3,
                     "location" : "Another Space Gym",
                     "bordered" : true,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user1,
                     "location" : "BLOK London Gym",
                     "bordered" : true,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user2,
                     "location" : "Equinox",
                     "bordered" : true,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user3,
                     "location" : "Another Space Gym",
                     "bordered" : false,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user1,
                     "location" : "BLOK London Gym",
                     "bordered" : true,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user2,
                     "location" : "Equinox",
                     "bordered" : false,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user3,
                     "location" : "Another Space Gym",
                     "bordered" : true,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user1,
                     "location" : "BLOK London Gym",
                     "bordered" : true,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user2,
                     "location" : "Equinox",
                     "bordered" : true,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user3,
                     "location" : "Another Space Gym",
                     "bordered" : false,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user1,
                     "location" : "BLOK London Gym",
                     "bordered" : true,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user2,
                     "location" : "Equinox",
                     "bordered" : false,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user3,
                     "location" : "Another Space Gym",
                     "bordered" : true,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user1,
                     "location" : "BLOK London Gym",
                     "bordered" : true,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user2,
                     "location" : "Equinox",
                     "bordered" : true,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user3,
                     "location" : "Another Space Gym",
                     "bordered" : false,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user1,
                     "location" : "BLOK London Gym",
                     "bordered" : true,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user2,
                     "location" : "Equinox",
                     "bordered" : false,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user3,
                     "location" : "Another Space Gym",
                     "bordered" : true,
                   },


                 ]
             }
         }
     }
  render () {
    return (
      <Container>
        <View style={[styles.tabContent]}>
            <View style={[styles.tabHeading]}>
              <Text style={ Fonts.style.textCenter}>
                <Text style={[Fonts.style.h2, {width:'100%'}]}>March</Text>
              </Text>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={styles.containerListView}>
              <View primary style={styles.dateBadgeActive}>
                <Text style={styles.badgeDateActive}>01</Text>
                <Text style={styles.badgeTextActive}>Wed</Text>
              </View>

              <View primary style={styles.dateBadge}>
                <Text style={styles.badgeDate}>02</Text>
                <Text style={styles.badgeText}>Thu</Text>
              </View>

              <View primary style={styles.dateBadge}>
                <Text style={styles.badgeDate}>03</Text>
                <Text style={styles.badgeText}>Fri</Text>
              </View>

              <View primary style={styles.dateBadge}>
                <Text style={styles.badgeDate}>04</Text>
                <Text style={styles.badgeText}>Sat</Text>
              </View>
              <View primary style={styles.dateBadge}>
                <Text style={styles.badgeDate}>05</Text>
                <Text style={styles.badgeText}>Sun</Text>
              </View>
              <View primary style={styles.dateBadge}>
                <Text style={styles.badgeDate}>06</Text>
                <Text style={styles.badgeText}>Mon</Text>
              </View>
              <View primary style={styles.dateBadge}>
                <Text style={styles.badgeDate}>07</Text>
                <Text style={styles.badgeText}>Tue</Text>
              </View>
              <View primary style={styles.dateBadge}>
                <Text style={styles.badgeDate}>08</Text>
                <Text style={styles.badgeText}>Wed</Text>
              </View>
              <View primary style={styles.dateBadge}>
                <Text style={styles.badgeDate}>09</Text>
                <Text style={styles.badgeText}>Thu</Text>
              </View>
              <View primary style={styles.dateBadge}>
                <Text style={styles.badgeDate}>10</Text>
                <Text style={styles.badgeText}>Fri</Text>
              </View>
              <View primary style={styles.dateBadge}>
                <Text style={styles.badgeDate}>11</Text>
                <Text style={styles.badgeText}>Sat</Text>
              </View>
              <View primary style={styles.dateBadge}>
                <Text style={styles.badgeDate}>12</Text>
                <Text style={styles.badgeText}>Sun</Text>
              </View>
              <View primary style={styles.dateBadge}>
                <Text style={styles.badgeDate}>13</Text>
                <Text style={styles.badgeText}>Mon</Text>
              </View>
              <View primary style={styles.dateBadge}>
                <Text style={styles.badgeDate}>14</Text>
                <Text style={styles.badgeText}>Tue</Text>
              </View>
              <View primary style={styles.dateBadge}>
                <Text style={styles.badgeDate}>15</Text>
                <Text style={styles.badgeText}>Wed</Text>
              </View>
              <View primary style={styles.dateBadge}>
                <Text style={styles.badgeDate}>16</Text>
                <Text style={styles.badgeText}>Thu</Text>
              </View>
              <View primary style={styles.dateBadge}>
                <Text style={styles.badgeDate}>17</Text>
                <Text style={styles.badgeText}>Fri</Text>
              </View>
              <View primary style={styles.dateBadge}>
                <Text style={styles.badgeDate}>18</Text>
                <Text style={styles.badgeText}>Sat</Text>
              </View>
              <View primary style={styles.dateBadge}>
                <Text style={styles.badgeDate}>19</Text>
                <Text style={styles.badgeText}>Sun</Text>
              </View>
              <View primary style={styles.dateBadge}>
                <Text style={styles.badgeDate}>20</Text>
                <Text style={styles.badgeText}>Mon</Text>
              </View>
              <View primary style={styles.dateBadge}>
                <Text style={styles.badgeDate}>21</Text>
                <Text style={styles.badgeText}>Tue</Text>
              </View>
              <View primary style={styles.dateBadge}>
                <Text style={styles.badgeDate}>22</Text>
                <Text style={styles.badgeText}>Thu</Text>
              </View>
              <View primary style={styles.dateBadge}>
                <Text style={styles.badgeDate}>23</Text>
                <Text style={styles.badgeText}>Fri</Text>
              </View>
              <View primary style={styles.dateBadge}>
                <Text style={styles.badgeDate}>24</Text>
                <Text style={styles.badgeText}>Sat</Text>
              </View>
              <View primary style={styles.dateBadge}>
                <Text style={styles.badgeDate}>25</Text>
                <Text style={styles.badgeText}>Mon</Text>
              </View>
              <View primary style={styles.dateBadge}>
                <Text style={styles.badgeDate}>26</Text>
                <Text style={styles.badgeText}>Sun</Text>
              </View>
              <View primary style={styles.dateBadge}>
                <Text style={styles.badgeDate}>27</Text>
                <Text style={styles.badgeText}>Mon</Text>
              </View>
              <View primary style={styles.dateBadge}>
                <Text style={styles.badgeDate}>28</Text>
                <Text style={styles.badgeText}>Tue</Text>
              </View>
              <View primary style={styles.dateBadge}>
                <Text style={styles.badgeDate}>29</Text>
                <Text style={styles.badgeText}>Wed</Text>
              </View>
              <View primary style={styles.dateBadge}>
                <Text style={styles.badgeDate}>30</Text>
                <Text style={styles.badgeText}>Thu</Text>
              </View>
              <View primary style={styles.dateBadge}>
                <Text style={styles.badgeDate}>31</Text>
                <Text style={styles.badgeText}>Fri</Text>
              </View>
              </View>
            </ScrollView>

            <View style={{marginLeft : -10, marginRight:-10}}>
              <Hr lineColor='rgb(234, 234, 234)'  />
            </View>

            <ScrollView horizontal={false}>
            <View style={{}}>
              <List dataArray={this.state.results.items} renderRow={(item) =>
                  <ListItem button avatar style={{borderBottomWidth:1, borderColor:'rgb(234, 234, 234)', marginRight:19, paddingTop:15, paddingBottom:10}}>
                  <Left>
                    <Image source={item.image} style={( item.bordered === true ) ? Fonts.style.avatarBordered : Fonts.style.avatar}/>
                  </Left>
                  <Body style={{borderBottomWidth:0}}>
                    <Text style={styles.username} note>{item.name}</Text>
                    <Text style={styles.location} note><FontAwesome name='map-marker' style={{color:"rgb(172, 14, 250)", paddingRight : 10, fontSize:15}} /> {item.location}</Text>
                    <View style={{marginTop:10, flexDirection:'row'}}>
                       <Button rounded small style={Fonts.style.categoryTag}><Text style={Fonts.style.categoryTagText}>Yoga</Text></Button>
                       <Button rounded small style={Fonts.style.categoryTagGray}><Text style={Fonts.style.categoryTagText}>Cardio</Text></Button>
                    </View>
                  </Body>
                  <Right style={{borderBottomWidth:0, alignItems:'center'}}>
                    <Text style={styles.time} >09:46 AM</Text>
                      <Icon name="ios-arrow-round-down" style={{fontSize:32, color:'rgb(221,221, 221)', fontWeight:'bold'}} />
                    <Text style={styles.time} >03:46 AM</Text>
                  </Right>

                  </ListItem>
              } />
            </View>
            </ScrollView>
        </View>
      </Container>



    )
  }
}

class Monthly extends React.Component {

  render () {

    return (
        <Container>
          <View style={[styles.tabContent]}>
              <View style={[styles.tabHeading]}>
                <Text style={ Fonts.style.textCenter}>
                  <Text style={[Fonts.style.h2]}>2017</Text>
                </Text>
              </View>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.containerListView}>
                    <View primary style={styles.dateBadge}>
                      <Text style={styles.badgeDate}>Jan</Text>
                    </View>

                    <View primary style={styles.dateBadge}>
                      <Text style={styles.badgeDate}>Feb</Text>
                    </View>

                    <View primary style={styles.dateBadge}>
                      <Text style={styles.badgeDate}>Mar</Text>
                    </View>

                    <View primary style={styles.dateBadgeActive}>
                      <Text style={styles.badgeDateActive}>Apr</Text>
                    </View>

                    <View primary style={styles.dateBadge}>
                      <Text style={styles.badgeDate}>May</Text>
                    </View>

                    <View primary style={styles.dateBadge}>
                      <Text style={styles.badgeDate}>Jun</Text>
                    </View>
                    <View primary style={styles.dateBadge}>
                      <Text style={styles.badgeDate}>Jul</Text>
                    </View>

                    <View primary style={styles.dateBadge}>
                      <Text style={styles.badgeDate}>Aug</Text>
                    </View>

                    <View primary style={styles.dateBadge}>
                      <Text style={styles.badgeDate}>Sep</Text>
                    </View>

                    <View primary style={styles.dateBadge}>
                      <Text style={styles.badgeDate}>Oct</Text>
                    </View>

                    <View primary style={styles.dateBadge}>
                      <Text style={styles.badgeDate}>Nov</Text>
                    </View>

                    <View primary style={styles.dateBadge}>
                      <Text style={styles.badgeDate}>Dec</Text>
                    </View>

                </View>
              </ScrollView>

              <View style={{marginLeft : -10, marginRight:-10, marginBottom : 20}}>
                <Hr lineColor='rgb(234, 234, 234)'  />
              </View>

              <View style={[styles.headerView, {marginLeft:20, marginRight:20}]}>
                <Image source={Images.EmptySessions} style={{width : '100%', height : 188, resizeMode: 'contain',marginBottom:10}}>
                    <View style={styles.navbarview}>
                      <Text style={[Fonts.style.h1, Fonts.style.textWhite,{flex:1, textAlign:'center'}]}>EDIT PROFILE</Text>
                    </View>
                </Image>
                <Text style={[Fonts.style.h3, Fonts.style.textCenter, Fonts.style.mt10]}>YOU DON’T HAVE ANY SESSIONS FOR THE SELECTED DATE</Text>
              </View>
          </View>
        </Container>
    )
  }
}

class Yearly extends React.Component {

  constructor(props) {
         super(props);
         this.state = {
             results: {
                 items: [
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user1,
                     "location" : "BLOK London Gym",
                     "bordered" : false,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user2,
                     "location" : "Equinox",
                     "bordered" : false,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user3,
                     "location" : "Another Space Gym",
                     "bordered" : false,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user1,
                     "location" : "BLOK London Gym",
                     "bordered" : false,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user2,
                     "location" : "Equinox",
                     "bordered" : false,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user3,
                     "location" : "Another Space Gym",
                     "bordered" : false,
                   },

                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user1,
                     "location" : "BLOK London Gym",
                     "bordered" : false,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user2,
                     "location" : "Equinox",
                     "bordered" : false,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user3,
                     "location" : "Another Space Gym",
                     "bordered" : false,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user1,
                     "location" : "BLOK London Gym",
                     "bordered" : false,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user2,
                     "location" : "Equinox",
                     "bordered" : false,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user3,
                     "location" : "Another Space Gym",
                     "bordered" : false,
                   },

                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user1,
                     "location" : "BLOK London Gym",
                     "bordered" : false,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user2,
                     "location" : "Equinox",
                     "bordered" : false,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user3,
                     "location" : "Another Space Gym",
                     "bordered" : false,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user1,
                     "location" : "BLOK London Gym",
                     "bordered" : false,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user2,
                     "location" : "Equinox",
                     "bordered" : false,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user3,
                     "location" : "Another Space Gym",
                     "bordered" : false,
                   },

                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user1,
                     "location" : "BLOK London Gym",
                     "bordered" : false,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user2,
                     "location" : "Equinox",
                     "bordered" : false,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user3,
                     "location" : "Another Space Gym",
                     "bordered" : false,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user1,
                     "location" : "BLOK London Gym",
                     "bordered" : false,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user2,
                     "location" : "Equinox",
                     "bordered" : false,
                   },
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user3,
                     "location" : "Another Space Gym",
                     "bordered" : false,
                   },


                 ]
             }
         }
     }
  render () {
    return (
      <Container>
        <View style={[styles.tabContent]}>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={styles.containerListView}>
              <View primary style={[styles.dateBadge, styles.yearBadge]}>
                <Text style={styles.badgeDate}>2010</Text>
              </View>

              <View primary style={[styles.dateBadge, styles.yearBadge]}>
                <Text style={styles.badgeDate}>2011</Text>
              </View>

              <View primary style={[styles.dateBadge, styles.yearBadge]}>
                <Text style={styles.badgeDate}>2012</Text>
              </View>

              <View primary style={[styles.dateBadge, styles.yearBadge]}>
                <Text style={styles.badgeDate}>2013</Text>
              </View>
              <View primary style={[styles.dateBadgeActive, styles.yearBadge]}>
                <Text style={styles.badgeDateActive}>2014</Text>
              </View>
              <View primary style={[styles.dateBadge, styles.yearBadge]}>
                <Text style={styles.badgeDate}>2015</Text>
              </View>
              <View primary style={[styles.dateBadge, styles.yearBadge]}>
                <Text style={styles.badgeDate}>2016</Text>
              </View>
              <View primary style={[styles.dateBadge, styles.yearBadge]}>
                <Text style={styles.badgeDate}>2017</Text>
              </View>

              </View>
            </ScrollView>

            <View style={{marginLeft : -10, marginRight:-10}}>
              <Hr lineColor='rgb(234, 234, 234)'  />
            </View>

            <ScrollView horizontal={false} >
            <View style={{}}>
              <List dataArray={this.state.results.items} renderRow={(item) =>
                  <ListItem button avatar style={{borderBottomWidth:1, borderColor:'rgb(234, 234, 234)', marginRight:19, paddingTop:15, paddingBottom:10}}>
                  <Left>
                    <Image source={item.image} style={( item.bordered === true ) ? Fonts.style.avatarBordered : Fonts.style.avatar}/>
                  </Left>
                  <Body style={{borderBottomWidth:0}}>
                    <Text style={styles.username} note>{item.name}</Text>
                    <Text style={styles.location} note><FontAwesome name='map-marker' style={{color:"rgb(172, 14, 250)", paddingRight : 10, fontSize:15}} /> {item.location}</Text>
                    <View style={{marginTop:10, flexDirection:'row'}}>
                       <Button rounded small style={Fonts.style.categoryTag}><Text style={Fonts.style.categoryTagText}>Yoga</Text></Button>
                       <Button rounded small style={Fonts.style.categoryTagGray}><Text style={Fonts.style.categoryTagText}>Cardio</Text></Button>
                    </View>
                  </Body>
                  <Right style={{borderBottomWidth:0, alignItems:'center'}}>
                    <Text style={styles.time} >09:46 AM</Text>
                      <Icon name="ios-arrow-round-down" style={{fontSize:32, color:'rgb(221,221, 221)', fontWeight:'bold'}} />
                    <Text style={styles.time} >03:46 AM</Text>
                  </Right>

                  </ListItem>
              } />
            </View>
            </ScrollView>
        </View>
      </Container>



    )
  }
}
