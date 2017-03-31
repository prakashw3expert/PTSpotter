import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  headerView: {
    backgroundColor:Colors.background,
    height:85,
    alignItems:'center',

  },
  navbarview: {
    marginTop:30,
    flexDirection:'row',
  },
  navbarCenterView : {
    flex:2,
    alignItems:'center',
    flexDirection:'row',
  },
  submitBtnView:{
    justifyContent:'center',
    padding:2
  },
  submitBtnText : {
    color:Colors.subHeadingRegular,
    fontSize:15.1,
    fontFamily:Fonts.type.bold,
    letterSpacing:1.9,
  },
  ptname : {
    fontSize: 16,
    fontFamily: Fonts.type.bold,
    letterSpacing:1.7,
    color:'white',
    marginTop:22
  },
  ptaddress : {
    fontSize: 12,
    fontFamily: Fonts.type.regular,
    letterSpacing:0.1,
    color:Colors.whiteMuted,
    marginTop:6
  },


})
