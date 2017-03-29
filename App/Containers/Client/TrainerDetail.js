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
import StarRating from 'react-native-star-rating';
import styles from './Styles/TrainerDetailStyle'

export default class TrainerDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      starCount: 4
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
  render () {

    let imageView;
    imageView = <Image source={Images.user5} style={styles.userImage}/>



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
                      
                      <Text style={styles.username}> Aaron Castillo </Text>
                      <Text style={styles.userAddress}> Bristol, BS4 5SS, UK </Text>
                      <TouchableOpacity onPress={() => window.alert('StarRating Pressed')}>
                      <StarRating
                        disabled={true}
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
                      </TouchableOpacity>
                      <Text style={styles.ratingtext}> Avg. rating from completed sessions </Text>

                    </View>
                </Image>

              </View>

              <View style={styles.containers}>

                <Tabs>
                  <Tab heading={ <TabHeading><Text style={styles.tabheading}>About</Text></TabHeading>}>
                   <ScrollView style={{height:350}}>
                      <AboutData />
                    </ScrollView>
                  </Tab>

                  <Tab heading={ <TabHeading><Text style={styles.tabheading}>Schedule</Text></TabHeading>}>
                   <ScrollView style={{height:350}}>
                      <Schedule />
                    </ScrollView>
                  </Tab>

                  <Tab heading={ <TabHeading><Text style={styles.tabheading}>Notes</Text></TabHeading>}>
                  <Content>
                    <ScrollView style={{height:350}}>
                      <NoteCard />
                      <NoteCard />
                      <NoteCard />
                      <AddNote />
                    </ScrollView>
                    
                    </Content>
                  </Tab>
                </Tabs>

              </View>
        </View>
        </ScrollView>

    )
  }
}
class About extends React.Component {

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

    )
  }
}

class AboutData extends React.Component {

  render () {
    return (

          
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

            <Button light full rounded style={Fonts.style.red}  onPress={NavigationActions.homeScreen}>
                <Text style={[Fonts.style.buttonText, Fonts.style.textBold]}>STOP SESSION</Text>
            </Button>
        </View>
    )
  }
}

class Workouts extends React.Component {

  render () {
    return (
          <View style={Fonts.style.mt10}>
              <Text style={[Fonts.style.h2, Fonts.style.mt20]}> WORKOUTS</Text>
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

class Schedule extends React.Component {

  render () {
    return (
          <View style={Fonts.style.mt5}>
            <Text style={[Fonts.style.h2, Fonts.style.mt20, {textAlign:'center'}]}> GYMS </Text>
            <Gyms />
            <PrivateAvailability />
        </View>
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
        <View style={{width:'80%'}}>
          <Button light full rounded style={Fonts.style.default} >
              <Text style={[Fonts.style.buttonText, Fonts.style.textBold]}>CHECK AVAILABILITY</Text>
          </Button>
        </View>
      </View>
    )
  }
}


