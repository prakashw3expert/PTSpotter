import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../../Themes/'
import EStyleSheet from 'react-native-extended-stylesheet';
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
    fontSize : Fonts.size.h2,
    letterSpacing: 1.7,
    color : Colors.subHeadingRegular,
  },
  locationSet : {
    fontFamily : Fonts.type.regular,
    fontSize : Fonts.size.medium,
    letterSpacing: 0.1,
    color : Colors.mutedColor,
  },

  selectBox : {
    paddingLeft:22,
    paddingRight:22,
    paddingTop : 0,
    paddingBottom : 0,
    height:57,
    marginRight : 5,
    borderColor : 'rgb(234, 234, 234)',
    borderWidth:2,
    borderRadius:30,
    alignItems : 'center',
    justifyContent : 'center',
  },

  selectBoxText : {
    fontSize:16.4,
    fontFamily:Fonts.type.regular,
    color:Colors.subHeadingRegular,
    lineHeight:31.4,
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
    marginLeft : 35,
    marginRight : 35,
    marginTop:10,
  },



})
