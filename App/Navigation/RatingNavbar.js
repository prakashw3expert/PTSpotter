import React, { PropTypes } from 'react'
import { View, Image, LayoutAnimation, Text } from 'react-native'
import NavItems from './NavItems'
import styles from './Styles/RatingNavbarStyle'
import SearchBar from '../Components/SearchBar'
import { connect } from 'react-redux'
import { Metrics, Images, Fonts } from '../Themes'
import SearchActions from '../Redux/SearchRedux'

class RatingNavbar extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
     
    }
  }

 
  
  renderMiddle () {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
      return (
        <View style={{flexDirection:'row',flex:1}}>
        <Text style={[Fonts.style.h1,styles.customTitle]}>{this.props.title}</Text>
        </View>
      )
    
  }

  renderRightButtons () {

      return (
        <View style={styles.rightButtons}>
          {NavItems.messageIconPlus()}
        </View>
      )

  }

  renderLeftButtons () {
      return (
        <View style={styles.leftButtons}>
          {NavItems.backButton()}
        </View>
      )
  }

  render () {
    let state = this.props.navigationState
    let selected = state.children[state.index]
    while (selected.hasOwnProperty('children')) {
      state = selected
      selected = selected.children[selected.index]
    }

    const containerStyle = [
      styles.container,
      this.props.navigationBarStyle,
      state.navigationBarStyle,
      selected.navigationBarStyle
    ]

    return (
      <View style={containerStyle}>
        {this.renderLeftButtons()}
        {this.renderMiddle()}
        {this.renderRightButtons()}
      </View>
    )
  }
}

RatingNavbar.propTypes = {
  navigationState: PropTypes.object,
  navigationBarStyle: View.propTypes.style
}

const mapStateToProps = (state) => {
  return {
   
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RatingNavbar)
