import { StyleSheet,Dimensions } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import EStyleSheet from 'react-native-extended-stylesheet';
const { width, height } = Dimensions.get('window')
export default EStyleSheet.create({
  ...ApplicationStyles.screen,
  headerView: {
    backgroundColor:Colors.background,
    alignItems:'center',

  },
  containers : {
    marginLeft: 10,
    marginRight : 10,
    marginBottom : 20
  },
  navbarview: {
    marginTop:21,
    flex:1,
    flexDirection:'row',
    alignItems:'center',
  },
  navbarview: {
   marginTop:21,
   //flex:1,
   flexDirection:'row',
 },
 navbarCenterView : {
   flex:1,
   alignItems:'center',
 },
 listname: {
   fontSize:(width >= 375) ? 14 : 13,
   fontFamily:Fonts.type.bold,
   letterSpacing:1.1,
   color:Colors.subHeadingRegular,
   marginBottom:(width >= 375) ? 10 : 5,
 },


})
