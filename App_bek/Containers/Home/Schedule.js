import React from 'react'
import { ScrollView,StatusBar, Text, Image, View,Dimensions } from 'react-native'
import { Container, Content, Left,Icon, Body, Right, ListItem, Thumbnail,List,Button,Card, CardItem,Grid,Col, Badge } from 'native-base';

import { Images, Fonts } from '../../Themes'
import RoundedButton from '../../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'

import styles from './Styles/HomeComponentsStyle'
const { width, height } = Dimensions.get('window')

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Hr from 'react-native-hr'

export default class Schedule extends React.Component {

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
               <Content>
               <List  dataArray={this.state.results.items} renderRow={(item) =>
                     <ListItem button avatar style={{marginBottom:5}}>
                         <Left>
                           {item.last === false ? <Thumbnail source={item.image} style={{width:50, height:50,borderRadius:25}} /> : <Badge primary style={{width:50, height : 50, borderRadius : 50, backgroundColor:'rgb(172, 14, 250)', padding:7, paddingTop:15, paddingLeft:20}}><Text style={{fontSize:16, color:'white', fontFamily:Fonts.style.bold}}>6</Text></Badge>}
                         </Left>
                         <Body style={{borderBottomWidth:0}}>
                           <Text style={[styles.listDetail, Fonts.style.textGrey]}>{item.Time}</Text>
                           {item.last === false ? <Text style={styles.listDetail} note>{item.title}</Text> : <Text style={[Fonts.style.h3, {marginTop:-20}]} >{item.title}</Text>}
                         </Body>
                     </ListItem>
                 } />
               </Content>
         </View>

   )
 }
}