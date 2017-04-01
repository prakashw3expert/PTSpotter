import {Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window')

const type = {
  regular: 'Montserrat-Regular',
  bold: 'Montserrat-Bold',
  LucidaGrandeBold: 'LucidaGrande-Bold',
  LucidaGrandeRegular: 'Lucida Grande',
}

const size = {
  subHeadingRegular:16,
  normalText: 14,
  descriptionText: 12,
  h1: 38,
  h2: 16,
  h3: (width >= 375) ? 14 : 14,
  h4: 26,
  h5: 20,
  h6: 18,

  large:22,
  heading: (width >= 375) ? 18.6 : 16,
  button: 15.1,
  input: 14,
  regular: 14,
  medium: 12,
  small: 10.4,
  tiny: 9.3,
  buttonHeight: (width >= 375) ? 57 : 45,
  containerPaddingLeft: (width <= 320) ? 20: 43,
  containerPaddingRight: (width <= 320) ? 20: 43,

}

const colors = {
  input : 'rgba(102,102,102,0.5)',

}

const style = {

  cardTitle: {
    color: 'white',
    fontSize: 17.4,
    textAlign:'center',
    fontWeight: '600',
    backgroundColor:'transparent',
    letterSpacing:2.8,
    lineHeight:22,
    fontFamily:type.regular,
    paddingLeft:20,
    paddingRight:20,
  },

  cardText: {
    fontFamily:type.regular,
    backgroundColor:'transparent',
    color:'white',
    fontSize:9.3,
    letterSpacing:0.3,
    marginTop:10,
  },
  subHeading:{
    fontFamily:type.regular,
    backgroundColor:'transparent',
    color:'rgb(102,102,102)',
    fontSize:16,
    letterSpacing:2
  },
  h1: {
    fontFamily:type.bold,
    fontSize:size.heading,
    letterSpacing:3.8,
  },
  h2: {
    fontFamily: type.regular,
    fontSize: size.h2,
    color: "rgb(102,102,102)",
    lineHeight:23,
    letterSpacing:2
  },
  h3: {
    fontFamily: type.regular,
    fontSize: size.h3,
    color: "rgb(102,102,102)",
    lineHeight:23,
    letterSpacing:2
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5
  },
  h6: {
    fontFamily:type.regular,
    fontSize:size.small,
    letterSpacing:2,
    lineHeight:17,
    color:'rgb(102,102,102)',
    textAlign:'center',
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular,
    color: 'white',
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium
  },
  inputWrapper : {

    backgroundColor:'white',
    marginBottom : 15,
  },

  input : {
    fontFamily:type.regular,
    fontSize:size.regular,
    lineHeight:23,
    letterSpacing:3.8,
    height:45,
    color:colors.input,
  },
  inputWrapperBordered : {
   /* flex: 1, */
    flexDirection: 'row',
    borderWidth:2,
    borderColor:"rgb(234,234,234)",
    borderRadius:25,
    paddingLeft:10,
    marginTop:16,
  },
  borderedIcon : {
    marginTop: (width >= 375) ? 10 : 8,
    marginLeft:5,
    color:'rgb(172,14,250)',
    fontSize:22,
  },
  borderedIconRight : {
    width:18,
    height:18,
    color:'rgb(255,255,255)',
    fontSize:18,
    margin:5,
    marginLeft:8,
    fontWeight:'bold'
  },
  inputBordered : {
    fontFamily:type.regular,
    fontSize:size.regular,
    lineHeight:23,
    letterSpacing:3.8,
    height:(width >= 375) ? 45 : 40,
    color:colors.input,
    width:"90%",
    color: 'rgb(102,102,102)',
    paddingLeft: (width >= 375) ? 14 : 10
  },

  inputMultipleBordered : {
    fontFamily:type.regular,
    fontSize:size.regular,
    lineHeight:23,
    letterSpacing:3.8,
    height:150,
    color:colors.input,
    width:"100%",
    padding:(width >= 375) ? 15 : 10,
    color: 'rgb(102,102,102)'
  },
  facebook: {
    backgroundColor:'rgb(59,90,154)',
    height: size.buttonHeight,

  },
  default: {
    backgroundColor:'rgb(172,14,250)',
    height: size.buttonHeight,
  },
   red: {
    backgroundColor:'rgb(255,113,113)',
    height: size.buttonHeight,
    marginTop:10
  },

  bordered: {
    backgroundColor:'rgb(255,255,255)',
    height: 45,
    borderColor: 'rgb(102,102,102)',
    borderWidth: 2
  },
  buttonText : {
    fontSize: (width >= 375) ? size.button : size.regular,
    fontFamily: type.regular,
    letterSpacing:1.9,
    color:'white',
  },
  textBold : {
    fontFamily: type.bold,
  },

  textGrey:{
    color: 'rgb(102,102,102)'
  },
  buttonTextNormalGrey : {
    fontFamily:type.regular,
    fontSize: size.input,
    lineHeight:23,
    letterSpacing:1.8,
    color:'rgb(102,102,102)'
  },
  textGreyLight:{
    color: 'rgba(102,102,102,0.5)'
  },
  textWhite:{
    color: 'rgb(255,255,255)'
  },
  textWhiteLight:{
    color: 'rgba(255,255,255,0.5)'
  },
  textCenter:{
    textAlign: 'center'
  },

  commentSectionColor: {

    backgroundColor:'rgb(249,249,249)',
  },

  mt5 : {
    marginTop: 5
  },
  mt10 : {
    marginTop: 5
  },
  mt15 : {
    marginTop: 15
  },
  mt20 : {
    marginTop : 20
  },
  mt40 : {
    marginTop : 40
  },
  mt50 : {
    marginTop: (width >= 375) ? 50 : 40
  },
  mb5 : {
    marginBottom: 5
  },
  mb10 : {
    marginBottom: 10
  },
  mb15 : {
    marginBottom: 15
  },
  mb20 : {
    marginBottom: 20,
  },
  mb50 : {
    marginBottom: 50
  },
  mb60 : {
    marginBottom: (width >= 375) ? 60 : 40
  },
  pt20:{
    paddingTop:20
  },
  ml20 : {
    marginLeft: 20,
  },
  mr20 : {
    marginRight: 20,
  },
  drawerUserText : {
    fontSize:12,
    letterSpacing:0.6,
    color:"rgba(255,255,255,0.5)",
    marginTop:4,
  },
  commnetBox : {
    margin:15,
    marginBottom:10,
    borderRadius:10,
    shadowColor : 'rgb(0, 0, 0)',
    borderWidth:5,
    borderColor : '#fff',
    shadowOpacity : 0.2, shadowOpacity: 0.2,
    shadowRadius: 3.5,
    shadowOffset: { width: 0, height: 0 },
    elevation: 0
  },

  sessionCard : {
    marginBottom:10,
    marginLeft:20,
    borderRadius:10,
    shadowColor : 'rgb(0, 0, 0)',
    borderWidth:5,
    borderColor : '#fff',
    shadowOpacity : 0.2, shadowOpacity: 0.1,
    shadowRadius: 2.5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 0
  },

  commnetBox2 : {
    margin:15,
    marginTop : 10,
    marginBottom:10,
    borderRadius:10,
    shadowColor : 'rgb(0, 0, 0)',
    borderWidth:5,
    borderColor : '#fff',
    shadowOpacity : 0.2, shadowOpacity: 0.2,
    shadowRadius: 3.5,
    shadowOffset: { width: 0, height: 0 },
    elevation: 0,
    position : 'absolute',
    top:-15,
    width:"94.5%",
    left:-10,

  },
  settingList:{
    marginLeft:15,
    marginRight:15
  },

  purpleButtonAvailability : {
    borderColor:'rgb(172,14,250)',
    borderWidth:2,
    backgroundColor:'rgba(172,14,250,0.5)',
    marginBottom:15,
  },
  grayButtonAvailability : {
    borderColor:'rgb(221,221,221)',
    borderWidth:2,
    backgroundColor:'rgba(221,221,221,0.5)',
    marginBottom:15,
  },

  tabBorderSytel : {
    backgroundColor:'#fff',
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 5,
    borderBottomWidth: 6,
    borderLeftWidth: 5,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'white',
    borderLeftColor: 'transparent',  marginLeft:20,marginRight:30, width:'22%'
  },
  tabBorderSytelPurple : {
    backgroundColor:'rgb(172,14,250)',
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 5,
    borderBottomWidth: 6,
    borderLeftWidth: 5,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'rgb(172,14,250)',
    borderLeftColor: 'transparent',  marginLeft:20,marginRight:30, width:'22%'
  },

  filterbutton : {
    height:(width >= 375) ? 60 : 50,
    width:(width >= 375) ? 60 : 50,
    borderRadius:(width >= 375) ? 30 : 25,
    backgroundColor:'#a716f6',
    shadowRadius:10,
    shadowColor:'#a716f6',
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowRadius: 10,
    shadowOpacity: 1,
    position: 'absolute',
    bottom:20,
    right:20,
  },



}

export default {
  type,
  size,
  style,
  colors
}
