import React from 'react'
import { ScrollView,StatusBar, Animated, TouchableWithoutFeedback, Text, Image, View,Dimensions } from 'react-native'
import { Container, Content, Left,Icon, Body, Right, ListItem, Thumbnail,List,Button,Card, CardItem,Grid,Col, Badge } from 'native-base';

import { Images, Fonts } from '../../Themes'
import RoundedButton from '../../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

import styles from './Styles/HomeComponentsStyle'
const { width, height } = Dimensions.get('window')
var moment = require('moment');
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux'
import Hr from 'react-native-hr'
import {api} from  "../../Services/Api"
import { call, put, takeEvery, takeLatest} from 'redux-saga/effects'

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
     console.log('access token at HealthFeed screen Client : ',this.props.user.accessToken)
     api.ArticleList(this.props.user.accessToken)
     .then((response) => {
        this.setState({articles : response.data, loaded : true})
          console.log('Health feed Response Client : ', this.state.articles)
     })

   }

goToDetailScreen(){
  NavigationActions.postDetail()
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

  goToDetailScreen(item){
    console.log('sending item is : ',item);
    NavigationActions.postDetail({ article : item})
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

    var a = moment();
    console.log('a : ' + a)
    var b = moment(this.props.article.created)

   return (

     <Card key={this.props.article.id.toString()} style={{borderWidth:0,shadowColor:'#fff', elevation:0}} >
          <CardItem onPress={() => this.goToDetailScreen(this.props.article)} style={{ paddingBottom : 0, marginBottom : 0}}>
                <Body>
                    <Text style={[styles.listText,]}>{this.props.article.title}</Text>
                    {/*<TimeAgo time={this.props.article.created}  style={styles.cardDate}/>*/}
                    <Text note style={styles.cardDate}>{ moment(this.props.article.created).format("L") }</Text>
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
                  <Col style={{height:30,width:30}}>
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

export default connect(mapStateToProps)(HealthFeeds)
