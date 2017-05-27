// @flow

import React from 'react'
import { ScrollView,Animated, TouchableWithoutFeedback,StatusBar, Text, Image, View,Dimensions } from 'react-native'
import { Container, Content, Left,Icon, Body, Right, ListItem, Thumbnail,List,Button,Card, CardItem,Grid,Col, Badge } from 'native-base';

import { Images, Fonts, Colors } from '../../Themes'
import RoundedButton from '../../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
// Styles
import styles from './Styles/HomeScreenStyle'
const { width, height } = Dimensions.get('window')

import FontAwesome from 'react-native-vector-icons/FontAwesome';
var TimeAgo = require('react-native-timeago');
import Hr from 'react-native-hr'
import { connect } from 'react-redux'
import {api} from  "../../Services/Api"
import { call, put, takeEvery, takeLatest} from 'redux-saga/effects'

class HomeScreen extends React.Component {


    constructor(props) {
           super(props);
           this.state = {
               result: {},

           }
       }


  render () {
    return (
      <View style={styles.mainContainer}>
      <StatusBar barStyle='light-content' backgroundColor={Colors.background}/>
        <ScrollView style={styles.container}>
          <Sessions />
          <Schedule />
          <HealthFeeds user={this.props.user}/>
        </ScrollView>
      </View>
    )
  }
}
 class Sessions extends React.Component {

   constructor(props) {
         super(props);

     }

     componentWillMount() {

     }
  render () {
    return (
          <View style={styles.sessionView}>
              <Text style={[Fonts.style.h2, Fonts.style.textCenter, Fonts.style.mb10]}>
                SESSION REQUESTS
              </Text>
              <View style={{paddingTop:5, marginBottom:10}}>
              <Card style={Fonts.style.sessionCard}>
                    <CardItem style={{marginBottom:0, paddingBottom:0}}>
                        <Left>
                            <Thumbnail  source={Images.user2} />
                            <Body style={{ marginBottom:10}}>
                                <Text style={styles.CardHeading}>Ernest Woods</Text>
                                <Text style={styles.CardText}>809 Gleason Mills Suite 263</Text>
                                <View style={{marginTop:10, flexDirection:'row'}}>
                                   <Button rounded small style={Fonts.style.categoryTag}><Text style={Fonts.style.categoryTagText}>Yoga</Text></Button>
                                   <Button rounded small style={Fonts.style.categoryTagGray}><Text style={Fonts.style.categoryTagText}>Cardio</Text></Button>
                                </View>
                            </Body>
                        </Left>
                      </CardItem>
               </Card>

               <Card style={Fonts.style.commnetBox2}>
                     <CardItem style={{marginBottom:0, paddingBottom:0}}>
                         <Left>
                             <Thumbnail  source={Images.user2} />
                             <Body style={{ marginBottom:10}}>
                                 <Text style={styles.CardHeading}>Ernest Woods</Text>
                                 <Text style={styles.CardText}>809 Gleason Mills Suite 263</Text>
                                 <View style={{marginTop:10, flexDirection:'row'}}>
                                    <Button rounded small style={Fonts.style.categoryTag}><Text style={Fonts.style.categoryTagText}>Yoga</Text></Button>
                                    <Button rounded small style={Fonts.style.categoryTagGray}><Text style={Fonts.style.categoryTagText}>Cardio</Text></Button>
                                 </View>
                             </Body>
                         </Left>
                       </CardItem>
                </Card>
                </View>

          </View>

    )
  }
}

