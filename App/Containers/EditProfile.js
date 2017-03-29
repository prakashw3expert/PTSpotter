// @flow

import React from 'react'
import { ScrollView, Text, Image, View,TouchableOpacity } from 'react-native'
import { Container, Content,Input,Form,Item,Icon,Body,Thumbnail,Button, Switch,Left, Right, ListItem } from 'native-base';

import { Images,Fonts } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import { Actions as NavigationActions } from 'react-native-router-flux'
// Styles
import styles from './Styles/EditProfileStyle'

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
                <Image source={Images.editProfileHeader}>
                    <View style={styles.navbarview}>
                      <Button transparent iconLeft onPress={NavigationActions.pop}>
                        <Icon name='arrow-back' style={{color:'white'}}/>
                      </Button>
                      <Text style={[Fonts.style.h1, Fonts.style.textWhite,{flex:1, textAlign:'center'}]}>EDIT PROFILE</Text>
                      <Button transparent>
                          <Text></Text>
                      </Button>
                    </View>
                    <View style={styles.profileimage} >
                      <TouchableOpacity>
                       {imageView}
                      </TouchableOpacity>
                    </View>
                </Image>

              </View>

              <View style={styles.containers}>

                  <Text style={[Fonts.style.h2, Fonts.style.mt20]}> GENERAL</Text>
                  <View style={Fonts.style.inputWrapperBordered}>
                    <Icon name='person' style={Fonts.style.borderedIcon} />
                    <Input  style={Fonts.style.inputBordered} placeholder='NAME' placeholderTextColor={Fonts.colors.input}/>
                  </View>

                  <View style={Fonts.style.inputWrapperBordered}>
                    <Icon name='mail' style={Fonts.style.borderedIcon} />
                    <Input  style={Fonts.style.inputBordered} placeholder='EMAIL ADDRESS' placeholderTextColor={Fonts.colors.input}/>
                  </View>

                  <View style={Fonts.style.inputWrapperBordered}>
                    <Icon name='call' style={Fonts.style.borderedIcon} />
                    <Input  style={Fonts.style.inputBordered} placeholder='PHONE NUMBER' placeholderTextColor={Fonts.colors.input}/>
                  </View>

                  <View style={Fonts.style.inputWrapperBordered}>
                    <Input multiline={true} numberOfLines = {30} style={Fonts.style.inputMultipleBordered} placeholder='ABOUT' placeholderTextColor={Fonts.colors.input}/>
                  </View>

                  <Text style={[Fonts.style.h2, Fonts.style.mt20]}> MY GYMS</Text>

                  <View style={Fonts.style.mt15}>
                    <Button light full rounded bordered style={Fonts.style.bordered}  onPress={NavigationActions.mobile}>
                        <Text style={[Fonts.style.buttonTextNormalGrey]}>ADD GYM</Text>
                    </Button>
                  </View>

                  <ListItem style={{borderBottomWidth:0}}>
                    <Body>
                      <Text style={[Fonts.style.h3, Fonts.style.mt20, {marginLeft: "-7%"}]}> AVAILABILITY UPON REQUEST</Text>
                    </Body>
                    <Right style={{marginTop:15}}>
                        <Switch valur={true} color="blue" />
                    </Right>
                  </ListItem>

                  <Text style={[Fonts.style.h2, Fonts.style.mt20]}> TRAINING OPTIONS</Text>

                  <View style={[Fonts.style.inputWrapperBordered, {paddingRight:5}]}>
                    <Input  style={Fonts.style.inputBordered} placeholder='SEARCH AND ADD' placeholderTextColor={Fonts.colors.input}/>
                    <View style={{backgroundColor:'rgb(172,14,250)', width:30,height:30, borderRadius:100, marginTop:6, paddingRight:20}}><Icon name='search' style={Fonts.style.borderedIconRight} /></View>
                  </View>

                  <View style={Fonts.style.mt40}>
                    <Button light full rounded bordered style={Fonts.style.default}  onPress={NavigationActions.mobile}>
                        <Text style={[Fonts.style.buttonText, Fonts.style.textBold]}>CONTINUE</Text>
                    </Button>
                  </View>

              </View>

        </Form>
        </View>
        </ScrollView>

    )
  }
}
