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
import { Container, Content,Input,
  Form,Item, Left,Icon,
  Body, Right, ListItem,
  Thumbnail,List,Button,
  Card, CardItem,Label } from 'native-base';

import { connect } from 'react-redux'
import Styles from './Styles/MobileVerificationStyles'
import {Images, Metrics,Fonts, Colors} from '../Themes'
import LoginActions from '../Redux/LoginRedux'
import { Actions as NavigationActions } from 'react-native-router-flux'

class MobileVerification extends React.Component {

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
      <ScrollView contentContainerStyle={{justifyContent: 'center', alignItems:'center'}} style={[Styles.container, {height: this.state.visibleHeight}]} keyboardShouldPersistTaps='always'>
        
        <View style={Styles.topHeading}>
          <View style={Styles.navigationbar} >
            <TouchableOpacity onPress={NavigationActions.pop}  style={{flex:1,marginLeft:'5%'}}>
                <Image source={Images.backButton} />
            </TouchableOpacity>
            <Text style={[Fonts.style.landingTitle,{flex:3,color:'white'}]}>VERIFICATION</Text>
            <Text style={[Fonts.style.landingTitle,{flex:1}]}></Text>
          </View>
              

            
        </View>
          <Image 
                  source={Images.smsIllustration}
                  style={{marginTop:'9%'}}
                  />
        <Text style={Styles.slogan}>PLEASE ENTER YOUR PHONE NUMBER BELOW TO VERIFY YOUR ACCOUNT</Text>

        <Item rounded style={{marginLeft:'13%',marginRight:'13%',marginTop:'10%',marginBottom:5, height:45,backgroundColor:'white'}}>
            <Item rounded style={{marginLeft:4,marginRight:4,marginTop:0,marginBottom:0,width:77, height:37,backgroundColor:'rgb(172,14,250)'}}>
              <Input style={{ height:37,fontWeight:'bold',fontSize:14,color:'white'}} placeholder='+44' placeholderTextColor='white'/> 
              <Icon name='arrow-down' style={{marginTop:5,marginRight:7,color:'white'}} />
            </Item>
            <Input style={{ height:45,fontWeight:'bold',fontSize:14,color:'rgba(102,102,102,0.5)'}} placeholder='(12) 345-67-89'/> 
        </Item>
        

        <View style={Styles.btnSelect}>
            <TouchableOpacity style={Styles.VerifyBtn} onPress={NavigationActions.editProfile}>
                <Image source={Images.buttonBackground} style={Styles.VerifyBtn}>
                    <Text style={Styles.SignupText} > VERIFY </Text>
                </Image>
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

export default connect(mapStateToProps, mapDispatchToProps)(MobileVerification)
