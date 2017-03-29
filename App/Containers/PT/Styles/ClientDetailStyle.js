import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../../Themes/'
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  ...ApplicationStyles.screen,
  headerView: {
    backgroundColor:Colors.background,
    alignItems:'center',

  },
  containers : {
    marginLeft: 16,
    marginRight : 16,
    marginBottom : 20
  },
  navbarview: {
    marginTop:21,
    flex:1,
    flexDirection:'row',
    alignItems:'center',
  },
  profileimage: {
  flex:5,
  alignItems:'center',
  alignSelf:'stretch',
  
  },
  userImage: {
    alignSelf:'center',
    height:'15%',
    width:'27%',
    margin:10,
    alignSelf:'center',
    borderRadius: 40,
  },
  username :  {
    fontSize : Fonts.size.h2,
    fontFamily : Fonts.type.bold,
    color : 'white',
    letterSpacing : 1.7,
  },
  userAddress : {
    fontSize : Fonts.size.medium,
    fontFamily : Fonts.type.regular,
    color : Colors.whiteMuted,
    letterSpacing : 0.1,
  },

})
