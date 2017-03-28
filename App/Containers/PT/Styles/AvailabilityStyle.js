import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  headerView: {
    backgroundColor:'#0f0b31',
    height:64,
    alignItems:'center',
  },
  centered: {
    alignItems: 'center'
  },
  topView: {
    flex : 1,
    alignItems : 'center',
   marginBottom : 20,
  },
  dayTitle: {
    fontFamily : Fonts.type.bold,
    marginTop : 25,
    marginLeft : 8,
    color : '#7a7a7a',
  },
  buttonsView: {
    flexDirection : 'row',
    flex : 1,
    justifyContent : 'space-between',
    marginTop : 15
  },
  emptyView: {
    justifyContent : 'center',
    alignItems : 'center',
    marginTop : 20,
  },
  emptyText: {
    textAlign : 'center',
    marginLeft : '5%',
    marginRight : '5%',
    marginTop : 10,
  },
  btnEmptyText : {
    fontFamily : Fonts.type.bold,
  },
  
})
