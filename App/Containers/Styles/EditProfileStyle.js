import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  headerView: {
    backgroundColor:'#421b64',
    height:180,
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
    backgroundColor:'#421b64',
    alignItems:'center',
  },
  profileimage: {
  flex:3,
  backgroundColor:'#421b64',
  alignItems:'center',
  alignSelf:'stretch',

  },
  userImage: {
    alignSelf:'center',
    height:100,
    width:100,
    margin:10,
    alignSelf:'center',
    borderRadius: 40,

  },
  headingTitle: {
    fontWeight:'bold',
    fontSize:14,
    color: '#7a7a7a',
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
  




})
