// @flow

import React from 'react'
import { ScrollView, Text, Image, View,Switch, TouchableHighlight, Modal,Dimensions } from 'react-native'
import { Container, Content,Input,
  Form,Item,
  Body, ListItem,Icon,
  Thumbnail,List,Button,
  Card, CardItem,Label,Left,Right } from 'native-base';
import { Images,Colors,Fonts } from '../../Themes'
import DayButton from '../../Components/DayButton'
import Hr from 'react-native-hr'
import { Actions as NavigationActions } from 'react-native-router-flux'
// Styles
import styles from './Styles/AvailabilityStyle'
import FullButton from '../../Components/FullButton'
const { width, height } = Dimensions.get('window')

//<Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
export default class AvailabilityScreen extends React.Component {

  render () {
    return (

      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
            <View style={styles.topView}>
                
                <Text style={[Fonts.style.h2,styles.dayTitle]}>MONDAY</Text>
                <View style={styles.buttonsView}>
                      <DayButton text='MO'
                        onPress={() => window.alert('Monday Pressed!')
                        
                        } />
                        <DayButton text='TU'
                        onPress={() => window.alert('Tuesday Pressed!')} />
                        <DayButton text='WE'
                        onPress={() => window.alert('Wednesday Pressed!')} />
                        <DayButton text='TH'
                        onPress={() => window.alert('Thursday Pressed!')} />
                        <DayButton text='FR'
                        onPress={() => window.alert('Friday Pressed!')} />
                        <DayButton text='SA'
                        onPress={() => window.alert('Saturday Pressed!')} />
                        <DayButton text='SU'
                        onPress={() => window.alert('Sunday Pressed!')} />
                  </View>
            </View>
            <Hr lineColor='rgb(234, 234, 234)' />

            <EmptyAvailability />
            <DataAvailability />
        </ScrollView>
        </View>
    )
  }
}


class EmptyAvailability extends React.Component {

  render () {
    return (

      <View style={styles.emptyView}>
          <Image source={Images.emptyAvailability} style={{height:height * 0.28, width:width * 0.60,marginTop:22}} />
          <Text style={[Fonts.style.buttonTextNormalGrey,styles.emptyText]}>
            YOU HAVE NOT ADDED YOUR AVAILABILITY ON THE CALENDAR YET
          </Text>

          <Button transparent style={{marginTop:-12,alignSelf:'center'}}>
            <Text style={[Fonts.style.buttonTextNormalGrey,styles.btnEmptyText,{color:Colors.purpleColor}]}>CLICK HERE TO DO SO </Text>
          </Button>
        
      </View>
    )
  }
}

class DataAvailability extends React.Component {

  render () {
    return (

      <View style={styles.emptyView}>
          <View style={{width:'80%'}} >
            <Button block bordered block large style={Fonts.style.purpleButton}>
                <Text>Dark</Text>
            </Button>
          </View>
      </View>
    )
  }
}

