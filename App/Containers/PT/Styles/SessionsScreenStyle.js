import { StyleSheet,Dimensions, Platform } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../../Themes/'
import EStyleSheet from 'react-native-extended-stylesheet';
const { width, height } = Dimensions.get('window')

export default EStyleSheet.create({
  ...ApplicationStyles.screen,
  tabs : {
    backgroundColor:'#000'
  },

  tabsSection : {
    padding:20
  },
  tabContent : {
    paddingTop:28,
    '@media (width: 320)': {
        paddingTop : 15
    },
  },
  tabHeading : {
    marginBottom : 20,
    '@media (width: 320)': {
        marginBottom : 10
    },
  },

  dateBadgeActive : {
    width:40,
    height : 40,
    borderRadius : 40,
    backgroundColor:'rgb(172, 14, 250)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:10


  },
  badgeDateActive : {
    fontSize:14,
    color:Colors.white,
    lineHeight:18,
    letterSpacing:1.8,
    fontFamily:Fonts.type.LucidaGrandeBold
  },
  badgeTextActive : {
    fontSize:8,
    color:Colors.whiteMuted,
    fontFamily:Fonts.type.LucidaGrandeBold,

  },

  dateBadge : {
    width:40,
    height : 40,
    borderRadius : 40,
    // backgroundColor:'rgb(172, 14, 250)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:10,
    borderWidth : 2,
    borderColor : 'rgb(234, 234, 234)'

  },
  yearBadge : {
    width:60, borderRadius:30

  },
  badgeDate : {
    fontSize:14,
    color:Colors.subHeadingRegular,
    lineHeight:18,
    letterSpacing:1.8,
    fontFamily:Fonts.type.LucidaGrandeRegular,
    fontWeight:'normal'
  },
  badgeText : {
    fontSize:8,
    color:Colors.mutedColor,
    fontFamily:Fonts.type.LucidaGrandeRegular,
    fontWeight:'normal'
  },
  cotentsHeight : {
    height : '80%',
    '@media (width: 320)': {
        height : '75%',
    },
  },
  containerListView : {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft : 20,
    marginBottom : 25

  },
  listSeparater : {
      borderBottomWidth:1,
      borderColor:'rgb(234, 234, 234)',
      marginRight:19,
      paddingTop:15,
      paddingBottom:10
  },
  username : {
    fontFamily:Fonts.type.bold,
    fontSize:Fonts.size.input,
    '@media (width: 320)': {
        fontSize:12,
    },
    color: Colors.subHeadingRegular,
    letterSpacing : 1.1
  },
  location : {
    fontFamily: Fonts.type.regular,
    fontSize : Fonts.size.medium,
    '@media (width: 320)': {
        fontSize:11,
    },
    letterSpacing : 0.1,
    color:Colors.mutedColor
  },
  time : {
    fontSize:Fonts.size.medium,
    '@media (width: 320)': {
        fontSize:10,
    },
    letterSpacing : 0.9,
    color: Colors.subHeadingRegular,
    fontFamily : Fonts.type.regular
  },

  usernameSet : {
    fontFamily : Fonts.type.bold,
    fontSize : (width > 325) ? Fonts.size.h2 : Fonts.size.h3,
    letterSpacing: 1.7,
    color : Colors.subHeadingRegular,
  },
  locationSet : {
    fontFamily : Fonts.type.regular,
    fontSize : (width > 325) ? Fonts.size.medium : Fonts.size.small,
    letterSpacing: 0.1,
    color : Colors.mutedColor,
  },

  selectBox : {
    paddingLeft:(width > 325) ? 14 : 8,
    paddingRight:(width > 325) ? 14 : 8,
    paddingTop : 0,
    paddingBottom : 0,
    height:(width > 325) ? 57 : 50,
    marginRight : 5,
    borderColor : 'rgb(234, 234, 234)',
    borderWidth:2,
    borderRadius:30,
    alignItems : 'center',
    justifyContent : 'center',
    flexDirection:'row'
  },

  selectBoxText : {
    fontSize:(width > 325) ? 16.4 : 15.4,
    fontFamily:Fonts.type.regular,
    color:Colors.subHeadingRegular,
    letterSpacing:2.1
  },
  emptyText: {
    textAlign : 'center',
    marginLeft : '5%',
    marginRight : '5%',
    marginTop : 20,
    '@media (min-width: 320) and (max-width: 350)': { // media query on sheet level
      marginLeft : '8%',
      marginRight : '8%',
      marginTop : 5,
    },
  },
  btnEmptyText : {
    fontFamily : Fonts.type.bold,
  },
  modelText: {
    fontSize:10.4,
    fontFamily : Fonts.type.regular,
    lineHeight:17,
    letterSpacing:1.4,
    color:'rgb(102,102,102)',
    textAlign:'center',
    marginLeft : (width > 325) ? 35 : 20,
    marginRight : 35,
    marginTop:10,
  },
 pickerStyle : {
    fontSize: 32,
    letterSpacing:3.9,
    color: 'rgb(102,102,102)',
    textAlign: 'center',
    fontWeight: 'bold',
    width:100,

    '@media (min-width: 320) and (max-width: 350)': { // media query on sheet level

      fontSize: 28,
    },
  },
  dayBold: {
    fontFamily:Fonts.type.bold,
    fontSize:Fonts.size.small,
    letterSpacing:2,
    lineHeight:18,
    color:'rgb(102,102,102)',

  },
  bottomview: {
    borderTopWidth:1.5,
    borderTopColor:'rgb(234,234,234)',
    backgroundColor:'white',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems:'center',
    height: 110,
    width:'100%',
    paddingLeft : 40,
    paddingRight : 40,
    '@media (min-width: 320) and (max-width: 350)': { // media query on sheet level
      height: 90,
    },

  },
  headerView: {
    backgroundColor:Colors.background,
    height:85,
    alignItems:'center',
    '@media (min-width: 320) and (max-width: 350)': { // media query on sheet level
      height:65,
    },
    '@media android': {
      height: 60,
    },
  },
  navbarview: {
    marginTop:30,
    '@media android': {
      marginTop:10,
    },
    flexDirection:'row',

  },
  navbarCenterView : {
    flex:2,
    alignItems:'center',
    flexDirection:'row',
    '@media (min-width: 320) and (max-width: 350)': { // media query on sheet level
      flex:3,
    },
  },
searchView : {
    paddingLeft: 20,
    paddingRight:20,
    marginTop:5,
    marginBottom : 22,
    '@media (min-width: 320) and (max-width: 350)': { // media query on sheet level
      marginTop:0,
      marginBottom : 10,
    },
  },
  listViewTitle: {
    marginBottom:5,
    fontFamily:Fonts.type.subHeadingRegular,
    color:Colors.mutedColor,
    fontSize:12,
    textAlign:'center',
    letterSpacing:0.6,
    lineHeight:23
  },
  searchResult: {
    marginBottom:5,
    fontFamily:Fonts.type.bold,
    color:Colors.subHeadingRegular,
    fontSize:12,
    textAlign:'center',
    letterSpacing:0.6,
    lineHeight:23
  },
  filtertitles:{
    marginTop:(width >=325) ? 20 : 10,
    fontFamily:Fonts.type.bold,
    color:Colors.whiteMuted,
    fontSize:10,
    textAlign:'center',
    letterSpacing:0.5,
  },

  buttonsView: {
    flexDirection : 'row',
    flex : 1,
    justifyContent : 'flex-start',
    marginTop : 15,
    marginLeft:20,
    marginBottom : 20,
    flexWrap : 'wrap'

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
  dailyScrollViewHeight : {
    height:(Platform.OS === 'ios') ? (width >= 325) ? 405 : 350 : 330
  },
  yearlyScrollViewHeight : {
    height:(Platform.OS === 'ios') ? (width >= 325) ? 450 : 350 : 375
  },
  searchPopupScrollViewHeight : {
    height:(Platform.OS === 'ios') ? (width >= 325) ? 460 : 400 : 390
  },

})
