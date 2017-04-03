import React, { Component } from 'react';
import { ScrollView, Text, Image, View } from 'react-native'
import {Container,Content, TabHeading, Badge,List,Input, ListItem, Left, Body, Right, Icon,Grid, Col, Button  } from 'native-base';

import { Images, Colors, Fonts, Metrics } from '../../Themes'

import { Actions as NavigationActions } from 'react-native-router-flux'
import styles from './Styles/SessionsScreenStyle'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-simple-modal';




import Hr from 'react-native-hr'



export default class Daily extends React.Component {

  constructor(props) {
         super(props);
         this.state = {
              open:false,
              modalVisible: false,
             results: {
                 items: [
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user4,
                     "location" : "BLOK London Gym",
                     "bordered" : false,
                   },


                 ]
             }
         }
     }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render () {
    return (
      <Container>
        <View style={{}}>
            <View style={[styles.tabHeading, {paddingLeft:20, paddingRight:20,paddingHorizontal: 5,flexDirection: 'row',
            justifyContent: 'space-between',backgroundColor:Colors.background, height:Metrics.navBarHeight,paddingTop: Metrics.titleBarTop}]}>
              <Text style={ Fonts.style.textCenter}>
                <Icon name="md-close"  style={{color:'white'}}/>
              </Text>
              <Text style={ Fonts.style.textCenter}>
                <Text style={[Fonts.style.h1, Fonts.style.textWhite]}>SETUP SESSION</Text>
              </Text>
              <Text style={ Fonts.style.textCenter} onPress={() => this.setState({open: true})}>
                <Icon name="md-add" style={{fontSize:28, color:'rgb(221,221, 221)', fontWeight:'bold'}} />
              </Text>
            </View>

            <View style={{}}>
              <List dataArray={this.state.results.items} renderRow={(item) =>
                  <ListItem button avatar style={{borderBottomWidth:1, borderColor:'rgb(234, 234, 234)', marginRight:19, paddingTop:0, paddingBottom:10}}>
                  <Left>
                    <Image source={item.image} style={( item.bordered === true ) ? Fonts.style.avatarBordered : Fonts.style.avatar}/>
                  </Left>
                  <Body style={{borderBottomWidth:0}}>
                    <Text style={styles.usernameSet} note>{item.name}</Text>
                    <Text style={styles.locationSet} note> {item.location}</Text>
                  </Body>
                  <Right style={{borderBottomWidth:0, alignItems:'center'}}>
                      <Icon name="arrow-forward" style={{fontSize:22, color:'rgb(221,221, 221)'}} />
                  </Right>
                  </ListItem>
              } />

              <View style={{marginTop:16, marginRight:20,marginLeft:20}}>
                <Text style={{fontSize:10,fontFamily:Fonts.type.bold,letterSpacing : 0.5,color:Colors.mutedColor,textAlign:'center', marginBottom:16}}>SESSION DATE</Text>

                <View style={{marginTop:10, flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                   <View   style={styles.selectBox}><Text style={styles.selectBoxText}>10 <Icon name="arrow-down" style={{fontSize:22, color:'rgb(102,102, 102)'}} /></Text></View>
                   <View   style={styles.selectBox}><Text style={styles.selectBoxText}>January <Icon name="arrow-down" style={{fontSize:22, color:'rgb(102,102, 102)'}} /></Text></View>
                   <View   style={styles.selectBox}><Text style={styles.selectBoxText}>2017 <Icon name="arrow-down" style={{fontSize:22, color:'rgb(102,102, 102)'}} /></Text></View>
                </View>
              </View>
              <View style={{marginTop:40,alignItems: 'center'}}>
                <Image source={Images.workoutEmpty} style={{height:172, width:218}} />
                <Text style={[Fonts.style.buttonTextNormalGrey,styles.emptyText]}>
                  NO WORKOUTS FOR SELECTED DATE. 
                </Text>

                <Button transparent style={{marginTop:-12,alignSelf:'center'}}>
                  <Text style={[Fonts.style.buttonTextNormalGrey,styles.btnEmptyText,{color:Colors.purpleColor}]}>CLICK HERE TO ADD WORKOUTS </Text>
                </Button>
              </View>
            </View>
        </View>
        <Modal
          offset={this.state.offset}
          open={this.state.open}
          overlayBackground={Colors.popupoverlayBackground}
          modalDidOpen={() => console.log('modal did open')}
          modalDidClose={() => this.setState({open: false})}
          style={{alignItems: 'center'}}>
          <View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={{marginLeft:20}}></Text>
                <Text style={[Fonts.style.h2,{flex:1,textAlign:'center',marginLeft:20}]}>ADD NEW WORKOUT</Text>
                <Button transparent onPress={() => this.setState({open: false})}>
                    <MaterialCommunityIcons name="close" size={22} color="rgb(102,102,102)"/>
                </Button>
            </View>

            <Text style={styles.modelText}>
              SEARCH AND ADD WORKOUTS FOR 10 OF OCTOBER
            </Text>

            <View style={styles.containers}>

                <View style={[Fonts.style.inputWrapperBordered, {paddingRight:5}]}>
                  <Input  style={Fonts.style.inputBordered} placeholder='SEARCH AND ADD' placeholderTextColor={Fonts.colors.input}/>
                  <View style={{backgroundColor:'rgb(172,14,250)', width:30,height:30, borderRadius:100, marginTop:6, paddingRight:20}}><Icon name='search' style={Fonts.style.borderedIconRight} /></View>
                </View>

                <View style={{marginTop:10, flexDirection:'row'}}>
                   <Button rounded small style={Fonts.style.categoryTagPink}><Text style={Fonts.style.categoryTagText}>Yoga <MaterialCommunityIcons name="close" size={18} color="rgb(255,255,255)" style={{paddingTop:10}}/></Text></Button>
                   <Button rounded small style={Fonts.style.categoryTagPink}><Text style={Fonts.style.categoryTagText}>Cardio <MaterialCommunityIcons name="close" size={18} color="rgb(255,255,255)"/></Text></Button>
                </View>
                
            </View>

          </View>
        </Modal>
      </Container>



    )
  }
}
