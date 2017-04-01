import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  headerView: {
    backgroundColor:'#0f0b31',
    height:85,
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
    marginTop:30,
    flexDirection:'row',
  },
  navbarCenterView : {
    flex:2,
    alignItems:'center',
    flexDirection:'row',
  },
  senderName: {
    fontSize:14,
    fontFamily:Fonts.type.bold,
    letterSpacing:1.1,
    color:Colors.subHeadingRegular,
    marginBottom:5
  },
  lastMessage:{
    fontSize:12,
    fontFamily:Fonts.type.regular,
    letterSpacing:0.1,
    color:Colors.mutedColor,
    marginBottom:5,
  },
  messageTime:{
    fontSize:10,
    color:Colors.mutedColor, 
    fontFamily:Fonts.type.regular,
    letterSpacing:0.1,
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
    height:72,
    width:72,
    borderColor:Colors.purpleColor,
    borderWidth:2,
    borderRadius:36,
  },
  


})
