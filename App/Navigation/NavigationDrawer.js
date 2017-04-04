import React, { PropTypes, Component } from 'react'
import Drawer from 'react-native-drawer'
import { DefaultRenderer, Actions as NavigationActions } from 'react-native-router-flux'
import DrawerContent from '../Containers/DrawerContent'
import { connect } from 'react-redux'
import Styles from './Styles/NavigationDrawerStyles'

/* *******************
* Documentation: https://github.com/root-two/react-native-drawer
********************/

class NavigationDrawer extends Component {
  render () {
    const state = this.props.navigationState
    const children = state.children
    return (
      <Drawer
        ref='navigation'
        type='overlay'
        onOpen={() => NavigationActions.refresh({key: state.key, open: true})}
        onClose={() => NavigationActions.refresh({key: state.key, open: false})}
        openDrawerOffset={.3}
        closedDrawerOffset={0}
        panOpenMask={0}

        relativeDrag={false}
        panThreshold={.25}
        content={<DrawerContent />}
        open={state.open}
        disabled={false}
        tweenDuration={150}
        tweenEasing="easeInOutQuad"
        acceptDoubleTap={true}
        acceptTap={true}
        acceptPan={true}
        negotiatePan={false}
        openDrawerOffset={0.245}
        panCloseMask={0.345}
        side='left'  >

        <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </Drawer>
    )
  }
}

NavigationDrawer.propTypes = {
  navigationState: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationDrawer)
