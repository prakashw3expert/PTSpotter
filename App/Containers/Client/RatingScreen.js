// @flow

import React from 'react'
import { ScrollView, Text, Image,ActivityIndicator, View,TouchableOpacity,StatusBar,Dimensions } from 'react-native'
import { Container, Content,Input,Form,Item,Icon,Body,Thumbnail,Button,Card,CardItem, Switch,Left, Right, ListItem } from 'native-base';

import { Images, Fonts, Metrics, Colors } from '../../Themes'
import { Actions as NavigationActions } from 'react-native-router-flux'
import styles from './Styles/RatingScreenStyle'
import StarRating from 'react-native-star-rating';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppConfig from  "../../Config/AppConfig"
import Hr from 'react-native-hr'
const { width, height } = Dimensions.get('window')
import { connect } from 'react-redux'
import {api} from  "../../Services/Api"
import { call, put, takeEvery, takeLatest} from 'redux-saga/effects'
var moment = require('moment');

class RatingScreen extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      starCount: 1,
      loading : false,
      reviews : {},
      reviewCount : 99,
      loading : false,
    }
    this.getReview = this.getReview.bind(this);
    this.getReviewCount = this.getReviewCount.bind(this);
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
  componentWillMount () {
    //console.log('On Rating : ', this.props.trainer);
    this.getReview()
    this.getReviewCount()
  }

  componentWillReceiveProps(newProps) {
    if(newProps.refreshList){
      this.getReview()
      this.getReviewCount()
    }
  }

  getReview() {

    this.setState({loading : true})
    api.getReview(this.props.trainer.id, this.props.user.accessToken)
    .then((response) => {
      if(response.ok){
        console.log('Trainer Reviews : ' , response.data)
        this.setState({reviews : response.data, loading : false})
      }
      else{
        alert(response.problem)
        console.log(response)
        this.setState({reviews : {}, loading : false})
      }

    })
  }

  getReviewCount() {

    api.getReviewCount(this.props.trainer.id, this.props.user.userId, this.props.user.accessToken)
    .then((response) => {
      if(response.ok){
        console.log(response.data)
        this.setState({reviewCount : response.data.count, loading : false})
      }
      else{
        alert(response.problem)
        console.log(response)
        this.setState({reviewCount : 99, loading : false})
      }

    })
  }
  render () {

    let imageView;
    imageView = <Image source={Images.user4} style={styles.userImage}/>


    return (

        <Container>
          <StatusBar barStyle='light-content' backgroundColor={Colors.background}/>
              <View style={styles.headerView}>
                <Image source={Images.editProfileHeader} style={{height:96}}>
                    <View style={styles.navbarview}>
                      <View>
                        <Button transparent iconLeft onPress={NavigationActions.pop}>
                          <Ionicons name='ios-arrow-back' style={{color:'white'}} size={30}/>
                        </Button>
                      </View>
                      <View style={styles.navbarCenterView}>
                        <View style={{alignItems:'flex-start'}}>
                            <Image source={{uri : this.props.trainer.image}} style={styles.userImage}/>
                        </View>
                        <View style={{marginLeft:12}}>
                            <Text style={[styles.name]}>{this.props.trainer.name}</Text>
                            <Text style={[styles.address]}>{this.props.trainer.address}</Text>
                            <View style={{width : 100}}>
                              <StarRating
                                  disabled={true}
                                  emptyStar={'star-o'}
                                  fullStar={'star'}
                                  iconSet={'FontAwesome'}
                                  maxStars={5}
                                  starSize={20}
                                  rating={this.props.trainer.rating}
                                  selectedStar={(rating) => this.onStarRatingPress(rating)}
                                  starColor='rgb(252, 221, 45)'
                                  emptyStarColor='rgb(252, 221, 45)'
                                />
                            </View>
                        </View>


                      </View>
                      <View>
                        <Button transparent>
                            <Image source={Images.messageIcon} style={{height:23,width:23,marginLeft:20}}/>
                        </Button>
                      </View>

                    </View>

                </Image>

              </View>

              <Content style={{marginTop : 10, marginBottom:(width >= 325 ? 90 : 70)}}>
                {
                  (this.state.loading) ?
                    <ActivityIndicator
                        animating={this.state.loading}
                        style={[styles.centering, {height: 80}]}
                        size="large"
                      />
                  :

                  (this.state.reviews.length > 0) ?

                  this.state.reviews.map((revieww, i) => {
                    return <Card key={i} style={Fonts.style.ratingCards}>
                              <CardItem>
                                  <Left>
                                      <Image source={{uri : AppConfig.userProfilPath + revieww.user.image}} style={{height:70, width:70, borderRadius:35}} />
                                      <Body>
                                          <Text style={styles.raterName}>{revieww.user.name}</Text>
                                          <Text note style={styles.raterDate}>{moment(revieww.createdAt).format("L")}</Text>
                                          <View style={{width:100}}>
                                            <StarRating
                                            disabled={true}
                                            emptyStar={'star-o'}
                                            fullStar={'star'}
                                            iconSet={'FontAwesome'}
                                            maxStars={5}
                                            starSize={20}
                                            rating={revieww.rating}
                                            selectedStar={(rating) => this.onStarRatingPress(rating)}
                                            starColor='rgb(252, 221, 45)'
                                            emptyStarColor='rgb(252, 221, 45)'
                                          />
                                        </View>
                                      </Body>
                                  </Left>
                                </CardItem>

                                <CardItem content>
                                    <Text style={styles.raterFeedback}>
                                      {revieww.review}
                                    </Text>
                                </CardItem>
                                <Hr lineColor='rgb(234, 234, 234)' style={{paddingLeft:5, paddingRight:5}} />
                         </Card>


                  })
                  :
                     <View style={styles.noRatingView}>
                        <Text style={styles.noRatingText}>No Review</Text>
                     </View>

                }

              </Content>
              {
                (this.state.reviewCount === 0) ?
                    <View style={styles.bottomview}>
                    <Button light full rounded style={Fonts.style.default} onPress={() => NavigationActions.feedback({trainer : this.props.trainer})}>
                        <Text style={[Fonts.style.buttonText, Fonts.style.textBold]}>WRITE A REVIEW</Text>
                    </Button>
                  </View>
                :
                null
              }

        </Container>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(RatingScreen)
