import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes'
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: Colors.background
  },
  form: {
    backgroundColor: Colors.snow,
    margin: Metrics.baseMargin,
    borderRadius: 4
  },
  row: {
    paddingVertical: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin
  },
  rowLabel: {
    color: Colors.charcoal
  },
  textInput: {
    height: 40,
    color: Colors.coal
  },
  textInputReadonly: {
    height: 40,
    color: Colors.steel
  },
  loginRow: {
    paddingBottom: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    flexDirection: 'row'
  },
  loginButtonWrapper: {
    flex: 1
  },
  loginButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.charcoal,
    backgroundColor: Colors.panther,
    padding: 6
  },
  loginText: {
    textAlign: 'center',
    color: Colors.silver
  },
  topLogo: {
    alignSelf: 'center',
    resizeMode: 'contain'
  },
  topHeading: {
  
    alignSelf:'stretch',
    alignItems:'center'
  },
  navigationbar: {
    flexDirection:'row',
    justifyContent:'space-between'
  },
  slogan: {
    marginTop:'3.54%',
    color: 'rgb(102, 102, 102)',
    fontSize: 10.4,
    textAlign:'center',
    fontFamily:'Montserrat-Regular',
    lineHeight:17,
    letterSpacing:2,
    color:'white',
    paddingLeft:'10%',
    paddingRight:'10%',
  },
    SignupBtn: {
      marginTop:'2%',
    backgroundColor:'transparent',
    justifyContent:'center',
    alignItems:'center',
  },
  SignupText: {
    padding:5,
    color:'white',
    fontSize:15.1,
    fontWeight:'bold',
    letterSpacing:1.9,
    fontFamily:Fonts.type.regular,
  },
  orView: {
      marginTop:'7%',
      height:25,
      //backgroundColor:'red',
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'center',
  },
  
  orText: {
    textAlign:'center',
    fontSize:18.6,
    letterSpacing:3.8,fontFamily:Fonts.type.bold,
    color:'white',
  },
  facebookBtn: {
      marginTop:'7%',
    backgroundColor:'rgb(59,90,154)',
    justifyContent:'center',
    alignItems:'center',
    marginLeft:'14%',
    marginRight:'14%',
    height:57,
    borderRadius:30,
  },
  bottomView: {
    alignItems:'center',
    marginLeft:'15%',
    marginRight:'15%',
    justifyContent:'center',
    height:30,
    marginTop:'8%',

  },

  bottomText: {
    color:'rgba(255,255,255,0.5)',
    fontSize:12.1,
    fontFamily:Fonts.type.regular,
    letterSpacing:0.2,
    textAlign:'center',
  },
  links: {

  },
  
})
