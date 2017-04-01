import { StyleSheet,Platform } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes'
import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    backgroundColor:'#fff',
    marginLeft: (Platform.OS === 'ios') ? 28 : 0,
    marginRight: (Platform.OS === 'ios') ? 28 : 0
  },
  topHeading: {
    marginTop: '6%',
    flex:2,
    alignItems:'center'
  },
   bottomView: {
    flex:3,
    marginTop:"2%",
    '@media (min-width: 320) and (max-width: 350)': { // media query on sheet level
      marginTop:"15%",
    },
  },
  swiperView: {
    flex:10,
    alignSelf:'center',
  },

  slider: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection:'column',
  },

  text: {
    color: 'rgb(102, 102, 102)',
    fontSize: Fonts.size.regular,
    textAlign:'center',
    fontFamily:Fonts.type.regular,
    lineHeight:23,
    letterSpacing:1.8,

  },
  facebook: {
    backgroundColor:'rgb(59,90,154)',
    height: 57,
  },
  StartBtn: {
    backgroundColor:'transparent',
    justifyContent:'center',
    alignItems:'center',
    marginRight:10,
    marginLeft:10,
  },
  StartText: {
    padding:5,
    color:'white',
    fontSize:15.1,
    fontWeight:'normal',
    letterSpacing:1.9,
    fontFamily:Fonts.type.regular,
  },
  loginView: {
    flexDirection:'row',
    marginTop:'2%'
  },
  loginText: {
    color:'rgba(102,102,102,0.5)',
    fontSize:Fonts.size.button,
    fontFamily:Fonts.type.regular,
    letterSpacing:0.2
  },
  loginBtn: {
    color:'rgb(102,102,102)',
    fontFamily:Fonts.type.bold,
    fontSize:Fonts.size.button,
  },
  sliderheading: {
    marginTop:5,
  },
  sliderImage: {
    marginTop:'7%',
    alignItems:'center',
    justifyContent:'center',
  },
  sliderbottomtext: {
    marginTop:'6%',
    paddingLeft:20,
    paddingRight:20

  },
  slogan: {
    marginTop:'3.5%',
    color: 'rgb(102, 102, 102)',
    fontSize: 10.4,
    textAlign:'center',
    fontFamily:'Montserrat-Regular',
    lineHeight:17,
    letterSpacing:2,
    paddingLeft:'8%',
    paddingRight:'8%'
  },

  '@media (min-width: 320) and (max-width: 350)': { // media query on sheet level
    text: {
      fontSize: Fonts.size.medium,
      lineHeight:21,
    },
  },





})
