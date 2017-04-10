import {Dimensions, Platform} from 'react-native'

const { width, height } = Dimensions.get('window')

// Used via Metrics.baseMargin
const metrics = {
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: (Platform.OS === 'ios') ? 20 : 0,
  smallMargin: 5,
  doubleSection: 50,
  titleBarTop: (Platform.OS === 'ios') ? 40 : 15,
  navBarTop: (Platform.OS === 'ios') ? 30 : 10,
  horizontalLineHeight: 1,
  searchBarHeight: 30,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? 85 : 60,
  mainContainerMarginTop: (Platform.OS === 'ios') ? 70 : 50,
  buttonRadius: 4,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  }
}

export default metrics
