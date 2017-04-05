// @flow

import React from 'react'
import { ScrollView, Text, Image, View,Switch, TouchableHighlight,Dimensions,PickerIOS } from 'react-native'
import { Container, Content,Input,Form,Item,Body, ListItem,Icon,Thumbnail,List,Button,Card, CardItem,Label,Left,Right,Grid,Col } from 'native-base';
import { Images,Colors,Fonts } from '../../Themes'
import DayButton from '../../Components/DayButton'
import Hr from 'react-native-hr'
import NavItems from '../../Navigation/NavItems'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux'
import { Actions as NavigationActions } from 'react-native-router-flux'
import styles from './Styles/AvailabilityStyle'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-simple-modal';
const { width, height } = Dimensions.get('window')
var PickerItemIOS = PickerIOS.Item;

export default class AvailabilityScreen extends React.Component {

    state = {
    modalVisible: false,
    open: false,
    show:true,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }


  render () {
    var showItem;
    if(this.state.show == true) {
      showItem = <DataAvailability />
    }
    else{
      showItem = <EmptyAvailability />
    }

    var hours = [];
    var minutes = [];
    for(i = 0; i < 24; i++) {
      
      hours.push(<PickerItemIOS key={i} value={i} label={i.toString()} />)
    }
    for(i = 0; i < 60; i++) {
      
      minutes.push(<PickerItemIOS key={i} value={i} label={i.toString()} />)
    }


    return (


      <Container>
      
          <View style={styles.headerView}>
                <View style={styles.navbarview}>
                  <View style={{flex:1,marginBottom:5}}>
                    <Button transparent iconLeft onPress={NavigationActions.pop}>
                      {NavItems.hamburgerButton()}
                    </Button>
                  </View>
                  <View style={[styles.navbarCenterView,{marginBottom:5}]}>
                      <Text style={[Fonts.style.h1,Fonts.style.textWhite,{textAlign:'center',flex:1}]}> AVAILABILITY </Text>
                  </View>
                  <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end',}}>
                  <Button transparent onPress={() => this.setState({open: true})}>
                      <Ionicons name="md-add" size={30} style={{color:'white',justifyContent:'center'}}/>
                  </Button>
                  </View>

              </View>
          </View>
            <Content style={{marginBottom:(width >= 375) ? 110 : 90}}>
            <View style={styles.topView}>
                <Text style={[Fonts.style.h2,styles.dayTitle]}>MONDAY</Text>
                <View style={styles.buttonsView}>
                      <DayButton text='MO'
                        onPress={() => {
                          this.setState({ show: !this.state.show });
                        }} style={{borderColor:Colors.purpleColor}}/>
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
           
            
           </Content>
          <Save />
          <Modal
              offset={this.state.offset}
              open={this.state.open}
              overlayBackground={Colors.popupoverlayBackground}
              modalDidOpen={() => console.log('modal did open')}
              modalDidClose={() => this.setState({open: false})}
              style={{alignItems: 'center'}}>
              <View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={{marginLeft:20,flex:1}}></Text>
                    <Text style={[Fonts.style.h2,{flex:(width >= 375) ? 4 : 6,textAlign:'center',fontSize:13}]}>ADD AVAILABILITY</Text>
                    <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                    <Button transparent onPress={() => this.setState({open: false})} >
                        <MaterialCommunityIcons name="close" size={22} color="rgb(102,102,102)"/>
                    </Button>
                    </View>
                </View>

                <Text style={styles.modelText}>
                  CHOOSE YOUR TIME OF AVAILABILITY FOR <Text style={styles.dayBold}>MONDAY</Text>
                </Text>

                <Grid style={{marginTop:20}}>
                    <Col style={{ height: 25,width:'40%' }}>
                      <Text style={styles.textHours}>9:45 am</Text>
                    </Col>
                    <Col style={{height: 25,alignItems:'center',width:'20%'  }}>
                      <Icon name="ios-arrow-round-forward" style={{color:'rgba(102,102,102,0.5)'}}/>
                    </Col>
                    <Col style={{height: 25,width:'40%'  }}>
                      <Text style={styles.textMinutes}> 6:30 pm </Text>
                    </Col>
                </Grid>
                
                
              <View style={{flexDirection:'row',marginLeft:'15%',marginTop:10}}>
                <PickerIOS
                  selectedValue={3}
                  itemStyle={styles.pickerStyle}
                  onValueChange={(hour) => this.setState({hour, modelIndex: 0})}>
                      
                  {hours}
                        
                </PickerIOS>
                <PickerIOS
                  selectedValue={25}
                  itemStyle={styles.pickerStyle}
                  onValueChange={(minute) => this.setState({minute, modelIndex: 0})}>
                      
                  {minutes}
                        
                </PickerIOS>
                <PickerIOS
                  selectedValue="pm"
                  itemStyle={styles.pickerStyle}
                  onValueChange={(ampm) => this.setState({ampm, modelIndex: 0})}>
                    <PickerItemIOS key="am" value="am" label="am" />
                    <PickerItemIOS key="pm" value="pm" label="pm" />
                </PickerIOS>
              </View>
                <View style={[Fonts.style.mt15,Fonts.style.mb15]}>
                  <Button light full rounded bordered style={Fonts.style.bordered}  onPress={() => this.setState({open: false})}>
                      <Text style={[Fonts.style.buttonTextNormalGrey]}>ADD</Text>
                  </Button>
                </View>
                
              </View>
            </Modal>
        </Container>
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
              <Button light full rounded style={Fonts.style.default}>
                  <Text style={[Fonts.style.buttonText, Fonts.style.textBold]}>SAVE</Text>
              </Button>
            </View>

    )
  }
}
