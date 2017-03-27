

import React from 'react'
import { ScrollView,Text, Image, View,TouchableHighlight,Dimensions } from 'react-native'
import { Container, Content,Input,
  Form,Item, Left,Icon,
  Body, Right, ListItem,
  Thumbnail,List,Button,
  Card, CardItem,Label,Grid,Col, Badge } from 'native-base';
import { Images,Metrics,Fonts } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

import styles from './Styles/PostDetailStyle'

export default class PostDetailScreen extends React.Component {

like() {
  alert('post liked')
}
  render () {
    return (
      <Container>
      <Content style={{marginBottom:(width >= 375) ? 60 : 60,}}>
          <View style={styles.headerView}>
            <Image source={Images.blogImage} style={styles.postImage}>
                <View style={styles.navbarview}>
                    <Button transparent iconLeft onPress={NavigationActions.pop}>
                          <Icon name='arrow-back' style={{color:'white', fontSize : 30}}/>
                    </Button>
                </View>
                <View style={styles.postTitleView}>
                    <Text style={styles.postHeading}>
                      Natural Home Remedies For Oily Skin
                    </Text>
                    <Text style={styles.postDate}> 06/20/2017 </Text>
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

        <View style={[Fonts.style.commentSectionColor]}>
            <CardItem  style={Fonts.style.commentSectionColor}>
                <Grid style={{marginTop:25, marginBottom : 25}}>
                    <Col style={{height:30,width:30, marginRight : 15}}>
                        <Icon name='md-heart' style={{color:"rgb(255, 113, 113)", fontSize : 40}} />
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
              <Card style={Fonts.style.commnetBox}>
                    <CardItem style={{marginTop : 0, paddingBottom : 0}}>
                        <Left>
                            <Thumbnail small source={Images.user2}/>
                            <Body>
                                <Text style={styles.commentName}>Aron Finch</Text>
                                <Text style={styles.commentDate}>05/03/1992</Text>
                            </Body>
                        </Left>
                      </CardItem>
                      <CardItem content style={{marginTop : 0, paddingBottom : 0}}>
                          <Text style={styles.commentContent}>The Buddha is kept in the Chapel of the Emerald Buddha, which is located on the grounds of the Grand Palace in Bangkok.</Text>
                      </CardItem>
               </Card>
               <Card style={Fonts.style.commnetBox}>
                    <CardItem style={{marginTop : 0, paddingBottom : 0}}>
                        <Left>
                            <Thumbnail small source={Images.user3}/>
                            <Body>
                                <Text style={styles.commentName}>Julia Padilla</Text>
                                <Text style={styles.commentDate}>04/11/2017</Text>
                            </Body>
                        </Left>
                      </CardItem>
                      <CardItem content>
                          <Text style={styles.commentContent}>Don’t agree with this one!</Text>
                      </CardItem>
                  </Card>

                  <Card style={Fonts.style.commnetBox}>
                       <CardItem style={{marginTop : 0, paddingBottom : 0}}>
                           <Left>
                               <Thumbnail small source={Images.user4}/>
                               <Body>
                                   <Text style={styles.commentName}>Howard Maxwell</Text>
                                   <Text style={styles.commentDate}>12/28/2017</Text>
                               </Body>
                           </Left>
                         </CardItem>
                         <CardItem content>
                             <Text style={styles.commentContent}>The Buddha is kept in the Chapel of the Emerald Buddha, which is located on the grounds of the Grand Palace in Bangkok.</Text>
                         </CardItem>
                  </Card>
            </Content>

            <View style={styles.bottomview}>
            <View style={[Fonts.style.inputWrapperBordered, {marginRight: 20, marginLeft:20, marginBottom:20, height:45}]}>
              <Input  style={Fonts.style.inputBordered} placeholder='ADD COMMENT' placeholderTextColor={Fonts.colors.input}/>
              <Text style={{ marginTop:10}}><Image source={Images.commentAdd} resizeMode='contain' style={{width:30, height:30}}></Image></Text>
            </View>
            </View>
          </View>

        </Content>
        <View style={styles.bottomview}>
             
                <Item>
                    <Input style={{borderWidth:1,borderColor:'black',borderRadius:25,paddingLeft:10,}} placeholder='ADD COMMENT'/> 
                    <Button transparent>
                      <Image source={Images.discardChangeIcon} />
                    </Button>
                </Item>
              
        </View>
  </Container>
    )
  }
}

