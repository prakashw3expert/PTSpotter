import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
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
  listTime: {
    fontFamily:Fonts.type.regular,
    fontSize:Fonts.size.subHeadingRegular,
    color:Colors.grayTextColor,
    fontSize:13,

  },
  listDetail: {
    fontWeight:'bold',
    color:'rgba(120,120,120,0.65)',
    fontSize:12,

  },
  HealthFeedsView: {
    marginTop: 10,
  },
  reload: {

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
})
