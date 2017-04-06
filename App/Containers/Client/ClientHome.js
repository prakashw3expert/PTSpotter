import React from 'react'
import { ScrollView,StatusBar, Text, Image, View,Dimensions } from 'react-native'
import { Container, Content, Left,Icon, Body, Right, ListItem, Thumbnail,List,Button,Card, CardItem,Grid,Col, Badge } from 'native-base';

import { Images, Fonts } from '../../Themes'
import RoundedButton from '../../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
// Styles
import styles from './Styles/ClientHomeStyle'
const { width, height } = Dimensions.get('window')

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Schedule from '../Home/Schedule'
import HealthFeeds from '../Home/HealthFeeds'
import Hr from 'react-native-hr'

export default class HomeScreen extends React.Component {

  render () {
    return (
      <View style={styles.mainContainer}>
      <StatusBar barStyle='light-content' />
        <ScrollView style={styles.container}>
          <Schedule />
          <HealthFeeds />
        </ScrollView>
      </View>
    )
  }
}

