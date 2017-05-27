// @flow

import React, { Component } from 'react'
import { ScrollView, Text, Image, View,TouchableOpacity, Dimensions,StatusBar } from 'react-native'
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

class ClientDetail extends React.Component {


constructor(props) {
         super(props);
         this.state = {
            currentTab : 0,
            name : '',
            address : '',
            clientid : '',
            online : false,
            notes : {},
            loaded : false
        }
        this.loadNotes = this.loadNotes.bind(this);
  }


handleChangeTab({i, ref }) {
     this.setState({currentTab : i});
}

componentDidMount () {
  this.loadNotes()
}
loadNotes() {
  console.log('access token at Notes screen client notes : ',this.props.user.accessToken)
  api.getNotes(this.props.clientData.id, this.props.user.accessToken)
  .then((response) => {
     this.setState({notes : response.data, loaded : true})
       console.log('Client Notes Response : ', response.data)
  })

}

componentWillMount () {

  this.setState({
    name : this.props.clientData.name,
    address : this.props.clientData.location.address,
    clientid : this.props.clientData.id,
    online : this.props.clientData.online
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
                         <Image source={Images.user4} style={styles.userImage}/>
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

              <AboutData tabLabel='About' clientData={this.props.clientData}/>
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
        "created" : new Date(),
        "userId" : this.props.client.id
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

  render () {
    return (

      <ScrollView style={{height:(width >= 325) ? 350 : 270}} showsVerticalScrollIndicator={false}>
          <View style={[Fonts.style.mt15, styles.containers]}>

             <Grid>
                  <Col style={{ width: 40 ,alignItems:'center'}}>
                    <Foundation name="info" color={Colors.purpleColor} size={30} />
                  </Col>
                  <Col>
                     <Text style={[styles.aboutInfo, {marginBottom:16}]}>
                       Hello! My name is Ernests. The Emerald Buddha is a figurine of a sitting Budha, that is the is the palladium of the Kingdom of Thailand. The Buddha is made of green jade, suprisingly not of emerald, clothed in gold is approximately 45 cm tall. The Buddha is kept in the Chapel of the Emerald Buddha, which is located on the grounds of the Grand Palace in Bangkok.
                     </Text>
                  </Col>
              </Grid>

              <Hr lineColor='rgb(234, 234, 234)' style={{paddingTop:16}} />

            <WorkoutInterest />

            {/* <Button light full rounded style={Fonts.style.red} >
                <Text style={[Fonts.style.buttonText, Fonts.style.textBold]}>STOP SESSION</Text>
            </Button>*/}
        </View>
      </ScrollView>
    )
  }
}

class WorkoutInterest extends React.Component {

  render () {
    return (
          <View style={(width >= 375) ? Fonts.style.mt10 : Fonts.style.mt20}>
              <Text style={[Fonts.style.h2, Fonts.style.mt20]}> WORKOUT INTERESTS</Text>
              <View style={styles.buttonsView}>
                <Button rounded small style={{paddingLeft:15, paddingRight:15,marginRight:16,marginBottom:10, height:35, backgroundColor:'rgb(31,199,116)'}}><Text style={{fontSize:12, fontFamily:Fonts.type.regular, color:'#fff'}}>Yoga</Text></Button>
                <Button rounded small style={{paddingLeft:15, paddingRight:15,marginRight:16,marginBottom:10, height:35, backgroundColor:'rgb(178,178,178)'}}><Text style={{fontSize:12, fontFamily:Fonts.type.regular, color:'#fff'}}>Cardio</Text></Button>
                <Button rounded small style={{paddingLeft:15, paddingRight:15,marginRight:16,marginBottom:10, height:35, backgroundColor:'rgb(251,179,39)'}}><Text style={{fontSize:12, fontFamily:Fonts.type.regular, color:'#fff'}}>Fartlek</Text></Button>

              </View>

                <View style={{marginTop:80, marginLeft:20, marginRight:20}}>
                <Button light full rounded style={Fonts.style.red} >
                  <Text style={[Fonts.style.buttonText, Fonts.style.textBold]}>STOP SESSION</Text>
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

export default connect(mapStateToProps)(ClientDetail)
