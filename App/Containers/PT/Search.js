// @flow

import React from 'react'
import { ScrollView, Text, Image,ActivityIndicator, View,Switch,Dimensions,Modal,TouchableHighlight,StatusBar,TouchableOpacity } from 'react-native'
import { Container, Content,Input,Form,Item,Body, ListItem,Icon,Grid,Col,Thumbnail,List,Button,Card, CardItem,Label,Left,Right,Tabs,Tab,TabHeading, } from 'native-base';
import { Images,Colors,Fonts } from '../../Themes'
import { Actions as NavigationActions } from 'react-native-router-flux'
import styles from './Styles/SearchScreenStyle'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MapView from 'react-native-maps';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RoundedButton from '../../Components/RoundedButton'
import Hr from 'react-native-hr'
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
const { width, height } = Dimensions.get('window')
import { connect } from 'react-redux'
import {api} from  "../../Services/Api"
import { call, put, takeEvery, takeLatest} from 'redux-saga/effects'
const timer = require('react-native-timer');
var Slider = require('react-native-slider');

class SearchScreen extends React.Component {


  constructor(props) {
         super(props);
         this.state = {
             result: {},
             modalVisible: false,
             searching : false,
             searchResults : {},
             searchText : '',
             loading : false,
         }
         this.handleSearch = this.handleSearch.bind(this);
         this.searchClients = this.searchClients.bind(this);
         this.setModalVisible = this.setModalVisible.bind(this);

     }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  componentWillMount () {

    var searchParams ={
      "lat" : this.props.user.profile.lat,
      "lng" : this.props.user.profile.lng,
      "distance" : 10,
      "gym" : '',
      "postcode" : '',
      "workouts" : {}
    }

    this.searchClients(searchParams);

  }

  searchClients(params) {

    this.setState({loading : true});
    var searchTerm = JSON.stringify(params)
    api.clientSearch(this.props.user.accessToken, searchTerm)
     .then((response) => {
       if(response.ok){
         this.setState({result : response.data, loading : false})
         //  console.log('response Main Search for Client: ', this.state.result)
       }
       else{
         alert(response.problem)
         this.setState({result : [], loading : false})
       }

     })
  }


  handleSearch(searchText) {

      const users = this.state.result;
      const results = [];
      let text = searchText.toLowerCase();
      if(users){
        users.forEach(function(user) {
            let name = user.name.toLowerCase();
            if(name.search(text) !== -1){
              results.push(user)
            }
        });
      }

      return this.setState({ searching: true, searchText : searchText, searchResults : results})

    }

  render () {
    return (

      <View style={styles.mainContainer}>
      <StatusBar barStyle='light-content' backgroundColor={Colors.background}/>

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

              <ListView tabLabel='List View' users={(this.state.searching) ? this.state.searchResults : this.state.result} handleSearch={this.handleSearch} loading={this.state.loading} callback={this.searchClients}/>
              <MapViewTab tabLabel='Map View' users={(this.state.searching) ? this.state.searchResults : this.state.result} loading={this.state.loading} callback={this.searchClients}/>

            </ScrollableTabView>
            <Button onPress={() => {this.setModalVisible(!this.state.modalVisible)}}
                  style={Fonts.style.filterbutton}>
              <MaterialCommunityIcons name="filter-outline" size={28} size={(width >= 375) ? 28 : 20} style={{color:'white',marginTop:5,}}/>
          </Button>

          <Modal
              animationType={"slide"}
              transparent={false}
              visible={this.state.modalVisible}
              onRequestClose={() => {this.setModalVisible(!this.state.modalVisible)}}>
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

                <Filter user={this.props.user} callback={this.searchClients} closeModal={this.setModalVisible}/>

            </Container>
          </Modal>

        </View>
    )
  }
}



class ListView extends React.Component {

  constructor(props) {
         super(props);
         this.state = {
            searching : false,
            searchText : '',
            users : {},
         }

     }


 render () {

   return (

         <Content disableKBDismissScroll={true}>
            <View style={styles.searchView}>
              <View style={[Fonts.style.inputWrapperBordered, {paddingRight:5}]}>
                      <Input returnKeyType='search'
                          style={Fonts.style.inputBordered}
                          placeholder='SEARCH FOR CLIENT '
                          placeholderTextColor={Fonts.colors.input}
                          onChangeText={(searchText) => this.props.handleSearch(searchText)}
                          />
                      <TouchableOpacity>
                        <View style={{backgroundColor:'rgb(172,14,250)', width:30,height:30, borderRadius:100, marginTop:(width > 325) ? 8 : 5, paddingRight:20}}><Icon name='search' style={Fonts.style.borderedIconRight} /></View>
                      </TouchableOpacity>
                </View>
            </View>
            {
              this.props.loading ?
                <ActivityIndicator
                    animating={this.state.loading}
                    style={[styles.centering, {height: 80}]}
                    size="large"
                  />
                :
                <DataListView users={this.props.users} callback={this.props.callback}/>
            }


         </Content>



   )
 }
}

