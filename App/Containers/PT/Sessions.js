import React, { Component } from 'react';
import { ScrollView,Dimensions,Modal, Text, Image, View,StatusBar,TouchableOpacity,Picker } from 'react-native'
import {Container,Content,Input, TabHeading, Badge,List, ListItem, Left, Body, Right, Icon,Grid, Col, Button  } from 'native-base';
import ModalPopup from 'react-native-simple-modal';
import { Images, Colors, Fonts } from '../../Themes'
import NavItems from '../../Navigation/NavItems'
import { Actions as NavigationActions } from 'react-native-router-flux'
import styles from './Styles/SessionsScreenStyle'
import Hr from 'react-native-hr'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('window')
var PickerItemIOS = Picker.Item;
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';


export default class Sessions extends React.Component {
  state = {
    modalVisible: false,
    filterVisible : false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  setfilterVisible(visible) {
    this.setState({filterVisible: visible});
  }
  render () {

    return (
      <Container>
      <StatusBar barStyle='light-content' />
          <View style={styles.headerView}>
                <View style={styles.navbarview}>
                  <View style={{flex:1}}>
                    <Button transparent iconLeft onPress={NavigationActions.pop}>
                      {NavItems.hamburgerButton()}
                    </Button>
                  </View>
                  <View style={styles.navbarCenterView}>
                      <Text style={[Fonts.style.h1,Fonts.style.textWhite,{textAlign:'center',flex:1}]}> SESSIONS </Text>
                  </View>
                  <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end'}}>
                  <Button transparent onPress={() => {this.setModalVisible(!this.state.modalVisible)}}>
                      <Ionicons name="md-search" size={30} style={{color:'white',justifyContent:'center'}}/>
                  </Button>
                  </View>

              </View>
          </View>

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



        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}>
           <Container>
              <View style={[styles.headerView,{backgroundColor:Colors.white}]}>
                <View style={[styles.navbarview,{backgroundColor:Colors.white}]}>
                  <View style={{flex:1}}>
                    <Button transparent iconLeft onPress={() => {this.setModalVisible(!this.state.modalVisible)}}>
                      <MaterialCommunityIcons name="close" size={28} style={{color:'rgb(102,102,102)'}}/>
                    </Button>
                  </View>
                  <View>
                      <Text style={[Fonts.style.h1,Fonts.style.textGrey,{textAlign:'center',marginTop:5}]}> SEARCH </Text>
                  </View>
                  <View style={{flex:1}}>
                  <Button transparent>
                      <Text></Text>
                  </Button>
                  </View>

              </View>
            </View>

            <Search />

            <Button onPress={() => {this.setfilterVisible(!this.state.filterVisible)}}
                  style={Fonts.style.filterbutton}>
              <MaterialCommunityIcons name="filter-outline" size={28} size={(width >= 375) ? 28 : 20} style={{color:'white',marginTop:5,}}/>
          </Button>
        </Container>

            <Modal
              animationType={"slide"}
              transparent={false}
              visible={this.state.filterVisible}
              onRequestClose={() => {alert("Modal has been closed.")}}>
               <Container>
               <StatusBar barStyle='light-content' />
                  <View style={[styles.headerView,{backgroundColor:Colors.background}]}>
                <View style={[styles.navbarview,{backgroundColor:Colors.background}]}>
                  <View style={{flex:1}}>
                    <Button transparent iconLeft onPress={() => {this.setfilterVisible(!this.state.filterVisible)}}>
                      <MaterialCommunityIcons name="close" size={28} style={{color:'rgb(255,255,255)'}}/>
                    </Button>
                  </View>
                  <View>
                      <Text style={[Fonts.style.h1,Fonts.style.textWhite,{textAlign:'center',marginTop:5}]}> FILTER </Text>
                  </View>
                  <View style={{flex:1}}>
                  <Button transparent>
                      <Text></Text>
                  </Button>
                  </View>

              </View>
            </View>

                <Filter />

            </Container>
          </Modal>

        </Modal>

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

            <ScrollView style={{height:(width >= 325) ? 405 : 350}} horizontal={false}>
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

              <View style={{marginLeft:20, marginRight:20}}>
                <Image source={Images.EmptySessions} style={{width : '100%', height : 188, resizeMode: 'contain',marginBottom:10}}/>

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

            <ScrollView style={{height:(width >= 325) ? 450 : 380}} horizontal={false} >
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

class Search extends React.Component {

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

                 ]
             }
         }
     }

 render () {
   return (

         <View style={{backgroundColor:Colors.white}}>
            <StatusBar barStyle='dark-content' />
            <View style={styles.searchView}>
            <View style={[Fonts.style.inputWrapperBordered, {paddingRight:5}]}>
                    <Input  style={Fonts.style.inputBordered} placeholder='SEARCH FOR A SESSION' placeholderTextColor={Fonts.colors.input}/>
                    <View style={{backgroundColor:'rgb(172,14,250)', width:30,height:30, borderRadius:100, marginTop:6,marginRight:5, paddingRight:20}}><Icon name='search' style={Fonts.style.borderedIconRight} /></View>
                  </View>
            </View>
            <Text style={styles.listViewTitle}>
              Found <Text style={styles.searchResult}>5 sessions </Text>
            </Text>
            <View style={styles.separater}>
                <Hr lineColor={Colors.separetorLineColor}/>
            </View>
            <ScrollView style={{height:(width >= 325) ? 460 : 400}} horizontal={false}>
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

   )
 }
}

