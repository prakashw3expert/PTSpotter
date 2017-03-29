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
import { Actions } from 'react-native-router-flux'
import { Actions as NavigationActions } from 'react-native-router-flux'
// Styles
import styles from './Styles/AvailabilityStyle'
import FullButton from '../../Components/FullButton'
const { width, height } = Dimensions.get('window')

//<Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
export default class AvailabilityScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  render () {
    var showItem;
    if(this.state.show == false) {
      showItem = <DataAvailability />
    }
    else{
      showItem = <EmptyAvailability />    
    }
    return (

      <View style={styles.mainContainer}>
        <ScrollView style={[styles.container,{marginBottom : 110}]}>
            <View style={styles.topView}>
                <Text style={[Fonts.style.h2,styles.dayTitle]}>MONDAY</Text>
                <View style={styles.buttonsView}>
                      <DayButton text='MO'
                        onPress={() => {
                          this.setState({ show: !this.state.show });
                        }} />
                        <DayButton text='TU'
                        onPress={() => {
                          this.setState({ show: !this.state.show });
                        }} />
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
            {showItem}
        </ScrollView>
        <Save />
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
            <Button block bordered block large style={Fonts.style.purpleButtonAvailability}>
                <Text style={[Fonts.style.subHeading,{color:'white'}]}>9:45 am</Text>
                <Icon name="ios-arrow-round-forward" style={{color:'white', marginLeft:20,marginRight:20,}}/>
                <Text style={[Fonts.style.subHeading,{color:'white'}]}>6:30 pm</Text>
            </Button>

            <Button block bordered block large style={Fonts.style.grayButtonAvailability}>
                <Text style={[Fonts.style.subHeading]}>9:45 am</Text>
                <Icon name="ios-arrow-round-forward" style={{color:'rgb(102,102,102)', marginLeft:20,marginRight:20,}}/>
                <Text style={[Fonts.style.subHeading]}>6:30 pm</Text>
            </Button>
            
            <Button block bordered block large style={Fonts.style.grayButtonAvailability}>
                <Text style={[Fonts.style.subHeading]}>9:45 am</Text>
                <Icon name="ios-arrow-round-forward" style={{color:'rgb(102,102,102)', marginLeft:20,marginRight:20,}}/>
                <Text style={[Fonts.style.subHeading]}>6:30 pm</Text>
            </Button>

            <Button block bordered block large style={Fonts.style.purpleButtonAvailability}>
                <Text style={[Fonts.style.subHeading,{color:'white'}]}>9:45 am</Text>
                <Icon name="ios-arrow-round-forward" style={{color:'white', marginLeft:20,marginRight:20,}}/>
                <Text style={[Fonts.style.subHeading,{color:'white'}]}>6:30 pm</Text>
            </Button>

            <Button block bordered block large style={Fonts.style.grayButtonAvailability}>
                <Text style={[Fonts.style.subHeading]}>9:45 am</Text>
                <Icon name="ios-arrow-round-forward" style={{color:'rgb(102,102,102)', marginLeft:20,marginRight:20,}}/>
                <Text style={[Fonts.style.subHeading]}>6:30 pm</Text>
            </Button>

          </View>
      </View>
    )
  }
}

class Save extends React.Component {

  render () {
    return (
    
          
            <View style={styles.bottomview}>
              <Button light full rounded style={Fonts.style.default}  onPress={Actions.homeScreen}>
                  <Text style={[Fonts.style.buttonText, Fonts.style.textBold]}>SAVE</Text>
              </Button>
            </View>
   
    )
  }
}

