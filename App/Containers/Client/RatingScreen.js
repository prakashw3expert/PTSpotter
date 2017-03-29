// @flow

import React from 'react'
import { ScrollView, Text, Image, View,TouchableOpacity } from 'react-native'
import { Container, Content,Input,Form,Item,Icon,Body,Thumbnail,Button, Switch,Left, Right, ListItem } from 'native-base';

import { Images,Fonts,Metrics } from '../../Themes'
import { Actions as NavigationActions } from 'react-native-router-flux'
// Styles
import styles from './Styles/RatingScreenStyle'

export default class RatingScreen extends React.Component {

  state = {
      colorTrueSwitchIsOn: true,
      colorFalseSwitchIsOn: false,
    };

  render () {

    let imageView;
    imageView = <Image source={Images.addPhotoCircle} style={styles.userImage}/>


    return (

        <Container>
          <Content style={{marginTop:Metrics.navBarHeight}}>
              <View>
                  <Text> RatingScreen will be here </Text>
              </View>
          </Content>
        </Container>

    )
  }
}
