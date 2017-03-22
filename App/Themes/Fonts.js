import EStyleSheet from 'react-native-extended-stylesheet';


const type = {
  regular: 'Montserrat-Regular',
  bold: 'Montserrat-Bold',
  
}

const size = {
  title:18.6,
  heading:16,
  subHeadingRegular:16,
  normalText: 14,
  descriptionText: 12,
  // h1: 38,
  // h2: 34,
  // h3: 30,
  // h4: 26,
  // h5: 20,
  // h6: 19,
  // input: 18,
  // regular: 17,
  // medium: 14,
  // small: 12,
  // tiny: 8.5
}

const style = {
  landingTitle: {
    fontFamily:type.bold,
    fontSize:size.title,
    letterSpacing:3.8,
    color:'rgb(102,102,102)'
  },
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
    letterSpacing:2,
    
  },
  input:{
    padding:10,
  },

  h1: {
    fontFamily: type.base,
    fontSize: size.h1
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
    fontFamily: type.emphasis,
    fontSize: size.h6
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium
  }
}

export default {
  type,
  size,
  style
}

