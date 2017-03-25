import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, TouchableOpacity,Image,Dimensions,
} from 'react-native';

import { Icon } from 'react-native-vector-icons'

import { Button } from 'native-base';

import Swiper from 'react-native-swiper';
import styles from './Styles/SelectTypeStyleSheet'
import Styles from './Styles/LoginScreenStyles'
import { Fonts,Images } from '../Themes/'
import { Actions } from 'react-native-router-flux'
const { width, height } = Dimensions.get('window')

class SelectType extends Component {
  render() {
    var heightRatio = (width <= 320) ?  0.65 :  0.65;

    return (
      <View style={styles.container}>

      <View style={[styles.topHeading]}>
        <View style={Styles.navigationbar} >
          <TouchableOpacity onPress={Actions.pop} style={{height:30, flex:.5, paddingLeft:Fonts.size.containerPaddingLeft}}>
              <Image source={Images.backButton}  />
          </TouchableOpacity>
          <Text style={[Fonts.style.h1, Fonts.style.textGrey, { flex:2}]}>PT SPOTTER</Text>
        </View>
        <Text style={[Fonts.style.h6, Fonts.style.textGrey]}>ARE YOU A...</Text>
      </View>


      <View>
        <Swiper style={styles.wrapper} height={height*heightRatio}
         dot={<View style={styles.dots} />}
         activeDot={<View style={styles.activeDot} />}
         showsButtons={false}>
               <View style={styles.slide}>
                      <Image
                        source={Images.cardBackground} style={styles.item}
                      >
                          <Image source={Images.cardillustration0} style={{marginTop:'10%'}} />
                          <Text style={Fonts.style.cardTitle}> CLIENT </Text>
                          <Text style={Fonts.style.cardText}> SEARCHING FOR A PERSONAL TRAINER </Text>

                      </Image>

               </View>
               <View style={styles.slide}>
                 <Image
                        source={Images.cardBackground} style={styles.item}
                      >
                          <Image source={Images.cardillustration1} style={{marginTop:'10%'}}/>
                          <Text style={Fonts.style.cardTitle}> PERSONAL TRAINER </Text>
                          <Text style={Fonts.style.cardText}> SEARCHING FOR CLIENTS </Text>
                      </Image>
               </View>

        </Swiper>
      </View>


      <View style={[Fonts.style.mt15, {paddingLeft:Fonts.size.containerPaddingLeft, paddingRight:Fonts.size.containerPaddingRight}]}>

          <Button light full rounded style={Fonts.style.default} onPress={Actions.selectType}>
              <Text style={[Fonts.style.buttonText, Fonts.style.textBold]}>SELECT</Text>
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

export default SelectType;
