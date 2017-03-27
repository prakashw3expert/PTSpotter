import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default {
  container: {
    flex: 1,
  },
  logo: {
    alignSelf: 'center'
  },
  profileView: {
  	backgroundColor:'transparent',
  	bottom:10,
  	position:'absolute'
  },
  avatarImage: {
	width: 70, 
	height: 70, 
	borderRadius: 35,
  },
  username: {
  	fontSize: Fonts.size.regular,
  	fontFamily: Fonts.type.bold,
  	letterSpacing:0.7,
  	color:'white',
  },
  userAddress: {
  	fontSize: Fonts.size.small,
  	fontFamily: Fonts.type.regular,
  	letterSpacing:0.6,
  	color:'white',
  },
  
}
