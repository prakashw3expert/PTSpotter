import React, { PropTypes } from 'react'
import {View, ScrollView, Text, TextInput, TouchableOpacity, Image, Keyboard, LayoutAnimation, StatusBar } from 'react-native'
import Hr from 'react-native-hr'
import { Container, Content,Input,Form,Item, Left,Icon,Body, Right, ListItem,Thumbnail,List,Button,Card, CardItem,Label } from 'native-base';

import { connect } from 'react-redux'
import Styles from './Styles/LoginScreenStyles'
import {Images, Metrics,Fonts, Colors} from '../Themes'
import LoginActions from '../Redux/UserRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const FBSDK = require('react-native-fbsdk');
const {
  LoginManager, LoginButton, GraphRequest, GraphRequestManager,AccessToken
} = FBSDK;

class SignUpScreen extends React.Component {
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

  handleFacebookLogin = () => {
  //  alert('Facebook btn tapped')
      LoginManager.logInWithReadPermissions(['public_profile','email']).then(
      function(result) {
        if (result.isCancelled) {
          alert('Login cancelled');
        } else {
          // alert('Login success with permissions: '
          //   +result.grantedPermissions.toString());
          console.log(result)
          AccessToken.getCurrentAccessToken().then(
            (data) => {
              let accessToken = data.accessToken
            //  alert(accessToken.toString())   //success

              const responseInfoCallback = (error, result) => {
                if (error) {
                  console.log(error)
                  alert('Error fetching data: ' + error.toString());
                } else {
                  console.log(result)

                  alert('Login Success : ' + result.email.toString());
                }
              }

              const infoRequest = new GraphRequest(
                '/me',
                {
                  accessToken: accessToken,
                  parameters: {
                    fields: {
                      string: 'email,name,first_name,middle_name,last_name'
                    }
                  }
                },
                responseInfoCallback
              );

              // Start the graph request.
              new GraphRequestManager().addRequest(infoRequest).start()

            }
          )
        }
      },
      function(error) {
        alert('Login fail with error: ' + error);
      }
    );
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
      <StatusBar barStyle='light-content' backgroundColor={Colors.background}/>
      <View style={[Styles.topHeading]}>
        <View style={Styles.navigationbar} >
        <TouchableOpacity onPress={NavigationActions.pop} style={{height:40, flex:.5}}>
            <FontAwesome name='angle-left' style={{fontSize:32, color : Colors.white}}/>
        </TouchableOpacity>
        <Text style={[Fonts.style.h1, Fonts.style.textWhite, Fonts.style.mb20, { flex:2}]}>PT SPOTTER</Text>
        </View>
        <Text style={[Fonts.style.h6, Fonts.style.textWhite, Fonts.style.mb60]}>THE NEW WAY TO FIND YOUR PERFECT PERSONAL TRAINER</Text>
      </View>

      <Item rounded style={Fonts.style.inputWrapper}>
            <Icon name='mail' style={{marginTop:3,marginLeft:15,marginRight:10,color:'rgb(172,14,250)',backgroundColor:'transparent'}}/>
            <Input
              style={Fonts.style.input}
              placeholder='EMAIL'
              placeholderTextColor={Fonts.colors.input}
              keyboardType='default'
              returnKeyType='next'
              autoCapitalize='none'
              autoCorrect={false}
              onSubmitEditing={ (event) => { this.refs.password._root.focus() }}/>
        </Item>

        <Item rounded style={Fonts.style.inputWrapper}>
              <Icon name='lock'style={{marginTop:3,marginLeft:15,marginRight:10,color:'rgb(172,14,250)',backgroundColor:'transparent'}}/>
              <Input
                style={Fonts.style.input}
                placeholder='PASSWORD'
                placeholderTextColor={Fonts.colors.input}
                ref={'password'}/>
        </Item>

      <View style={Fonts.style.mt15}>
        <Button light full rounded style={Fonts.style.default}  onPress={NavigationActions.mobile}>
            <Text style={[Fonts.style.buttonText, Fonts.style.textBold]}>SIGNUP VIA EMAIL</Text>
        </Button>
      </View>

      <View style={Styles.separater}>
          <Hr lineColor='white' text='OR' textColor='white' textSize="18" style={{fontWeight:'bold',fontSize:18.6,letterSpacing: 3.8, fontFamily:Fonts.type.bold}}/>
      </View>


      <View>
        <Button light full rounded style={Fonts.style.facebook} onPress={this.handleFacebookLogin}>
            <Text style={[Fonts.style.buttonText, Fonts.style.textBold]}>SIGNUP VIA FACEBOOK</Text>
        </Button>
      </View>

        <View style={Styles.footerSingup}>
            <Text style={[Styles.footeText,Styles.footerTextSingup]}>
              By clicking Sign Up you agree to our <Text style={Styles.footeSingupLink}> Terms of Use </Text> and <Text style={Styles.footeSingupLink}> Privacy Policy </Text>
            </Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen)
