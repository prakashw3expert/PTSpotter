import { StyleSheet,Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../../Themes/'
import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
  ...ApplicationStyles.screen,
 
})
