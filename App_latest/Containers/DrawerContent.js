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
    NavigationActions.clientsettings()
  }

  handlePressPTSettings = () => {
    this.toggleDrawer()
    NavigationActions.ptsettings()
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

    return (
      <View style={[styles.container]}>
      <ScrollView  >
      <Image source={Images.menuTopBekground} style={styles.menuTopBekground}>
          <View style={styles.usesrDeatils}>
          <ListItem avatar style={{borderBottomWidth:0}} onPress={this.handleUserProfileClick}>
                <Left>
                    <Thumbnail source={Images.avatar} />
                </Left>
                <Body style={{borderBottomWidth:0}}>
                    <Text style={{fontFamily:Fonts.type.bold, color:'rgb(255, 255, 255)', fontSize:Fonts.size.regular, letterSpacing:0.7}}>{(this.props.user.isLogin) ? this.props.user.profile.name : ''} </Text>
                    <Text note style={Fonts.style.drawerUserText}>{(this.props.user.isLogin && this.props.user.profile.location.address) ? this.props.user.profile.location.address : ''}</Text>
                    <Text note style={Fonts.style.drawerUserText}>{(this.props.user.isLogin) ? (this.props.user.profile.role === 'client') ? "Fitness Enthusiast" : "Personal Trainer"  : ''}</Text>
                </Body>
            </ListItem>
          </View>
      </Image>
      {
        (this.props.user.isLogin && this.props.user.profile.role === 'client')
        ? <View style={styles.nav}>
            <DrawerButton icon='ios-list' text='Home' active={true} onPress={this.handlePressClientHome} />
            <DrawerButton icon='mail-open' text='Inbox' counter={2}  onPress={this.handlePressInbox} />
            <DrawerButton icon='md-search' text='Search'  onPress={this.handlePressPTSearch} />
            <DrawerButton icon='ios-flash' text='Sessions'  onPress={this.handlePressSessions} />
            <DrawerButton icon='md-options' text='Settings'  onPress={this.handlePressSettings} />
        </View>
        : <View style={styles.nav}>
            <DrawerButton icon='ios-list' text='Home' active={true} onPress={this.handlePressHome} />
            <DrawerButton icon='mail-open' text='Inbox' counter={2}  onPress={this.handlePressInbox} />
            <DrawerButton icon='md-search' text='Search'  onPress={this.handlePressSearch} />
            <DrawerButton icon='ios-flash' text='Sessions'  onPress={this.handlePressSessions} />
            <DrawerButton icon='md-time' text='Availability'  onPress={this.handlePressAvailability} />
            <DrawerButton icon='md-options' text='Settings'  onPress={this.handlePressPTSettings} />

        </View>
      }
      </ScrollView>
      <View style={styles.bottomLogoutView}>
        <View style={{backgroundColor:'rgb(255,113,113)',height:2,marginTop:10}}></View>
        <Button transparent block onPress={this.handleLogout}>
            <Text style={{fontSize : 16,fontFamily : Fonts.type.regular,letterSpacing : 1,color:'rgb(255,113,113)'}}> Log Out </Text>
        </Button>
      </View>
      </View>

    )
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(DrawerContent)
