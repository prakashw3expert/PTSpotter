// @flow

import React, { Component } from 'react'
import { ScrollView, Text, Image,ActivityIndicator, View,TouchableOpacity, Dimensions,StatusBar } from 'react-native'
import { Container,Content,Form,Button,Icon,ListItem,Grid,Col, Tabs, Tab, TabHeading,Input, Thumbnail,Body,Left,Right,Card, CardItem } from 'native-base';
const { width, height } = Dimensions.get('window')
import { Images,Fonts,Colors } from '../../Themes'
import RoundedButton from '../../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Foundation from 'react-native-vector-icons/Foundation';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
// Styles
import styles from './Styles/ClientDetailStyle'
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import Hr from 'react-native-hr'
import { connect } from 'react-redux'
import {api} from  "../../Services/Api"
import { call, put, takeEvery, takeLatest} from 'redux-saga/effects'
var moment = require('moment');
class ClientDetail extends React.Component {


constructor(props) {
         super(props);
         this.state = {
            fetchingAboutData : false,
            fetchingNotes : false,
            currentTab : 0,
            name : '',
            address : '',
            clientId : '',
            online : false,
            notes : {},
            loaded : false,
            userData : {},
            image : '',

        }
        this.loadNotes = this.loadNotes.bind(this);
        this.getAboutData = this.getAboutData.bind(this);
  }
 componentWillMount () {
  (!this.props.fromSession) ?
    this.setState({
      name : this.props.clientData.name,
      address : this.props.clientData.address,
      clientId : this.props.clientData.id,
      online : this.props.clientData.online,
      image : this.props.clientData.image
    })
    :

    this.setState({
      name : this.props.clientData.user.name,
      address : this.props.clientData.user.address,
      clientId : this.props.clientData.user.id,
      online : this.props.clientData.user.online,
      image : (this.props.clientData.user.image) ? this.props.clientData.baseUrl + this.props.clientData.user.image : this.props.clientData.default_image,
    })

}


handleChangeTab({i, ref }) {
     this.setState({currentTab : i});
}

componentDidMount () {
  this.getAboutData()
  this.loadNotes()
}
loadNotes() {
  this.setState({fetchingNotes : true})
  console.log('access token at Notes screen client notes : ',this.props.user.accessToken)
  api.getNotes(this.state.clientId, this.props.user.accessToken)
  .then((response) => {
    if(response.ok){
      this.setState({notes : response.data, fetchingNotes : false})
        console.log('Client Notes Response : ', response.data)
    }
    else{
      alert('Network Error while loading Notes');
      this.setState({fetchingNotes : false});
    }

  })

}
getAboutData() {
  this.setState({fetchingAboutData : true})
  console.log('access token at About Data in Trainer Detail : ',this.props.user.accessToken)
  api.getUser(this.state.clientId, this.props.user.accessToken)
  .then((response) => {
    if(response.ok){
      this.setState({userData : response.data, fetchingAboutData : false})
        console.log('Client Trainer Data Response : ', response.data)
    }
    else{
      alert('Error while loading data');
      this.setState({fetchingAboutData : false});
    }

  })

}

  render () {
    return (

      <Container>
      <StatusBar barStyle='light-content' backgroundColor={Colors.background}/>

              <View style={styles.headerView}>
                <Image source={Images.editProfileHeader} style={{height:248}}>
                    <View style={styles.navbarview}>
                      <Button transparent iconLeft onPress={NavigationActions.pop}>
                        <FontAwesome name='angle-left' style={{fontSize:28,color:"rgb(255, 255, 255)", marginLeft:(width >= 325) ? 0 : 25}} />
                      </Button>
                      <Text style={[Fonts.style.h1, Fonts.style.textWhite,{flex:1, textAlign:'center'}]}></Text>
                      <Button transparent>
                          <Image source={Images.messageIcon} style={{height:22,width:22,marginRight:(width >= 325) ? 0 : 25}}/>
                      </Button>
                    </View>
                    <View style={styles.profileimage} >
                      <View>
                         <Image source={{uri : this.state.image}} style={styles.userImage}/>
                         <View style={(this.state.online === true) ? Fonts.style.onlineDot : Fonts.style.offlineDot}></View>
                      </View>
                      <Text style={styles.username}> {this.state.name} </Text>
                      <Text style={styles.userAddress}> {this.state.address} </Text>
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
              tabBarUnderlineStyle={styles.tabBorderSytel}
              tabBarTextStyle={[styles.tabText]}
              tabBarTabStyle={{paddingBottom:0,marginLeft:0,borderBottomWidth:2,borderBottomColor:Colors.purpleColor}}
              renderTabBar={() => <DefaultTabBar />}>

              <AboutData tabLabel='About' userData={this.state.userData} user={this.props.user} clientId={this.state.clientId} loading={this.state.fetchingAboutData}/>
              <NoteCard tabLabel='Notes' notes={this.state.notes} user={this.props.user}/>

            </ScrollableTabView>

            {

              (this.state.currentTab == 1) ? <AddNote client={this.props.clientData} user={this.props.user} callback={this.loadNotes}/> : null
            }
            </Container>

    )
  }
}




