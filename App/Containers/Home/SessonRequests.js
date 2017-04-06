import React from 'react'
import { ScrollView,StatusBar, Text, Image, View,Dimensions } from 'react-native'
import { Container, Content, Left,Icon, Body, Right, ListItem, Thumbnail,List,Button,Card, CardItem,Grid,Col, Badge } from 'native-base';

import { Images, Fonts } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

import styles from './Styles/HomeComponentsStyle'
const { width, height } = Dimensions.get('window')

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Hr from 'react-native-hr'

export default class Sessions extends React.Component {

   constructor(props) {
         super(props);

     }
  render () {
    return (
          <View style={styles.sessionView}>
              <Text style={[Fonts.style.h2, Fonts.style.textCenter, Fonts.style.mb10]}>
                SESSION REQUESTS
              </Text>
              <Content style={{paddingTop:5, marginBottom:10}}>
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

              </Content>
          </View>

    )
  }
}