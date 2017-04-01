
import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  button: {
    height: 40,
    borderRadius: 20,
    marginHorizontal: 3,
    backgroundColor: 'white',
    justifyContent: 'center',
    width:40,
    borderWidth:1,
    borderColor:'#dcd5e0',
  },
  buttonText: {
    color: Colors.subHeadingRegular,
    textAlign: 'center',
    fontFamily:Fonts.type.LucidaGrandeBold,
    fontSize: 14,
    backgroundColor:'transparent',
    letterSpacing:1.8,
    lineHeight:23,

  }
})
