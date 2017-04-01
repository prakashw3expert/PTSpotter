import React from 'react'
import { ScrollView, Text, Image, View,Switch,Dimensions,Modal,TouchableHighlight,Slider } from 'react-native'
import { Container, Content,Input,Form,Item,Body, ListItem,Icon,Grid,Col,Thumbnail,List,Button,Card, CardItem,Label,Left,Right,Tabs,Tab,TabHeading, } from 'native-base';
import { Images,Colors,Fonts } from '../../Themes'
import { Actions as NavigationActions } from 'react-native-router-flux'
import styles from './Styles/FeedbackStyle'
import Ionicons from 'react-native-vector-icons/Ionicons';
import StarRating from 'react-native-star-rating';

import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
const { width, height } = Dimensions.get('window')

export default class Feedback extends React.Component {

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
      <View style={styles.headerView}>
        <View style={styles.navbarview}>
          <View style={{flex:1}}>
            <Button transparent iconLeft onPress={() => {this.setModalVisible(!this.state.modalVisible)}}>
              <Ionicons name="ios-arrow-back-outline" size={30} style={{color:'white'}}/>
            </Button>
          </View>
          <View style={styles.navbarCenterView}>
              <Text style={[Fonts.style.h1,Fonts.style.textWhite,{textAlign:'center'}]}> FEEDBACK </Text>
          </View>
          <View style={{flex:1}}>
          <Button transparent>
              <Text></Text>
          </Button>
          </View>

      </View>
    </View>

    <Content style={{backgroundColor:Colors.background}} contentContainerStyle={{alignItems:'center'}}>

      <Image source={Images.user4} style={{height:128, width:128, borderRadius:64}} />
      <Text style={styles.ptname}>Aaron Castillo</Text>
      <Text style={styles.ptaddress}>Bristol, BS4 5SS, UK</Text>
      <StarRating
        disabled={false}
        emptyStar={'ios-star-outline'}
        fullStar={'ios-star'}
        halfStar={'ios-star-half'}
        iconSet={'Ionicons'}
        maxStars={5}
        starSize={30}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        starColor={'yellow'}
        starStyle={{marginTop:27.1,marginRight:5}}
      />

      <View style={[Fonts.style.inputWrapperBordered,{margin:20}]}>
        <Input multiline={true} numberOfLines = {30} style={Fonts.style.inputMultipleBordered} placeholder='LEAVE YOUR FEEDBACK' placeholderTextColor={Fonts.colors.input}/>
      </View>
      <View style={styles.submitBtnView}>
          <Button rounded block style={{marginTop:20,marginBottom:10,marginLeft:20,marginRight:20,backgroundColor:'white', height:57,width:'80%'}}>
              <Text style={styles.submitBtnText}> SUBMIT</Text>
          </Button>
      </View>

   </Content>


</Container>
      
    )
  }
}


