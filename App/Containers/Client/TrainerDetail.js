// @flow

import React, { Component } from 'react'
import { ScrollView, Text, Image, View,TouchableOpacity, Dimensions, } from 'react-native'
import { Container,Content,Form,Button,Icon,ListItem,Grid,Col, Tabs, Tab, TabHeading,Input, Thumbnail,Body,Left,Right,Card, CardItem } from 'native-base';
const { width, height } = Dimensions.get('window')
import { Images,Fonts,Colors } from '../../Themes'
import RoundedButton from '../../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Foundation from 'react-native-vector-icons/Foundation';
// Styles
import Ionicons from 'react-native-vector-icons/Ionicons';
import StarRating from 'react-native-star-rating';
import styles from './Styles/TrainerDetailStyle'
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';

export default class TrainerDetail extends React.Component {



  constructor(props) {
    super(props);
    this.state = {
      currentTab : 0,
      starCount: 4
    };
  }

  handleChangeTab({i, ref }) {
    this.setState({currentTab : i});
  }
  onStarRatingPress(rating) {
    NavigationActions.ratingScreen()
  }
  render () {

    return (

        <ScrollView scrollEnabled={false}>
          <View>
          
              <View style={styles.headerView}>
                <Image source={Images.editProfileHeader} style={{height:248}}>

                  <View style={styles.navbarview}>
                      <View style={{flex:1}}>
                        <Button transparent iconLeft onPress={NavigationActions.pop}>
                          <Ionicons name="ios-arrow-back-outline" size={30} style={{color:'white',marginLeft:(width >= 375) ? 0 : 20}}/>
                        </Button>
                      </View>
                      <View style={styles.navbarCenterView}>
                        <Text></Text>
                      </View>
                      <View style={{flex:1}}>
                      <Button transparent>
                          <Image source={Images.messageIcon} style={{height:23,width:23,marginLeft:10}}/>
                      </Button>
                      </View>

                    </View>
                    
                    <View style={styles.profileimage} >
                      <View>
                         <Image source={Images.user5} style={styles.userImage}/>
                         <View style={Fonts.style.offlineDot}></View>
                      </View>
                      <Text style={styles.username}> Aaron Castillo </Text>
                      <Text style={styles.userAddress}> Bristol, BS4 5SS, UK </Text>
                      <View onPress={() => alert('StarRating Pressed')}>
                      <StarRating
                        disabled={false}
                        emptyStar={'ios-star-outline'}
                        fullStar={'ios-star'}
                        halfStar={'ios-star-half'}
                        iconSet={'Ionicons'}
                        maxStars={5}
                        starSize={20}
                        rating={this.state.starCount}
                        selectedStar={(rating) => this.onStarRatingPress(rating)}
                        starColor={'yellow'}

                      />
                      </View>
                      <Text style={styles.ratingtext}> Avg. rating from completed sessions </Text>

                    </View>
                </Image>

              </View>

              <View style={styles.containers}>

                    <ScrollableTabView
                    locked={false}
                      onChangeTab={this.handleChangeTab.bind(this)}
                      tabBarStyle={{borderWidth:0, height:46}}
                      tabBarBackgroundColor={'white'}
                      tabBarActiveTextColor={Colors.purpleColor}
                      tabBarInactiveTextColor={Colors.subHeadingRegular}
                      tabBarUnderlineStyle={Fonts.style.tabBorderSytelPurple}
                      tabBarTextStyle={[styles.tabText]}
                      tabBarTabStyle={{paddingBottom:0,marginLeft:0,borderBottomWidth:2,borderBottomColor:Colors.purpleColor}}
                      renderTabBar={() => <DefaultTabBar />}>

                      <AboutData tabLabel='About' />
                      <Schedule tabLabel='Schedule' />
                      <NoteCard tabLabel='Notes' />
                    </ScrollableTabView>

                    {

                      (this.state.currentTab == 2) ? <AddNote /> : null 
                    }
              </View>
        </View>
        </ScrollView>

    )
  }
}
class EmptyAbout extends React.Component {

  render () {
    return (

      <View style={styles.emptyView}>
          <Image source={Images.emptyNote} style={{height:106, width:140,marginTop:0}} />
          <Text style={[Fonts.style.buttonTextNormalGrey,styles.emptyText]}>
            NO CURRENT NOTES AVAILABLE
          </Text>
      </View>
      
    )
  }
}



class EmptyNotes extends React.Component {

  render () {
    return (

      <View style={styles.emptyView}>
          <Image source={Images.emptyNote} style={{height:106, width:140,marginTop:0}} />
          <Text style={[Fonts.style.buttonTextNormalGrey,styles.emptyText]}>
            NO CURRENT NOTES AVAILABLE
          </Text>
          
      </View>


    )
  }
}

