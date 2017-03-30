import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../../Themes'
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  ...ApplicationStyles.screen,
  headerView: {
    backgroundColor:Colors.background,
  },
  containers : {
    marginLeft: 16,
    marginRight : 16,
    marginBottom : 20
  },
  navbarview: {
    marginTop:21,
    flex:1,
    flexDirection:'row',
    alignItems:'center',
  },
  navbarCenterView : {
    flex:1,
    alignItems:'flex-start',
    flexDirection:'row'
  },
  profileimage: {
  flex:3,
  alignItems:'center',
  alignSelf:'stretch',

  },
  userImage: {
    height:60,
    width:60,
    borderRadius: 30,
  },
  name: {
    color:'white',
    backgroundColor:'transparent',
    fontSize:12,
    fontFamily:Fonts.type.bold,
    letterSpacing:1.3,
  },
  address: {
    color:Colors.whiteMuted,
    backgroundColor:'transparent',
    fontSize:10,
    fontFamily:Fonts.type.regular,
    letterSpacing:0.1,
  },
  raterName : {
    color:Colors.subHeadingRegular,
    backgroundColor:'transparent',
    fontSize:14,
    fontFamily:Fonts.type.bold,
    letterSpacing:1.1,
  },
  raterDate : {
    color:Colors.mutedColor,
    backgroundColor:'transparent',
    fontSize:12,
    fontFamily:Fonts.type.regular,
    letterSpacing:0.1,
  },
  raterFeedback : {
    color:Colors.mutedColor,
    backgroundColor:'transparent',
    fontSize:14,
    fontFamily:Fonts.type.regular,
    letterSpacing:1.1,
    lineHeight:20,
  },


})
