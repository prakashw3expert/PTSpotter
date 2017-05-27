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
import { connect } from 'react-redux'
import {api} from  "../../Services/Api"
import { call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import SetupSessions from '../PT/SetupSessions'
import YouTube from 'react-native-youtube'
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
var moment = require('moment');
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

class TrainerDetail extends React.Component {



  constructor(props) {
    super(props);
    this.state = {
      setupSessonVisible : false,
      currentTab : 0,
      starCount: 4,
      shown:false,
      curIndex:0,
      name : '',
      address : '',
      trainerId : '',
      online : false,
      notes : {},
      loaded : false,
      userData : {}
    }
    this.loadNotes = this.loadNotes.bind(this);
    this.getAboutData = this.getAboutData.bind(this);
    this.setupSessionModalHandle = this.setupSessionModalHandle.bind(this);
  }

  setupSessionModalHandle() {
    this.setState({setupSessonVisible : !this.state.setupSessonVisible})
    //alert('Show Setup Session Screen here')
  }

  componentWillMount () {

    this.setState({
      name : this.props.trainerData.name,
      address : this.props.trainerData.location.address,
      trainerId : this.props.trainerData.id,
      online : this.props.trainerData.online
    })

    console.log(this.props.trainerData);
  }

  componentDidMount () {
    this.getAboutData()
    this.loadNotes()
  }
  getAboutData() {
    console.log('access token at About Data in Trainer Detail : ',this.props.user.accessToken)
    api.getUser(this.props.trainerData.id, this.props.user.accessToken)
    .then((response) => {
       this.setState({userData : response.data, loaded : true})
         console.log('Client Trainer Data Response : ', response.data)
    })

  }

  loadNotes() {
    console.log('access token at Notes screen client notes : ',this.props.user.accessToken)
    api.getNotes(this.props.trainerData.id, this.props.user.accessToken)
    .then((response) => {
       this.setState({notes : response.data, loaded : true})
         console.log('Client Notes Response : ', response.data)
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
                  <Ionicons name="ios-arrow-back-outline" size={30} style={{color:'white',marginLeft:(width >= 325) ? 0 : 25, marginTop : 10}}/>
                </Button>
              </View>
              <View style={styles.navbarCenterView}>
                <Text></Text>
              </View>
              <View style={{flex:1}}>
              <Button transparent>
                  <Image source={Images.messageIcon} style={{height:22,width:22,marginLeft:5,marginTop : 10}}/>
              </Button>
              </View>

            </View>

            <View style={styles.profileimage} >
              <View>
                 <Image source={Images.user5} style={styles.userImage}/>
                 <View style={(this.state.online === true) ? Fonts.style.onlineDot : Fonts.style.offlineDot}></View>
              </View>
              <Text style={styles.username}> {this.state.name} </Text>
              <Text style={styles.userAddress}> {this.state.address} </Text>
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

              <AboutData tabLabel='About' userData={this.state.userData} user={this.props.user} callback={this.setupSessionModalHandle}/>
              <Schedule tabLabel='Schedule' userData={this.state.userData} user={this.props.user}/>
              <PhotosVideos tabLabel='Gallery'/>
              <NoteCard tabLabel='Notes' notes={this.state.notes} user={this.props.user}/>

            </ScrollableTabView>

            {

              (this.state.currentTab == 3) ? <AddNote trainer={this.props.trainerData} user={this.props.user} callback={this.loadNotes}/> : null
            }

            <Modal
                animationType={"slide"}
                transparent={false}
                visible={this.state.setupSessonVisible}
                onRequestClose={() => {this.setupSessionModalHandle()}}>

                <SetupSessions callback={this.setupSessionModalHandle} trainer={this.state.userData} user={this.props.user}/>

                 {/*<Container>
                    <View style={styles.popupheaderView}>
                      <View style={styles.popupnavbarview}>
                        <View style={{flex:0.6}}>
                          <Button transparent iconLeft onPress={() => {this.setupSessionModalHandle()}}>
                            <MaterialCommunityIcons name="close" size={28} style={{color:'white'}}/>
                          </Button>
                        </View>
                        <View style={styles.popupnavbarCenterView}>
                            <Text style={[Fonts.style.h1,Fonts.style.textWhite,{textAlign:'center', backgroundColor : 'transparent'}]}> SETUP SESSION </Text>
                        </View>
                        <View style={{flex:0.5}}>
                        <Button transparent>
                            <Icon name="md-add" style={{fontSize:28, color:'rgb(221,221, 221)', fontWeight:'bold'}} />
                        </Button>
                        </View>

                    </View>
                  </View>



              </Container>
            */}
            </Modal>
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

  constructor(props) {
           super(props);
           this.state = {
              noteText : '',
          }
          this.postNote = this.postNote.bind(this);
    }

componentWillMount () {
}
  postNote () {
    //alert('Note Posted for Client : '+this.props.client.name)
    if(this.state.noteText.length > 0 ){
      const note = {
        "text" : this.state.noteText,
        "created" : new Date(),
        "userId" : this.props.trainer.id
      }
    api.postNotes(this.props.trainer.id, this.props.user.accessToken, note)
    .then((response) => {
          this.setState({noteText : ''});
         console.log('Posted Comment Response Post : ', response)
         this.props.callback()
    })
    }

  }
  render () {

    return (
          <View style={styles.bottomview}>
              <View style={[Fonts.style.inputWrapperBordered, {marginRight: 20, marginLeft:20, marginBottom:(width >= 325) ? 0 : 7.5,marginTop:(width >= 325) ? 15 : 6.5, height:45}]}>
                <Input style={Fonts.style.inputBordered}
                      placeholder='ADD COMMENT'
                      placeholderTextColor={Fonts.colors.input}
                      onChangeText={(text) => this.setState({noteText : text})}
                      value={this.state.noteText}
                      />
                <TouchableOpacity onPress={this.postNote}>
                  <Text style={{ marginTop:10}}><Image source={Images.commentAdd} resizeMode='contain' style={{width:30, height:30}}></Image></Text>
                </TouchableOpacity>
              </View>
          </View>
    )
  }
}

class NoteCard extends React.Component {

  render () {
    return (
      (this.props.notes.length > 0) ?
      <ScrollView ref="scroll" style={{height:(width >= 325) ? 200 : 210, marginBottom : (width >= 325) ? 77 : 60}} showsVerticalScrollIndicator={false}
          onContentSizeChange={(contentWidth, contentHeight)=>{
            this.refs.scroll.scrollToEnd(); }}
      >
      <View style={styles.notesView}>
          {this.props.notes.map((note, index) => (

            <Card style={Fonts.style.commnetBox} key={index}>
               <CardItem content style={{marginBottom:0, paddingBottom:0}}>

                   <Text style={styles.commentContent}>
                    {note.text}
                   </Text>

               </CardItem>
               <CardItem style={{marginTop : 0, paddingBottom : 0}}>
                 <Body>
                     <Text style={styles.commentDate}>{note.created}</Text>
                 </Body>
               </CardItem>
          </Card>

        ))}
      </View>
    </ScrollView>

    : <EmptyNotes />

    )
  }
}

class AboutData extends React.Component {

  constructor(props) {
           super(props);
           this.state = {
              aboutHeight : 250,
          }

  }
  render () {
    return (

          <ScrollView style={{height:(width >= 375) ? 370 : 270, paddingHorizontal :20}} showsVerticalScrollIndicator={false}>

          <View style={Fonts.style.mt15}>

             <Grid>
                  <Col style={{ width: 40 ,alignItems:'center'}}>
                    <Foundation name="info" color={Colors.purpleColor} size={30} />
                  </Col>
                  <Col style={{ height: this.state.aboutHeight}} >
                     <Text style={styles.aboutInfo} onLayout={(event) => {
                                var {x, y, width, height} = event.nativeEvent.layout;
                                this.setState({aboutHeight : height + 20})
                              }}>
                       {this.props.userData.about}
                     </Text>
                  </Col>
              </Grid>

            <Workouts userData={this.props.userData} user={this.props.user} callback={this.props.callback}/>

        </View>
     </ScrollView>
    )
  }
}

class Workouts extends React.Component {

  constructor(props) {
           super(props);
           this.state = {
              noteText : '',
          }
          this.startSession = this.startSession.bind(this);
          this.stopSession = this.stopSession.bind(this);
  }

  startSession () {
      //alert('START SESSON for : ' + this.props.user.profile.name + ' with : ' + this.props.userData.name)
      this.props.callback()
  }

  stopSession () {

  }

  render () {

    var colors = ['rgb(251, 99, 39)', 'rgb(36, 240, 133)', 'rgb(251, 179, 39)', 'rgb(36, 195, 200)', 'rgb(31, 199, 116)'];

    return (
          <View style={(width >= 375) ? Fonts.style.mt10 : Fonts.style.mt20}>
              <Text style={[Fonts.style.h2, Fonts.style.mt20]}> WORKOUTS</Text>
              <View style={styles.buttonsView}>

              {
                (this.props.userData.myInterests) ?  this.props.userData.myInterests.map((interest, i) => {
                  if(i > 3) {
                    return
                  }
                  return <Button key={i} rounded small style={{
                            paddingLeft:(width >= 325) ? 15 : 10,
                            paddingRight:(width >= 325) ? 15 : 10,
                            paddingTop : 0,
                            paddingBottom : 0,
                            height:(width >= 325) ? 35 : 30,
                            backgroundColor : colors[i % 5],
                            marginRight : 5,
                            marginBottom : 5
                          }} >
                              <Text style={Fonts.style.categoryTagText}>{interest.name}</Text>

                            </Button>
                })
                : null
              }

              {
                (this.props.userData.myInterests && this.props.userData.myInterests.length > 4) ?
                <TouchableOpacity>
                    <View style={styles.selectBox} >
                      <Text style={styles.selectBoxText}> Show {this.props.userData.myInterests.length - 4} More </Text>
                      <Ionicons name="ios-arrow-forward-outline" size={18} style={{color:'white'}}/>
                    </View>
                  </TouchableOpacity>
                  : null
              }


              </View>
              <View style={{marginTop:60, marginLeft:20, marginRight:20,marginBottom:20}}>

                <Button light full rounded style={Fonts.style.default} onPress={this.startSession}>
                  <Text style={[Fonts.style.buttonText, Fonts.style.textBold]}>START SESSION</Text>
                </Button>

                <Button light full rounded style={Fonts.style.red} onPress={this.stopSession}>
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
            <Gyms userData={this.props.userData}/>
            {
              this.props.userData.private ?
                  <PrivateAvailability userData={this.props.userData}/>
                  :
                  <Availabilities userData={this.props.userData} user={this.props.user}/>
            }


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

  constructor(props) {
    super(props);

    this.state = {
      schedules : {},
      loaded : false,
      today : moment().format("dd").toUpperCase()
    };
  }
  componentDidMount() {
    api.getSchedules(this.props.userData.id, this.props.user.accessToken)
    .then((response) => {
          this.setState({schedules : response.data, loaded :  true});
         console.log('Availabilities on Schedule TrainerDetail : ', response.data)

    })
  }

  render () {

    var scheduleButtons = [];
    for(i = 0; i < this.state.schedules.length; i++) {
      if(this.state.schedules[i].day === this.state.today) {
        scheduleButtons.push(
          <Button block bordered block large key={i} style={Fonts.style.purpleButtonAvailability}>
                  <Text style={[Fonts.style.subHeading,{color:'white'}]}>{this.state.schedules[i].start_time}</Text>
                  <Icon name="ios-arrow-round-forward" style={{color:'white', marginLeft:20,marginRight:20,}}/>
                  <Text style={[Fonts.style.subHeading,{color:'white'}]}>{this.state.schedules[i].end_time}</Text>
              </Button>
        )
      }
    }
    return (
      (scheduleButtons.length > 0) ?
      <View style={styles.availabilityView}>
      <Text style={[Fonts.style.h2, Fonts.style.mt5,Fonts.style.mb20, {textAlign:'center'}]}> AVAILABILITY </Text>
          <View style={{width:'80%'}} >
            {
              scheduleButtons
            }
          </View>
      </View>
      : null
    )
  }
}

class Gyms extends React.Component {

  componentWillMount() {
      console.log(this.props.userData.myGyms)
  }

  render () {
    return (

      <View style={styles.availabilityView}>
        <Text style={[Fonts.style.h2, Fonts.style.mb20, {textAlign:'center'}]}>{ this.props.userData.myGyms && this.props.userData.myGyms.length > 0 ? "GYMS" : "No Gyms"}</Text>
      <View style={styles.gymsView}>
      {
        this.props.userData.myGyms && this.props.userData.myGyms.length > 0 ?
          this.props.userData.myGyms.map((gym, i) => {
          return <View key={i} style={[styles.gymColumns,{width:'45%'}]}>
                   <Text style={styles.gymButton}>{gym.name}</Text>
                   <Text style={[styles.gymButton,{color:Colors.mutedColor}]}>{gym.postcode}</Text>
                 </View>
        })

      :
         null

      }
      </View>

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

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(TrainerDetail)