class AddNote extends React.Component {

  render () {
   
    return (
          <View style={styles.bottomview}>
              <View style={[Fonts.style.inputWrapperBordered, {marginRight: 20, marginLeft:20, marginBottom:5, height:45}]}>
                <Input style={Fonts.style.inputBordered} placeholder='ADD COMMENT' placeholderTextColor={Fonts.colors.input}/>
                <Text style={{ marginTop:10}}><Image source={Images.commentAdd} resizeMode='contain' style={{width:30, height:30}}></Image></Text>
              </View>
          </View>
    )
  }
}

class NoteCard extends React.Component {

  render () {
    return (
       <ScrollView style={{height:(width >= 375) ? 200 : 210,marginBottom : (width >= 325) ? 77 : 50}} showsVerticalScrollIndicator={false}>
      <View style={styles.notesView}>
          <Card style={Fonts.style.commnetBox}>
             <CardItem content style={{marginBottom:0, paddingBottom:0}}>
                 <Text style={styles.commentContent}>The Buddha is kept in the Chapel of the Emerald Buddha, which is located on the grounds of the Grand Palace in Bangkok.</Text>
             </CardItem>
             <CardItem style={{marginTop : 0, paddingBottom : 0}}>
               <Body>
                   <Text style={styles.commentDate}>12/28/2017</Text>
               </Body>
             </CardItem>
        </Card>

        <Card style={Fonts.style.commnetBox}>
             <CardItem content style={{marginBottom:0, paddingBottom:0}}>
                 <Text style={styles.commentContent}>The Buddha is kept in the Chapel of the Emerald Buddha, which is located on the grounds of the Grand Palace in Bangkok.</Text>
             </CardItem>
             <CardItem style={{marginTop : 0, paddingBottom : 0}}>
               <Body>
                   <Text style={styles.commentDate}>12/28/2017</Text>
               </Body>
             </CardItem>
        </Card>

        <Card style={Fonts.style.commnetBox}>
             <CardItem content style={{marginBottom:0, paddingBottom:0}}>
                 <Text style={styles.commentContent}>The Buddha is kept in the Chapel of the Emerald Buddha, which is located on the grounds of the Grand Palace in Bangkok.</Text>
             </CardItem>
             <CardItem style={{marginTop : 0, paddingBottom : 0}}>
               <Body>
                   <Text style={styles.commentDate}>12/28/2017</Text>
               </Body>
             </CardItem>
        </Card>

      </View>
      </ScrollView>


    )
  }
}

class AboutData extends React.Component {

  render () {
    return (

          <ScrollView style={{height:(width >= 375) ? 370 : 270}} showsVerticalScrollIndicator={false}>
          
          <View style={Fonts.style.mt15}>

             <Grid>
                  <Col style={{ width: 40 ,alignItems:'center'}}>
                    <Foundation name="info" color={Colors.purpleColor} size={30} />
                  </Col>
                  <Col style={{ height: 250}}>
                     <Text style={styles.aboutInfo}>
                       Hello! My name is Ernests. The Emerald Buddha is a figurine of a sitting Budha, that is the is the palladium of the Kingdom of Thailand. The Buddha is made of green jade, suprisingly not of emerald, clothed in gold is approximately 45 cm tall. The Buddha is kept in the Chapel of the Emerald Buddha, which is located on the grounds of the Grand Palace in Bangkok.
                     </Text>
                  </Col>
              </Grid>
        
            <Workouts />

        </View>
     </ScrollView>
    )
  }
}

class Workouts extends React.Component {

  render () {
    return (
          <View style={(width >= 375) ? Fonts.style.mt10 : Fonts.style.mt20}>
              <Text style={[Fonts.style.h2, Fonts.style.mt20]}> WORKOUTS</Text>
              <View style={styles.buttonsView}>
                <Button rounded small style={{paddingLeft:15, paddingRight:15,marginRight:16,marginBottom:10, height:35, backgroundColor:'rgb(31,199,116)'}}><Text style={{fontSize:12, fontFamily:Fonts.type.regular, color:'#fff'}}>Yoga</Text></Button>
                <Button rounded small style={{paddingLeft:15, paddingRight:15,marginRight:16,marginBottom:10, height:35, backgroundColor:'rgb(178,178,178)'}}><Text style={{fontSize:12, fontFamily:Fonts.type.regular, color:'#fff'}}>Cardio</Text></Button>
                <Button rounded small style={{paddingLeft:15, paddingRight:15,marginRight:16,marginBottom:10, height:35, backgroundColor:'rgb(251,179,39)'}}><Text style={{fontSize:12, fontFamily:Fonts.type.regular, color:'#fff'}}>Fartlek</Text></Button>
                
                <TouchableOpacity>
                    <View style={styles.selectBox} >
                      <Text style={styles.selectBoxText}> Show 6 More </Text>
                      <Ionicons name="ios-arrow-forward-outline" size={18} style={{color:'white'}}/>
                    </View>
                  </TouchableOpacity>

              </View>
              <View style={{marginTop:60, marginLeft:20, marginRight:20,marginBottom:20}}>
                <Button light full rounded style={Fonts.style.red} >
                  <Text style={[Fonts.style.buttonText, Fonts.style.textBold]}>STOP SESSION</Text>
              </Button>
              </View>
              
          </View>
    )
  }
}

