import {Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window')

const type = {
  regular: 'Montserrat-Regular',
  bold: 'Montserrat-Bold',

}

const size = {
  subHeadingRegular:16,
  normalText: 14,
  descriptionText: 12,
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 18,
  h6: 18,
  large:22,
  heading: (width >= 375) ? 18.6 : 18.6,
  button: 15.1,
  input: 14,
  regular: 14,
  medium: 12,
  small: 10.4,
  tiny: 9.3,
  buttonHeight: (width >= 375) ? 57 : 45

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
    letterSpacing:4.8,
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2
  },
  h3: {
    fontFamily: type.emphasis,
    fontSize: size.h3
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

  facebook: {
    backgroundColor:'rgb(59,90,154)',
    height: size.buttonHeight,

  },
  default: {
    backgroundColor:'rgb(172,14,250)',
    height: size.buttonHeight,
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
  textWhite:{
    color: 'rgb(255,255,255)'
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
  mb5 : {
    marginBottom: 5
  },
  mb10 : {
    marginBottom: 5
  },
  mb15 : {
    marginBottom: 5
  },
  mb20 : {
    marginBottom: 20,
  },
  mb60 : {
    marginBottom: 60
  },
  
}

export default {
  type,
  size,
  style,
  colors
}
