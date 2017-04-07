// @flow

import React, { Component } from 'react'
import { ScrollView, Image, BackAndroid, View , TouchableOpacity,AsyncStorage,Dimensions} from 'react-native'
import styles from './Styles/DrawerContentStyles'

import DrawerButton from '../Components/DrawerButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

import { Button, Text, Icon, ListItem, Left, Right, Body, Thumbnail,Badge } from 'native-base';

import { Images,Fonts } from '../Themes'
import Hr from 'react-native-hr'
import { connect } from 'react-redux'
const { width, height } = Dimensions.get('window')
class DrawerContent extends Component {

  constructor() {
      super();
      this.state = {
         'user': ''
      }
   }
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
  handlePressClientHome = () => {
    this.toggleDrawer()
    NavigationActions.clientHome()
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

  handlePressTrainerDetail = () => {
    this.toggleDrawer()
    NavigationActions.trainerDetails()
  }
  handlePressClientDetail = () => {
    this.toggleDrawer()
    NavigationActions.clientDetails()
  }
  handleLogout = () => {
    this.toggleDrawer()
    NavigationActions.login()

  }


  render () {
    let imageView;
    imageView = <Image source={Images.addPhotoCircle} style={styles.userImage}/>

    let Homebtn;
    Homebtn = (this.props.username === 'client@ptspotter.co.uk') ? <DrawerButton icon='ios-list' text='Home' active={true} onPress={this.handlePressClientHome} /> : <DrawerButton icon='ios-list' text='Home' active={true} onPress={this.handlePressHome} />

    let searchBtn;
    searchBtn = (this.props.username === 'client@ptspotter.co.uk') ? <DrawerButton icon='md-search' text='Search'  onPress={this.handlePressPTSearch} /> : <DrawerButton icon='md-search' text='Search'  onPress={this.handlePressSearch} />

    let availabilityBtn;
    availabilityBtn = (this.props.username === 'trainer@ptspotter.co.uk') ? <DrawerButton icon='md-time' text='Availability'  onPress={this.handlePressAvailability} /> : null
    return (
      <ScrollView style={[styles.container,{height : height}]} >

      <Image source={Images.menuTopBekground} style={styles.menuTopBekground}>
          <View style={styles.usesrDeatils}>
          <ListItem avatar style={{borderBottomWidth:0}} onPress={this.handleUserProfileClick}>
                <Left>
                    <Thumbnail source={Images.avatar} />
                </Left>
                <Body style={{borderBottomWidth:0}}>
                    <Text style={{fontFamily:Fonts.type.bold, color:'rgb(255, 255, 255)', fontSize:Fonts.size.regular, letterSpacing:0.7}}>Kumar Pratik </Text>
                    <Text note style={Fonts.style.drawerUserText}>Bristol, BS4 5SS, UK</Text>
                    <Text note style={Fonts.style.drawerUserText}>Personal Trainer</Text>
                </Body>
            </ListItem>
          </View>
      </Image>
      <View style={styles.nav}>
          {Homebtn}
          <DrawerButton icon='mail-open' text='Inbox' counter={2}  onPress={this.handlePressInbox} />
          {searchBtn}
          <DrawerButton icon='ios-flash' text='Sessions'  onPress={this.handlePressSessions} />
          {availabilityBtn}
          <DrawerButton icon='md-options' text='Settings'  onPress={this.handlePressSettings} />

      </View>

      <View style={styles.bottomLogoutView}>

        <Button transparent block style={{borderTopWidth : 2,borderTopColor:'rgb(255,113,113)'}} onPress={this.handleLogout}>
            <Text style={{fontSize : 16,fontFamily : Fonts.type.regular,letterSpacing : 1,color:'rgb(255,113,113)'}}> Log Out </Text>
        </Button>
      </View>

      </ScrollView>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    username: state.login.username
  }
}

export default connect(mapStateToProps)(DrawerContent)