class Schedule extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
            results: {
                items: [
                  {
                    "Time" : "11:00 am",
                    "image" : require('../../Images/avatar.jpg'),
                    "title" : "Meeting with Edward Snowden",
                    "last" : false
                  },
                  {
                    "Time" : "08:30 pm",
                    "image" : require('../../Images/avatar.jpg'),
                    "title" : "Intense cardio training with Mark Zuckerberg",
                    "last" : false
                  },
                  {
                    "Time" : "",
                    "image" : require('../../Images/avatar.jpg'),
                    "title" : "SHOW 6 MORE EVENTS",
                    "last" : true
                  }

                ]
            }
        }
    }
 render () {
   return (
         <View style={styles.scheduleView}>
           <Text style={[Fonts.style.h2, Fonts.style.textCenter, Fonts.style.mb20]}>
             TODAYS SCHEDULE
           </Text>

               <List  dataArray={this.state.results.items} renderRow={(item) =>
                     <ListItem button avatar style={{marginBottom:5}}>
                         <Left>
                           {item.last === false ? <Thumbnail source={item.image} style={{width:50, height:50,borderRadius :25}} /> : <Badge primary style={{width:50, height : 50, borderRadius : 50, backgroundColor:'rgb(172, 14, 250)', padding:7, paddingTop:15, paddingLeft:20}}><Text style={{fontSize:16, color:'white', fontFamily:Fonts.style.bold}}>6</Text></Badge>}
                         </Left>
                         <Body style={{borderBottomWidth:0}}>
                           <Text style={[styles.listDetail, Fonts.style.textGrey]}>{item.Time}</Text>
                           {item.last === false ? <Text style={styles.listDetail} note>{item.title}</Text> : <Text style={[Fonts.style.h3, {marginTop:-20}]} >{item.title}</Text>}
                         </Body>
                     </ListItem>
                 } />

         </View>

   )
 }
}

class HealthFeeds extends React.Component {


  constructor(props) {
         super(props);
         this.state = {
             articles: {},
             loaded : false

         }
     }


componentWillMount () {
  this.loadArticles()
}
loadArticles() {
  console.log('access token at home screen pt : ',this.props.user.accessToken)
  api.ArticleList(this.props.user.accessToken)
  .then((response) => {
     this.setState({articles : response.data, loaded : true})
       console.log('Health feed Response : ', this.state.articles)
  })

}
 render () {
   return (
     <Content>
         <View style={styles.HealthFeedsView}>
              <View style={{flexDirection:'row',alignItems:'center', marginBottom : 20}}>
                  <Text style={{flex:1}}></Text>
                  <Text style={[Fonts.style.h2, Fonts.style.textCenter, {flex:4}]}>
                    HEALTH FEED
                  </Text>
                  <Button iconRight dark transparent onPress={this.loadArticles.bind(this)}>
                        <Icon name='md-refresh' style={{color:"rgb(102, 102, 102)", marginRight : 5}} />
                    </Button>
              </View>

               <View>
                 <Hr lineColor='rgb(234, 234, 234)' />

                 {  this.state.loaded ? this.state.articles.map(item => (
                    <Article key={item.id.toString()} article={item} user={this.props.user}/>
                  )) : null }


               </View>

         </View>
</Content>
   )
 }
}

