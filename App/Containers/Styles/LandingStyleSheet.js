import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes'
import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    backgroundColor:'#fff'
  },
  topHeading: {
    marginTop: '5%',
    flex:2,
    //backgroundColor:'green',
    //alignSelf:'stretch',
    alignItems:'center'
  },
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
    alignSelf:'center',
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    color: '#525252',
    fontSize: 13,
    textAlign:'center',
    fontWeight: '600',
  },
  text2: {
    color: 'rgb(102, 102, 102)',
    fontSize: 14,
    textAlign:'center',
    fontFamily:'Montserrat-Regular',
    lineHeight:23,
    letterSpacing:1.8,
    marginLeft:'4%',
    marginRight:'4%',

  },
  
  // heading: {
  //   fontWeight:'bold',
  //   fontSize:18.6,
  //   color:'#525252',
  //   fontFamily:'Montserrat-Bold'
  // },
 
  StartBtn: {
    backgroundColor:'transparent',
    justifyContent:'center',
    alignItems:'center',
    marginRight:10,
    marginLeft:10,
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
    marginTop:'7%',
    alignItems:'center',
    justifyContent:'center',
  },
  sliderbottomtext: {
    
    marginTop:'6%',

  },
  slogan: {
    marginTop:'3.5%',
    color: 'rgb(102, 102, 102)',
    fontSize: 10.4,
    textAlign:'center',
    fontFamily:'Montserrat-Regular',
    lineHeight:17,
    letterSpacing:2,
    paddingLeft:'8%',
    paddingRight:'8%'
  },

  '@media (min-width: 320) and (max-width: 350)': { // media query on sheet level
    text2: {
      fontSize: 12,
    },
    btnImage: {
    
  },
  },
  header: {
    fontSize: 18,
    '@media ios': { // media query on style level
      color: 'green',
    },
    '@media android': {
      color: 'blue',
    },
  }




})
