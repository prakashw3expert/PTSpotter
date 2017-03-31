// @flow

import React from 'react'
import { ScrollView, Text, Image, View,TouchableOpacity } from 'react-native'
import { Container, Content,Input,Form,Item,Icon,Body,Thumbnail,Button,Card,CardItem, Switch,Left, Right, ListItem } from 'native-base';

import { Images,Fonts,Metrics } from '../../Themes'
import { Actions as NavigationActions } from 'react-native-router-flux'
// Styles
import styles from './Styles/RatingScreenStyle'
import StarRating from 'react-native-star-rating';

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
          
              <View style={styles.headerView}>
                <Image source={Images.editProfileHeader} style={{height:96}}>
                    <View style={styles.navbarview}>
                      <View>
                        <Button transparent iconLeft onPress={NavigationActions.pop}>
                          <Icon name='arrow-back' style={{color:'white'}}/>
                        </Button>
                      </View>
                      <View style={styles.navbarCenterView}>
                        <View style={{alignItems:'flex-start'}}>
                            <Image source={Images.user4} style={styles.userImage}/>
                        </View>
                        <View style={{marginLeft:5}}>
                            <Text style={[styles.name]}>Aaron Castillo</Text>
                          <Text style={[styles.address]}>Bristol, BS4 5SS, UK</Text>
                          <StarRating
                              disabled={false}
                              emptyStar={'ios-star-outline'}
                              fullStar={'ios-star'}
                              halfStar={'ios-star-half'}
                              iconSet={'Ionicons'}
                              maxStars={5}
                              starSize={20}
                              rating={this.state.starCount}
                              selectedStar={(rating) => this.onStarRatingPress(rating)}
                              starColor={'yellow'}
                            />
                        </View>
                          
                      </View>
                      <View>
                      <Button transparent>
                          <Image source={Images.messageIcon} />
                      </Button>
                      </View>

                    </View>
                    
                </Image>

              </View>

              <Content>
                <Card >
                  <CardItem>
                      <Left>
                          <Thumbnail source={Images.user2} />
                          <Body>
                              <Text style={styles.raterName}>Christian Keller</Text>
                              <Text note style={styles.raterDate}>07/26/2017</Text>
                              <View style={{width:100}}>
                              <StarRating
                              disabled={true}
                              emptyStar={'ios-star-outline'}
                              fullStar={'ios-star'}
                              halfStar={'ios-star-half'}
                              iconSet={'Ionicons'}
                              maxStars={5}
                              starSize={20}
                              rating={this.state.starCount}
                              selectedStar={(rating) => this.onStarRatingPress(rating)}
                              starColor={'yellow'}
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

             <Card >
                  <CardItem>
                      <Left>
                          <Thumbnail source={Images.user5} />
                          <Body>
                              <Text style={styles.raterName}>Corey Schmidt</Text>
                              <Text note style={styles.raterDate}>03/18/2017</Text>
                              <View style={{width:100}}>
                              <StarRating
                              disabled={true}
                              emptyStar={'ios-star-outline'}
                              fullStar={'ios-star'}
                              halfStar={'ios-star-half'}
                              iconSet={'Ionicons'}
                              maxStars={5}
                              starSize={20}
                              rating={this.state.starCount}
                              selectedStar={(rating) => this.onStarRatingPress(rating)}
                              starColor={'yellow'}
                            />
                            </View>
                          </Body>
                      </Left>
                    </CardItem>
             </Card>

             <Card >
                  <CardItem>
                      <Left>
                          <Thumbnail source={Images.user1} />
                          <Body>
                              <Text style={styles.raterName}>Florence Greene</Text>
                              <Text note style={styles.raterDate}>09/30/2017</Text>
                              <View style={{width:100}}>
                              <StarRating
                              disabled={true}
                              emptyStar={'ios-star-outline'}
                              fullStar={'ios-star'}
                              halfStar={'ios-star-half'}
                              iconSet={'Ionicons'}
                              maxStars={5}
                              starSize={20}
                              rating={this.state.starCount}
                              selectedStar={(rating) => this.onStarRatingPress(rating)}
                              starColor={'yellow'}
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
