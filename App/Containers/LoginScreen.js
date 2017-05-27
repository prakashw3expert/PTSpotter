import React, { PropTypes } from 'react'
import { View, ScrollView, Text, TextInput, TouchableOpacity,Platform, Image, Keyboard, LayoutAnimation,StatusBar } from 'react-native'
import Hr from 'react-native-hr'
import { Container, Content,Input, Form, Button, Item, Icon } from 'native-base';
import { connect } from 'react-redux'
import Styles from './Styles/LoginScreenStyles'
import {Images, Metrics,Fonts, Colors} from '../Themes'
import LoginActions from '../Redux/UserRedux'
import { Actions } from 'react-native-router-flux'
import DeviceInfo from 'react-native-device-info';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as EmailValidator from 'email-validator';
import {api} from  "../Services/Api"
import { call, put, takeEvery, takeLatest} from 'redux-saga/effects'
const FBSDK = require('react-native-fbsdk');
const {
  LoginManager, LoginButton, GraphRequest, GraphRequestManager,AccessToken
} = FBSDK;

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
      email: '',
      password: '',
      role : 'client',
      visibleHeight: Metrics.screenHeight,
      topLogo: { width: Metrics.screenWidth }
    }
    this.isAttempting = false

  }

  componentWillReceiveProps (newProps) {

    if(newProps.newUser){
      alert('No account associated with this facebook account. Please signup first')
    }

  }


  componentWillMount () {

    (this.props.role) ? this.setState({role : this.props.role}) : this.setState({role : 'client'})

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

navigateToSignUp() {
  LoginActions.signup({newUser : true})
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
                  var facebookId = result.id;
                  var name = result.name;
                  var email = result.email;
                  const device_Id = DeviceInfo.getUniqueID();
                  const device = (Platform.OS === 'ios') ? "iphone" : "android";
                  console.log('Login Success : ' + result.email.toString());
                  var LoginData = {
                    "name" : name,
                    "facebook_id" : facebookId,
                    "device" : device,
                    "device_id" : device_Id
                  }
                  console.log(LoginData)
                  this.props.fbLogin(LoginData);
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
      }.bind(this),
      function(error) {
        alert('Login fail with error: ' + error);
      }
    );
  }

  handlePressLogin = () => {
    const { email, password } = this.state
    // attempt a login - a saga is listening to pick it up from here.
    this.props.attemptLogin(email, password);
  }

  handleSignupAction () {
    Actions.signup({ role : this.state.role})
  }


  render () {
    const { username, password } = this.state
    const { fetching } = this.props
    const editable = !fetching
    const textInputStyle = editable ? Styles.textInput : Styles.textInputReadonly

    var isSubmit = (
      this.state.email
      && this.state.password
      && EmailValidator.validate(this.state.email) ) ? true : false;


    return (
      <ScrollView contentContainerStyle={{justifyContent: 'center'}} style={[Styles.container, {height: this.state.visibleHeight}]} keyboardShouldPersistTaps='always'>
      <StatusBar barStyle='light-content' backgroundColor={Colors.background}/>
      <View style={[Styles.topHeading]}>
        <View style={Styles.navigationbar} >
        <TouchableOpacity onPress={Actions.pop} style={Styles.backButton}>
            <FontAwesome name='angle-left' style={Styles.backButtonIcon}/>
        </TouchableOpacity>
        <Text style={[Fonts.style.h1, Fonts.style.textWhite, Fonts.style.mb20, { flex:2}]}>PT SPOTTER</Text>
        </View>
        <Text style={[Fonts.style.h6, Fonts.style.textWhite, Fonts.style.mb60]}>THE NEW WAY TO FIND YOUR PERFECT PERSONAL TRAINER</Text>
      </View>

        <Item rounded style={Fonts.style.inputWrapper}>
            <Icon name='mail' style={{marginTop:3,marginLeft:15,marginRight:10,color:'rgb(172,14,250)',backgroundColor:'transparent'}}/>
            <Input  style={Fonts.style.input}
            placeholder='EMAIL'
            ref={'email'}
            placeholderTextColor={Fonts.colors.input}
            keyboardType='default'
            returnKeyType='next'
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={(email) => this.setState({email})}
            underlineColorAndroid='transparent'
            onSubmitEditing={ () => { if (!EmailValidator.validate(this.state.email)) {
                                alert('Invalid Email');
                                  this.refs.email._root.focus();
                              } else {
                                this.refs.password._root.focus()
                              }}}
            />
        </Item>

        <Item rounded style={Fonts.style.inputWrapper}>
              <Icon name='lock'style={{marginTop:3,marginLeft:15,marginRight:10,color:'rgb(172,14,250)',backgroundColor:'transparent'}}/>
              <Input
              ref={'password'}
              style={Fonts.style.input}
              placeholder='PASSWORD'
              placeholderTextColor={Fonts.colors.input}
              editable={editable}
              keyboardType='default'
              returnKeyType='go'
              autoCapitalize='none'
              autoCorrect={false}
              secureTextEntry
              onChangeText={(password) => this.setState({password})}
              />
        </Item>
        {
          // this.props.user.error ?
          // <View style={Fonts.style.mt5}>
          //       <Text style={{color : 'red', marginLeft : 10}}>{this.props.user.error}</Text>
          // </View>
          // : null
        }


        <View style={Fonts.style.mt15}>
          <Button light full rounded style={Fonts.style.default} disabled={!isSubmit}  onPress={this.handlePressLogin}>
              <Text style={[Fonts.style.buttonText, Fonts.style.textBold]}>LOGIN VIA EMAIL</Text>
          </Button>
        </View>

        <View style={Styles.separater}>
            <Hr lineColor='white' text='OR' textColor='white' textSize="18" style={{fontWeight:'bold',fontSize:18.6,letterSpacing: 3.8, fontFamily:Fonts.type.bold}}/>
        </View>

        <View>

          <Button light full rounded style={Fonts.style.facebook}  onPress={this.handleFacebookLogin}>
              <Text style={[Fonts.style.buttonText, Fonts.style.textBold]}>LOGIN VIA FACEBOOK</Text>
          </Button>
        </View>



        <View style={Styles.foooter}>
          <Text style={Styles.footeText}> Register as</Text>
            <TouchableOpacity onPress={this.handleSignupAction.bind(this)}>
              <Text style={Styles.footeLink}> { (this.state.role === 'trainer') ? "Personal Trainer" : "Fitness Enthusiast" } </Text>
            </TouchableOpacity>
        </View>

      </ScrollView>
    )
  }

}
/*
{ () => { if (!this.validateEmail(this.state.email)) {
                    console.log('email not valid try again')
                  } else {
                    console.log('Great. Email is Valid')
                    this.refs.password._root.focus()
                  }}}
                  */

const mapStateToProps = (state) => {
  return {
    fetching: state.user.fetching,
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: (username, password) => dispatch(LoginActions.loginRequest(username, password)),
    fbLogin: (data) => dispatch(LoginActions.facebookLogin(data))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
