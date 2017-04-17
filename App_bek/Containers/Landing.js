import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, TouchableOpacity,Image,Dimensions,StatusBar
} from 'react-native';

import {Button} from 'native-base';

import { Images } from '../Themes'
import { Actions } from 'react-native-router-flux'
import Swiper from 'react-native-swiper';
import SelectType from '../Containers/SelectType';
import styles from './Styles/LandingStyleSheet'
import { Fonts, Colors } from '../Themes/'
const { width, height } = Dimensions.get('window')

class Landing extends Component {


  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='dark-content' backgroundColor={Colors.white} />
        <View style={styles.topHeading}>
            <Text style={[Fonts.style.h1, Fonts.style.textGrey, Fonts.style.mb25]}>PT SPOTTER</Text>

            <Text style={[Fonts.style.h6, {marginTop: (width >= 375) ? 20 : 5}]}>THE NEW WAY TO FIND YOUR PERFECT PERSONAL TRAINER</Text>
        </View>
        <View style={styles.swiperView}>
          <Swiper style={styles.wrapper} height={(width >= 375) ? height * 0.65: height * 0.70}
           dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, margin: 3}} />}
           activeDot={<View style={{backgroundColor: '#525252', width: 8, height: 8, borderRadius: 4, margin: 3}} />}
           showsButtons={false}>
            <View style={styles.slider}>

              <View style={styles.sliderImage}>
                  <Image
                  source={Images.onBoarding1}
                  />
              </View>
              <View style={styles.sliderbottomtext}>
                  <Text style={styles.text}>CHOOSE A PERSONAL TRAINER WHO IS TAILORED TO YOUR REQUIREMENTS</Text>
              </View>
            </View>

            <View style={styles.slider}>

              <View style={styles.sliderImage}>
                  <Image
                  source={Images.onBoarding3}
                  />
              </View>
              <View style={styles.sliderbottomtext}>
                  <Text style={styles.text}>FIND THE BEST PERSONAL TRAINER IN YOUR LOCAL AREA</Text>
              </View>
            </View>

            <View style={styles.slider}>

              <View style={styles.sliderImage}>
                  <Image
                  source={Images.onBoarding2}
                  />
              </View>
              <View style={styles.sliderbottomtext}>
                  <Text style={styles.text}>AN EASY TO USE MESSAGING AND NOTIFICATION SYSTEM</Text>
              </View>
            </View>
          </Swiper>
        </View>

        <View style={styles.bottomView}>
            <Button light full rounded style={Fonts.style.default}  onPress={Actions.selectType}>
                <Text style={Fonts.style.buttonText}>START</Text>
            </Button>

            <View style={styles.loginView}>
                <Text style={styles.loginText}> Already have an account? </Text>
                <TouchableOpacity onPress={Actions.login}>
                 <Text style={styles.loginBtn}>Log in </Text>
                 </TouchableOpacity>
            </View>
        </View>
      </View>
    )
  }
}


export default Landing;
