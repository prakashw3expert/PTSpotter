// @flow

import React, { Component } from 'react'
import { ScrollView, Text, Image,ActivityIndicator, View,TouchableOpacity, Dimensions,StatusBar,Modal,Platform } from 'react-native'
import { Container,Content,Form,Button,Icon,ListItem,Grid,Col, Tabs, Tab, TabHeading,Input, Thumbnail,Body,Left,Right,Card, CardItem } from 'native-base';
const { width, height } = Dimensions.get('window')
import { Images,Fonts,Colors } from '../../Themes'
import RoundedButton from '../../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppConfig from  "../../Config/AppConfig"
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

class TrainerDetail extends React.Component {



  constructor(props) {
    super(props);
    this.state = {
      fetchingAboutData : false,
      fetchingNotes : false,
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

    (!this.props.fromSession) ?
    this.setState({
      name : this.props.trainerData.name,
      address : this.props.trainerData.address,
      trainerId : this.props.trainerData.id,
      online : this.props.trainerData.online,
      image : this.props.trainerData.image,
    })

    :
    this.setState({
      name : this.props.trainerData.trainer.name,
      address : this.props.trainerData.trainer.address,
      trainerId : this.props.trainerData.trainer.id,
      online : this.props.trainerData.trainer.online,
      image : (this.props.trainerData.trainer.image) ? this.props.trainerData.baseUrl + this.props.trainerData.trainer.image : this.props.trainerData.default_image,
    })

  }

  componentDidMount () {
    this.getAboutData()
    this.loadNotes()
  }
  getAboutData() {
    this.setState({fetchingAboutData : true})
    api.getUser(this.state.trainerId, this.props.user.accessToken)
    .then((response) => {
      if(response.ok){
        console.log(response.data);
        this.setState({userData : response.data, fetchingAboutData : false})
      }
      else{
        alert('Server timeout')
        this.setState({fetchingAboutData : false});
      }

    })

  }

  loadNotes() {
    this.setState({fetchingNotes : true})
    api.getNotes(this.state.trainerId, this.props.user.accessToken)
    .then((response) => {
      if(response.ok){
        this.setState({notes : response.data, fetchingNotes : false})
      }
      else{
        alert('Error while loading notes')
        this.setState({fetchingNotes : false});
      }

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
    NavigationActions.ratingScreen({trainer : this.state.userData})
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
                 <Image source={{uri : this.state.image}} style={styles.userImage}/>
                 <View style={(this.state.online === true) ? Fonts.style.onlineDot : Fonts.style.offlineDot}></View>
              </View>
              <Text style={styles.username}> {this.state.name} </Text>
              <Text style={styles.userAddress}> {this.state.address} </Text>
              <View>

              <StarRating
                  disabled={false}
                  emptyStar={'star-o'}
                  fullStar={'star'}
                  iconSet={'FontAwesome'}
                  maxStars={5}
                  starSize={20}
                  rating={this.state.userData.rating}
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

              <AboutData tabLabel='About' userData={this.state.userData} user={this.props.user} callback={this.setupSessionModalHandle} stopSession={this.stopRunningSession} trainerId={this.state.trainerId} loading={this.state.fetchingAboutData}/>
              <Schedule tabLabel='Schedule' userData={this.state.userData} user={this.props.user}/>
              <PhotosVideos tabLabel='Gallery' userData={this.state.userData}/>
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

                <StatusBar barStyle='light-content' backgroundColor={Colors.background} />
                <SetupSessions callback={this.setupSessionModalHandle} trainer={this.state.userData} user={this.props.user}/>

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
        "userId" : this.props.trainer.id,
        "postUserId" : this.props.user.userId
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
          {
            (this.props.loading) ?
              <ActivityIndicator
                  animating={this.state.loading}
                  style={[styles.centering, {height: 80}]}
                  size="large"
                />
            :
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
            }
            <Workouts trainer={this.props.userData} user={this.props.user} callback={this.props.callback} trainerId={this.props.trainerId}/>

        </View>
     </ScrollView>
    )
  }
}

class Workouts extends React.Component {

  constructor(props) {
           super(props);
           this.state = {
              haveRunningSession : false,
              loaded : false,
              runningSession : {}
          }
          this.startSession = this.startSession.bind(this);
          this.stopRunningSession = this.stopRunningSession.bind(this);
          this.getworkouts = this.getworkouts.bind(this);
  }

  componentDidMount() {
    this.getworkouts()
  }

  startSession () {
      //alert('START SESSON for : ' + this.props.user.profile.name + ' with : ' + this.props.userData.name)
      this.props.callback()
  }

  stopRunningSession () {
    var endTime = moment().format("h") + ":" + moment().format("mm") + " " + moment().format("A");
    const data = {
      "end_time" : endTime
    }

    api.endSession(this.state.runningSession.id, this.props.user.accessToken, data)
    .then((response) => {
      if(response.ok){
        alert('session completed')
        this.setState({haveRunningSession : false})
        this.getworkouts()
      }
      else{
        alert('Server timeout')
      }

    })
  }

  getworkouts() {

    api.getOngoingSessionsForUser(this.props.user.userId, this.props.user.accessToken)
    .then((response) => {
         //
         if(response.ok){
           var AllSessions = response.data;

           AllSessions.map((session) => {
             if(moment(session.session_date).isSame(moment(), 'day') && session.end_time === '' && session.userId === this.props.user.profile.id && session.trainerId === this.props.trainerId ){
               //console.log('Have a running session');
               this.setState({haveRunningSession : true, loaded : true, runningSession : session})
             }
           })


           this.setState({loaded : true})

          // console.log('Sessions for Client on Trainer Detail : ', response.data)
         }
         else{
           alert(response.problem)
         }
    })
  }




  render () {

    var colors = ['rgb(251, 99, 39)', 'rgb(36, 240, 133)', 'rgb(251, 179, 39)', 'rgb(36, 195, 200)', 'rgb(31, 199, 116)'];

    return (
          <View style={(width >= 375) ? Fonts.style.mt10 : Fonts.style.mt20}>
              <Text style={[Fonts.style.h2, Fonts.style.mt20]}> WORKOUTS</Text>
              <View style={styles.buttonsView}>

              {
                (this.props.trainer.myInterests) ?  this.props.trainer.myInterests.map((interest, i) => {
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
                (this.props.trainer.myInterests && this.props.trainer.myInterests.length > 4) ?
                <TouchableOpacity>
                    <View style={styles.selectBox} >
                      <Text style={styles.selectBoxText}> Show {this.props.userData.myInterests.length - 4} More </Text>
                      <Ionicons name="ios-arrow-forward-outline" size={18} style={{color:'white'}}/>
                    </View>
                  </TouchableOpacity>
                  : null
              }


              </View>
              <View style={{marginTop:(width >= 325) ? 60 : 30, marginLeft:20, marginRight:20,marginBottom:20}}>
                {
                  this.state.loaded ?

                  (this.state.haveRunningSession === true) ?
                  <Button light full rounded style={Fonts.style.red} onPress={this.stopRunningSession}>
                    <Text style={[Fonts.style.buttonText, Fonts.style.textBold]}>STOP SESSION</Text>
                  </Button>
                  :
                  <Button light full rounded style={Fonts.style.default} onPress={this.startSession}>
                    <Text style={[Fonts.style.buttonText, Fonts.style.textBold]}>START SESSION</Text>
                  </Button>

                  : null
                }
              </View>

          </View>
    )
  }
}

class Schedule extends React.Component {

  render () {
    return (

      <ScrollView style={{height:(width >= 325) ? 350 : 250,paddingHorizontal :(width >= 325) ? 20 : 5}} showsVerticalScrollIndicator={false}>

          <View style={Fonts.style.mt5}>
            <Gyms userData={this.props.userData}/>
            {
              (this.props.userData.profile === 'private') ?
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
      imgsArr : [],
      videoThumbnails : [],
      videoArray : [],
    };
  }

  componentWillMount() {
      //console.log('On gallery :', this.props.userData)
      (this.props.userData.gallery.length > 0) ?
        this.props.userData.gallery.map((item) => {
          if(item.type === 'image'){
            this.state.imgsArr.push(AppConfig.userGalleryPath + item.name)
          }
          else if(item.type === 'video'){
            this.state.videoThumbnails.push('https://img.youtube.com/vi/' + item.name + '/mqdefault.jpg');
            this.state.videoArray.push(item.name)
          }
        })
        :
        null

  }

  setVideoModalVisible(visible) {
    this.setState({VideoModalVisible: visible});
  }

  openVideoViewer(index){

      var video = this.state.videoArray[index];
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
        (this.state.imgsArr && this.state.imgsArr.length > 0) ?
          this.state.imgsArr.map((url,index)=>{
              return <TouchableOpacity key={index}
                                       activeOpacity={1}
                                       onPress={this.openViewer.bind(this,index)} style={{height:(width >=325) ? 120 : 100}}>
                      <Image
                          source={{uri: url}}
                          style={styles.imageThumbnail}/>
                  </TouchableOpacity>
          })
          :
          null
      }
      {
          this.state.videoThumbnails.map((url,index)=>{
              return <TouchableOpacity key={index}
                                       activeOpacity={1}
                                       onPress={this.openVideoViewer.bind(this,index)} style={{height:(width >= 325) ? 120 :100}}>
                      <Image
                          source={{uri: url}}
                          style={styles.imageThumbnail}/>
                          <Foundation name='play-circle' size={34} style={styles.playIcon} />
                  </TouchableOpacity>
          })
      }
      </View>

      <ImageViewer shown={this.state.shown}
                   imageUrls={this.state.imgsArr}
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
        <Text style={[Fonts.style.h2, Fonts.style.mb20, {textAlign:'center'}]}>{ this.props.userData.myGyms && this.props.userData.myGyms.length > 0 ? "GYMS" : "NO GYM FOUND"}</Text>
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
