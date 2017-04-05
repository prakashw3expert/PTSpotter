// @flow

import React from 'react'
import { ScrollView, Text, Image, View,Switch,Dimensions,Modal,TouchableHighlight,Slider } from 'react-native'
import { Container, Content,Input,Form,Item,Body, ListItem,Icon,Grid,Col,Thumbnail,List,Button,Card, CardItem,Label,Left,Right,Tabs,Tab,TabHeading, } from 'native-base';
import { Images,Colors,Fonts } from '../../Themes'
import { Actions as NavigationActions } from 'react-native-router-flux'
import styles from './Styles/SearchScreenStyle'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MapView from 'react-native-maps';
import RoundedButton from '../../Components/RoundedButton'
import Hr from 'react-native-hr'
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
const { width, height } = Dimensions.get('window')

export default class SearchScreen extends React.Component {

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render () {
    return (

      <View style={styles.mainContainer}>

        <ScrollableTabView
              locked={true}
              tabBarStyle={{borderWidth:0, height:40}}
              tabBarBackgroundColor={Colors.background}
              tabBarActiveTextColor={Colors.white}
              tabBarInactiveTextColor={Colors.whiteMuted}
              tabBarUnderlineStyle={styles.tabBorderSytel}
              tabBarTextStyle={[styles.tabText]}
              tabBarTabStyle={{paddingBottom:0}}
              renderTabBar={() => <DefaultTabBar />}>

              <ListView tabLabel='List View'/>
              <MapViewTab tabLabel='Map View'/>

            </ScrollableTabView>
            <Button onPress={() => {this.setModalVisible(!this.state.modalVisible)}}
                  style={Fonts.style.filterbutton}>
              <MaterialCommunityIcons name="filter-outline" size={28} size={(width >= 375) ? 28 : 20} style={{color:'white',marginTop:5,}}/>
          </Button>

          <Modal
              animationType={"slide"}
              transparent={false}
              visible={this.state.modalVisible}
              onRequestClose={() => {alert("Modal has been closed.")}}>
               <Container>
                  <View style={styles.headerView}>
                    <View style={styles.navbarview}>
                      <View style={{flex:1}}>
                        <Button transparent iconLeft onPress={() => {this.setModalVisible(!this.state.modalVisible)}}>
                          <MaterialCommunityIcons name="close" size={28} style={{color:'white'}}/>
                        </Button>
                      </View>
                      <View style={styles.navbarCenterView}>
                          <Text style={[Fonts.style.h1,Fonts.style.textWhite,{textAlign:'center'}]}> FILTER </Text>
                      </View>
                      <View style={{flex:1}}>
                      <Button transparent>
                          <Text></Text>
                      </Button>
                      </View>

                  </View>
                </View>

                <Filter />

            </Container>
          </Modal>

        </View>
    )
  }
}



class ListView extends React.Component {



 render () {
   return (

         <Content>
            <View style={styles.searchView}>
            <View style={[Fonts.style.inputWrapperBordered, {paddingRight:5}]}>
                    <Input  style={Fonts.style.inputBordered} placeholder='SEARCH FOR CLIENT ' placeholderTextColor={Fonts.colors.input}/>
                    <View style={{backgroundColor:'rgb(172,14,250)', width:30,height:30, borderRadius:100, marginTop:6, paddingRight:20}}><Icon name='search' style={Fonts.style.borderedIconRight} /></View>
                  </View>
            </View>

            <DataListView />

          {/*<Button onPress={() => {this.setModalVisible(!this.state.modalVisible)}}
                            style={Fonts.style.filterbutton}>
                        <MaterialCommunityIcons name="filter-outline" size={(width >= 375) ? 28 : 20} style={{color:'white',marginTop:5}}/>
                    </Button>*/}
           
         </Content>



   )
 }
}

class DataListView extends React.Component {

