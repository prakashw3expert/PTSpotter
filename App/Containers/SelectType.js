import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, TouchableOpacity,Image,Dimensions,
} from 'react-native';

import { Icon } from 'react-native-vector-icons'

import Swiper from 'react-native-swiper';
import styles from './Styles/SelectTypeStyleSheet'
import { Fonts,Images } from '../Themes/'
import { Actions } from 'react-native-router-flux'
const { width, height } = Dimensions.get('window')

class SelectType extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topHeading}>
          <View style={styles.navigationbar} >
            <TouchableOpacity onPress={Actions.pop}  style={{flex:1,marginLeft:'5%'}}>
                <Image source={Images.backButton} />
            </TouchableOpacity>
            <Text style={[Fonts.style.landingTitle,{flex:2}]}>PT SPOTTER</Text>
            <Text style={[Fonts.style.landingTitle,{flex:1}]}></Text>
          </View>
            <Text style={styles.slogan}>ARE YOU A...</Text>
        </View>
        <View style={styles.swiperView}>
          <Swiper style={styles.wrapper} height={height*0.65}
           dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, margin: 3}} />}
           activeDot={<View style={{backgroundColor: '#525252', width: 8, height: 8, borderRadius: 4, margin: 3}} />}
           showsButtons={false}>
                 <View style={styles.slide1}>
                    
                        <Image 
                          source={Images.cardBackground} style={{resizeMode: 'contain',alignItems:'center'}}
                        >
                            <Image source={Images.cardillustration0} style={{marginTop:'10%'}} />
                            <Text style={Fonts.style.cardTitle}> CLIENT </Text>
                            <Text style={Fonts.style.cardText}> SEARCHING FOR A PERSONAL TRAINER </Text>

                        </Image>
                    
                 </View>
                 <View style={styles.slide1}>
                   <Image 
                          source={Images.cardBackground} style={{resizeMode: 'contain',alignItems:'center'}}
                        >
                            <Image source={Images.cardillustration1} style={{marginTop:'10%'}}/>
                            <Text style={Fonts.style.cardTitle}> PERSONAL TRAINER </Text>
                            <Text style={Fonts.style.cardText}> SEARCHING FOR CLIENTS </Text>
                        </Image>
                 </View>
                 
          </Swiper>
        </View>
        <View style={styles.bottomView}>
            <View style={styles.btnSelect}>
                <TouchableOpacity style={styles.StartBtn} onPress={Actions.selectType}>
                    <Image source={Images.buttonBackground} style={styles.StartBtn}>
                        <Text style={styles.StartText} > SELECT </Text>
                    </Image>
                </TouchableOpacity>
            </View>
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
