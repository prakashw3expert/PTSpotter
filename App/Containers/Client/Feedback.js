import React from 'react'
import { ScrollView, Text, Image, View,Switch,Dimensions,Modal,TouchableHighlight,Slider,StatusBar } from 'react-native'
import { Container, Content,Input,Form,Item,Body, ListItem,Icon,Grid,Col,Thumbnail,List,Button,Card, CardItem,Label,Left,Right,Tabs,Tab,TabHeading, } from 'native-base';
import { Images,Colors,Fonts } from '../../Themes'
import { Actions as NavigationActions } from 'react-native-router-flux'
import styles from './Styles/FeedbackStyle'
import Ionicons from 'react-native-vector-icons/Ionicons';
import StarRating from 'react-native-star-rating';
import AppConfig from  "../../Config/AppConfig"
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
const { width, height } = Dimensions.get('window')
import { connect } from 'react-redux'
import {api} from  "../../Services/Api"
import { call, put, takeEvery, takeLatest} from 'redux-saga/effects'

class Feedback extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      starCount: 3,
      reviewText : '',

    }
    this.submitReview = this.submitReview.bind(this);
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  submitReview (){
      var postReview = {
        "userId" : this.props.user.userId,
        "trainerId" : this.props.trainer.id,
        "review" : this.state.reviewText,
        "rating" : this.state.starCount
      }

      api.postReview(this.props.user.accessToken, postReview)
      .then((response) => {
        if(response.ok){
          NavigationActions.pop({refresh : { refreshList : true}})
        }
        else{
          alert(response.problem)

        }

      })




  }

  render () {
    return (

        <Container>
        <StatusBar barStyle='light-content' backgroundColor={Colors.background}/>
      <View style={styles.headerView}>
        <View style={styles.navbarview}>
          <View style={{flex:1}}>
            <Button transparent iconLeft onPress={NavigationActions.pop}>
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

      <Image source={{uri : this.props.trainer.image}} style={styles.ptImage} />
      <Text style={styles.ptname}>{this.props.trainer.name}</Text>
      <Text style={styles.ptaddress}>{this.props.trainer.address}</Text>
      <StarRating
        disabled={false}
        emptyStar={'ios-star-outline'}
        fullStar={'ios-star'}
        halfStar={'ios-star-half'}
        iconSet={'Ionicons'}
        maxStars={5}
        starSize={(width >= 375) ? 30 : 25}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        starColor={'yellow'}
        starStyle={{marginTop:(width >= 375) ? 27.1 : 17.1,marginRight:5}}
      />

      <View style={[Fonts.style.inputWrapperBordered,{margin:20}]}>
        <Input multiline={true}
            numberOfLines = {30}
            style={Fonts.style.inputMultipleBordered}
            placeholder='LEAVE YOUR FEEDBACK'
            placeholderTextColor={Fonts.colors.input}
            onChangeText={(text) => this.setState({reviewText : text})}
            value={this.state.reviewText}
            />
      </View>
      <View style={styles.submitBtnView}>
          <Button rounded block style={Fonts.style.submitButtonFeedback} onPress={this.submitReview}>
              <Text style={styles.submitBtnText}> SUBMIT</Text>
          </Button>
      </View>

   </Content>


</Container>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Feedback)
