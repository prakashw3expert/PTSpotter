import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
  ...ApplicationStyles.screen,
  headerView: {
    backgroundColor:'transparent',
    height:'37%',
  },
  centered: {
    alignItems: 'center'
  },
  navbarview: {
    marginTop:21,
    height:64,
    backgroundColor:'transparent',
  },
 
  postImage: {
    flex:1,
    width:Metrics.screenWidth,
    alignSelf:'center',
  },
  headingTitle: {
    fontWeight:'bold',
    fontSize:14,
    color: '#7a7a7a',
    marginTop:10,
    marginLeft:10,
    padding:20
  },
  switchView: {
    marginTop:15,
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    marginBottom:10,
  },
  postTitleView:{
    position:'absolute',
    bottom:10,
    margin:20,
  },
  postHeading: {
    color:'white',
    fontSize:Fonts.size.large,
    fontFamily:Fonts.type.bold,
    letterSpacing : 1.9
  },
  postDate: {
    color:Colors.whiteMuted,
    marginTop:5,
    fontSize:Fonts.size.regular,

  },
  descriptionView : {
    width:Metrics.screenWidth,
    padding: 20,
  },

  desc: {
    marginTop:10, 
    fontSize:Fonts.size.subHeadingRegular,
    color:Colors.mutedColor,
    fontFamily:Fonts.type.regular,
    textAlign:'justify',
    letterSpacing:1.1,
    lineHeight:21,
  },
  commentSectionColor: {
    
    backgroundColor:'gray',
  },
  commentName: {
    fontFamily : Fonts.type.regular,
    fontSize : Fonts.size.subHeadingRegular,
    lineHeight : 23,
    letterSpacing : 0.1,
    color : Colors.subHeadingRegular,
  },
  commentDate: {
    fontFamily : Fonts.type.regular,
    fontSize : Fonts.size.medium,
    lineHeight : 23,
    letterSpacing : 0.1,
    color : Colors.mutedColor,
  },
  commentContent : {
    fontFamily : Fonts.type.regular,
    fontSize : Fonts.size.button,
    lineHeight : 23,
    letterSpacing : 0.1,
    color : Colors.subHeadingRegular,
  },
  bottomview: {
    height:60,
    backgroundColor:'white',
    margin:10,
  },
  


})
