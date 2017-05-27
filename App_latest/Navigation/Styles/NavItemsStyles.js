import {StyleSheet} from 'react-native'
import { Metrics, Colors } from '../../Themes/'

const navButton = {
  backgroundColor: Colors.transparent,
  justifyContent: 'center'
}

export default StyleSheet.create({
  backButton: {
    ...navButton,
    marginTop: Metrics.baseMargin,
    marginLeft: Metrics.baseMargin
  },
  searchButton: {
    ...navButton,
    marginTop: Metrics.section,
    marginRight: Metrics.baseMargin,
    alignItems: 'center'
  },
  menuIcon:{
    height:18,
    width:18,
    marginTop:0,
    marginLeft:10,
  },
  messageIcon: {
    ...navButton,
    height:23,
    width:24,
    marginTop: 20,
    marginRight: Metrics.baseMargin,
    alignItems: 'center'
  },
})