class Filter extends React.Component {

         state = {
              dateOpen : false,
              dateModalVisible : false,
              monthOpen : false,
              monthModalVisible : false,
              yearOpen : false,
              yearModalVisible : false,
         }


 render () {

  var days = [];
    var monthArray = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var years =[];
    var months = [];
    for(i = 1; i <= 31; i++) {

      days.push(<Picker.Item key={i} value={i} label={i.toString()} />)
    }

    for(i = 0; i < 12; i++) {

      months.push(<Picker.Item key={monthArray[i]} value={monthArray[i]} label={monthArray[i]} />)
    }

    for(i = 2017; i < 2030; i++) {

      years.push(<Picker.Item key={i} value={i} label={i.toString()} />)
    }
   return (

         <ScrollView style={{backgroundColor:Colors.background}}>


              <Text style={styles.filtertitles}>
                SESSION’S TYPE
              </Text>
              <View style={[Fonts.style.inputWrapperBordered, {paddingRight:5,marginBottom:10,marginLeft :20,marginRight:20,}]}>
                      <Input  style={Fonts.style.inputBordered} placeholder='Upcoming ' placeholderTextColor={Colors.white}/>
                      <FontAwesome name="angle-down" style={{fontSize:(width > 325) ? 22 : 20, color:'rgb(102,102, 102)',marginRight : 10,marginTop:10,backgroundColor:'transparent'}} />

                </View>


              <Text style={styles.filtertitles}>
              GYM NAME
              </Text>
              <View style={[Fonts.style.inputWrapperBordered, {marginRight: 20, marginLeft:20, marginBottom:20, height:45, borderRadius:30}]}>
                <Input  style={Fonts.style.inputBordered} placeholder='Gym Name' placeholderTextColor={Fonts.colors.input}/>
              </View>

              <Text style={styles.filtertitles}>
              DATE
              </Text>
              <View style={{marginTop:10,marginBottom:10, flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>

                  <TouchableOpacity onPress={() => this.setState({dateOpen: true})}>
                    <View style={styles.selectBox} >
                      <Text style={[styles.selectBoxText, {color:Colors.white}]}> Day </Text>
                      <FontAwesome name="angle-down" style={{fontSize:(width > 325) ? 22 : 20, color:'rgb(102,102, 102)',marginRight : 10,marginTop:0,backgroundColor:'transparent'}} />
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => this.setState({monthOpen: true})}>
                    <View style={styles.selectBox} >
                      <Text style={[styles.selectBoxText, {color:Colors.white}]}> Month </Text>
                      <FontAwesome name="angle-down" style={{fontSize:(width > 325) ? 22 : 20, color:'rgb(102,102, 102)',marginRight : 10,marginTop:0,backgroundColor:'transparent'}} />
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => this.setState({yearOpen: true})}>
                    <View style={styles.selectBox} >
                      <Text style={[styles.selectBoxText, {color:Colors.white}]}> Year </Text>
                      <FontAwesome name="angle-down" style={{fontSize:(width > 325) ? 22 : 20, color:'rgb(102,102, 102)',marginRight : 10,marginTop:0,backgroundColor:'transparent'}} />
                    </View>
                  </TouchableOpacity>

                </View>

            <Text style={styles.filtertitles}>
              WORKOUTS
            </Text>

            <View style={styles.buttonsView}>
                <Button rounded small style={Fonts.style.workoutBoxActive}><Text style={{fontSize:15, fontFamily:Fonts.type.regular, color:Colors.subHeadingRegular}}>Yoga</Text></Button>
                <Button rounded small style={Fonts.style.workoutBoxActive}><Text style={{fontSize:15, fontFamily:Fonts.type.regular, color:Colors.subHeadingRegular}}>Cardio</Text></Button>
                <Button rounded small style={Fonts.style.workoutBox}><Text style={{fontSize:15, fontFamily:Fonts.type.regular, color:'#fff'}}>Fartlek</Text></Button>
                <Button rounded small style={Fonts.style.workoutBox}><Text style={{fontSize:15, fontFamily:Fonts.type.regular, color:'#fff'}}>Anaerobic</Text></Button>

              </View>


            <View style={styles.horizontalRow}>
             <Hr lineColor='rgba(255,255,255,0.5)'/>
            </View>

            <View style={styles.applyBtnView}>
                <Button rounded block style={{marginTop:20,marginBottom:10,marginLeft:20,marginRight:20,backgroundColor:'white', height:57}}>
                    <Text style={styles.applyBtnText}> APPLY</Text>
                </Button>
            </View>

            <ModalPopup
                offset={this.state.offset}
                open={this.state.dateOpen}
                overlayBackground={Colors.popupoverlayBackground}
                modalDidOpen={() => console.log('modal did open')}
                modalDidClose={() => this.setState({dateOpen: false})}
                style={{alignItems: 'center', zIndex: 1000}}>
                <View>
                  <View style={{flexDirection:'row',alignItems:'center', zIndex: 1000}}>
                      <Text style={{marginLeft:20,flex:1}}></Text>
                      <Text style={[Fonts.style.h2,{flex:(width >= 375) ? 4 : 6,textAlign:'center',fontSize:(width >= 325) ? 16 : 13}]}>SELECT DAY</Text>
                      <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                      <Button transparent onPress={() => this.setState({dateOpen: false})} >
                          <MaterialCommunityIcons name="close" size={22} color="rgb(102,102,102)"/>
                      </Button>
                      </View>
                  </View>
                <View style={{marginTop:10,alignItems:'center',justifyContent:'center'}}>
                  <Picker
                    selectedValue={10}
                    style={{width:80}}
                    itemStyle={styles.pickerStyle}
                    onValueChange={(day) => this.setState({day, modelIndex: 0})}>

                    {days}

                  </Picker>
                </View>
                </View>
              </ModalPopup>

              <ModalPopup
                offset={this.state.offset}
                open={this.state.monthOpen}
                overlayBackground={Colors.popupoverlayBackground}
                modalDidOpen={() => console.log('modal did open')}
                modalDidClose={() => this.setState({dateOpen: false})}
                style={{alignItems: 'center'}}>
                <View>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                      <Text style={{marginLeft:20,flex:1}}></Text>
                      <Text style={[Fonts.style.h2,{flex:(width >= 375) ? 4 : 6,textAlign:'center',fontSize:(width >= 325) ? 16 : 13}]}>SELECT MONTH</Text>
                      <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                      <Button transparent onPress={() => this.setState({monthOpen: false})} >
                          <MaterialCommunityIcons name="close" size={22} color="rgb(102,102,102)"/>
                      </Button>
                      </View>
                  </View>
                <View style={{marginTop:10,alignItems:'center',justifyContent:'center'}}>
                  <Picker
                    selectedValue={'January'}
                    style={{width:100}}
                    itemStyle={[styles.pickerStyle,{width:200}]}
                    onValueChange={(month) => this.setState({month, modelIndex: 0})}>

                    {months}

                  </Picker>
                </View>
                </View>
              </ModalPopup>

              <ModalPopup
                offset={this.state.offset}
                open={this.state.yearOpen}
                overlayBackground={Colors.popupoverlayBackground}
                modalDidOpen={() => console.log('modal did open')}
                modalDidClose={() => this.setState({yearOpen: false})}
                style={{alignItems: 'center'}}>
                <View>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                      <Text style={{marginLeft:20,flex:1}}></Text>
                      <Text style={[Fonts.style.h2,{flex:(width >= 375) ? 4 : 6,textAlign:'center',fontSize:(width >= 325) ? 16 : 13}]}>SELECT YEAR</Text>
                      <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                      <Button transparent onPress={() => this.setState({yearOpen: false})} >
                          <MaterialCommunityIcons name="close" size={22} color="rgb(102,102,102)"/>
                      </Button>
                      </View>
                  </View>
                <View style={{marginTop:10,alignItems:'center',justifyContent:'center'}}>
                  <Picker
                    selectedValue={2017}
                    style={{width:80}}
                    itemStyle={styles.pickerStyle}
                    onValueChange={(year) => this.setState({year, modelIndex: 0})}>

                    {years}

                  </Picker>
                </View>
                </View>
              </ModalPopup>

         </ScrollView>



   )
 }
}
