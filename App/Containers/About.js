import React, { Component } from 'react';
import { ScrollView, Text, Alert, Image, View,Switch, TouchableHighlight,TouchableOpacity,Dimensions,StatusBar, Picker,Modal } from 'react-native'
import { Container, Content, Input,
  Form, Item, Icon, List, ListItem, Right, Button, Body, Left, Grid, Col  } from 'native-base';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Hr from 'react-native-hr'
import { Images, Colors, Fonts } from '../Themes'
import { Actions as NavigationActions } from 'react-native-router-flux'
import styles from './PT/Styles/SettingScreenStyle'
import Modalss from 'react-native-simple-modal';
var PickerItemIOS = Picker.Item;
const { width, height } = Dimensions.get('window')

import { connect } from 'react-redux'
import {api} from  "../Services/Api"
import { call, put, takeEvery, takeLatest} from 'redux-saga/effects'

class About extends React.Component {

  constructor(props) {
        super(props);
        this.state = {

        }
    }

  componentDidMount () {

  }
 render () {
   return (
     <Container>
     <StatusBar barStyle='light-content' />
        <View style={[styles.headerView,{backgroundColor:Colors.background}]}>
      <View style={[styles.navbarview,{backgroundColor:Colors.background}]}>
        <View style={{flex:1}}>
          <TouchableOpacity style={styles.closeButton} onPress={() => this.props.callback()}>
            <MaterialCommunityIcons name="close" size={28} style={{color:'rgb(255,255,255)'}}/>
          </TouchableOpacity>
        </View>
        <View>
            <Text style={[Fonts.style.h1,Fonts.style.textWhite,{textAlign:'center',marginTop:5}]}> ABOUT </Text>
        </View>
        <View style={{flex:1}}>
        <Button transparent>
            <Text></Text>
        </Button>
        </View>

    </View>
  </View>

  <Content style={{padding:15, paddingBottom:20,backgroundColor : Colors.background}}>

      <Text style={styles.aboutText}>
        Nulla porttitor accumsan tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada. Donec rutrum congue leo eget malesuada. Nulla porttitor accumsan tincidunt. Donec sollicitudin molestie malesuada.
        Nulla porttitor accumsan tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada. Donec rutrum congue leo eget malesuada. Nulla porttitor accumsan tincidunt. Donec sollicitudin molestie malesuada.
      </Text>
  </Content>
  <View style={{height : 10, backgroundColor : Colors.background}}>
  </View>

  </Container>
   )
 }
}





const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}


export default connect(mapStateToProps)(About)