class DataListView extends React.Component {

  constructor(props) {
         super(props);
         this.state = {
             result: Object
         }
     }

     navigateToDetails(item) {
      // if(item.working){
          NavigationActions.clientDetails({ clientData : item})
      //  }
      //  else{
      //    NavigationActions.ClientDetailNotWorking()
      //  }

     }

     componentWillReceiveProps (props) {


     }

     render () {

       if(this.props.users.length > 0){

        return (

          <View>
            <Text style={styles.listViewTitle}>
              Found {this.props.users.length} clients nearby
            </Text>
            <View style={styles.separater}>
                <Hr lineColor={Colors.separetorLineColor}/>
            </View>
            <Content style={{marginBottom:20}}>
               <List dataArray={this.props.users} renderRow={(item) =>
                        <ListItem button avatar onPress={() => this.navigateToDetails(item)} style={{marginTop:(width >= 375) ? 14 : 10,paddingBottom:(width >= 375) ? 14 : 10, borderBottomWidth:1, borderColor:'rgb(234, 234, 234)', marginRight:(width >= 375) ? 20 : 10}}>
                            <Left>
                              <View>
                                 <Image source={{uri : item.image}} style={styles.listImage}/>
                                 <View style={(item.online === true) ? Fonts.style.onlineDotMessages : Fonts.style.offlineDotMessages}></View>
                              </View>
                            </Left>
                            <Body style={{borderBottomWidth:0}}>
                              <Text style={styles.listname}>{item.name}</Text>
                              <Text style={styles.listAddress} note>{item.address}</Text>
                            </Body>
                            <Right style={{borderBottomWidth:0}}>
                              <FontAwesome name='angle-right' style={{fontSize:22,color:"rgba(102, 102, 102, 0.5)"}} />
                            </Right>
                        </ListItem>
                    } />
          </Content>
        </View>

    )
  }

    else{
       return <NoSearchResult />
     }
  }
}

class MapViewTab extends React.Component {

  constructor(props) {
         super(props);
         this.state = {
             users: {},
             currentRegion : null,
             modalVisible: false,
         }
         this.markerTapped = this.markerTapped.bind(this);
     }

