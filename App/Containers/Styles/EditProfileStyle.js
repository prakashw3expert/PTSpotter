import { StyleSheet,Dimensions } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import EStyleSheet from 'react-native-extended-stylesheet';
const { width, height } = Dimensions.get('window')
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
  flex:3,
  alignItems:'center',
  alignSelf:'stretch',

  },
  userImage: {
    alignSelf:'center',
    height:85,
    width:85,
    margin:10,
    alignSelf:'center',
    borderRadius: 42.5,
  },
  modelText: {
    fontSize:10.4,
    fontFamily : Fonts.type.regular,
    lineHeight:17,
    letterSpacing:1.4,
    color:'rgb(102,102,102)',
    textAlign:'center',
    marginLeft : (width > 325) ? 35 : 20,
    marginRight : 35,
    marginTop:10,
  },
  searchBox : {
    fontFamily:Fonts.type.regular,
    fontSize:Fonts.size.regular,
    lineHeight:23,
    letterSpacing:1.8,
    height:(width >= 325) ? 45 : 40,
    width:"76%",
    color: 'rgba(102,102,102,0.5)',
    padding: (width >= 325) ? 10 : 7
  },

})
