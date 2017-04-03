import React, { Component } from 'react';
import { ScrollView, Text, Image, View } from 'react-native'
import {Container,Content, TabHeading, Badge,List, ListItem, Left, Body, Right, Icon,Grid, Col, Button  } from 'native-base';

import { Images, Colors, Fonts, Metrics } from '../../Themes'

import { Actions as NavigationActions } from 'react-native-router-flux'
import styles from './Styles/SessionsScreenStyle'

import FontAwesome from 'react-native-vector-icons/FontAwesome';





import Hr from 'react-native-hr'



export default class Daily extends React.Component {

  constructor(props) {
         super(props);
         this.state = {
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
  render () {
    return (
      <Container>
        <View style={{}}>
            <View style={[styles.tabHeading, {paddingLeft:20, paddingRight:20,paddingHorizontal: 5,flexDirection: 'row',
            justifyContent: 'space-between',backgroundColor:Colors.background, height:Metrics.navBarHeight,paddingTop: Metrics.titleBarTop}]}>
              <Text style={ Fonts.style.textCenter}>
                <Icon name="md-close" style={{fontSize:28, color:'rgb(221,221, 221)', fontWeight:'bold'}} />
              </Text>
              <Text style={ Fonts.style.textCenter}>
                <Text style={[Fonts.style.h1, Fonts.style.textWhite]}>SETUP SESSION</Text>
              </Text>
              <Text style={ Fonts.style.textCenter}>
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

              <View style={{marginTop:16}}>
                <Text style={{fontSize:10,letterSpacing : 0.5,color:Colors.mutedColor,textAlign:'center', marginBottom:16}}>SESSION DATE</Text>

                <View style={{marginTop:10, flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                   <View   style={styles.selectBox}><Text style={styles.selectBoxText}>10 <Icon name="arrow-down" style={{fontSize:22, color:'rgb(221,221, 221)', fontWeight:'bold'}} /></Text></View>
                   <View   style={Fonts.style.categoryTagGrayLarge}><Text style={Fonts.style.categoryTagTextLarge}>January</Text></View>
                   <View   style={Fonts.style.categoryTagGreeLarge}><Text style={Fonts.style.categoryTagTextLarge}>2017</Text></View>
                </View>

                <View style={{marginTop:10, flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                   <Button rounded small style={Fonts.style.categoryTagLarge}><Text style={Fonts.style.categoryTagTextLarge}>Yoga</Text></Button>
                   <Button rounded small style={Fonts.style.categoryTagGrayLarge}><Text style={Fonts.style.categoryTagTextLarge}>Cardio</Text></Button>
                   <Button rounded small style={Fonts.style.categoryTagGreeLarge}><Text style={Fonts.style.categoryTagTextLarge}>Fartlek</Text></Button>
                </View>
              </View>
            </View>
        </View>
      </Container>



    )
  }
}
