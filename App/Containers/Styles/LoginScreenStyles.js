import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes'
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    paddingTop: 40,
    paddingLeft: Fonts.size.containerPaddingLeft,
    paddingRight: Fonts.size.containerPaddingRight,
    '@media (width: 320)': {
      paddingLeft: 25,
      paddingRight: 25,
    },
    '@media (width: 360)': {
      paddingLeft: 25,
      paddingRight: 25,
    },
    backgroundColor: Colors.background,

  },
  topHeading: {
    alignSelf:'stretch',
    alignItems:'center'
  },
  navigationbar: {
    flexDirection:'row',
    justifyContent:'space-between'
  },

  separater: {
      marginTop:'7%',
      marginBottom : 50,
      '@media (width: 360)': {
        marginTop:30,
        marginBottom : 30
      },
      height:25,
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'center',
  },
  bottomView: {
    alignItems:'center',
    justifyContent:'center',
  },

  foooter: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop:'8%',
    '@media (min-width: 320) AND (max-width: 360)': {
      marginTop:'6%',
    },

  },
  footerSingup: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop:'11%',
    marginLeft:15,
    marginRight:15,
    '@media (min-width: 320) AND (max-width: 360)': {
      marginTop:'5%',
    },
  },
  footeText: {
    color:'rgba(255,255,255,0.5)',
    fontSize:15.1,
    fontFamily:Fonts.type.regular,
    letterSpacing:0.2,
    textAlign:'center',
  },
  footerTextSingup: {
    fontSize:12.1,
  },
  loginText: {
    color:'rgba(255,255,255,0.5)',
    fontSize:Fonts.size.button,
    fontFamily:Fonts.type.regular,
    letterSpacing : 0.2

  },
  footeLink: {
    color:'rgb(255,255,255)',
    fontFamily:Fonts.type.bold,
    fontSize:Fonts.size.button
  },
  footeSingupLink: {
    color:'rgb(255,255,255)',
    fontFamily:Fonts.type.regular,
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#fff"
  },

})
