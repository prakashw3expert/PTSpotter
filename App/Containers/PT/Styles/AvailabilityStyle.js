import { StyleSheet, Platform } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../../Themes/'
import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
  ...ApplicationStyles.screen,
  headerView: {
    backgroundColor:Colors.background,
    height:Metrics.navBarHeight,
    alignItems:'center',

  },
  navbarview: {
    marginTop:(Platform.OS === 'ios') ? 30 : 0,
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
  topView: {
    flex : 1,
    alignItems : 'center',
    marginBottom : 20,
   '@media (min-width: 320) and (max-width: 350)': { // media query on sheet level
      marginBottom:15,
    },
  },
  dayTitle: {
    fontFamily : Fonts.type.LucidaGrandeBold,
    marginTop : 25,
    marginLeft : 8,
    color : Colors.subHeadingRegular,
    fontSize:16,
    lineHeight:23,
    letterSpacing:2,
  },
  buttonsView: {
    flexDirection : 'row',
    flex : 1,
    justifyContent : 'space-between',
    marginTop : 15
  },
  emptyView: {
    justifyContent : 'center',
    alignItems : 'center',
    marginTop : 20,
    '@media (min-width: 320) and (max-width: 350)': { // media query on sheet level
      marginTop:10,
    },

  },
  emptyText: {
    textAlign : 'center',
    marginLeft : '5%',
    marginRight : '5%',
    marginTop : 10,
    '@media (min-width: 320) and (max-width: 350)': { // media query on sheet level
      marginLeft : '8%',
      marginRight : '8%',
      marginTop : 5,
    },
  },
  btnEmptyText : {
    fontFamily : Fonts.type.bold,
  },
  bottomview: {
    borderTopWidth:1.5,
    borderTopColor:'rgb(234,234,234)',
    backgroundColor:'white',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems:'center',
    height:(Platform.OS === 'ios') ? 110 : 90,
    width:'100%',
    paddingLeft : 40,
    paddingRight : 40,
    '@media (min-width: 320) and (max-width: 350)': { // media query on sheet level
      height: 90,
    },
  },
  modelText: {
    fontSize:(Platform.OS === 'ios') ? 10.4 : 13,
    fontFamily : Fonts.type.regular,
    lineHeight:17,
    letterSpacing:1.4,
    color:'rgb(102,102,102)',
    textAlign:'center',
    marginLeft:10,
    marginRight:10,

  },
  textHours : {
    textAlign:'right',
    fontSize:21,
    fontFamily:Fonts.type.regular,
    lineHeight:25,
    letterSpacing:2.7,
    color:Colors.purpleColor,
    '@media (min-width: 320) and (max-width: 350)': { // media query on sheet level
      fontSize:19,
      letterSpacing:2.1,
    },
  },
  textMinutes : {
    textAlign:'right',
    fontSize:21,
    fontFamily:Fonts.type.regular,
    lineHeight:24,
    letterSpacing:2.7,
    color:Colors.subHeadingRegular,
    '@media (min-width: 320) and (max-width: 350)': { // media query on sheet level
      fontSize:19,
      letterSpacing:2.1,
    },
  },
  pickerStyle : {
    fontSize: 32,
    letterSpacing:3.9,
    color: 'rgb(102,102,102)',
    textAlign: 'center',
    fontWeight: 'bold',
    width:50,
    marginRight:(Platform.OS === 'ios') ? 35 : 20,
    '@media (min-width: 320) and (max-width: 350)': { // media query on sheet level
      marginRight:(Platform.OS === 'ios') ? 0 : 5,
      fontSize: 28,
    },
  },
  dayBold: {
    fontFamily:Fonts.type.bold,
    fontSize:(Platform.OS === 'ios') ? 10.4 : 13,
    letterSpacing:2,
    lineHeight:18,
    color:'rgb(102,102,102)',

  },


})