class Article extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
          commentsCount : 0,
          loaded : false,
          liked : false,
          scale : new Animated.Value(0),
          animations : [
            new Animated.Value(0),
            new Animated.Value(0),
            new Animated.Value(0),
            new Animated.Value(0),
            new Animated.Value(0),
            new Animated.Value(0),
          ],
        }
        this.triggerLike = this.triggerLike.bind(this);
    }
    componentDidMount () {
      this.commentsCounts()
    }
    commentsCounts() {
      console.log('access token at Articles Client : ',this.props.user.accessToken)
      api.commentCounts(this.props.article.id,this.props.user.accessToken)
      .then((response) => {
         this.setState({commentsCount : response.data.count, loaded : true})
           console.log('Comment counts : ', response.data)
      })

    }
  goToDetailScreen(item){
    console.log('sending item is : ',item);
    NavigationActions.postDetail({ article : item})
  }

  triggerLike() {
    console.log('like pressed')
   this.setState({ liked : !this.state.liked });
   Animated.spring(this.state.scale, {
     toValue: 2,
     friction: 3

   }).start(() => {
     this.state.scale.setValue(0);
   });
 }
 render () {

   const bouncyHeart = this.state.scale.interpolate({
     inputRange: [0, 1, 2],
     outputRange: [1, .8, 1]
   })

   const heartButtonStyle = {
     transform: [
       { scale: bouncyHeart}
     ]
   }

   const heartColor =
     this.state.liked ? {color : 'rgb(255,113,113)', fontSize : 40}
     : {color : 'rgb(178,178,178)', fontSize : 40
   }



   return (

     <Card key={this.props.article.id.toString()} style={{borderWidth:0,shadowColor:'#fff', elevation:0}} >
          <CardItem onPress={() => this.goToDetailScreen(this.props.article)} style={{ paddingBottom : 0, marginBottom : 0}}>
                <Body>
                    <Text style={[styles.listText,]}>{this.props.article.title}</Text>
                    {/*<TimeAgo time={this.props.article.created}  style={styles.cardDate}/>*/}
                    <Text note style={styles.cardDate}>{this.props.article.created}</Text>
                </Body>
            <Right>
                  <FontAwesome name='angle-right' style={{fontSize:28,color:"rgb(102, 102, 102)"}} />
            </Right>
          </CardItem>
          <CardItem content style={{ paddingBottom : 0, marginBottom : 0}}>
              <Text numberOfLines={6} style={styles.cardContent}>{this.props.article.description}</Text>
          </CardItem>
          <CardItem cardBody button onPress={() => this.goToDetailScreen(this.props.article)} style={{marginLeft:-13}}>
                <Image source={Images.blogImage} style={styles.cardImage} />
          </CardItem>

          <CardItem style={{paddingTop: 0}}>
            <Grid>
                <Col style={{height:30,width:30, marginRight : 13}}>
                  <TouchableWithoutFeedback onPress={this.triggerLike}>
                  <Animated.View style={heartButtonStyle}>
                      <Icon name={this.state.liked ? 'md-heart' : 'md-heart-outline'} style={heartColor} />
                  </Animated.View>
                  </TouchableWithoutFeedback>
                </Col>
                <Col style={{height:30,width:30, marginRight : 13}}>
                    <Thumbnail small source={Images.user1}  />
                </Col>
                <Col style={{height:30,width:30, marginRight : 13}}>
                    <Thumbnail small source={Images.user2}  />
                </Col>
                <Col style={{height:30,width:30, marginRight : 13}}>
                    <Thumbnail small source={Images.user3} />
                </Col>
                <Col style={{height:30,width:30, marginRight : 13}}>
                    <Thumbnail small source={Images.user4}  />
                </Col>
                <Col style={{height:30,width:30, marginRight : 13}}>
                    <Thumbnail small source={Images.avatar}  />
                </Col>
                <Col style={{height:30,width:30, marginRight : 13}}>
                    <Thumbnail small source={Images.user4}  />
                </Col>
                <Col style={{height:30,width:30, marginRight : 10}}>
                  <Badge primary style={{width:35, height : 35, borderRadius : 35, backgroundColor:'rgb(178, 178, 178)', padding:7, paddingTop:8, paddingLeft:8}}><Text style={{fontSize:16, color:'white', fontFamily:Fonts.style.bold}}>16</Text></Badge>
                </Col>
            </Grid>
          </CardItem>
          <CardItem onPress={() => this.goToDetailScreen(this.props.article)}>
              <Grid>
                  <Col  style={{height:30,width:30}}>
                      <Image source={Images.commentIcon} style={{width : 30, height : 30, resizeMode: 'contain'}} />
                  </Col>
                  <Col>
                      <Text style={styles.commentText}>{(this.state.commentsCount > 0) ? this.state.commentsCount + " comments"  : "Be the first to comment"}</Text>
                  </Col>
              </Grid>
          </CardItem>
          <Hr lineColor='rgb(234, 234, 234)' />
      </Card>

   )
 }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(HomeScreen)
