

import React from 'react'
import { ScrollView,Text, Image, View,TouchableHighlight } from 'react-native'
import { Container, Content,Input,
  Form,Item, Left,Icon,
  Body, Right, ListItem,
  Thumbnail,List,Button,
  Card, CardItem,Label,Grid,Col } from 'native-base';

import { Images,Metrics,Fonts } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
// Styles
import styles from './Styles/PostDetailStyle'

export default class PostDetailScreen extends React.Component {

like() {
  alert('post liked')
}
  render () {
    return (
      <Content>
          <View style={styles.headerView}>
            <Image source={Images.avatarImage} style={styles.postImage}> 
                <View style={styles.navbarview}>
                    <Button transparent iconLeft onPress={NavigationActions.pop}>
                          <Icon name='arrow-back' style={{color:'white'}}/>
                    </Button>
                </View>
                <View style={styles.postTitleView}>
                    <Text style={styles.postHeading}>
                      Natural Home Remedies For Oily Skin
                    </Text>
                    <Text style={styles.postDate}> 05/03/2017 </Text>
                </View>
            </Image>
          </View>

         <View style={styles.descriptionView}>
              <Text style={styles.desc} >
              This article is floated online with an aim to help you find the best dvd printing solution. Dvd printing is an important feature used by large and small DVD production houses to print information on DVDs. Actually, dvd printing is a labeling technique that helps to identify DVDs. Thus, dvd printing is essential part of your commercial DVD production. 
              {'\n'}{'\n'}

              Your DVDs usually come coated with directly printable lacquer films with ability to absorb ink, and the process of directly printing the lacquer films on your DVDs is technically known as dvd printing. Your dvd printing solution lies in – inkjet dvd printing, thermal transfer dvd printing, screen dvd printing, and offset dvd printing – which you may choose according to need and requirement. The printing process using CMYK Inkjet printers is known as inkjet printing. The inkjet dvd printing offers you the stunning results with high resolution and vibrant colors. The inkjet dvd printing is good choice for small runs of dvds, or when
              </Text>
        </View>

        <View style={Fonts.style.commentSectionColor}>          
                  <CardItem style={Fonts.style.commentSectionColor}>
                        <Grid style={Fonts.style.commentSectionColor}>
                            <Col style={{  height: 40, width:65 }}>
                              <Button transparent>
                                <Image source={Images.likeIcon} />
                            </Button>
                            </Col>
                            <Col style={{height: 40,width:40  }}>
                              <Left>
                                <Thumbnail small source={Images.avatarImage}/>
                              </Left>
                            </Col>
                            <Col style={{height: 40,width:40  }}>
                              <Left>
                                <Thumbnail small source={Images.avatarImage}/>
                              </Left>
                            </Col>
                            <Col style={{height: 40,width:40  }}>
                              <Left>
                                <Thumbnail small source={Images.avatarImage}/>
                              </Left>
                            </Col>
                            <Col style={{height: 40,width:40  }}>
                              <Left>
                                <Thumbnail small source={Images.avatarImage}/>
                              </Left>
                            </Col>
                            <Col style={{height: 40,width:40  }}>
                              <Left>
                                <Thumbnail small source={Images.avatarImage}/>
                              </Left>
                            </Col>
                        </Grid>
                    </CardItem>

                    <Content>
                      <Card style={{margin:8}}>
                            <CardItem>
                                <Left>
                                    <Thumbnail small source={Images.avatarImage}/>
                                    <Body>
                                        <Text style={styles.commentName}>Aron Finch</Text>
                                        <Text style={styles.commentDate}>05/03/1992</Text>
                                    </Body>
                                </Left>
                              </CardItem>
                              <CardItem content>
                                  <Text style={styles.commentContent}>The Buddha is kept in the Chapel of the Emerald Buddha, which is located on the grounds of the Grand Palace in Bangkok.</Text>
                              </CardItem>
                       </Card>
                       <Card style={{margin:8}}>
                            <CardItem>
                                <Left>
                                    <Thumbnail small source={Images.avatarImage}/>
                                    <Body>
                                        <Text style={styles.commentName}>Tarun Bardawa</Text>
                                        <Text style={styles.commentDate}>05/03/1992</Text>
                                    </Body>
                                </Left>
                              </CardItem>
                              <CardItem content>
                                  <Text style={styles.commentContent}>i dont agree this at all!!</Text>
                              </CardItem>
                       </Card>
                    </Content>
                 

                    <View style={styles.bottomview}>
                        <Item rounded style={{ backgroundColor:'gray'}}>
                            <Input style={Fonts.style.input} placeholder='ADD COMMENT'/> 
                            <Button transparent>
                              <Image source={Images.discardChangeIcon} />
                            </Button>
                        </Item>
                    </View>
          </View>
            
        </Content>
    )
  }
}

/*


 <Content>
                    <Card style={{margin:8}}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={Images.avatarImage} style={{height:40,width:40,borderRadius:20}}/>
                                    <Body>
                                        <Text>Aron Finch</Text>
                                        <Text style={styles.commentDate}>05/03/1992</Text>
                                    </Body>
                                </Left>
                              </CardItem>
                              <CardItem content>
                                  <Text>Wait a minute. Wait a minute, Doc. Uhhh...
                                  Are you telling me that you built a time machine... out of a DeLorean?!
                                  Whoa. This is heavy.</Text>
                              </CardItem>
                       </Card>
                       <Card style={{margin:8}}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={Images.avatarImage} style={{height:40,width:40,borderRadius:20}}/>
                                    <Body>
                                        <Text>Tarun Bardawa</Text>
                                        <Text style={styles.commentDate}>05/03/1992</Text>
                                    </Body>
                                </Left>
                              </CardItem>
                              <CardItem content>
                                  <Text>i dont agree this at all!!</Text>
                              </CardItem>
                       </Card>
                    </Content>
*/
