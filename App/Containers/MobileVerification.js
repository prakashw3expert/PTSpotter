import React, { PropTypes } from 'react'
import { View, ScrollView, Text, TextInput, TouchableOpacity, Image, Keyboard, LayoutAnimation, Dimensions, StatusBar } from 'react-native'
import Hr from 'react-native-hr'
const { width, height } = Dimensions.get('window')
import { Container, Content, Input, Picker, Form, Item, Left, Icon, Body, Right, ListItem, Thumbnail, List, Button, Card, CardItem, Label } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
      topLogo: { width: Metrics.screenWidth },
      selectedItem: undefined,
      selected1: '44',
      results: {
          items: []
      }
    }
    this.isAttempting = false
  }

  onValueChange (value: string) {
        this.setState({
            selected1 : value
        });
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
      <StatusBar barStyle='light-content' />
      <Content>
      <TouchableOpacity onPress={NavigationActions.pop}>
          <Ionicons name="ios-arrow-back" size={28} color="rgb(255,255,255)" style={{marginTop :-2}}/>
      </TouchableOpacity>

      <View style={[Styles.topHeading, {marginTop: '-9%'}]}>
        <View style={Styles.navigationbar} >
        <Text style={[Fonts.style.h1, Fonts.style.textWhite, Fonts.style.mb20]}>VERIFICATION</Text>
        </View>

      </View>

      <View style={[ {marginTop:'9%', alignItems: 'center', marginBottom: '10%' }]}>
        <Image source={Images.smsIllustration} style={Styles.image}/>
      </View>

      <Text style={[Fonts.style.h6, Fonts.style.textWhite, Fonts.style.mb20, Fonts.style.mt20]}>PLEASE ENTER YOUR PHONE NUMBER BELOW TO VERIFY YOUR ACCOUNT</Text>

      <Item rounded style={Fonts.style.inputWrapper}>

          <Picker iosHeader="Select one"
                        selectedValue={this.state.selected1}
                        onValueChange={this.onValueChange.bind(this)}  >
                        <Item label="+44" value="44" />
                        <Item label="+91" value="99" />
                        <Item label="+1" value="1" />
                   </Picker>


          <Input  style={Fonts.style.input} placeholder='(12) 345-67-89' placeholderTextColor={Fonts.colors.input}/>
      </Item>

      <View style={Fonts.style.mt15}>
        <Button light full rounded style={Fonts.style.default}  onPress={NavigationActions.editProfile}>
            <Text style={[Fonts.style.buttonText, Fonts.style.textBold]}>SEND OPT</Text>
        </Button>
      </View>

      </Content>
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
