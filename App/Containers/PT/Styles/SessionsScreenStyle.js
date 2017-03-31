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
    paddingTop:28
  },
  tabHeading : {
    marginBottom : 20
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
    lineHeight:23,
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

  containerListView : {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft : 20,

  },


})
