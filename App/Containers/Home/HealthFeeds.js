import React from 'react'
import { ScrollView,StatusBar,AppState, Animated, TouchableWithoutFeedback, Text, Image, View,Dimensions,TouchableOpacity,Platform } from 'react-native'
import { Container, Content, Left,Icon, Body, Right, ListItem, Thumbnail,List,Button,Card, CardItem,Grid,Col, Badge } from 'native-base';
import { Images, Fonts } from '../../Themes'
import RoundedButton from '../../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
import styles from './Styles/HomeComponentsStyle'
const { width, height } = Dimensions.get('window')
var moment = require('moment');
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux'
import Hr from 'react-native-hr'
import {api} from  "../../Services/Api"
import { call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import AppConfig from  "../../Config/AppConfig"
import YouTube from 'react-native-youtube'

class HealthFeeds extends React.Component {

constructor(props) {
       super(props);
       this.state = {
         appState: 'active',
           articles: {},
           loaded : false

       }
       this.setOnlineStatus = this.setOnlineStatus.bind(this);
}

 componentWillMount () {
   AppState.addEventListener('change', this._handleAppStateChange);
   this.loadArticles()

   var data = {
     online : (this.state.appState === 'active') ? true : false
   }
   this.setOnlineStatus(data)
 }

 loadArticles() {
   api.ArticleList(this.props.user.accessToken, this.props.user.userId)
   .then((response) => {
     if(response.ok){
       this.setState({articles : response.data, loaded : true})
         //console.log('Health feed Response : ', this.state.articles)
     }
     else{
       alert(response.problem)
     }
   })
 }

 componentDidMount() {

 }

 componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
}

 _handleAppStateChange = (appState) => {
    this.setState({
      appState
    });

    if(appState !== 'inactive'){
      var data = {
        online : (appState === 'background') ? false : true
      }
      this.setOnlineStatus(data)

    }
 }

 setOnlineStatus(data) {
   api.updateProfile(this.props.user.accessToken, this.props.user.userId, data)
   .then((response) => {
     if(response.ok){
         //console.log('Health feed Response : ', this.state.articles)

     }
     else{
       console.log(response.problem)
     }
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
              {  (this.state.loaded && this.state.articles) ? this.state.articles.map(item => (
                 <Article key={item.id.toString()} article={item} user={this.props.user}/>
               )) : null
              }
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
          articleLikes : [],
        }
        this.triggerLike = this.triggerLike.bind(this);
        this.getArticleLikes = this.getArticleLikes.bind(this);
        this.goToLikes = this.goToLikes.bind(this);
    }

  goToDetailScreen(item){
    NavigationActions.postDetail({ article : item})
  }

  goToLikes(){
    NavigationActions.likes({userLikes : this.state.articleLikes})
  }

  componentDidMount () {
    (this.props.article.favorites.length > 0) ?
     this.setState({liked : true})
     :
     this.setState({liked : false})

     this.getArticleLikes()
  }

  getArticleLikes() {

    api.getArticleLikes(this.props.article.id, this.props.user.accessToken)
    .then((response) => {
      if(response.ok){
          //console.log(response.data);
          var userLikes = [];
          response.data.forEach((item, key) => {
            if(item.user){
              userLikes.push(item)
            }
          })
          this.setState({articleLikes : userLikes, loaded : true})
      }
      else{
        this.setState({articleLikes : [], loaded : true})
      }
    })
  }


  triggerLike() {

   Animated.spring(this.state.scale, {
     toValue: 2,
     friction: 3
   }).start(() => {
     this.state.scale.setValue(0);
   });

   const info = {
     "userId": this.props.user.userId,
     "articleId": this.props.article.id,
   }
   api.likeArticle(this.props.user.accessToken, info)
   .then((response) => {
     if(response.ok){
       this.setState({liked : !this.state.liked})
         this.getArticleLikes()
     }
     else {
       alert(response.problem)
     }

   })
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
          {
            (this.props.article.type === 'text') ?
                (this.props.article.image) ?

                <CardItem cardBody button onPress={() => this.goToDetailScreen(this.props.article)} style={{marginLeft:-13}}>
                      <Image source={{uri : this.props.article.image}} style={styles.cardImage} />
                </CardItem>
                 : <CardItem cardBody style={{marginBottom:10}}>

                 </CardItem>
            :

              <CardItem cardBody button style={{marginLeft:-13}}>
              {
                //(Platform.OS === 'android') ?

                  <Image source={{uri : 'https://img.youtube.com/vi/' + this.props.article.video + '/mqdefault.jpg'}} style={styles.cardImage} >
                    <MaterialCommunityIcons name="play" size={32} style={{color:'black'}} />
                  </Image>

                /*:

                <YouTube
                      ref="youtubePlayer"
                      videoId={this.props.article.video} // The YouTube video ID
                      play={false}           // control playback of video with true/false
                      hidden={false}        // control visiblity of the entire view
                      playsInline={true}    // control whether the video should play inline
                      loop={false}          // control whether the video should loop when ended
                      rel={false}
                      onChangeQuality={(e)=>{this.setState({quality: e.quality})}}
                      onError={(e)=>{this.setState({error: e.error})}}
                      onProgress={(e)=>{this.setState({currentTime: e.currentTime, duration: e.duration})}}
                      apiKey="AIzaSyDyUcLthCP1_v0NXPE_0CFRcY4lr7rqRUg"
                      style={{height : 200,width : width, marginBottom : 10}}
                    />*/
              }

              </CardItem>
          }

          <CardItem style={{paddingTop: 0}}>
            <Grid>
              {
                <Col style={{height:30,width:30, marginRight : 13}}>
                    <TouchableWithoutFeedback onPress={this.triggerLike}>
                    <Animated.View style={heartButtonStyle}>
                      <Icon name={this.state.liked ? 'md-heart' : 'md-heart-outline'} style={heartColor} />
                    </Animated.View>
                    </TouchableWithoutFeedback>
                </Col>


              }

              {
                (this.state.articleLikes.length > 0) ?

                this.state.articleLikes.map((like, i) => {

                  if((width > 325) ? i < 6 : i < 5){

                      return <Col key={i} style={{height:30,width:30, marginRight : 13}}>
                                 <Thumbnail small source={{uri : AppConfig.userProfilPath + like.user.image}}  />
                             </Col>


                  }
                  else{
                    return <Col key={i} style={{height:0,width:0}}>
                           </Col>
                  }

                })
                :  <Col style={{height:30,width:30}}>

                   </Col>
              }
              {
                (this.state.articleLikes.length > 7) ?
                    <TouchableOpacity onPress={this.goToLikes}>
                    <Col style={{height:30,width:30, marginRight : 10}} >
                      <Badge primary style={{width:35, height : 35, borderRadius : 35, backgroundColor:'rgb(178, 178, 178)',justifyContent : 'center'}}><Text style={{fontSize:16, color:'white', fontFamily:Fonts.style.bold,textAlign : 'center'}}>{(width > 325) ? this.state.articleLikes.length - 6 : this.state.articleLikes.length - 5}</Text></Badge>
                    </Col>
                    </TouchableOpacity>
                : <Col style={{height:30,width:30, marginRight : 10}}>

                   </Col>
              }



            </Grid>
          </CardItem>
          <CardItem onPress={() => this.goToDetailScreen(this.props.article)}>
              <Grid>
                  <Col style={{height:30,width:30}}>
                      <Image source={Images.commentIcon} style={{width : 30, height : 30, resizeMode: 'contain'}} />
                  </Col>
                  <Col>
                      <Text style={styles.commentText}>{(this.props.article.commentsCount > 0) ? this.props.article.commentsCount + " comments"  : "Be the first to comment"}</Text>
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
