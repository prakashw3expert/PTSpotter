import React, { Component } from 'react';
import { ScrollView,Dimensions, Text, Image, View,TouchableOpacity,Picker,Platform,StatusBar } from 'react-native'
import {Container,Content,Thumbnail, TabHeading, Badge,List,Input, ListItem, Left, Body, Right, Icon,Grid, Col, Button  } from 'native-base';

import { Images, Colors, Fonts, Metrics } from '../Themes'

import { Actions as NavigationActions } from 'react-native-router-flux'
import styles from './Styles/LikesStyle'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AppConfig from  "../Config/AppConfig"
import { connect } from 'react-redux'
const { width, height } = Dimensions.get('window')


export default class Likes extends React.Component {

  constructor(props) {
         super(props);
         this.state = {

         }
     }


  render () {

    return (
      <Container>

        <View style={{height:Metrics.screenHeight}}>
            <View style={[styles.tabHeading, {paddingLeft:20, paddingRight:20,paddingHorizontal: 5,flexDirection: 'row',
            justifyContent: 'space-between',backgroundColor:Colors.background, height:Metrics.navBarHeight,paddingTop: Metrics.titleBarTop}]}>
              <TouchableOpacity onPress={NavigationActions.pop}>
                <FontAwesome name="angle-left" size={30}  style={{color:'white'}}/>
              </TouchableOpacity>
              <Text style={ [Fonts.style.textCenter,{marginRight :10}]}>
                <Text style={[Fonts.style.h1, Fonts.style.textWhite]}>Favorites</Text>
              </Text>
              <Text style={ Fonts.style.textCenter}>

              </Text>
            </View>

            <Content style={{marginBottom:0}}>
               <List dataArray={this.props.userLikes} renderRow={(item) =>
                        <ListItem button avatar style={{marginTop:(width >= 375) ? 14 : 10,paddingBottom:(width >= 375) ? 14 : 10, borderBottomWidth:1, borderColor:'rgb(234, 234, 234)', marginRight:(width >= 375) ? 20 : 10}}>
                            <Left>
                                 <Thumbnail medium source={{uri : AppConfig.userProfilPath + item.user.image}}  />
                            </Left>
                            <Body style={{borderBottomWidth:0}}>
                              <Text style={styles.listname}>{item.user.name}</Text>
                            </Body>

                        </ListItem>
                    } />
          </Content>

          </View>
      </Container>



    )
  }
}