class Schedule extends React.Component {

  render () {
    return (

      <ScrollView style={{height:(width >= 375) ? 350 : 250}} showsVerticalScrollIndicator={false}>
                    
          <View style={Fonts.style.mt5}>
            <Text style={[Fonts.style.h2, Fonts.style.mt20, {textAlign:'center'}]}> GYMS </Text>
            <Gyms />
            <PrivateAvailability />
        </View>
     </ScrollView>
    )
  }
}

class Availabilities extends React.Component {

  render () {
    return (

      <View style={styles.availabilityView}>
      <Text style={[Fonts.style.h2, Fonts.style.mt5,Fonts.style.mb20, {textAlign:'center'}]}> AVAILABILITY </Text>
          <View style={{width:'80%'}} >
            <Button block bordered block large style={Fonts.style.purpleButtonAvailability}>
                <Text style={[Fonts.style.subHeading,{color:'white'}]}>9:45 am</Text>
                <Icon name="ios-arrow-round-forward" style={{color:'white', marginLeft:20,marginRight:20,}}/>
                <Text style={[Fonts.style.subHeading,{color:'white'}]}>6:30 pm</Text>
            </Button>

            <Button block bordered block large style={Fonts.style.grayButtonAvailability}>
                <Text style={[Fonts.style.subHeading]}>9:45 am</Text>
                <Icon name="ios-arrow-round-forward" style={{color:'rgb(102,102,102)', marginLeft:20,marginRight:20,}}/>
                <Text style={[Fonts.style.subHeading]}>6:30 pm</Text>
            </Button>
            
            <Button block bordered block large style={Fonts.style.grayButtonAvailability}>
                <Text style={[Fonts.style.subHeading]}>9:45 am</Text>
                <Icon name="ios-arrow-round-forward" style={{color:'rgb(102,102,102)', marginLeft:20,marginRight:20,}}/>
                <Text style={[Fonts.style.subHeading]}>6:30 pm</Text>
            </Button>

            <Button block bordered block large style={Fonts.style.purpleButtonAvailability}>
                <Text style={[Fonts.style.subHeading,{color:'white'}]}>9:45 am</Text>
                <Icon name="ios-arrow-round-forward" style={{color:'white', marginLeft:20,marginRight:20,}}/>
                <Text style={[Fonts.style.subHeading,{color:'white'}]}>6:30 pm</Text>
            </Button>

            <Button block bordered block large style={Fonts.style.grayButtonAvailability}>
                <Text style={[Fonts.style.subHeading]}>9:45 am</Text>
                <Icon name="ios-arrow-round-forward" style={{color:'rgb(102,102,102)', marginLeft:20,marginRight:20,}}/>
                <Text style={[Fonts.style.subHeading]}>6:30 pm</Text>
            </Button>

          </View>
      </View>
    )
  }
}

class Gyms extends React.Component {

  render () {
    return (

      <View style={styles.availabilityView}>
          <Grid>
              <Col style={[styles.gymColumns,{width:'60%'}]}>
                <Text style={styles.gymButton}> Frame Gym </Text>
                <Text style={[styles.gymButton,{color:Colors.mutedColor}]}> BS4 5SS </Text>
              </Col>
              <Col style={styles.gymColumns}>
                <Text style={styles.gymButton}> Core Collective </Text>
                <Text style={[styles.gymButton,{color:Colors.mutedColor}]}> BS4 5SS </Text>
              </Col>
          </Grid>
      </View>
    )
  }
}

class PrivateAvailability extends React.Component {

  render () {
    return (

      <View style={[styles.availabilityView,{marginTop:20}]}>
        <Image source={Images.PrivateAvailability} style={{width:214,height:177,marginBottom:20,marginTop:20}}/>
        <View style={{width:'80%',marginBottom : 20}}>
          <Button light full rounded style={Fonts.style.default} >
              <Text style={[Fonts.style.buttonText, Fonts.style.textBold,{fontSize:(width >= 325) ? Fonts.size.button : Fonts.size.medium}]}>CHECK AVAILABILITY</Text>
          </Button>
        </View>
      </View>
    )
  }
}


