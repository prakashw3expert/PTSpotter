// @flow

import React, { Component } from 'react'
import { ScrollView, Text, Image, View,TouchableOpacity, Dimensions,StatusBar,Modal,Platform } from 'react-native'
import { Container,Content,Form,Button,Icon,ListItem,Grid,Col, Tabs, Tab, TabHeading,Input, Thumbnail,Body,Left,Right,Card, CardItem } from 'native-base';
const { width, height } = Dimensions.get('window')
import { Images,Fonts,Colors } from '../../Themes'
import RoundedButton from '../../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// Styles
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StarRating from 'react-native-star-rating';
import styles from './Styles/TrainerDetailStyle'
import ImageViewer from 'ImageViewer';

import YouTube from 'react-native-youtube'
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';

let imgsArr = [
  'https://healthnewsandviews.files.wordpress.com/2014/04/weight-lifting-400x400.jpg',
  'http://3.bp.blogspot.com/-VGk_nvib7Sc/UN6XJyjri9I/AAAAAAAAAMM/aT1v8WFpz1Q/s400/Iron-Gym-Dip.jpg',
  'https://s-media-cache-ak0.pinimg.com/736x/37/11/f3/3711f3f695d448eeba83a929dc740130.jpg',
  'http://www.horizonlc.com/wp-content/uploads/2016/05/xshutterstock_290613188-400x400.jpg.pagespeed.ic.eg3BaseU6I.jpg',
  'http://befit.ae/wp-content/uploads/2016/07/personal-trainer-1.jpg',
];

let videoArray = [
  'j8QSOvvN_qQ'

];

let videoThumbnails = [
  'https://img.youtube.com/vi/j8QSOvvN_qQ/0.jpg'


];

export default class TrainerDetail extends React.Component {



  constructor(props) {
    super(props);
    this.state = {
      currentTab : 0,
      starCount: 4,
      shown:false,
      curIndex:0
    };
  }

  openViewer(index){
        this.setState({
            shown:true,
            curIndex:index
        })
    }

    closeViewer(){
        this.setState({
            shown:false,
            curIndex:0
        })
    }


  handleChangeTab({i, ref }) {
    this.setState({currentTab : i});
  }
  onStarRatingPress(rating) {
    NavigationActions.ratingScreen()
  }
  render () {

    return (

      <Container>
      <StatusBar barStyle='light-content' />

      <View style={styles.headerView}>
        <Image source={Images.editProfileHeader} style={{height:248}} >
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
                          emptyStar={'star-o'}
                          fullStar={'star'}
                          iconSet={'FontAwesome'}
                          maxStars={5}
                          starSize={20}
                          rating={4}
                          selectedStar={(rating) => this.onStarRatingPress(rating)}
                          starColor='rgb(252, 221, 45)'
                          emptyStarColor='rgb(252, 221, 45)'
                        />

                      </View>
                      <Text style={styles.ratingtext}> Avg. rating from completed sessions </Text>

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
                  emptyStar={'star-o'}
                  fullStar={'star'}
                  iconSet={'FontAwesome'}
                  maxStars={5}
                  starSize={20}
                  rating={4}
                  selectedStar={(rating) => this.onStarRatingPress(rating)}
                  starColor='rgb(252, 221, 45)'
                  emptyStarColor='rgb(252, 221, 45)'
                />



              </View>
              <Text style={styles.ratingtext}> Avg. rating from completed sessions </Text>

            </View>
        </Image>

      </View>

              <ScrollableTabView
              locked={false}
              onChangeTab={this.handleChangeTab.bind(this)}
              tabBarStyle={{borderWidth:0, height:46}}
              tabBarBackgroundColor={'white'}
              tabBarActiveTextColor={Colors.purpleColor}
              tabBarInactiveTextColor={Colors.subHeadingRegular}
              tabBarUnderlineStyle={styles.tabBorderSytelPurple}
              tabBarTextStyle={[styles.tabText]}
              tabBarTabStyle={{paddingBottom:0,marginLeft:0,borderBottomWidth:2,borderBottomColor:Colors.purpleColor}}
              renderTabBar={() => <DefaultTabBar />}>

              <AboutData tabLabel='About' />
              <Schedule tabLabel='Schedule' />
              <PhotosVideos tabLabel='Gallery' />
              <NoteCard tabLabel='Notes' />

            </ScrollableTabView>

            {

              (this.state.currentTab == 3) ? <AddNote /> : null
            }
            </Container>



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
              <View style={[Fonts.style.inputWrapperBordered, {marginRight: 20, marginLeft:20, marginBottom:(width >= 325) ? 0 : 7.5,marginTop:(width >= 325) ? 0 : 7.5, height:45}]}>
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
       <ScrollView style={{height:(width >= 375) ? 200 : 210,marginBottom : (width >= 325) ? 77 : 60}} showsVerticalScrollIndicator={false}>
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

          <ScrollView style={{height:(width >= 375) ? 370 : 270, paddingHorizontal :20}} showsVerticalScrollIndicator={false}>

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

      <ScrollView style={{height:(width >= 375) ? 350 : 250,paddingHorizontal :20}} showsVerticalScrollIndicator={false}>

          <View style={Fonts.style.mt5}>
            <Text style={[Fonts.style.h2, Fonts.style.mt20, {textAlign:'center'}]}> GYMS </Text>
            <Gyms />
            <PrivateAvailability />

        </View>

     </ScrollView>
    )
  }
}

