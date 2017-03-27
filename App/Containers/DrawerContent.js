// @flow

import React, { Component } from 'react'
import { ScrollView, Image, BackAndroid, View } from 'react-native'
import styles from './Styles/DrawerContentStyles'
import font from '../Themes/Fonts'
import { Images } from '../Themes'
import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { Button, Text,Card,CardItem,Body,Left,Right,Thumbnail } from 'native-base';

class DrawerContent extends Component {

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer()
        return true
      }
      return false
    })
  }

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  handlePressSessions =() => {
    this.toggleDrawer()
    NavigationActions.sessionScreen()
  }
  handlePressHome = () => {
    this.toggleDrawer()
    NavigationActions.homeScreen()
  }

  handlePressSearch = () => {
    this.toggleDrawer()
    NavigationActions.searchScreen()
  }

  handlePressInbox = () => {
    this.toggleDrawer()
    NavigationActions.messageScreen()
  }

  handlePressAvailability = () => {
    this.toggleDrawer()
    NavigationActions.availability()
  }

  handlePressSettings = () => {
    this.toggleDrawer()
    NavigationActions.settingScreen()
  }
  render () {
    return (
      <ScrollView style={styles.container}>
        
          <Image source={Images.navigationDrawerBackground} resizeMode="cover">
            
                  <CardItem style={styles.profileView}>
                      <Thumbnail style={styles.avatarImage} source={Images.avatarImage} />
                    <Body style={{marginLeft:15}}>
                        <Text style={styles.username}>Tarun Bardawa</Text>
                        <Text note style={styles.userAddress}>Bristol, BS4 5SS, UK</Text>
                        <Text note style={styles.userAddress}>Personal Trainer</Text>
                    </Body>
                  </CardItem>
           
          </Image>
        
        <View style={{flex:1,}}>
            <DrawerButton text='Home' onPress={this.handlePressHome} />
            <DrawerButton text='Inbox' onPress={this.handlePressInbox} />
            <DrawerButton text='Search' onPress={this.handlePressSearch} />
            <DrawerButton text='Sessions' onPress={this.handlePressSessions} />
            <DrawerButton text='Availability' onPress={this.handlePressAvailability} />
            <DrawerButton text='Settings' onPress={this.handlePressSettings} />
        </View>
        <View style={{ justifyContent:'flex-end',}}>
            <Button bordered block style={{borderColor:'lightgray', borderWidth:2,}}>
                <Text style={{color:'darkgray', fontWeight:'600'}}> LOG OUT</Text>
            </Button>
        </View>
        
      </ScrollView>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
