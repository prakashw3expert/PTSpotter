import React, { Component } from 'react';
import { ScrollView, Text, Image, View } from 'react-native'
import {Container,Content, TabHeading, Badge,List, ListItem, Left, Body, Right, Icon,Grid, Col, Button  } from 'native-base';

import { Images, Colors, Fonts, Metrics } from '../../Themes'

import { Actions as NavigationActions } from 'react-native-router-flux'
import styles from './Styles/SessionsScreenStyle'

import FontAwesome from 'react-native-vector-icons/FontAwesome';


import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';


import Hr from 'react-native-hr'



export default class Daily extends React.Component {

  constructor(props) {
         super(props);
         this.state = {
             results: {
                 items: [
                   {
                     "name" : "Ernest Woods",
                     "image" : Images.user1,
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
              <Text style={ [Fonts.style.textCenter, {backgroundColor:'#fff'}]}>
                <Icon name="md-close" style={{fontSize:28, color:'rgb(221,221, 221)', fontWeight:'bold'}} />
              </Text>
              <Text style={ Fonts.style.textCenter}>
                <Text style={[Fonts.style.h1, Fonts.style.textWhite]}>SETUP SESSION</Text>
              </Text>
              <Text style={ Fonts.style.textCenter}>
                <Icon name="md-add" style={{fontSize:28, color:'rgb(221,221, 221)', fontWeight:'bold', backgroundColor:'#fff'}} />
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
            </View>
        </View>
      </Container>



    )
  }
}
