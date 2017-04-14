import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Styles/DayButtonStyle'
import ExamplesRegistry from '../Services/ExamplesRegistry'


type DayButtonProps = {
  onPress: () => void,
  text?: string,
  children?: string,
  style: PropTypes.object,
  navigator?: Object
}

export default class DayButton extends React.Component {
  
  props: DayButtonProps

  getText () {
    const buttonText = this.props.text || this.props.children || ''
    return buttonText.toUpperCase()
  }

  render () {
    return (
      <TouchableOpacity style={[styles.button, this.props.style]} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.getText()}</Text>
      </TouchableOpacity>
    )
  }
}
