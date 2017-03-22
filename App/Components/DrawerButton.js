// @flow

import React, { Component } from 'react'
import {  TouchableOpacity } from 'react-native'
import styles from './Styles/DrawerButtonStyles'
import { Button, Text } from 'native-base';

// Example


type DrawerButtonProps = {
  text: string,
  onPress: () => void
}

class DrawerButton extends Component {
  props: DrawerButtonProps

  render () {
    return (

    
      <TouchableOpacity onPress={this.props.onPress}>
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

export default DrawerButton
