import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyles'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'
// screens identified by the router
import CustomNavBar from '../Navigation/CustomNavBar'

import LaunchScreen from '../Containers/Landing'
import SelectType from '../Containers/SelectType'
import LoginScreen from '../Containers/LoginScreen'
import SignUpScreen from '../Containers/SignUpScreen'
import HomeScreen from '../Containers/Home'
import EditProfile from '../Containers/EditProfile'
import MobileVerification from '../Containers/MobileVerification'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene initial key='launchScreen' component={LaunchScreen} title='LaunchScreen' hideNavBar />
            <Scene key='selectType' component={SelectType} title='PT SPOTTER'  />
            <Scene key='login' component={LoginScreen} title='PT SPOTTER' hideNavBar />
            <Scene key='signup' component={SignUpScreen} title='PT SPOTTER' hideNavBar />
            <Scene key='mobile' component={MobileVerification} title='VERIFICATION' hideNavBar />
            <Scene key='homeScreen' component={HomeScreen} title='Home' hideNavBar={false} navBar={CustomNavBar} />
            <Scene key='editProfile' component={EditProfile} title='Edit Profile' hideNavBar />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
