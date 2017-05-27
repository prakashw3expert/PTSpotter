import { StyleSheet,Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../../Themes/'
import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
  ...ApplicationStyles.screen,
  homeContainer : {
    marginLeft : 20,
    marginRight : 20
  },
  sessionView: {
    backgroundColor:'rgba(248,248,248,1)',
    padding : 20,
    paddingTop: 30,
    paddingLeft : 10,
    marginTop : -10,
    paddingBottom : 10
  },
  scheduleView: {
    backgroundColor:'rgba(248,248,248,1)',
    padding : 20,
    paddingTop: 10,
    paddingLeft : 10,
    marginTop : 0,
    paddingBottom : 10
  },
  centered: {
    alignItems: 'center'
  },
  badgeWrapper : {
    width:50,
    height : 50,
    borderRadius : 50,
    backgroundColor:'rgb(172, 14, 250)',
    padding:7,
    paddingTop:15,
    paddingLeft:20
  },
  titleText: {
    fontFamily:Fonts.type.regular,
    color:Colors.subHeadingRegular,
    fontSize:Fonts.size.subHeadingRegular,
    textAlign:'center',
    letterSpacing:2,
  },
  listText: {
    fontFamily:Fonts.type.bold,
    fontSize :14,
    color:Colors.subHeadingRegular,
    letterSpacing: 1.7,
    marginBottom : 6,
    width : "70%"

  },
  listDetail: {
    fontFamily:Fonts.type.regular,
    fontSize : 14 ,
    color:Colors.mutedColor,
    letterSpacing:1.7

  },
  HealthFeedsView: {
    marginTop: 34,
    marginBottom : 40
  },

  HealthFeedstitle: {
    fontFamily:Fonts.type.regular,
    color:Colors.subHeadingRegular,
    fontSize:Fonts.size.subHeadingRegular,
    textAlign:'center',
    letterSpacing:2,
    flex:4,
    alignItems:'center',

  },
  commentSection: {
    backgroundColor:'rgba(248,248,248,1)',
  },
  likeView: {
    margin:10,
    flexDirection:'row',
   // justifyContent:'space-between'
  },
  cardDate: {
    fontSize : Fonts.size.small,
    letterSpacing : 1.2,
    color:Colors.mutedColor,
    fontFamily : Fonts.type.regular,
  },
  cardContent: {
    fontSize : Fonts.size.medium,
    fontFamily : Fonts.type.regular,
    letterSpacing : 1.5,
    lineHeight:17,
    color:Colors.mutedColor,
    paddingBottom : 0,
    marginBottom : 0
  },
  cardImage:{
    height:'34%',
    width:width,
    margin:10,
    alignSelf:'center',
  },
  userLikes: {
    height:40,
    width:40,
  },
  commentText: {
    fontSize : Fonts.size.subHeadingRegular,
    letterSpacing : 1,
    color:Colors.mutedColor,
    marginLeft : 20,
  },

  latyouAdjust : {
    marginLeft  : 20,
    marginRight : 20
  },
  CardHeading : {
    fontSize : Fonts.size.regular,
    letterSpacing : 1.1,
    fontFamily : Fonts.type.bold,
    color : 'rgb(102,102,102)',
    marginBottom : 6,
  },
  CardHeadingWhite : {
    fontSize : Fonts.size.regular,
    letterSpacing : 1.1,
    fontFamily : Fonts.type.bold,
    color : 'rgb(255,255,255)',
    marginBottom : 20,
    marginLeft : 10
  },
  CardText : {
    fontSize:12,
    fontFamily : Fonts.type.regular,
    letterSpacing:0.1,
    color : "rgba(102, 102, 102, 0.5)"
  },
  CardTextWhite : {
    fontSize:14,
    fontFamily : Fonts.type.regular,
    letterSpacing:0.1,
    color : "rgb(255, 255, 255)",
    marginBottom : 5,
  },
  CardTextWhiteSmall : {
    fontSize:12,
    fontFamily : Fonts.type.regular,
    letterSpacing:0.1,
    color : "rgba(255, 255, 255, 0.5)",
    marginBottom : 5,
  }
})
