import React from 'react'
import { ScrollView, Text, Image, View,Switch,Dimensions,Modal,TouchableHighlight,Slider,StatusBar } from 'react-native'
import { Container, Content,Input,Form,Item,Body, ListItem,Icon,Grid,Col,Thumbnail,List,Button,Card, CardItem,Label,Left,Right,Tabs,Tab,TabHeading, } from 'native-base';
import { Images,Colors,Fonts } from '../../Themes'
import { Actions as NavigationActions } from 'react-native-router-flux'
import styles from './Styles/DeclineStyle'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StarRating from 'react-native-star-rating';

import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
const { width, height } = Dimensions.get('window')

export default class Decline extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      starCount: 4
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render () {
    return (

        <Container>
        <StatusBar barStyle='light-content' backgroundColor={Colors.background}/>
      <View style={styles.headerView}>
        <View style={styles.navbarview}>
          <View style={{flex:1}}>
            <Button transparent iconLeft onPress={NavigationActions.pop}>
              <MaterialCommunityIcons name="close" size={30} style={{color:'white'}}/>
            </Button>
          </View>
          <View style={styles.navbarCenterView}>
              <Text style={[Fonts.style.h1,Fonts.style.textWhite,{textAlign:'center'}]}> DECLINE </Text>
          </View>
          <View style={{flex:1}}>
          <Button transparent>
              <Text></Text>
          </Button>
          </View>

      </View>
    </View>

    <Content style={{backgroundColor:Colors.background}} contentContainerStyle={{alignItems:'center'}}>

      <Image source={Images.user4} style={styles.clientImage} />
      <Text style={styles.clientname}>Aaron Castillo</Text>
      <Text style={styles.clientaddress}>Bristol, BS4 5SS, UK</Text>

      <Text style={styles.msgText}>MESSAGE</Text>

      <View style={[Fonts.style.inputWrapperBordered,{margin:20}]}>
        <Input multiline={true} numberOfLines = {30} style={Fonts.style.inputMultipleBordered} placeholder='Write your message…' placeholderTextColor={Fonts.colors.input}/>
      </View>
      <View style={styles.submitBtnView}>
          <Button rounded block style={{marginTop:(width >= 375) ? 20 : 10,marginBottom:10,marginLeft:20,marginRight:20,backgroundColor:'white', height:57,width:'80%'}}>
              <Text style={styles.submitBtnText}> CONFIRM</Text>
          </Button>
      </View>

   </Content>


</Container>

    )
  }
}
