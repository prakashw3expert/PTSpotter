import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../../Themes/'

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
    fontFamily:Fonts.type.bold,
    letterSpacing:1.1,
    color:Colors.subHeadingRegular,
    fontSize:14,
    marginBottom:5,
  },
  listAddress: {
    fontFamily:Fonts.type.regular,
    letterSpacing:0.1,
    color:Colors.mutedColor,
    fontSize:12,
    marginBottom:5,

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
    marginTop:20,
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
    height:72,
    width:72,
    borderColor:Colors.purpleColor,
    borderWidth:2,
    borderRadius:36,
  },



})