     navigateToDetails(item) {

          NavigationActions.clientDetails({ clientData : item})

     }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ currentRegion: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }});
      },
      (error) => console.log(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lastPosition = JSON.stringify(position);
      this.setState({lastPosition});
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }


  markerTapped (i) {
    //alert('markerTapped : ' + i);
    if(i > 1) {
    this.refs.scroll.getScrollResponder().scrollTo({x: 0 , y: i * 71 - 30 , animated: true})
    this.showMsg()
  }
  else{
    this.refs.scroll.getScrollResponder().scrollTo({x: 0 , y: i * 71 , animated: true})
  }
}

  measureView(event) {
    console.log('event peroperties: ', event);
    console.log('height : ' + event.nativeEvent.layout.height)
  }

  render () {

    var markers = [];

    if(this.props.users.length > 0){
      this.props.users.map((item, i) => {

          markers.push(<MapView.Marker
                        coordinate={{latitude: Number(item.location.lat),
                          longitude: Number(item.location.lng)}}
                        title={item.name}
                        description={item.address}
                        image={Images.mapIcon}
                        key={i}

                      />)
      });
    }

    //onPress={() => this.markerTapped(i)}


    return (
      <Content>
      <View style={{height:250}}>

        <MapView
            style={{flex:1}}
            clusterMarkers={true}
            initialRegion={this.state.currentRegion}
        >

        {markers}

        </MapView>

      </View>

      {
        this.props.loading ?
          <ActivityIndicator
              animating={this.state.loading}
              style={[styles.centering, {height: 80}]}
              size="large"
            />
          :
          <DataListView users={this.props.users} callback={this.props.callback}/>
      }


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

  constructor(props) {
         super(props);
         this.state = {
           value : 2,
           filterPostcode : '',
           filterGymname : '',
           filterWorkouts : [],

         }
         this.applyBtnPressed = this.applyBtnPressed.bind(this);

  }

  addWorkout = (item) => {

    this.setState(prevState => ({
      filterWorkouts: [...prevState.filterWorkouts, { "id" : item.id, "name" : item.name}],

    }));
    console.log('After Adding Filter Workout : ',this.state.filterWorkouts);


  }

  componentDidMount(){

  }

  removeWorkout = (item) => {

    this.setState({
      filterWorkouts: this.state.filterWorkouts.filter((itm, i) => itm.id !== item.id)

    })

      console.log('After Remove Filter workout : ',this.state.filterWorkouts);


  }

  handleWorkouts = (item) => {
    console.log('item : ', item);
    var selected = false;
    this.state.filterWorkouts.map(itm => {
      if(itm.id === item.id) {
        selected = true
      }
    })

    if(selected === true) {
      console.log('already')
      this.removeWorkout(item)
      selected = false
    }
    else{
      console.log('Not Have')
      this.addWorkout(item)
    }

  }

  applyBtnPressed () {

    var params ={
      "lat" : this.props.user.profile.lat,
      "lng" : this.props.user.profile.lng,
      "distance" : this.state.value,
      "gym" : this.state.filterGymname,
      "postcode" : this.state.filterPostcode,
      "workouts" : this.state.filterWorkouts
    }
    this.props.callback(params)
    this.props.closeModal(false)

  }


 render () {
   return (

         <ScrollView style={{backgroundColor:Colors.background}}>

            <Text style={styles.filtertitles}>
              SEARCH RADIUS
            </Text>
            <Slider
              value={this.state.value}
              onValueChange={(value) => this.setState({value: value})}
              maximumValue={10}
              minimumValue={1}
              step={1}
              trackStyle={styles.track}
              thumbStyle={styles.thumb}
              maximumTrackTintColor='white'
              minimumTrackTintColor='white'
              style={{marginTop:10,marginHorizontal :25}}
               />

              <View style={styles.milesView}>
                <Text style={styles.mileText} >
                  1 MILE
                </Text>

                <Text style={styles.mileText} >
                  10 MILES
                </Text>
              </View>
              <Text style={styles.filtertitles}>
              GYM NAME
              </Text>
              <View style={[Fonts.style.inputWrapperBordered, {marginRight: 20, marginLeft:20, marginBottom:20, height:45, borderRadius:30}]}>
                <Input style={Fonts.style.inputBordered}
                    placeholder='Gym Name'
                    placeholderTextColor={Fonts.colors.input}
                    onChangeText={(text) => this.setState({filterGymname : text})}
                    />
              </View>

              <Text style={styles.filtertitles}>
                POSTCODE
              </Text>
              <View style={[Fonts.style.inputWrapperBordered, {marginRight: 20, marginLeft:20, marginBottom:20, height:45,borderRadius:30}]}>
                <Input style={Fonts.style.inputBordered}
                    placeholder='Postcode'
                    placeholderTextColor={Fonts.colors.input}
                    onChangeText={(text) => this.setState({filterPostcode : text})}
                    />
              </View>
            <Text style={styles.filtertitles}>
              WORKOUTS
            </Text>

            <View style={styles.buttonsView}>
            {

              (this.props.user.profile.myInterests) ?
                this.props.user.profile.myInterests.map((item,i) => {
                  var selected = false
                  this.state.filterWorkouts.map(val => {
                    if(item.id === val.id){
                      //console.log('called');
                      selected = true
                    }

                  })
                if(selected === true){

                  selected = false
                  return <Button rounded small key={i} onPress={() => this.handleWorkouts(item)} style={{paddingLeft:15, paddingRight:15,marginRight:5,marginBottom:10, height:(width >= 325 ? 57 : 50), backgroundColor:'white',borderWidth:2,borderColor:'white'}}><Text style={{fontSize:15, fontFamily:Fonts.type.regular, color:Colors.subHeadingRegular}}>{item.name}</Text></Button>
                }
                else{
                  selected = false
                  return <Button rounded small key={i} onPress={() => this.handleWorkouts(item)} style={{paddingLeft:15, paddingRight:15,marginRight:5,marginBottom:10, height:(width >= 325 ? 57 : 50), backgroundColor:'transparent',borderWidth:2,borderColor:'white'}}><Text style={{fontSize:15, fontFamily:Fonts.type.regular, color:'#fff'}}>{item.name}</Text></Button>

                }
              })
              : null

            }
              </View>


            <View style={styles.horizontalRow}>
             <Hr lineColor='white'/>
            </View>

            <View style={styles.applyBtnView}>
                <Button rounded block onPress={this.applyBtnPressed} style={{marginTop:20,marginBottom:10,marginLeft:20,marginRight:20,backgroundColor:'white', height:57}}>
                    <Text style={styles.applyBtnText}> APPLY</Text>
                </Button>
            </View>


         </ScrollView>



   )
 }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(SearchScreen)
