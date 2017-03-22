import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes'
import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    backgroundColor:'#fff'
  },
  wrapper: {

  },
  slide1: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection:'column',
  },
  slide2: {
    flex: 1,
   // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  cardText: {
    color: 'rgb(102, 102, 102)',
    fontSize: 14,
    textAlign:'center',
    fontFamily:'Montserrat-Regular',
    lineHeight:23,
    letterSpacing:1.8,
    marginLeft:19,
    marginRight:19,
  },
  topHeading: {
    marginTop: '6%',
    flex:2,
    //backgroundColor:'green',
    alignSelf:'stretch',
    alignItems:'center'
  },
  // heading: {
  //   fontWeight:'bold',
  //   fontSize:18.6,
  //   color:'#525252',
  //   fontFamily:'Montserrat-Bold'
  // },
  bottomView: {
    flex:3,
    justifyContent:'center',
    marginTop:'1%',
  //  backgroundColor:'red',
    alignSelf:'stretch',
    alignItems:'center',
  },
  swiperView: {
    flex:10,
    alignSelf:'stretch',
  },
  StartBtn: {
    backgroundColor:'transparent',
    justifyContent:'center',
    alignItems:'center',
    
    
      },
  StartText: {
    padding:5,
    color:'white',
    fontSize:15.1,
    fontWeight:'normal',
    letterSpacing:1.9,
    fontFamily:Fonts.type.regular,
  },
  loginView: {
    flexDirection:'row',
    marginTop:'2%'
  },
  loginText: {
    color:'rgba(102,102,102,0.5)',
    fontSize:14,
    fontWeight:'bold',
    backgroundColor: 'transparent',
  },
  loginBtn: {
    color:'rgb(102,102,102)',
    fontWeight:'bold',
    fontSize:15,
  },
  sliderheading: {
    marginTop:5,
  },
  sliderImage: {
    flex:2,
    alignItems:'center',
    justifyContent:'center',
  },
  sliderbottomtext: {
    flex:1,
    marginTop:'2%',

  },
  slogan: {
    marginTop:'3%',
    color: 'rgb(102, 102, 102)',
    fontSize: 10.4,
    textAlign:'center',
    fontFamily:'Montserrat-Regular',
    lineHeight:17,
    letterSpacing:2
  },
  btnSelect: {
    //backgroundColor:'red',
    

  },
  navigationbar: {
    flexDirection:'row',
    justifyContent:'space-between'
  },


})
