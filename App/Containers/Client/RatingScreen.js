// @flow

import React from 'react'
import { ScrollView, Text, Image, View,TouchableOpacity,StatusBar } from 'react-native'
import { Container, Content,Input,Form,Item,Icon,Body,Thumbnail,Button,Card,CardItem, Switch,Left, Right, ListItem } from 'native-base';

import { Images,Fonts,Metrics } from '../../Themes'
import { Actions as NavigationActions } from 'react-native-router-flux'
// Styles
import styles from './Styles/RatingScreenStyle'
import StarRating from 'react-native-star-rating';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Hr from 'react-native-hr'

export default class RatingScreen extends React.Component {

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

    let imageView;
    imageView = <Image source={Images.user4} style={styles.userImage}/>


    return (

        <Container>
          <StatusBar barStyle='light-content' />
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
                            <Image source={Images.user4} style={styles.userImage}/>
                        </View>
                        <View style={{marginLeft:12}}>
                            <Text style={[styles.name]}>Aaron Castillo</Text>
                            <Text style={[styles.address]}>Bristol, BS4 5SS, UK</Text>
                          <StarRating
                              disabled={false}
                              emptyStar={'star-o'}
                              fullStar={'star'}
                              iconSet={'FontAwesome'}
                              maxStars={5}
                              starSize={20}
                              rating={4}
                              selectedStar={(rating) => this.onStarRatingPress(rating)}
                              starColor='rgb(252, 221, 45)'
                              emptyStarColor='rgb(252, 221, 45)'
                            />
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

              <Content style={{marginTop : 10}}>
                <Card style={Fonts.style.ratingCards}>
                  <CardItem>
                      <Left>
                          <Image  source={Images.user1} style={{height:70, width:70, borderRadius:35}} />
                          <Body>
                              <Text style={styles.raterName}>Christian Keller</Text>
                              <Text note style={styles.raterDate}>07/26/2017</Text>
                              <View style={{width:100}}>
                              <StarRating
                              disabled={true}
                              emptyStar={'star-o'}
                              fullStar={'star'}
                              iconSet={'FontAwesome'}
                              maxStars={5}
                              starSize={20}
                              rating={5}
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
                          If you are a serious astronomy fanatic like a lot of us are, you can probably remember that one event in childhood that started you along this exciting hobby.
                        </Text>
                    </CardItem>

             </Card>

             <Hr lineColor='rgb(234, 234, 234)' style={{paddingLeft:5, paddingRight:5}} />

             <Card style={Fonts.style.ratingCards}>
                  <CardItem>
                      <Left>
                          <Image  source={Images.user2} style={{height:70, width:70, borderRadius:35}} />
                          <Body>
                              <Text style={styles.raterName}>Corey Schmidt</Text>
                              <Text note style={styles.raterDate}>03/18/2017</Text>
                              <View style={{width:100}}>
                              <StarRating
                              disabled={true}
                              emptyStar={'star-o'}
                              fullStar={'star'}
                              iconSet={'FontAwesome'}
                              maxStars={5}
                              starSize={20}
                              rating={this.state.starCount}
                              selectedStar={(rating) => this.onStarRatingPress(rating)}
                              starColor='rgb(252, 221, 45)'
                              emptyStarColor='rgb(252, 221, 45)'
                            />
                            </View>
                          </Body>
                      </Left>
                    </CardItem>
             </Card>
             <Hr lineColor='rgb(234, 234, 234)' style={{paddingLeft:5, paddingRight:5}} />
             <Card style={Fonts.style.ratingCards}>
                  <CardItem>
                      <Left>
                          <Image  source={Images.user3} style={{height:70, width:70, borderRadius:35}} />
                          <Body>
                              <Text style={styles.raterName}>Florence Greene</Text>
                              <Text note style={styles.raterDate}>09/30/2017</Text>
                              <View style={{width:100}}>
                              <StarRating
                              disabled={true}
                              emptyStar={'star-o'}
                              fullStar={'star'}
                              iconSet={'FontAwesome'}
                              maxStars={5}
                              starSize={20}
                              rating={2}
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
                          Stu Unger is one of the biggest superstars to have immerged from the professional poker world.
                        </Text>
                    </CardItem>

             </Card>

              </Content>
        </Container>

    )
  }
}
