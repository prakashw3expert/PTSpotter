import { StyleSheet,Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
  ...ApplicationStyles.screen,
  scheduleView: {
    backgroundColor:'rgba(248,248,248,1)',
  },
  centered: {
    alignItems: 'center'
  },
  titleText: {
    fontFamily:Fonts.type.regular,
    color:Colors.subHeadingRegular,
    fontSize:Fonts.size.subHeadingRegular,
    textAlign:'center',
    letterSpacing:2,
  },
  listText: {
    fontFamily:Fonts.type.regular,
    fontSize : (width >= 375) ? Fonts.size.subHeadingRegular : Fonts.size.regular ,
    color:Colors.subHeadingRegular,
    letterSpacing: (width >= 375) ? 1.7 : 0.6, 

  },
  listDetail: {
    fontFamily:Fonts.type.regular,
    fontSize : (width >= 375) ? Fonts.size.subHeadingRegular : Fonts.size.regular ,
    color:Colors.mutedColor,
    letterSpacing:1.7

  },
  HealthFeedsView: {
    marginTop: 10,
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
  },
  cardContent: {
    fontSize : Fonts.size.medium,
    letterSpacing : 1.5,
    lineHeight:17,
    color:Colors.mutedColor,
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
})
