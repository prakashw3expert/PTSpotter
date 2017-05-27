import { StyleSheet,Dimensions } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../../Themes/'
import EStyleSheet from 'react-native-extended-stylesheet';
const { width, height } = Dimensions.get('window')
export default EStyleSheet.create({
  ...ApplicationStyles.screen,

  chooseText: {
    marginRight:20,
    fontSize:14,
    lineHeight:23,
    letterSpacing:1,
    marginLeft:5,
    color:Colors.mutedColor,
  },
  listText : {
    fontSize : 14,
    fontFamily: Fonts.type.regular,
    lineHeight : 23,
    letterSpacing : 1.3,
    color : 'rgb(102,102,102)',
    marginLeft : 15,
  },
  bottomView : {
    justifyContent:'flex-end',
    marginTop : 30,
    marginLeft : 20,
    marginRight : 20,
    marginBottom : 20
  },
  modelText: {
    fontSize:10.4,
    fontFamily : Fonts.type.regular,
    lineHeight:17,
    letterSpacing:1.4,
    color:'rgb(102,102,102)',
    textAlign:'center',
  },
  textHours : {
    textAlign:'right',
    marginRight:30,
    fontSize:14,
    fontFamily:Fonts.type.bold,
    lineHeight:17,
    letterSpacing:2.6,
    color:Colors.subHeadingRegular,
  },
  textMinutes : {
    marginLeft:5,
    fontSize:14,
    fontFamily:Fonts.type.bold,
    lineHeight:17,
    letterSpacing:2.6,
    color:Colors.subHeadingRegular,
  },
  pickerStyle : {
    fontSize: 32,
    letterSpacing:3.9,
    color: 'rgb(102,102,102)',
    textAlign: 'center',
    fontWeight: 'bold',
    width:(width >= 375) ? 100 : 70,
    marginRight:(width >= 375) ? 10 : 30,
  },
  headerView: {
    backgroundColor:Colors.background,
    height:85,
    alignItems:'center',
    '@media (min-width: 320) and (max-width: 350)': { // media query on sheet level
      height:65,
    },
    '@media android': {
      height: 60,
    },
  },
  navbarview: {
    marginTop:30,
    '@media android': {
      marginTop:10,
    },
    flexDirection:'row',

  },
  navbarCenterView : {
    flex:2,
    alignItems:'center',
    justifyContent: 'center',
    flexDirection:'row',
    '@media (min-width: 320) and (max-width: 350)': { // media query on sheet level
      flex:3,
    },
  },
  aboutText : {
    fontSize : 14,
    fontFamily : Fonts.type.regular,
    backgroundColor : 'transparent',
    color : 'rgba(255,255,255,0.8)',
    lineHeight : 23,
    letterSpacing : 0.1

  },
  closeButton : {
    marginLeft : 10
  },









})
