// @flow

import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  button: {
    height: 38,
    borderRadius: 19,
    marginHorizontal: 3,
    backgroundColor: 'white',
    justifyContent: 'center',
    width:38,
    borderWidth:1,
    borderColor:'#dcd5e0',
  },
  buttonText: {
    color: Colors.grayTextColor,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: Fonts.size.small,
    marginVertical: Metrics.baseMargin,
      backgroundColor:'transparent'

  }
})
