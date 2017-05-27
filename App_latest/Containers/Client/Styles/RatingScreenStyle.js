import { StyleSheet,Dimensions } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../../Themes'
import EStyleSheet from 'react-native-extended-stylesheet';
const { width, height } = Dimensions.get('window')
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
    alignItems:'flex-start',
    flexDirection:'row',
    width:(width >= 325) ? 250 : 200,

  },
  profileimage: {
  flex:3,
  alignItems:'center',
  alignSelf:'stretch',

  },
  userImage: {
    height:(width >= 375) ? 60 : 50,
    width:(width >= 375) ? 60 : 50,
    borderRadius: (width >= 375) ? 30 : 25,
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
    marginTop:2,
    marginBottom:6,
  },
  raterName : {
    color:Colors.subHeadingRegular,
    backgroundColor:'transparent',
    fontSize:(width >= 375) ? 14 : 12,
    fontFamily:Fonts.type.bold,
    letterSpacing:(width >= 375) ? 1.1 : 0.8,
  },
  raterDate : {
    color:Colors.mutedColor,
    backgroundColor:'transparent',
    fontSize:(width >= 375) ? 12 : 11,
    fontFamily:Fonts.type.regular,
    letterSpacing:0.1,
  },
  raterFeedback : {
    color:Colors.subHeadingRegular,
    backgroundColor:'transparent',
    fontSize:(width >= 375) ? 14 : 12,
    fontFamily:Fonts.type.regular,
    letterSpacing:1.1,
    lineHeight:20,
  },
  cards : {
    borderLeftWidth : 0,
    borderRightWidth : 0,
    borderTopWidth : 0,
  },
   bottomview: {
    borderTopWidth:1.5,
    borderTopColor:'rgb(234,234,234)',
    backgroundColor:'white',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems:'center',
    height: 90,
    width:'100%',
    paddingLeft : 40,
    paddingRight : 40,
    '@media (min-width: 320) and (max-width: 350)': { // media query on sheet level
      height: 70,
    },
  },


})
