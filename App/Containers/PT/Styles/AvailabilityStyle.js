import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  headerView: {
    backgroundColor:'#0f0b31',
    height:85,
    alignItems:'center',

  },
  navbarview: {
    marginTop:30,
    flexDirection:'row',
  },
  navbarCenterView : {
    flex:2,
    alignItems:'center',
    flexDirection:'row',
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
  bottomview: {
    backgroundColor:'white',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems:'center',
    height: 110,
    width:'100%',
    paddingLeft : 40,
    paddingRight : 40,
  },
  modelText: {
    fontSize:10.4,
    fontFamily : Fonts.type.regular,
    lineHeight:17,
    letterSpacing:1.4,
    color:'rgb(102,102,102)',
    textAlign:'center',
  },
  textHours : {
    textAlign:'right',
    fontSize:21,
    fontFamily:Fonts.type.regular,
    lineHeight:25,
    letterSpacing:2.7,
    color:Colors.purpleColor,
  },
  textMinutes : {
    textAlign:'right',
    fontSize:21,
    fontFamily:Fonts.type.regular,
    lineHeight:24,
    letterSpacing:2.7,
    color:Colors.subHeadingRegular,
  },
  pickerStyle : {
    fontSize: 32, 
    letterSpacing:3.9, 
    color: 'rgb(102,102,102)', 
    textAlign: 'center', 
    fontWeight: 'bold',
    width:50,
    marginRight:35 
  },
  dayBold: {
    fontFamily:Fonts.type.bold,
    fontSize:Fonts.size.small,
    letterSpacing:2,
    lineHeight:17,
    color:'rgb(102,102,102)',
    
  },
  
  
})
