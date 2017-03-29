import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
  ...ApplicationStyles.screen,
  
  chooseText: {
    marginRight:20,
    fontSize:14,
    lineHeight:23,
    letterSpacing:1,
    marginLeft:5,
  },
  listText : {
    fontSize : 14,
    fontFamily: Fonts.type.regular,
    lineHeight : 23,
    letterSpacing : 1.3,
    color : 'rgb(102,102,102)',
    marginLeft : 15,
  },
  
  
 
  




})