  constructor(props) {
         super(props);
         this.state = {
             results: {
                 items: [
                   {
                     "Time" : "Ernest Woods",
                     "image" : require('../../Images/dummy/user1.jpg'),
                     "title" : "809 Gleason Mills Suite 263",
                     "online" : true
                   },
                   {
                     "Time" : "Arthur Moran",
                     "image" : require('../../Images/dummy/user2.jpeg'),
                     "title" : "98 Bergnaum Road Suite 803",
                     "online" : false
                   },
                   {
                     "Time" : "Curtis Stone",
                     "image" : require('../../Images/dummy/user3.jpg'),
                     "title" : "31 Blake Vista Apt. 815",
                     "online" : false
                   },
                   {
                     "Time" : "Mike Nguyen",
                     "image" : require('../../Images/dummy/user4.jpeg'),
                     "title" : "OO Frami Port",
                     "online" : true
                   },

                   {
                     "Time" : "Robert Reld",
                     "image" : require('../../Images/dummy/user7.jpeg'),
                     "title" : "5240 Padberg Highway",
                     "online" : false
                   }

                 ]
             }
         }
     }

     navigateToDetails() {
      NavigationActions.clientDetails()
     }
  render () {
    return (

          <View>
            <Text style={styles.listViewTitle}>
              Found 6 clients nearby
            </Text>
            <View style={styles.separater}>
                <Hr lineColor={Colors.separetorLineColor}/>
            </View>
            <Content style={{marginBottom:20}}>
               <List dataArray={this.state.results.items} renderRow={(item) =>
                        <ListItem button avatar onPress={() => this.navigateToDetails()} style={{marginTop:(width >= 375) ? 14 : 10,paddingBottom:(width >= 375) ? 14 : 10, borderBottomWidth:1, borderColor:'rgb(234, 234, 234)', marginRight:(width >= 375) ? 20 : 10}}>
                            <Left>
                              <View>
                                 <Image source={item.image} style={styles.listImage}/>
                                 <View style={(item.online === true) ? Fonts.style.onlineDotMessages : Fonts.style.offlineDotMessages}></View>
                              </View>
                            </Left>
                            <Body style={{borderBottomWidth:0}}>
                              <Text style={styles.listname}>{item.Time}</Text>
                              <Text style={styles.listAddress} note>{item.title}</Text>
                            </Body>
                            <Right style={{borderBottomWidth:0}}>
                              <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                    } />
          </Content>
        </View>

    )
  }
}

class MapViewTab extends React.Component {

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render () {
    return (
      <Content>
      <View style={{height:250}}>
        
        <MapView
            style={{flex:1}}
            clusterMarkers={true}
            initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
        
        
        <MapView.Marker
          coordinate={{latitude: 37.78825,
            longitude: -122.4524}}
          title="Ernest Woods"
          description="809 Gleason Mills Suite 263"
          image={Images.mapIcon}
        />
        <MapView.Marker
          coordinate={{latitude: 37.79825,
            longitude: -122.4324}}
          title="Arthur Moran"
          description="98 Bergnaum Road Suite 807"
          image={Images.mapIcon}
        />
        <MapView.Marker
          coordinate={{latitude: 37.75825,
            longitude: -122.4924}}
          title="Curtis Stone"
          description="31 Blake Vista Apt. 815"
          image={Images.mapIcon}
        />
        <MapView.Marker
          coordinate={{latitude: 37.80825,
            longitude: -122.4124}}
          title="Tarun Bardawa"
          description="32 Blake Vista Apt. 777"
          image={Images.mapIcon}
        />
        
       

        

        </MapView>

      </View>
      <DataListView />

      {/*<Button onPress={() => {this.setModalVisible(!this.state.modalVisible)}}
                    style={Fonts.style.filterbuttonMapView}>
              <MaterialCommunityIcons name="filter-outline" size={(width >= 375) ? 28 : 20} style={{color:'white',marginTop:5,}}/>
          </Button>*/}
    <Modal
      animationType={"slide"}
      transparent={false}
      visible={this.state.modalVisible}
      onRequestClose={() => {alert("Modal has been closed.")}}>
       <Container>
          <View style={styles.headerView}>
            <View style={styles.navbarview}>
              <View style={{flex:1}}>
                <Button transparent iconLeft onPress={() => {this.setModalVisible(!this.state.modalVisible)}}>
                  <MaterialCommunityIcons name="close" size={28} style={{color:'white'}}/>
                </Button>
              </View>
              <View style={styles.navbarCenterView}>
                  <Text style={[Fonts.style.h1,Fonts.style.textWhite,{textAlign:'center'}]}> FILTER </Text>
              </View>
              <View style={{flex:1}}>
              <Button transparent>
                  <Text></Text>
              </Button>
              </View>

          </View>
        </View>

        <Filter />

    </Container>
  </Modal>

      </Content>
    )
  }
}


