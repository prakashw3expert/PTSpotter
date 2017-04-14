import { StyleSheet,Dimensions } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../../Themes/'
const { width, height } = Dimensions.get('window')
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  headerView: {
    backgroundColor:Colors.background,
    height:64,
    alignItems:'center',

  },
    tabs : {
    backgroundColor:'#000'
  },
  tabText : {
    fontSize : Fonts.size.regular,
    letterSpacing : 0.3,
    fontFamily : Fonts.type.regular,
    
  },
  tabsSection : {
    padding:20
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
    borderLeftColor: 'transparent',  
    marginLeft:'10%',
    marginRight:30, 
    width:'22%'
  },
  tabContent : {
    paddingTop:28
  },
 
  listname: {
    fontSize:(width >= 375) ? 14 : 13,
    fontFamily:Fonts.type.bold,
    letterSpacing:1.1,
    color:Colors.subHeadingRegular,
    marginBottom:(width >= 375) ? 10 : 5,
  },
  listAddress: {
    fontSize:12,
    fontFamily:Fonts.type.regular,
    letterSpacing:0.1,
    color:Colors.mutedColor,
    marginBottom:(width >= 375) ? 5 : 1,

  },

  listViewTitle: {
    marginTop:15,
    fontFamily:Fonts.type.regular,
    color:Colors.mutedColor,
    fontSize:12,
    textAlign:'center',
    letterSpacing:0.6,
    lineHeight:23
  },
   navbarview: {
    marginTop:21,
    //flex:1,
    flexDirection:'row',
  },
  navbarCenterView : {
    flex:1,
    alignItems:'center',
    flexDirection:'row',
  },
  searchView : {
    paddingLeft: 20,
    paddingRight:20,
    marginTop:5
  },
  emptyText:{
    textAlign : 'center',
    marginLeft : '5%',
    marginRight : '5%',
    marginTop : 26,
    width:200,
  },
  separater: {
      marginTop:0,
      height:25,
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'center',
  },
  emptyImage:{
    height:141,
    width:184,
    marginTop:50
  },
  filtertitles:{
    marginTop:(width >=325) ? 20 : 10,
    fontFamily:Fonts.type.bold,
    color:Colors.whiteMuted,
    fontSize:10,
    textAlign:'center',
    letterSpacing:0.5,
  },
  milesView:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  mileText: {
    color:'white',
    marginLeft:25,
    marginRight:25,
    marginTop:10,
    fontSize:14,
    fontFamily:Fonts.type.regular,
    lineHeight:23,
    letterSpacing:1.8,
    color:Colors.whiteMuted,
  },
  applyBtnView:{
    justifyContent:'center',
    padding:20
  },
  applyBtnText : {
    color:Colors.subHeadingRegular,
    fontSize:15.1,
    fontFamily:Fonts.type.bold,
    letterSpacing:1.9,
  },
  buttonsView: {
    flexDirection : 'row',
    flex : 1,
    justifyContent : 'flex-start',
    marginTop : 15,
    marginLeft:20,
  },
  horizontalRow:{
    backgroundColor:'lightgray',
    height:0.5,
    marginTop:15
  },
  listImage: {
    height:(width >= 375) ? 72 : 60,
    width:(width >= 375) ? 72 : 60,
    borderColor:Colors.purpleColor,
    borderWidth:2,
    borderRadius:(width >= 375) ? 36 : 30,
  },



})
