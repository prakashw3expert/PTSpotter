import React, { PropTypes } from 'react'
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  LayoutAnimation
} from 'react-native'
import Hr from 'react-native-hr'
import {
  Container, Content,Input,
  Form, Button, Item, Icon } from 'native-base';


import { Actions } from 'react-native-router-flux'

import { connect } from 'react-redux'
import Styles from './Styles/LoginScreenStyles'
import {Images, Metrics,Fonts} from '../Themes'
import LoginActions from '../Redux/LoginRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'

class LoginScreen extends React.Component {

  static propTypes = {
    dispatch: PropTypes.func,
    fetching: PropTypes.bool,
    attemptLogin: PropTypes.func
  }

  isAttempting = false
  keyboardDidShowListener = {}
  keyboardDidHideListener = {}

  constructor (props) {
    super(props)
    this.state = {
      username: 'reactnative@infinite.red',
      password: 'password',
      visibleHeight: Metrics.screenHeight,
      topLogo: { width: Metrics.screenWidth }
    }
    this.isAttempting = false
  }

  componentWillReceiveProps (newProps) {
    this.forceUpdate()
    // Did the login attempt complete?
    if (this.isAttempting && !newProps.fetching) {
      NavigationActions.pop()
    }
  }

  componentWillMount () {
    // Using keyboardWillShow/Hide looks 1,000 times better, but doesn't work on Android
    // TODO: Revisit this if Android begins to support - https://github.com/facebook/react-native/issues/3468
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide)
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

  keyboardDidShow = (e) => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    let newSize = Metrics.screenHeight - e.endCoordinates.height
    this.setState({
      visibleHeight: newSize,
      topLogo: {width: 100, height: 70}
    })
  }

  keyboardDidHide = (e) => {
    // Animation types easeInEaseOut/linear/spring
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    this.setState({
      visibleHeight: Metrics.screenHeight,
      topLogo: {width: Metrics.screenWidth}
    })
  }

  handlePressLogin = () => {
    const { username, password } = this.state
    this.isAttempting = true
    // attempt a login - a saga is listening to pick it up from here.
    this.props.attemptLogin(username, password)
  }

  handleChangeUsername = (text) => {
    this.setState({ username: text })
  }

  handleChangePassword = (text) => {
    this.setState({ password: text })
  }

  render () {
    const { username, password } = this.state
    const { fetching } = this.props
    const editable = !fetching
    const textInputStyle = editable ? Styles.textInput : Styles.textInputReadonly
    return (
      <ScrollView contentContainerStyle={{justifyContent: 'center'}} style={[Styles.container, {height: this.state.visibleHeight}]} keyboardShouldPersistTaps='always'>
        <View style={Styles.topHeading}>
          <View style={Styles.navigationbar} >
            <TouchableOpacity onPress={NavigationActions.pop}  style={{flex:1,marginLeft:'5%'}}>
                <Image source={Images.backButton} />
            </TouchableOpacity>
            <Text style={[Fonts.style.landingTitle,{color:'white'}]}>PT SPOTTER</Text>
            <Text style={[Fonts.style.landingTitle,{flex:1}]}></Text>
          </View>
              <Text style={Fonts.style.normal}>THE NEW WAY TO FIND YOUR PERFECT PERSONAL TRAINER</Text>

        </View>

        <Item rounded style={Fonts.style.input}>
            <Icon name='mail' style={{marginTop:3,marginLeft:5,color:'rgb(172,14,250)'}}/>
            <Input style={{ height:45,fontWeight:'bold',fontSize:14,color:'rgba(102,102,102,0.5)'}} placeholder='EMAIL'/>
        </Item>
        <Item rounded style={Fonts.style.input}>
              <Icon name='lock'style={{marginTop:3,marginLeft:5,color:'rgb(172,14,250)'}}/>
              <Input style={{ height:45,fontWeight:'bold',fontSize:14,color:'rgba(102,102,102,0.5)'}} placeholder='PASSWORD'/>
        </Item>

        <View style={Styles.btnSelect}>
            <TouchableOpacity style={Styles.SignupBtn} onPress={Actions.homeScreen}>
                <Image source={Images.buttonBackground} style={Styles.SignupBtn}>
                    <Text style={Styles.SignupText} > LOGIN VIA EMAIL </Text>
                </Image>
            </TouchableOpacity>
        </View>

        <View style={Styles.orView}>
                <Hr lineColor='white' text='OR' textColor='white'/>
        </View>

        <View>

            <Button light full rounded style={Fonts.style.facebook}>
                <Text style={Fonts.style.buttonText}>Login with facebook</Text>
            </Button>

        </View>

        <View style={Styles.loginView}>
                <Text style={Styles.loginText}> Register as</Text>
                <TouchableOpacity onPress={Actions.signup}>
                 <Text style={Styles.loginBtn}> Personal Trainer </Text>
                 </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    fetching: state.login.fetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: (username, password) => dispatch(LoginActions.loginRequest(username, password))
  }
}
/*<View style={Styles.form}>
          <View style={Styles.row}>
            <Text style={Styles.rowLabel}>Username</Text>
            <TextInput
              ref='username'
              style={textInputStyle}
              value={username}
              editable={editable}
              keyboardType='default'
              returnKeyType='next'
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={this.handleChangeUsername}
              underlineColorAndroid='transparent'
              onSubmitEditing={() => this.refs.password.focus()}
              placeholder='Username' />
          </View>

          <View style={Styles.row}>
            <Text style={Styles.rowLabel}>Password</Text>
            <TextInput
              ref='password'
              style={textInputStyle}
              value={password}
              editable={editable}
              keyboardType='default'
              returnKeyType='go'
              autoCapitalize='none'
              autoCorrect={false}
              secureTextEntry
              onChangeText={this.handleChangePassword}
              underlineColorAndroid='transparent'
              onSubmitEditing={this.handlePressLogin}
              placeholder='Password' />
          </View>

          <View style={[Styles.loginRow]}>
            <TouchableOpacity style={Styles.loginButtonWrapper} onPress={this.handlePressLogin}>
              <View style={Styles.loginButton}>
                <Text style={Styles.loginText}>Sign In</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.loginButtonWrapper} onPress={NavigationActions.pop}>
              <View style={Styles.loginButton}>
                <Text style={Styles.loginText}>Cancel</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        */

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
