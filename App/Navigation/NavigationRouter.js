import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './Styles/NavigationContainerStyles'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'
import { AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import {api} from  "../Services/Api"
import LoginActions from '../Redux/UserRedux'
// screens identified by the router
import CustomNavBar from '../Navigation/CustomNavBar'

import LaunchScreen from '../Containers/Landing'
import SelectType from '../Containers/SelectType'
import LoginScreen from '../Containers/LoginScreen'
import SignUpScreen from '../Containers/SignUpScreen'
import HomeScreen from '../Containers/PT/Home'
import ClientHome from '../Containers/Client/ClientHome'
import EditProfile from '../Containers/EditProfile'
import MobileVerification from '../Containers/MobileVerification'
import PostDetail from '../Containers/PostDetail'
import Settings from '../Containers/PT/Settings'
import Availability from '../Containers/PT/Availability'
import ClientDetail from '../Containers/PT/ClientDetail'
import ClientDetailNotWorking from '../Containers/PT/ClientDetailNotWorking'
import Sessions from '../Containers/PT/Sessions'
import SetupSessions from '../Containers/PT/SetupSessions'
import TrainerDetail from '../Containers/Client/TrainerDetail'
import RatingScreen from '../Containers/Client/RatingScreen'
import ClientSearch from '../Containers/PT/Search'
import PTSearch from '../Containers/Client/PTSearch'
import Inbox from '../Containers/PT/Messages'
import ChatScreen from '../Containers/PT/ChatScreen'
import Decline from '../Containers/PT/Decline'
import Feedback from '../Containers/Client/Feedback'
import Likes from '../Containers/Likes'


class NavigationRouter extends Component {

  componentWillMount(){
    var token;
    var userId;
    AsyncStorage.multiGet(['ptspotter_accessToken','userId']).then((data) => {
      if(data[0][1]){
        token = data[0][1] || null;
        userId = data[1][1] || null;
        this.props.attemptAutoLogin(userId, token);
      }
    })
  }
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene initial={!this.props.isLogin} key='launchScreen' component={LaunchScreen} title='LaunchScreen' hideNavBar />
            <Scene key='selectType' component={SelectType} title='PT SPOTTER'  />
            <Scene key='login' component={LoginScreen} title='PT SPOTTER' hideNavBar />
            <Scene key='signup' component={SignUpScreen} title='PT SPOTTER' hideNavBar />
            <Scene key='mobile' component={MobileVerification} title='Verification' hideNavBar/>
            <Scene key='homeScreen' component={HomeScreen} title='HOME' hideNavBar={false} navBar={CustomNavBar} />
            <Scene key='postDetail' component={PostDetail} title='POST' hideNavBar />
            <Scene key='editProfile' component={EditProfile} title='Edit Profile' hideNavBar />
            <Scene key='settings' component={Settings} title='SETTINGS' hideNavBar={false} navBar={CustomNavBar}/>
            <Scene key='availability' component={Availability} title='AVAILABILITY' hideNavBar/>
            <Scene key='sessions' component={Sessions} title='SESSIONS' hideNavBar/>
            <Scene key='likes' component={Likes} title='Likes'  hideNavBar={true}/>
            <Scene key='clientDetails' component={ClientDetail} title='' hideNavBar/>
            <Scene key='ClientDetailNotWorking' component={ClientDetailNotWorking} title='' hideNavBar/>
            <Scene  key='trainerDetails' component={TrainerDetail} title='' hideNavBar/>
            <Scene key='ratingScreen' component={RatingScreen} title='Rating' hideNavBar/>
            <Scene key='decline' component={Decline} title='Rating' hideNavBar/>
            <Scene key='search' component={ClientSearch} title='SEARCH' hideNavBar={false} navBar={CustomNavBar}/>
            <Scene  key='ptsearch' component={PTSearch} title='SEARCH' hideNavBar={false} navBar={CustomNavBar}/>
            <Scene key='inbox' component={Inbox} title='MESSAGES' hideNavBar/>
            <Scene key='chatScreen' component={ChatScreen} title='Ernest Woods' hideNavBar={true} />
            <Scene key='feedback' component={Feedback} title='FEEDBACK' hideNavBar />
          </Scene>
        </Scene>
      </Router>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    isLogin: state.user.isLogin,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptAutoLogin: (userId, token) => dispatch(LoginActions.autoLogin(userId, token))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavigationRouter)
