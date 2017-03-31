// @flow

import React, { Component } from 'react'
import { ScrollView, Image, BackAndroid, View , TouchableOpacity} from 'react-native'
import styles from './Styles/DrawerContentStyles'

import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

import { Button, Text, Icon, ListItem, Left, Right, Body, Thumbnail,Badge } from 'native-base';

import { Images,Fonts } from '../Themes'

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
    NavigationActions.sessions()
  }
  handlePressHome = () => {
    this.toggleDrawer()
    NavigationActions.homeScreen()
  }

  handlePressSearch = () => {
    this.toggleDrawer()
    NavigationActions.search()
  }

  handlePressInbox = () => {
    this.toggleDrawer()
    NavigationActions.inbox()
  }

  handlePressAvailability = () => {
    this.toggleDrawer()
    NavigationActions.availability()
  }

  handlePressSettings = () => {
    this.toggleDrawer()
    NavigationActions.settings()
  }

  handleUserProfileClick = () => {
    this.toggleDrawer()
    NavigationActions.editProfile()
  }
  handlePressPTSearch = () => {
    this.toggleDrawer()
    NavigationActions.ptsearch()
  }
  handlePressRating = () => {
    this.toggleDrawer()
    NavigationActions.ratingScreen()
  }
  handlePressTrainerDetail = () => {
    this.toggleDrawer()
    NavigationActions.trainerDetails()
  }
  handlePressClientDetail = () => {
    this.toggleDrawer()
    NavigationActions.clientDetails()
  }

  render () {
    let imageView;
    imageView = <Image source={Images.addPhotoCircle} style={styles.userImage}/>
    return (
      <ScrollView style={styles.container}>

      <Image source={Images.menuTopBekground} style={styles.menuTopBekground}>
          <View style={styles.usesrDeatils}>
          <ListItem avatar style={{borderBottomWidth:0}} onPress={this.handleUserProfileClick}>
                <Left>
                    <Thumbnail source={Images.avatar} />
                </Left>
                <Body style={{borderBottomWidth:0}}>
                    <Text style={{fontFamily:Fonts.type.bold, color:'rgb(255, 255, 255)', fontSize:Fonts.size.regular, letterSpacing:0.7}}>Kumar Pratik</Text>
                    <Text note style={Fonts.style.drawerUserText}>Bristol, BS4 5SS, UK</Text>
                    <Text note style={Fonts.style.drawerUserText}>Personal Trainer</Text>
                </Body>
            </ListItem>
          </View>
      </Image>
      <View style={styles.nav}>
          <DrawerButton icon='ios-list' text='Home' active={true} onPress={this.handlePressHome} />
          <DrawerButton icon='mail-open' text='Inbox' counter={2}  onPress={this.handlePressInbox} />
          <DrawerButton icon='md-search' text='Search'  onPress={this.handlePressSearch} />
          <DrawerButton icon='ios-flash' text='Sessions'  onPress={this.handlePressSessions} />
          <DrawerButton icon='md-time' text='Availability'  onPress={this.handlePressAvailability} />
          <DrawerButton icon='md-options' text='Settings'  onPress={this.handlePressSettings} />
          <DrawerButton icon='md-search' text='PT Search'  onPress={this.handlePressPTSearch} />
          <DrawerButton icon='md-star' text='Rating'  onPress={this.handlePressRating} />
          <DrawerButton icon='md-eye' text='Trainer Detail'  onPress={this.handlePressTrainerDetail} />
          <DrawerButton icon='md-film' text='Client Detail'  onPress={this.handlePressClientDetail} />

      </View>

      </ScrollView>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