class PhotosVideos extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      shown:false,
      curIndex:0,
      VideoModalVisible: false,
      currentVideo : '',
    };
  }


  setVideoModalVisible(visible) {
    this.setState({VideoModalVisible: visible});
  }

  openVideoViewer(index){

      var video = videoArray[index];
        this.setState({
            VideoModalVisible:true,
            currentVideo : video,

        })
    }

  openViewer(index){
        this.setState({
            shown:true,
            curIndex:index
        })
    }

    closeViewer(){
        this.setState({
            shown:false,
            curIndex:0
        })
    }


  render () {
    return (

      <ScrollView style={{height:(width >= 325) ? 350 : 250,paddingHorizontal :(Platform.OS === 'ios') ? 16 : 16,marginBottom:5}} showsVerticalScrollIndicator={false}>

      <View style={styles.imageCollection}>
      {
          imgsArr.map((url,index)=>{
              return <TouchableOpacity key={index}
                                       activeOpacity={1}
                                       onPress={this.openViewer.bind(this,index)} style={{height:(width >=325) ? 120 : 100}}>
                      <Image
                          source={{uri: url}}
                          style={styles.imageThumbnail}/>
                  </TouchableOpacity>
          })
      }
      {
          videoThumbnails.map((url,index)=>{
              return <TouchableOpacity key={index}
                                       activeOpacity={1}
                                       onPress={this.openVideoViewer.bind(this,index)} style={{height:(width >= 325) ? 120 :100}}>
                      <Image
                          source={{uri: url}}
                          style={styles.imageThumbnail}/>
                          <FontAwesome name='youtube-play' size={30} style={{color:'red',position:'absolute',top:(width > 325) ? 50 : 40,right:(width > 325) ? 40 : 31,backgroundColor:'transparent'}} />
                  </TouchableOpacity>
          })
      }
      </View>

      <ImageViewer shown={this.state.shown}
                   imageUrls={imgsArr}
                   onClose={this.closeViewer.bind(this)}
                   index={this.state.curIndex}>
      </ImageViewer>


        <Modal
            animationType={"slide"}
            transparent={false}
            visible={this.state.VideoModalVisible}
            onRequestClose={() => {alert("Modal has been closed.")}}>
             <Container>
              <View style={styles.modalVideoView}>
              <View style={{alignSelf:'flex-start',marginBottom:30}}>
                <Button transparent iconLeft onPress={() => {this.setVideoModalVisible(!this.state.VideoModalVisible)}}>
                  <MaterialCommunityIcons name="close" size={28} style={{color:'white'}}/>
                </Button>
              </View>
              <YouTube
                    ref="youtubePlayer"
                    videoId={this.state.currentVideo} // The YouTube video ID
                    play={true}           // control playback of video with true/false
                    hidden={false}        // control visiblity of the entire view
                    playsInline={true}    // control whether the video should play inline
                    loop={false}          // control whether the video should loop when ended
                    rel={false}
                    onReady={(e)=>{this.setState({isReady: true})}}
                    onChangeState={(e)=>{this.setState({status: e.state})}}
                    onChangeQuality={(e)=>{this.setState({quality: e.quality})}}
                    onError={(e)=>{this.setState({error: e.error})}}
                    onProgress={(e)=>{this.setState({currentTime: e.currentTime, duration: e.duration})}}
                    apiKey="AIzaSyDyUcLthCP1_v0NXPE_0CFRcY4lr7rqRUg"
                    style={styles.VideoPlayerFullScreen}
                  />
              </View>

          </Container>
        </Modal>

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


/*  <ScrollView scrollEnabled={false}>
    <StatusBar barStyle='light-content' />

          <View style={styles.headerView}>
            <Image source={Images.editProfileHeader} style={{height:248}} >

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
                      emptyStar={'star-o'}
                      fullStar={'star'}
                      iconSet={'FontAwesome'}
                      maxStars={5}
                      starSize={20}
                      rating={4}
                      selectedStar={(rating) => this.onStarRatingPress(rating)}
                      starColor='rgb(252, 221, 45)'
                      emptyStarColor='rgb(252, 221, 45)'
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
                  tabBarUnderlineStyle={styles.tabBorderSytelPurple}
                  tabBarTextStyle={[styles.tabText]}
                  tabBarTabStyle={{paddingBottom:0,marginLeft:0,borderBottomWidth:2,borderBottomColor:Colors.purpleColor}}
                  renderTabBar={() => <DefaultTabBar />}>

                  <AboutData tabLabel='About' />
                  <Schedule tabLabel='Schedule' />
                  <PhotosVideos tabLabel='Gallery' />
                  <NoteCard tabLabel='Notes' />
                </ScrollableTabView>

                {

                  (this.state.currentTab == 3) ? <AddNote /> : null
                }
          </View>



    </ScrollView> */
