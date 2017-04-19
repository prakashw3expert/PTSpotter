// @flow

import React, { Component } from 'react'
import {  TouchableOpacity } from 'react-native'
import styles from './Styles/DrawerButtonStyles'
import { Button, Text, ListItem, Left, Right,Body,Badge, Icon } from 'native-base';
import Fonts from '../Themes/Fonts'
// Example


type DrawerButtonProps = {
  text: string,
  icon: string,
  onPress: () => void
}

class DrawerButton extends Component {
  props: DrawerButtonProps

  render () {
    var icon = (this.props.icon) ? this.props.icon : 'list';
    var color  = (this.props.active) ? 'rgb(172,14,250)' : 'rgba(102,102,102, 0.5)';
    return (
      <ListItem icon stye={{marginBottom : 36, borderBottomWidth : 0}}>
          <Left><Icon name={icon} style={{fontSize : 20, color: color, paddingTop:5}}/></Left>
          <Body style={{borderBottomWidth:0}}>
            <TouchableOpacity onPress={this.props.onPress}>
              <Text style={styles.text} style={{fontSize : 16, color: 'rgb(102,102,102)', fontFamily : Fonts.type.regular, letterSpacing: 1.2}}>{this.props.text}</Text>
            </TouchableOpacity>
          </Body>
          <Right style={{borderBottomWidth:0}}>{(this.props.counter) ? <Badge primary style={{backgroundColor:"rgb(172, 14, 250)"}}><Text style={{fontSize : 14, fontFamily : Fonts.type.regular}}>2</Text></Badge> : <Text></Text>}</Right>
      </ListItem>


    )
  }
}

export default DrawerButton
