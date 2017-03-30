import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../../Themes/'
import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
  ...ApplicationStyles.screen,
  tabs : {
    backgroundColor:'#000'
  },
  tabText : {
    fontSize : Fonts.size.regular,
    letterSpacing : 0.3,
    fontFamily : Fonts.type.regular,

  },
  tabsSection : {
    padding:20
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
    borderBottomColor: 'white',
    borderLeftColor: 'transparent',  marginLeft:20,marginRight:30, width:'22%'
  },
  tabContent : {
    paddingTop:28
  },
  dateBadge : {
    width:40,
    height : 40,
    borderRadius : 40,
    backgroundColor:'rgb(172, 14, 250)',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  badgeDate : {
    fontSize:14,
    color:Colors.white,
    lineHeight:23,
    letterSpacing:1.8,
    fontFamily:Fonts.type.LucidaGrandeBold
  },
  badgeText : {
    fontSize:8,
    color:Colors.whiteMuted,
    fontFamily:Fonts.type.LucidaGrandeBold,

  },

})
