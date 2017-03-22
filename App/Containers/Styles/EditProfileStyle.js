import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  ...ApplicationStyles.screen,
  headerView: {
    backgroundColor:Colors.background,
    height:'35%',
    alignItems:'center',

  },
  centered: {
    alignItems: 'center'
  },
  navbarview: {
    marginTop:21,
    flex:1,
    flexDirection:'row',
    height:64,
    alignItems:'center',
  },
  profileimage: {
  flex:3,
  alignItems:'center',
  alignSelf:'stretch',

  },
  userImage: {
    alignSelf:'center',
    height:'18%',
    width:'30%',
    margin:10,
    alignSelf:'center',
    borderRadius: 40,

  },
  headingTitle: {
    marginTop:10,
    marginLeft:10,
  },
  switchView: {
    marginTop:15,
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    marginBottom:10,
  },
  inputItem:{
    marginLeft:'13%',
    marginRight:'13%',
    marginTop:'16%',
    marginBottom:5, 
    height:45,
    backgroundColor:'red',
  },





})
