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
    marginBottom:-25
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
  }

})
