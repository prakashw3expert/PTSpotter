import { StyleSheet, Dimensions } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../../Themes/'
import EStyleSheet from 'react-native-extended-stylesheet';
const { width, height } = Dimensions.get('window')
export default EStyleSheet.create({
  ...ApplicationStyles.screen,
  headerView: {
    backgroundColor:Colors.background,
    alignItems:'center',

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
  profileimage: {
  flex:5,
  alignItems:'center',
  alignSelf:'stretch',
  
  },
  userImage: {
    alignSelf:'center',
    height:85,
    width:85,
    margin:10,
    alignSelf:'center',
    borderRadius: 42.5,
  },
  username :  {
    fontSize : Fonts.size.h2,
    fontFamily : Fonts.type.bold,
    color : 'white',
    letterSpacing : 1.7,
  },
  userAddress : {
    fontSize : Fonts.size.medium,
    fontFamily : Fonts.type.regular,
    color : Colors.whiteMuted,
    letterSpacing : 0.1,
  },
  emptyView: {
    justifyContent : 'center',
    alignItems : 'center',
    marginTop : '10%',
  },
  emptyText: {
    textAlign : 'center',
    marginLeft : '5%',
    marginRight : '5%',
    marginTop : 10,
  },
  btnEmptyText : {
    fontFamily : Fonts.type.bold,
  },
  bottomview: {
    backgroundColor:'white',
    position: 'absolute',
    flexDirection: 'row',
    bottom: 0,
    justifyContent: 'space-between',
    height: (width >= 325) ? 77 : 60,
    width:'100%'
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
  notesView: {
    justifyContent : 'center',
    alignItems : 'center',
    marginTop : '1%',
  },
  activetab : {
    borderBottomColor:'green'
  },
  aboutInfo : {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.regular,
    color: "rgb(102,102,102)",
    lineHeight:23,
    letterSpacing:0.1
  },
  tabText : {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.regular,
    letterSpacing:0.3
  },
  buttonsView: {
    flexDirection : 'row',
    flex : 1,
    justifyContent : 'flex-start',
    marginTop : 15,
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
    borderBottomColor: Colors.purpleColor,
    borderLeftColor: 'transparent',  
    marginLeft:'15%',
    marginRight:30, 
    width:'22%'
  },
  

})
