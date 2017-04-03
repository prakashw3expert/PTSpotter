// @flow

import React from 'react'
import { ScrollView, Text, Image, View,TouchableOpacity,PickerIOS,Dimensions } from 'react-native'
import { Container, Content,Input,Form,Item,Icon,Body,Thumbnail,Button,Grid,Col, Switch,Left, Right, ListItem } from 'native-base';

import { Images,Fonts,Colors } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Actions as NavigationActions } from 'react-native-router-flux'
// Styles
import styles from './Styles/EditProfileStyle'
import Modal from 'react-native-simple-modal';
var PickerItemIOS = PickerIOS.Item
const { width, height } = Dimensions.get('window')
export default class EditProfile extends React.Component {

  state = {
      open: false,
      modalVisible: false,
      availabilityTrueSwitchIsOn: true,
      availabilityFalseSwitchIsOn: false,
    };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render () {

    let imageView;
    imageView = <Image source={Images.addPhotoCircle} style={styles.userImage}/>


    return (

        <Content>
          <View>
          <Form>
              <View style={styles.headerView}>
                <Image source={Images.editProfileHeader}>
                    <View style={styles.navbarview}>
                      <Button transparent iconLeft onPress={NavigationActions.pop}>
                        <Ionicons name='ios-arrow-back' size={30} style={{color:'white',marginLeft:(width >= 375 ? 0 : 20)}}/>
                      </Button>
                      <Text style={[Fonts.style.h1, Fonts.style.textWhite,{flex:1, textAlign:'center',marginRight:(width >= 375 ? 0 : 20)}]}>EDIT PROFILE</Text>
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
                    <Button light full rounded bordered style={Fonts.style.bordered}  onPress={() => this.setState({open: true})}>
                        <Text style={[Fonts.style.buttonTextNormalGrey]}>ADD GYM</Text>
                    </Button>
                  </View>

                  <ListItem style={{borderBottomWidth:0}}>
                    <Body>
                      <Text style={[Fonts.style.h3, Fonts.style.mt20, {marginLeft: "-7%"}]}> AVAILABILITY UPON REQUEST</Text>
                    </Body>
                    <Right style={{marginTop:15}}>
                        <Switch
                          onValueChange={(value) => this.setState({availabilityTrueSwitchIsOn: value})}
                          onTintColor="rgb(172,14,250)"
                          thumbTintColor="#fff"
                          tintColor="#777777"
                          style={{marginRight:0}}
                          value={this.state.availabilityTrueSwitchIsOn} />
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

              <Modal
                offset={this.state.offset}
                open={this.state.open}
                overlayBackground={Colors.popupoverlayBackground}
                modalDidOpen={() => console.log('modal did open')}
                modalDidClose={() => this.setState({open: false})}
                style={{alignItems: 'center'}}>
                <View>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                      <Text style={{marginLeft:20,flex:1}}></Text>
                      <Text style={[Fonts.style.h2,{flex:4,textAlign:'center'}]}>ADD GYM</Text>
                      <Button transparent onPress={() => this.setState({open: false})}>
                          <MaterialCommunityIcons name="close" size={22} color="rgb(102,102,102)"/>
                      </Button>
                  </View>

                  <Text style={styles.modelText}>
                    THE CLIENTS SEARCH RESULT WILL BE BASED ON YOUR GYM(S) LOCATION
                  </Text>

                  <View style={styles.containers}>

                  
                  <View style={[Fonts.style.inputWrapperBordered,{height:45}]}>
                    <MaterialCommunityIcons name='dumbbell' style={[Fonts.style.borderedIcon,{color:'rgba(172,14,250,0.5)'}]} />
                    <Input  style={Fonts.style.inputBordered} placeholder='GYM NAME' placeholderTextColor={Fonts.colors.input}/>
                  </View>

                  <View style={[Fonts.style.inputWrapperBordered,{height:45}]}>
                    <MaterialCommunityIcons name='barcode' style={[Fonts.style.borderedIcon,{color:'rgba(172,14,250,0.5)'}]} />
                    <Input  style={Fonts.style.inputBordered} placeholder='POSTCODE' placeholderTextColor={Fonts.colors.input}/>
                  </View>

              </View>

                  
                
                  <View style={[Fonts.style.mt15,Fonts.style.mb15]}>
                    <Button light full rounded bordered style={Fonts.style.bordered}  onPress={() => this.setState({open: false})}>
                        <Text style={[Fonts.style.buttonTextNormalGrey]}>ADD GYM</Text>
                    </Button>
                  </View>
                  
                </View>
              </Modal>

        </Form>
        </View>
        </Content>

    )
  }
}
