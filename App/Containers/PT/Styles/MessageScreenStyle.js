import { StyleSheet,Dimensions } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../../Themes/'
const { width, height } = Dimensions.get('window')
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  headerView: {
    backgroundColor: Colors.background,
    height:Metrics.navBarHeight,
    alignItems:'center',

  },
  centered: {
    alignItems: 'center'
  },
  tabs: {
    fontSize:15,
    color:'white',
    fontWeight:'bold',
  },
  topHeading: {
    alignSelf:'stretch',
    alignItems:'center'
  },
  navbarview: {
    marginTop:Metrics.navBarTop,
    flexDirection:'row',
  },
  navbarCenterView : {
    flex:2,
    alignItems:'center',
    flexDirection:'row',
  },
  senderName: {
    fontSize:(width >= 375) ? 14 : 13,
    fontFamily:Fonts.type.bold,
    letterSpacing:1.1,
    color:Colors.subHeadingRegular,
    marginBottom:(width >= 375) ? 10 : 5,
  },
  lastMessage:{
    fontSize:12,
    fontFamily:Fonts.type.regular,
    letterSpacing:0.1,
    color:Colors.mutedColor,
    marginBottom:(width >= 375) ? 5 : 1,
  },
  messageTime:{
    fontSize:10,
    color:Colors.mutedColor,
    fontFamily:Fonts.type.regular,

  },
  unreadCircle:{
    width:30,
    height:30,
    borderRadius:15,
    backgroundColor:Colors.purpleColor,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:27
  },
  unreadCounterText : {
    backgroundColor:'transparent',
    color:'white',
    fontSize:12,
    fontFamily:Fonts.type.regular,
    letterSpacing:0.1,

  },
  emptyView: {
    justifyContent : 'center',
    alignItems : 'center',
    marginTop : '35%',
  },
  emptyText: {
    textAlign : 'center',
    marginLeft : '10%',
    marginRight : '10%',
    marginTop : 10,
  },
  btnEmptyText : {
    fontFamily : Fonts.type.bold,
    color:Colors.purpleColor,
    fontSize:14,
    letterSpacing:0.1,
    lineHeight:23,
  },
  listImage: {
    height:(width >= 375) ? 72 : 60,
    width:(width >= 375) ? 72 : 60,
    borderRadius:(width >= 375) ? 36 : 30,
  },



})
