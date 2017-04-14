import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../../Themes/'
import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
  ...ApplicationStyles.screen,
headerView: {
    backgroundColor: Colors.background,
    height:Metrics.navBarHeight,


  },
  navbarview: {
    marginTop:Metrics.navBarTop,
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


})
