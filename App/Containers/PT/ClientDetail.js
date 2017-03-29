// @flow

import React, { Component } from 'react'
import { ScrollView, Text, Image, View,TouchableOpacity } from 'react-native'
import { Container,Content,Form,Button,Icon, Tabs, Tab, TabHeading } from 'native-base';

import { Images,Fonts } from '../../Themes'
import RoundedButton from '../../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
// Styles
import styles from './Styles/ClientDetailStyle'

export default class EditProfile extends React.Component {

  state = {
      colorTrueSwitchIsOn: true,
      colorFalseSwitchIsOn: false,
    };


  render () {

    let imageView;
    imageView = <Image source={Images.addPhotoCircle} style={styles.userImage}/>


    return (

        <ScrollView>
          <View>
          <Form>
              <View style={styles.headerView}>
                <Image source={Images.editProfileHeader} style={{height:248}}>
                    <View style={styles.navbarview}>
                      <Button transparent iconLeft onPress={NavigationActions.pop}>
                        <Icon name='arrow-back' style={{color:'white'}}/>
                      </Button>
                      <Text style={[Fonts.style.h1, Fonts.style.textWhite,{flex:1, textAlign:'center'}]}></Text>
                      <Button transparent>
                          <Text></Text>
                      </Button>
                    </View>
                    <View style={styles.profileimage} >

                       {imageView}

                      <Text style={styles.username}> Ernest Woods </Text>
                      <Text style={styles.userAddress}> Bristol, BS4 5SS, UK </Text>
                    </View>
                </Image>

              </View>

              <View style={styles.containers}>
                <Tabs>
                  <Tab heading={ <TabHeading><Text>About</Text></TabHeading>}>
                      <About />
                  </Tab>
                  <Tab heading={ <TabHeading><Text>Notes</Text></TabHeading>}>
                      <Notes />
                  </Tab>

            </Tabs>

              </View>

        </Form>
        </View>
        </ScrollView>

    )
  }
}
class About extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Text>Square Thumbnail</Text>


                    <Text>Circular Thumbnail</Text>
                </Content>
            </Container>
        );
    }
}

class Notes extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Text>Square Thumbnail</Text>

                    <Text>Circular Thumbnail</Text>
                </Content>
            </Container>
        );
    }
}
