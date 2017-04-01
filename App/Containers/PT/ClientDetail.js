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
import styles from './Styles/ClientDetailStyle'
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';

export default class ClientDetail extends React.Component {

  render () {

    let imageView;
    imageView = <Image source={Images.user4} style={styles.userImage}/>


    return (

        <ScrollView scrollEnabled={false}>
          <View>
              <View style={styles.headerView}>
                <Image source={Images.editProfileHeader} style={{height:248}}>
                    <View style={styles.navbarview}>
                      <Button transparent iconLeft onPress={NavigationActions.pop}>
                        <Icon name='arrow-back' style={{color:'white'}}/>
                      </Button>
                      <Text style={[Fonts.style.h1, Fonts.style.textWhite,{flex:1, textAlign:'center'}]}></Text>
                      <Button transparent>
                          <Image source={Images.messageIcon} />
                      </Button>
                    </View>
                    <View style={styles.profileimage} >

                       {imageView}

                      <Text style={styles.username}> Ernest Woods </Text>
                      <Text style={styles.userAddress}> Bristol, BS4 5SS, UK </Text>
                    </View>
                </Image>

              </View>

              <View style={styles.containers}>

              <ScrollableTabView
              locked={false}
              tabBarStyle={{borderWidth:0, height:46}}
              tabBarBackgroundColor={'white'}
              tabBarActiveTextColor={Colors.purpleColor}
              tabBarInactiveTextColor={Colors.subHeadingRegular}
              tabBarUnderlineStyle={styles.tabBorderSytel}
              tabBarTextStyle={[styles.tabText]}
              tabBarTabStyle={{paddingBottom:0,marginLeft:0,borderBottomWidth:2,borderBottomColor:Colors.purpleColor}}
              renderTabBar={() => <DefaultTabBar />}>

              <AboutData tabLabel='About'/>
              <NoteCard tabLabel='Notes'/>

            </ScrollableTabView>
          </View>

        
        </View>
        </ScrollView>

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

  render () {
    return (
      
          <View style={styles.bottomview}>
              <View style={[Fonts.style.inputWrapperBordered, {marginRight: 20, marginLeft:20, marginBottom:20, height:45}]}>
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
      <ScrollView style={{height:350}}>
      <View style={styles.notesView}>

          <Card style={Fonts.style.commnetBox}>
             <CardItem content>
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

      <ScrollView style={{height:350}} showsVerticalScrollIndicator={false}>
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

            <WorkoutInterest />

            <Button light full rounded style={Fonts.style.red} >
                <Text style={[Fonts.style.buttonText, Fonts.style.textBold]}>STOP SESSION</Text>
            </Button>
        </View>
      </ScrollView>
    )
  }
}

class WorkoutInterest extends React.Component {

  render () {
    return (
          <View style={Fonts.style.mt10}>
              <Text style={[Fonts.style.h2, Fonts.style.mt20]}> WORKOUT INTERESTS</Text>
              <View style={styles.buttonsView}>
                <Button rounded small style={{paddingLeft:15, paddingRight:15,marginRight:5,marginBottom:10, height:35, backgroundColor:'rgb(31,199,116)'}}><Text style={{fontSize:12, fontFamily:Fonts.type.regular, color:'#fff'}}>Yoga</Text></Button>
                <Button rounded small style={{paddingLeft:15, paddingRight:15,marginRight:5,marginBottom:10, height:35, backgroundColor:'rgb(31,199,116)'}}><Text style={{fontSize:12, fontFamily:Fonts.type.regular, color:'#fff'}}>Cardio</Text></Button>
                <Button rounded small style={{paddingLeft:15, paddingRight:15,marginRight:5,marginBottom:10, height:35, backgroundColor:'rgb(31,199,116)'}}><Text style={{fontSize:12, fontFamily:Fonts.type.regular, color:'#fff'}}>Fartlek</Text></Button>

              </View>

              <Button light full rounded style={Fonts.style.default} >
                <Text style={[Fonts.style.buttonText, Fonts.style.textBold]}>START SESSION</Text>
            </Button>
          </View>
    )
  }
}
