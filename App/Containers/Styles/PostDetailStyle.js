import { StyleSheet, Dimensions } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import EStyleSheet from 'react-native-extended-stylesheet';
const { width, height } = Dimensions.get('window')
export default EStyleSheet.create({
  ...ApplicationStyles.screen,
  headerView: {
    backgroundColor:Colors.background,
    height:'37%',
  },
  centered: {
    alignItems: 'center'
  },
  navbarview: {
    marginTop : 30,
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
    bottom:20,
    margin:20,
    backgroundColor : "transparent"

  },
  postHeading: {
    color:'white',
    fontSize:(width >= 375) ? Fonts.size.large : Fonts.size.heading,
    fontFamily:Fonts.type.bold,
    letterSpacing : 1.9
  },
  postDate: {
    color:Colors.whiteMuted,
    marginTop:5,
    fontSize:Fonts.size.regular,
    letterSpacing : 1.2

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
    letterSpacing:1.1,
    lineHeight:21,
  },
  commentSectionColor: {

    backgroundColor:'gray',
  },
  commentName: {
    fontFamily : Fonts.type.regular,
    fontSize : (width >= 375) ? Fonts.size.subHeadingRegular : Fonts.size.regular,
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
    fontSize : (width >= 375) ? Fonts.size.regular : Fonts.size.medium,
    lineHeight : 23,
    letterSpacing : 0.1,
    color : Colors.subHeadingRegular,
  },
  bottomview: {
    backgroundColor:'white',
    position: 'absolute',
    flexDirection: 'row',
    bottom: 0,
    justifyContent: 'space-between',
    height: 77,
    width:'100%'
  },
  commentText: {
    fontSize : Fonts.size.subHeadingRegular,
    letterSpacing : 1,
    color:Colors.mutedColor,
    marginLeft : 20,
  },

})