class NoSearchResult extends React.Component {

  render () {
    return (
      <Content contentContainerStyle={{alignItems:'center'}}>
      <Image source={Images.SearchEmpty} style={styles.emptyImage} />
      <Text style={[Fonts.style.buttonTextNormalGrey,styles.emptyText]}>
             NO CLIENTS WERE FOUND NEARBY
      </Text>


      </Content>
    )
  }
}

class Filter extends React.Component {

  static defaultProps = {
    value: 3,
  };

  state = {
    value: this.props.value,
  };

 render () {
   return (

         <ScrollView style={{backgroundColor:Colors.background}}>

            <Text style={styles.filtertitles}>
              SEARCH RADIUS
            </Text>
            <Slider
              {...this.props}
              onValueChange={(value) => this.setState({value: value})}
              maximumValue={5}
              minimumValue={1}
              step={10}
              maximumTrackTintColor='white'
              minimumTrackTintColor='white'
              style={{marginTop:10,marginLeft:25,marginRight:25}}
               />

              <View style={styles.milesView}>
                <Text style={styles.mileText} >
                  1 MILE
                </Text>

                <Text style={styles.mileText} >
                  5 MILE
                </Text>
              </View>
              <Text style={styles.filtertitles}>
              GYM NAME
              </Text>
              <View style={[Fonts.style.inputWrapperBordered, {marginRight: 20, marginLeft:20, marginBottom:20, height:45, borderRadius:30}]}>
                <Input  style={Fonts.style.inputBordered} placeholder='Gym Name' placeholderTextColor={Fonts.colors.input}/>
              </View>

              <Text style={styles.filtertitles}>
                POSTCODE
              </Text>
              <View style={[Fonts.style.inputWrapperBordered, {marginRight: 20, marginLeft:20, marginBottom:20, height:45,borderRadius:30}]}>
                <Input  style={Fonts.style.inputBordered} placeholder='Postcode' placeholderTextColor={Fonts.colors.input}/>
              </View>
            <Text style={styles.filtertitles}>
              WORKOUTS
            </Text>

            <View style={styles.buttonsView}>
                <Button rounded small style={{paddingLeft:15, paddingRight:15,marginRight:5,marginBottom:10, height:50, backgroundColor:'white'}}><Text style={{fontSize:15, fontFamily:Fonts.type.regular, color:Colors.subHeadingRegular}}>Yoga</Text></Button>
                <Button rounded small style={{paddingLeft:15, paddingRight:15,marginRight:5,marginBottom:10, height:50, backgroundColor:'white'}}><Text style={{fontSize:15, fontFamily:Fonts.type.regular, color:Colors.subHeadingRegular}}>Cardio</Text></Button>
                <Button rounded small style={{paddingLeft:15, paddingRight:15,marginRight:5,marginBottom:10, height:50, backgroundColor:'transparent',borderWidth:2,borderColor:'white'}}><Text style={{fontSize:15, fontFamily:Fonts.type.regular, color:'#fff'}}>Fartlek</Text></Button>

              </View>


            <View style={styles.horizontalRow}>
             <Hr lineColor='white'/>
            </View>

            <View style={styles.applyBtnView}>
                <Button rounded block style={{marginTop:20,marginBottom:10,marginLeft:20,marginRight:20,backgroundColor:'white', height:57}}>
                    <Text style={styles.applyBtnText}> APPLY</Text>
                </Button>
            </View>


         </ScrollView>



   )
 }
}
