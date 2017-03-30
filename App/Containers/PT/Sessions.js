import React, { Component } from 'react';
import { ScrollView, Text, Image, View,Switch, TouchableHighlight,Dimensions,PickerIOS } from 'react-native'
import {Container,Content,Tabs, Tab, TabHeading, Badge  } from 'native-base';

import { Images, Colors, Fonts } from '../../Themes'

import { Actions as NavigationActions } from 'react-native-router-flux'
import styles from './Styles/SessionsScreenStyle'

import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';

import { SessionTabBar } from '../../Components/SessionTabBar'

export default class SettingScreen extends React.Component {

  render () {

    return (
      <Container>
          <View style={[styles.mainContainer]}>

            <ScrollableTabView
              tabBarStyle={{borderWidth:0, height:40}}
              tabBarBackgroundColor={Colors.background}
              tabBarActiveTextColor={Colors.white}
              tabBarInactiveTextColor={Colors.whiteMuted}
              tabBarUnderlineStyle={Fonts.style.tabBorderSytel}
              tabBarTextStyle={[styles.tabText]}
              tabBarTabStyle={{paddingBottom:0}}
              renderTabBar={() => <DefaultTabBar />}>

              <Monthly tabLabel='Daily' />


              <Text tabLabel='Monthly'  style={styles.tabContent}>favorite</Text>
              <Text tabLabel='Yearly'  style={styles.tabContent}>project</Text>
            </ScrollableTabView>

            </View>
            </Container>
    )
  }
}

class Monthly extends React.Component {

  render () {

    return (
        <Container>
          <View style={[styles.tabContent]}>
              <View style={[styles.tabHeading]}>
                <Text style={ Fonts.style.textCenter}>
                  <Text style={[Fonts.style.h2, {width:'100%'}]}>OCTOBER</Text>
                </Text>
              </View>
              <View style={[styles.dates, {height:40, width:40, flex:0, marginLeft:10}]}>
                  <View primary style={styles.dateBadge}>
                    <Text style={styles.badgeDate}>10</Text>
                    <Text style={styles.badgeText}>Mon</Text>
                  </View>

                  <View primary style={styles.dateBadge}>
                    <Text style={styles.badgeDate}>10</Text>
                    <Text style={styles.badgeText}>Mon</Text>
                  </View>

              </View>
          </View>
        </Container>
    )
  }
}
