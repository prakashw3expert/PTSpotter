import { StyleSheet,Dimensions } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../../Themes/'
const { width, height } = Dimensions.get('window')
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
    justifyContent:'center'
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
  clientname : {
    fontSize: 16,
    fontFamily: Fonts.type.bold,
    letterSpacing:1.7,
    color:'white',
    marginTop:(width >= 375) ? 22 : 15
  },
  clientaddress : {
    fontSize: 12,
    fontFamily: Fonts.type.regular,
    letterSpacing:0.1,
    color:Colors.whiteMuted,
    marginTop:(width >= 375) ? 6 : 4
  },
  clientImage : {
    height:(width >= 375) ? 128 : 100, 
    width:(width >= 375) ? 128 : 100, 
    borderRadius:(width >= 375) ? 64 : 50,
  },
  msgText : {
    fontSize: 10,
    fontFamily: Fonts.type.bold,
    letterSpacing:0.5,
    color:Colors.whiteMuted,
    marginTop : 30
  },


})
