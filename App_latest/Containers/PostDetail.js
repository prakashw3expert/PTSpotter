

import React from 'react'
import { ScrollView,Text,Animated, TouchableWithoutFeedback, Image, View,TouchableHighlight,Dimensions,StatusBar,TouchableOpacity } from 'react-native'
import { Container, Content,Input,Form,Item, Left,Icon,Body, Right, ListItem,Thumbnail,List,Button,Card, CardItem,Label,Grid,Col, Badge } from 'native-base';
const { width, height } = Dimensions.get('window')
import { Images,Metrics,Fonts,Colors } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Actions as NavigationActions } from 'react-native-router-flux'
// Styles
import styles from './Styles/PostDetailStyle'
import {api} from  "../Services/Api"
import { call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import { connect } from 'react-redux'
var moment = require('moment');
var TimeAgo = require('react-native-timeago');
import KeyboardSpacer from 'react-native-keyboard-spacer';
class Main extends React.Component {

componentWillMount () {
    console.log(this.props.article)
}

  render () {
    return (
      <Container>

      <PostDetailScreen article={this.props.article} user={this.props.user} comments={this.props.commentsCount}/>
      <AddComment user={this.props.user} article={this.props.article}/>

      </Container>
    )
  }
}


class PostDetailScreen extends React.Component {

  constructor(props) {
         super(props);
         this.state = {
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
             comments : {}
         }
         this.triggerLike = this.triggerLike.bind(this);

  }
componentDidMount () {
  api.getComments(this.props.article.id, this.props.user.accessToken)
  .then((response) => {
     this.setState({comments : response.data, loaded : true})
       console.log('Comments Response Client : ', this.state.comments)
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
    return (
      <Container>
      <StatusBar barStyle='dark-content' backgroundColor={Colors.white}/>
      <Content disableKBDismissScroll={true}>
          <View style={styles.headerView}>
            <Image source={Images.blogImage} style={styles.postImage}>
                <View style={styles.navbarview}>
                    <Button transparent iconLeft onPress={NavigationActions.pop}>
                         <Ionicons name="ios-arrow-back-outline" size={30} style={{color:'white'}}/>
                    </Button>
                </View>
                <View style={styles.postTitleView}>
                    <Text style={styles.postHeading}>
                      {this.props.article.title}
                    </Text>
                    <Text style={styles.postDate}>{moment(this.props.article.created).format("L")} </Text>

                </View>
            </Image>
          </View>

         <View style={styles.descriptionView}>
              <Text style={styles.desc} >
              {this.props.article.description}
              </Text>
        </View>


        <View style={[Fonts.style.commentSectionColor]}>
            <CardItem  style={Fonts.style.commentSectionColor}>
                <Grid style={{marginTop:25, marginBottom : 25}}>
                    <Col style={{height:30,width:30, marginRight : 15}}>
                        <TouchableWithoutFeedback onPress={this.triggerLike}>
                        <Animated.View style={heartButtonStyle}>
                          <Icon name={this.state.liked ? 'md-heart' : 'md-heart-outline'} style={heartColor} />
                        </Animated.View>
                        </TouchableWithoutFeedback>
                    </Col>
                    <Col style={{height:30,width:30, marginRight : 14}}>
                        <Thumbnail small source={Images.user1}  />
                    </Col>
                    <Col style={{height:30,width:30, marginRight : 14}}>
                        <Thumbnail small source={Images.user2}  />
                    </Col>
                    <Col style={{height:30,width:30, marginRight : 14}}>
                        <Thumbnail small source={Images.user4}  />
                    </Col>
                    <Col style={{height:30,width:30, marginRight : 14}}>
                        <Thumbnail small source={Images.avatar}  />
                    </Col>
                    <Col style={{height:30,width:30, marginRight : 14}}>
                        <Thumbnail small source={Images.user4}  />
                    </Col>
                    <Col style={{height:30,width:30, marginRight : 10}}>
                      <Badge primary style={{width:35, height : 35, borderRadius : 35, backgroundColor:'rgb(178, 178, 178)', padding:7, paddingTop:8, paddingLeft:8}}><Text style={{fontSize:16, color:'white', fontFamily:Fonts.style.bold}}>16</Text></Badge>
                    </Col>

                </Grid>
            </CardItem>

            <Content style={{marginBottom:80}}>
            {
              this.state.comments.length > 0 ? this.state.comments.map(item => (
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
       console.log(this.props.article)
   }



  postComment() {
    console.log('post comment accessToken : ',this.props.user.accessToken)
    console.log('post comment post id : ',this.props.article.id)
    if(this.state.commentText.length > 0 ) {
      const comment = {
        "text" : this.state.commentText,
        "created" : new Date(),
        "articleId" : this.props.article.id,
        "userId" : this.props.user.userId
      }
    api.postComment(this.props.article.id, this.props.user.accessToken, comment)
    .then((response) => {
          this.setState({commentText : ''});
         console.log('Posted Comment Response Post : ', response)
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
              <Text style={{ marginTop:10}}><Image source={Images.commentAdd} resizeMode='contain' style={{width:30, height:30}}></Image></Text>
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
                  <Thumbnail small source={Images.user4}/>
                  <Body>
                      <Text style={styles.commentName}>{this.props.comment.user.name}</Text>
                      {/*<Text style={styles.commentDate}>{this.props.comment.created}</Text>*/}
                      <TimeAgo time={this.props.comment.created} style={styles.commentDate}/>
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
