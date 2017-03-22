import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, TouchableOpacity,Image,Dimensions,
} from 'react-native';

import { Images } from '../Themes'
import { Actions } from 'react-native-router-flux'
import Swiper from 'react-native-swiper';
import SelectType from '../Containers/SelectType';
import styles from './Styles/LandingStyleSheet'
import { Fonts } from '../Themes/'
const { width, height } = Dimensions.get('window')
class Landing extends Component {

 
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topHeading}>
            <Text style={Fonts.style.landingTitle}>PT SPOTTER</Text>
            <Text style={styles.slogan}>THE NEW WAY TO FIND YOUR PERFECT PERSONAL TRAINER</Text>
        </View>
        <View style={styles.swiperView}>
          <Swiper style={styles.wrapper} height={height * 0.67}
           dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, margin: 3}} />}
           activeDot={<View style={{backgroundColor: '#525252', width: 8, height: 8, borderRadius: 4, margin: 3}} />}
           showsButtons={false}>
            <View style={styles.slide1}>

              <View style={styles.sliderImage}>
                  <Image 
                  source={Images.onBoarding1}
                  />
              </View>
              <View style={styles.sliderbottomtext}>
                  <Text style={styles.text2}>CHOOSE A PERSONAL TRAINER WHO IS TAILORED TO YOUR REQUIREMENTS</Text>
              </View>
            </View>
            
            <View style={styles.slide1}>
              
              <View style={styles.sliderImage}>
                  <Image 
                  source={Images.onBoarding3}
                  />
              </View>
              <View style={styles.sliderbottomtext}>
                  <Text style={styles.text2}>FIND THE BEST PERSONAL TRAINER IN YOUR LOCAL AREA</Text>
              </View>
            </View>

            <View style={styles.slide1}>

              <View style={styles.sliderImage}>
                  <Image 
                  source={Images.onBoarding2}
                  />
              </View>
              <View style={styles.sliderbottomtext}>
                  <Text style={styles.text2}>AN EASY TO USE MESSAGING AND NOTIFICATION SYSTEM</Text>
              </View>
            </View>
          </Swiper>
        </View>
        <View style={styles.bottomView}>
            <TouchableOpacity style={styles.StartBtn} onPress={Actions.selectType}>
                <Image source={Images.buttonBackground} style={styles.StartBtn}>
                    <Text style={styles.StartText} > START </Text>
                </Image>
            </TouchableOpacity>

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
