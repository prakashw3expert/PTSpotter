import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../../Themes/'
import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
  ...ApplicationStyles.screen,
  
  chooseText: {
    marginRight:20,
    fontSize:14,
    lineHeight:23,
    letterSpacing:1,
    marginLeft:5,
    color:Colors.mutedColor,
  },
  listText : {
    fontSize : 14,
    fontFamily: Fonts.type.regular,
    lineHeight : 23,
    letterSpacing : 1.3,
    color : 'rgb(102,102,102)',
    marginLeft : 15,
  },
  bottomView : {
    justifyContent:'flex-end', 
    marginTop : 30,
    marginLeft : 20,
    marginRight : 20,
    marginBottom : 20
  },
  modelText: {
    fontSize:10.4,
    fontFamily : Fonts.type.regular,
    lineHeight:17,
    letterSpacing:1.4,
    color:'rgb(102,102,102)',
    textAlign:'center',
  },

  
  
 
  




})