class Notes extends React.Component {


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
  console.log(this.props.client)
}
  postNote () {
    //alert('Note Posted for Client : '+this.props.client.name)
    if(this.state.noteText.length > 0 ){
      const note = {
        "text" : this.state.noteText,
        "userId" : this.props.client.id,
        "postUserId" : this.props.user.userId
      }
    api.postNotes(this.props.client.id, this.props.user.accessToken, note)
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
              <View style={[Fonts.style.inputWrapperBordered, {marginRight: 20, marginLeft:20, marginBottom:(width >= 325) ? 0 : 7.5,marginTop:(width >= 325) ? 15 : 7.5, height:45}]}>
                <Input style={Fonts.style.inputBordered}
                    placeholder='ADD NOTE'
                    placeholderTextColor={Fonts.colors.input}
                    onChangeText={(text) => this.setState({noteText : text})}
                    value={this.state.noteText}
                    />
                <TouchableOpacity onPress={this.postNote}>
                  <Text style={{ marginTop:10 }}><Image source={Images.commentAdd} resizeMode='contain' style={{width:30, height:30}}></Image></Text>
                </TouchableOpacity>
              </View>
          </View>

    )
  }
}

class NoteCard extends React.Component {


  componentWillMount () {

  }

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

    : <Notes />

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

      <ScrollView style={{height:(width >= 325) ? 350 : 270}} showsVerticalScrollIndicator={false}>
          <View style={[Fonts.style.mt15, styles.containers]}>
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
              <Hr lineColor='rgb(234, 234, 234)' style={{paddingTop:16}} />

            <WorkoutInterest userData={this.props.userData} user={this.props.user} clientId={this.props.clientId}/>

            {/* <Button light full rounded style={Fonts.style.red} >
                <Text style={[Fonts.style.buttonText, Fonts.style.textBold]}>STOP SESSION</Text>
            </Button>*/}
        </View>
      </ScrollView>
    )
  }
}

class WorkoutInterest extends React.Component {

  constructor(props) {
           super(props);
           this.state = {
              haveRunningSession : false,
              loaded : false,
              runningSession : {}
          }

          this.stopSession = this.stopSession.bind(this);
          this.getworkouts = this.getworkouts.bind(this);
          this.stopRunningSession = this.stopRunningSession.bind(this);
  }
  componentDidMount() {

    this.getworkouts()
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
    console.log('clientId : ' + this.props.clientId );

    api.getOngoingSessionsForTrainere(this.props.user.userId, this.props.user.accessToken)
    .then((response) => {
         //
         if(response.ok){
         var AllSessions = response.data;

         AllSessions.map((session) => {
           if(moment(session.session_date).isSame(moment(), 'day') && session.end_time === '' && session.userId === this.props.clientId && session.trainerId === this.props.user.profile.id ){
             console.log('Have a running session');
             this.setState({haveRunningSession : true, loaded : true, runningSession : session})
           }
         })

         this.setState({loaded : true})

         console.log('Sessions for PT on Client Detail : ', response.data)
       }
       else{
         alert('Error while fetch running session.')
       }
    })

  }

  stopSession () {

  }

  render () {
    return (
          <View style={(width >= 375) ? Fonts.style.mt10 : Fonts.style.mt20}>
          <View style={{marginTop:60, marginLeft:20, marginRight:20,marginBottom:20}}>
            {
              this.state.loaded ?

              (this.state.haveRunningSession) ?
              <Button light full rounded style={Fonts.style.red} onPress={this.stopRunningSession}>
                <Text style={[Fonts.style.buttonText, Fonts.style.textBold]}>STOP SESSION</Text>
              </Button>
              :
              null

              : null
            }
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

export default connect(mapStateToProps)(ClientDetail)
