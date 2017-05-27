

import React from 'react'
import { ScrollView,Text,Animated, TouchableWithoutFeedback, Image, View,TouchableHighlight,Dimensions,StatusBar,TouchableOpacity } from 'react-native'
import { Container, Content,Input,Form,Item, Left,Icon,Body, Right, ListItem,Thumbnail,List,Button,Card, CardItem,Label,Grid,Col, Badge } from 'native-base';
const { width, height } = Dimensions.get('window')
import { Images,Metrics,Fonts,Colors } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Actions as NavigationActions } from 'react-native-router-flux'
import YouTube from 'react-native-youtube'
import styles from './Styles/PostDetailStyle'
import {api} from  "../Services/Api"
import { call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import { connect } from 'react-redux'
var moment = require('moment');
var TimeAgo = require('react-native-timeago');
import KeyboardSpacer from 'react-native-keyboard-spacer';
import AppConfig from  "../Config/AppConfig"

class Main extends React.Component {

  constructor(props) {
         super(props);
         this.state = {
             comments : {}
         }
         this.updateComments = this.updateComments.bind(this);
         this.getComments = this.getComments.bind(this);

  }


componentDidMount () {
  this.getComments()
}

getComments() {
  api.getComments(this.props.article.id, this.props.user.accessToken)
  .then((response) => {
    if(response.ok){
      this.setState({comments : response.data, loaded : true})
    }
    else{
      alert(response.problem);
      this.setState({comments : [], loaded : true})
    }

  })
}

updateComments(comment) {

  this.setState(prevState => ({
    comments: [...prevState.comments, comment],
  }));
}

  render () {
    return (
      <Container>

      <PostDetailScreen article={this.props.article} user={this.props.user} comments={this.state.comments} callback={this.getComments}/>


      </Container>
    )
  }
}


class PostDetailScreen extends React.Component {

  constructor(props) {
         super(props);
         this.state = {
           liked : false,
           articleLikes : [],
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
         this.scrollToBottom = this.scrollToBottom.bind(this);
         this.goToLikes = this.goToLikes.bind(this);

  }

  componentWillMount () {


      (this.props.article.favorites.length > 0) ?
          this.setState({liked : true, articleLikes : this.props.likes})
          :
          this.setState({liked : false})
          this.getArticleLikes()
  }

  getArticleLikes() {

    api.getArticleLikes(this.props.article.id, this.props.user.accessToken)
    .then((response) => {
      if(response.ok){
        var userLikes = [];
        response.data.forEach((item, key) => {
          if(item.user){
            userLikes.push(item)
          }
        })
          this.setState({articleLikes : userLikes, loaded : true})
      }
      else{
        // alert(response.problem)
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

  const data = {
    "userId": this.props.user.userId,
    "articleId": this.props.article.id,
  }
  api.likeArticle(this.props.user.accessToken, data)
  .then((response) => {
    if(response.ok){
      this.setState({liked : !this.state.liked})
      this.getArticleLikes()
    }
    else{
      alert(response.problem)
      console.log(response);
    }


  })
}

goToLikes(){
  NavigationActions.likes({userLikes : this.state.articleLikes})
}

scrollToBottom () {

  this.refs.scroll.scrollToEnd();
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

    var header;
    if(this.props.article.type === 'text') {

      header = <Image source={(this.props.article.image) ? {uri : this.props.article.image} : Images.blogImage} style={styles.postImage}>
                  <View style={styles.navbarview}>
                      <Button transparent iconLeft onPress={NavigationActions.pop}>
                           <Ionicons name="ios-arrow-back-outline" size={30} style={{color:'white'}}/>
                      </Button>
                  </View>
                  <View style={styles.postTitleView}>
                      <Text style={styles.postHeading}>
                        {this.props.article.title}
                      </Text>
                      <Text style={styles.postDate}>{moment(this.props.article.createdAt).format("L")} </Text>

                  </View>
              </Image>

  }
  else{

    header = <YouTube
          ref="youtubePlayer"
          videoId={this.props.article.video} // The YouTube video ID
          play={false}           // control playback of video with true/false
          hidden={false}        // control visiblity of the entire view
          playsInline={true}    // control whether the video should play inline
          loop={false}          // control whether the video should loop when ended
          rel={false}
          onReady={(e)=>{this.setState({isReady: true})}}
          onChangeState={(e)=>{this.setState({status: e.state})}}
          onChangeQuality={(e)=>{this.setState({quality: e.quality})}}
          onError={(e)=>{this.setState({error: e.error})}}
          onProgress={(e)=>{this.setState({currentTime: e.currentTime, duration: e.duration})}}
          apiKey="AIzaSyDyUcLthCP1_v0NXPE_0CFRcY4lr7rqRUg"
          style={{height : 250,width : width, marginBottom : 10}}
        >
        <View style={styles.navbarview}>
            <Button transparent iconLeft onPress={NavigationActions.pop}>
                 <Ionicons name="ios-arrow-back-outline" size={30} style={{color:'white'}}/>
            </Button>
        </View>
        <View style={styles.postTitleView}>
            <Text style={styles.postHeading}>
              {this.props.article.title}
            </Text>
            <Text style={styles.postDate}>{moment(this.props.article.createdAt).format("L")} </Text>

        </View>
        </YouTube>
      }


    return (
      <Container style={{backgroundColor : 'rgb(249,249,249)'}}>
      <StatusBar barStyle='dark-content' backgroundColor={Colors.white}/>
      <Content disableKBDismissScroll={true}>
          <View style={styles.headerView}>
            {
              header
            }
          </View>
          {
            (this.props.article.description) ?
              <View style={styles.descriptionView}>
                 <Text style={styles.desc} >
                    {this.props.article.description}
                 </Text>
              </View>
            : null
          }



        <View style={[Fonts.style.commentSectionColor]}>
            <CardItem  style={Fonts.style.commentSectionColor}>
                <Grid style={{marginTop:10, marginBottom : 10}}>
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
                        (this.state.articleLikes && this.state.articleLikes.length > 0) ?

                        this.state.articleLikes.map((like, i) => {

                          if((width > 325) ? i < 6 : i < 5){

                            return<Col key={i} style={{height:30,width:30, marginRight : 13}}>
                                       <Thumbnail small source={{uri : AppConfig.userProfilPath + like.user.image}}  />
                                   </Col>
                          }
                          else{
                            return <Col key={i} style={{height:0,width:0}}>
                                   </Col>
                          }

                        })
                        :  <Col style={{height:30,width:30, marginRight : 10}}>

                           </Col>
                      }
                      {
                        (this.state.articleLikes && this.state.articleLikes.length > 7) ?
                            <TouchableOpacity onPress={this.goToLikes}>
                              <Col style={{height:30,width:30, marginRight : 10}} >
                                <Badge primary style={{width:35, height : 35, borderRadius : 35, backgroundColor:'rgb(178, 178, 178)',justifyContent : 'center'}}><Text style={{fontSize:16, color:'white', fontFamily:Fonts.style.bold,textAlign : 'center'}}>{(width > 325) ? this.state.articleLikes.length - 6 : this.state.articleLikes.length - 5}</Text></Badge>
                              </Col>
                            </TouchableOpacity>
                        : <Col style={{height:30,width:30, marginRight : 10}}>

                           </Col>
                      }

                      {/*<Col style={{height:30,width:30, marginRight : 10}}>
                        <Badge primary style={{width:35, height : 35, borderRadius : 35, backgroundColor:'rgb(178, 178, 178)', padding:7, paddingTop:8, paddingLeft:8}}><Text style={{fontSize:16, color:'white', fontFamily:Fonts.style.bold}}>16</Text></Badge>
                      </Col>*/}

                </Grid>
            </CardItem>

            <Content style={{marginBottom:80}}>
            {
              this.props.comments.length > 0 ? this.props.comments.map(item => (
               <Comments key={item.id.toString()} comment={item}/>
             )) : <CardItem style={{backgroundColor : 'transparent'}}>
                 <Grid>
                     <Col style={{height:30,width:30}}>
                         <Image source={Images.commentIcon} style={{width : 30, height : 30, resizeMode: 'contain'}} />
                     </Col>
                     <Col>
                         <Text style={styles.commentText}>Be the first to comment</Text>
                     </Col>
                 </Grid>
             </CardItem>
           }
            </Content>

          </View>

        </Content>
        <AddComment user={this.props.user} article={this.props.article} callback={this.props.callback} />
  </Container>




    )
  }
}

 class AddComment extends React.Component {

   constructor(props) {
          super(props);
          this.state = {
              commentText : ''
          }
          this.postComment = this.postComment.bind(this);
   }
   componentWillMount () {
   }



  postComment() {
    if(this.state.commentText.length > 0 ) {
      const comment = {
        "text" : this.state.commentText,
        "articleId" : this.props.article.id,
        "userId" : this.props.user.userId
      }
      this.props.callback(comment)
    api.postComment(this.props.article.id, this.props.user.accessToken, comment)
    .then((response) => {
      if(response.ok){
        this.props.callback()
        this.setState({commentText : ''});
      }
      else{
        alert(response.problem)
        console.log(response);
      }

    })
  }
  else{
    //console.log(new Date())
  }
  }
  render () {
    return (


            <View style={styles.bottomview}>
            <View style={[Fonts.style.inputWrapperBordered, {marginRight: 20, marginLeft:20, marginBottom:20, height:45}]}>
              <Input style={Fonts.style.inputBordered}
                    placeholder='ADD COMMENT'
                    placeholderTextColor={Fonts.colors.input}
                    onChangeText={(text) => this.setState({commentText : text})}
                    value={this.state.commentText}
                    />
              <TouchableOpacity onPress={this.postComment}>
              <Image source={Images.commentAdd} resizeMode='contain' style={{width:30, height:30,marginTop:5}} />
              </TouchableOpacity>
            </View>
            </View>

    )
  }
}

class Comments extends React.Component {

  constructor(props) {
         super(props);
         this.state = {

         }

  }
  componentWillMount () {
      //console.log(this.props.comment)
  }


 render () {
   return (

     <Card style={Fonts.style.commnetBox}>
          <CardItem style={{marginTop : 0, paddingBottom : 0}}>
              <Left>
                  <Thumbnail small source={{uri : AppConfig.userProfilPath + this.props.comment.user.image}}/>
                  <Body>
                      <Text style={styles.commentName}>{this.props.comment.user.name}</Text>
                      <Text style={styles.commentDate}>{moment(this.props.comment.createdAt).fromNow()}</Text>
                      {/*<TimeAgo time={this.props.comment.createdAt} style={styles.commentDate}/>*/}
                  </Body>
              </Left>
            </CardItem>
            <CardItem content>
                <Text style={styles.commentContent}>
                  {this.props.comment.text}
                </Text>
            </CardItem>
     </Card>


   )
 }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Main)
