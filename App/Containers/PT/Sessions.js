import React, { Component } from 'react';
import { ScrollView, Text, Image, View,Switch, TouchableHighlight,Dimensions,PickerIOS } from 'react-native'
import {Container,Tabs, Tab, TabHeading  } from 'native-base';

import { Images, Colors, Fonts } from '../../Themes'

import { Actions as NavigationActions } from 'react-native-router-flux'
import styles from './Styles/SessionsScreenStyle'

import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';



export default class SettingScreen extends React.Component {

  render () {

    return (
      <Container>
          <View style={[styles.mainContainer]}>

            <ScrollableTabView
              style={{}}
              tabBarBackgroundColor={Colors.background}
              tabBarActiveTextColor={Colors.white}
              tabBarInactiveTextColor={Colors.whiteMuted}
              tabBarUnderlineStyle={styles.tabBorderSytel}
              tabBarTextStyle={[styles.tabText]}
              renderTabBar={() => <DefaultTabBar />}>

              <Text tabLabel='Daily' style={{padding:20, backgroundColor:'#fff'}}>My</Text>
              <Text tabLabel='Monthly'>favorite</Text>
              <Text tabLabel='Yearly'>project</Text>
            </ScrollableTabView>

            </View>
            </Container>
    )
  }
}
