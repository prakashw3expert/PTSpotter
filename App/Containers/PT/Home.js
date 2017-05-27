// @flow

import React from 'react'
import { ScrollView,Animated, TouchableWithoutFeedback,StatusBar, Text, Image, View,Dimensions,Platform } from 'react-native'
import { Container, Content, Left,Icon, Body, Right, ListItem, Thumbnail,List,Button,Card, CardItem,Grid,Col, Badge } from 'native-base';

import { Images, Fonts, Colors } from '../../Themes'
import RoundedButton from '../../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
// Styles
import styles from './Styles/HomeScreenStyle'
const { width, height } = Dimensions.get('window')
var moment = require('moment');
import FontAwesome from 'react-native-vector-icons/FontAwesome';
var TimeAgo = require('react-native-timeago');
import Hr from 'react-native-hr'
import { connect } from 'react-redux'
import {api} from  "../../Services/Api"
import Schedule from '../Home/Schedule'
import HealthFeeds from '../Home/HealthFeeds'
import SessionRequests from '../Home/SessionRequests'

import { call, put, takeEvery, takeLatest} from 'redux-saga/effects'

class HomeScreen extends React.Component {

  render () {
    return (
      <View style={styles.mainContainer}>
      <StatusBar barStyle='light-content' backgroundColor={Colors.background}/>
        <ScrollView style={styles.container}>
          {
            (this.props.user.profile.role === 'trainer') ?
              <SessionRequests /> :
              null
          }

          <Schedule />
          <HealthFeeds user={this.props.user}/>
        </ScrollView>
      </View>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(HomeScreen)
