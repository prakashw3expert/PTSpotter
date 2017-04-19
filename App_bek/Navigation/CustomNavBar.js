import React, { PropTypes } from 'react'
import { View, Image, LayoutAnimation, Text } from 'react-native'
import NavItems from './NavItems'
import styles from './Styles/CustomNavBarStyles'
import SearchBar from '../Components/SearchBar'
import { connect } from 'react-redux'
import { Metrics, Images, Fonts } from '../Themes'
import SearchActions from '../Redux/SearchRedux'

class CustomNavBar extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      showSearchBar: false
    }
  }

  showSearchBar = () => {
    this.setState({showSearchBar: true})
  }

  cancelSearch = () => {
    this.setState({showSearchBar: false})
    this.props.cancelSearch()
  }

  onSearch = (searchTerm) => {
    this.props.performSearch(searchTerm)
  }

  renderMiddle () {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
      return (
        <Text style={[Fonts.style.h1,styles.customTitle]}>{this.props.title}</Text>
      )

  }

  renderRightButtons () {

      return (
        <View style={styles.rightButtons}>
          {NavItems.messageIcon()}
        </View>
      )

  }

  renderLeftButtons () {
    if (this.state.showSearchBar) {
      return null
    } else {
      return (
        <View style={styles.leftButtons}>
          {NavItems.hamburgerButton()}
        </View>
      )
    }
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

CustomNavBar.propTypes = {
  navigationState: PropTypes.object,
  navigationBarStyle: View.propTypes.style
}

const mapStateToProps = (state) => {
  return {
    //searchTerm: state.search.searchTerm
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    performSearch: (searchTerm) => dispatch(SearchActions.search(searchTerm)),
    cancelSearch: () => dispatch(SearchActions.cancelSearch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomNavBar)