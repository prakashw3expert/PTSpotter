import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes'
import EStyleSheet from 'react-native-extended-stylesheet';


export default EStyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    backgroundColor:'#fff',
  },
  slide: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection:'column',
  },

  dots : {
      backgroundColor: 'rgba(0,0,0,.2)',
      '@media (min-width: 320) AND (max-width: 360)': {
        backgroundColor: '#fff',
      },
      width: 5,
      height: 5,
      borderRadius: 4,
      margin: 1
  },

  activeDot : {
    backgroundColor: '#525252',
    '@media (min-width: 320) AND (max-width: 360)': {
      backgroundColor: '#fff',
    },
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 2
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
    //backgroundColor:'green',
    alignSelf:'stretch',
    alignItems:'center'
  },

  bottomView: {
    flex:5,
    '@media (min-width: 320) AND (max-width: 360)': {
      flex:2
    },
    justifyContent:'center',
    alignSelf:'stretch',
    alignItems:'center',
  },
  swiperView: {
    flex:11.5,
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
  item:{
    resizeMode: 'contain',
    alignItems:'center',
     '@media (min-width: 320) AND (max-width: 360)': {
       width:'85%',
     },

   },
  navigationbar: {
    flexDirection:'row',
    justifyContent:'space-between'
  },


})
