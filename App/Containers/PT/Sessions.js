import React, { Component } from 'react';
import { ScrollView, Text, Image, View } from 'react-native'
import {Container,Content, TabHeading, Badge  } from 'native-base';

import { Images, Colors, Fonts } from '../../Themes'

import { Actions as NavigationActions } from 'react-native-router-flux'
import styles from './Styles/SessionsScreenStyle'

import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';

import { SessionTabBar } from '../../Components/SessionTabBar'

import Hr from 'react-native-hr'

export default class SettingScreen extends React.Component {

  render () {

    return (
      <Container>
          <View style={[styles.mainContainer]}>
            <ScrollableTabView
            locked={true}

              tabBarStyle={{borderWidth:0, height:40}}
              tabBarBackgroundColor={Colors.background}
              tabBarActiveTextColor={Colors.white}
              tabBarInactiveTextColor={Colors.whiteMuted}
              tabBarUnderlineStyle={Fonts.style.tabBorderSytel}
              tabBarTextStyle={[styles.tabText]}
              tabBarTabStyle={{paddingBottom:0}}
              renderTabBar={() => <DefaultTabBar />}>

              <Monthly tabLabel='Daily' />


              <Text tabLabel='Monthly' >favorite</Text>
              <Text tabLabel='Yearly'>project</Text>
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
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.containerListView}>
                    <View primary style={styles.dateBadgeActive}>
                      <Text style={styles.badgeDateActive}>11</Text>
                      <Text style={styles.badgeTextActive}>Mon</Text>
                    </View>

                    <View primary style={styles.dateBadge}>
                      <Text style={styles.badgeDate}>11</Text>
                      <Text style={styles.badgeText}>Mon</Text>
                    </View>

                    <View primary style={styles.dateBadge}>
                      <Text style={styles.badgeDate}>12</Text>
                      <Text style={styles.badgeText}>Mon</Text>
                    </View>

                    <View primary style={styles.dateBadge}>
                      <Text style={styles.badgeDate}>13</Text>
                      <Text style={styles.badgeText}>Mon</Text>
                    </View>
                    <View primary style={styles.dateBadge}>
                      <Text style={styles.badgeDate}>14</Text>
                      <Text style={styles.badgeText}>Mon</Text>
                    </View>
                    <View primary style={styles.dateBadge}>
                      <Text style={styles.badgeDate}>15</Text>
                      <Text style={styles.badgeText}>Mon</Text>
                    </View>
                    <View primary style={styles.dateBadge}>
                      <Text style={styles.badgeDate}>1</Text>
                      <Text style={styles.badgeText}>Mon</Text>
                    </View>
                    <View primary style={styles.dateBadge}>
                      <Text style={styles.badgeDate}>10</Text>
                      <Text style={styles.badgeText}>Mon</Text>
                    </View>
                    <View primary style={styles.dateBadge}>
                      <Text style={styles.badgeDate}>10</Text>
                      <Text style={styles.badgeText}>Mon</Text>
                    </View>
                    <View primary style={styles.dateBadge}>
                      <Text style={styles.badgeDate}>10</Text>
                      <Text style={styles.badgeText}>Mon</Text>
                    </View>
                </View>
              </ScrollView>

              <View style={{marginBottom:20, marginTop:20, marginLeft : -10, marginRight:-10}}>
                <Hr lineColor='rgb(234, 234, 234)'  />
              </View>

              <View style={[styles.headerView, {marginLeft:20, marginRight:20, marginTop:10}]}>
                <Image source={Images.EmptySessions} style={{width : '100%', height : 188, resizeMode: 'contain',marginBottom:10}}>
                    <View style={styles.navbarview}>
                      <Text style={[Fonts.style.h1, Fonts.style.textWhite,{flex:1, textAlign:'center'}]}>EDIT PROFILE</Text>
                    </View>
                </Image>
                <Text style={[Fonts.style.h3, Fonts.style.textCenter, Fonts.style.mt10]}>YOU DON’T HAVE ANY SESSIONS FOR THE SELECTED DATE</Text>
              </View>
          </View>
        </Container>
    )
  }
}
