// @flow

import React from 'react'
import { ScrollView, Text,StatusBar, Image, Modal, View,TouchableOpacity,PickerIOS,Dimensions,Platform } from 'react-native'
import { Container, Content,Input,Form,Item,Icon,Body,Thumbnail,Button,Grid,Col, Switch,Left, Right, ListItem } from 'native-base';

import { Images,Fonts,Colors } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Hr from 'react-native-hr'
import { Actions as NavigationActions } from 'react-native-router-flux'
// Styles
import styles from './Styles/EditProfileStyle'
import Modalss from 'react-native-simple-modal';
var PickerItemIOS = PickerIOS.Item
const { width, height } = Dimensions.get('window')

import { connect } from 'react-redux'

class EditProfile extends React.Component {

  state = {
      open: false,
      modalVisible: false,
      trainigOptionOpen : false,
      trainigModalVisible : false,
      availabilityTrueSwitchIsOn: true,
      availabilityFalseSwitchIsOn: false,
      modalPhotosVisible : false,
    };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  setModalPhotosVisible(visible) {
    this.setState({modalPhotosVisible: visible});
  }




  render () {

    let imageView;
    imageView = <Image source={Images.addPhotoCircle} style={styles.userImage}/>


    return (

        <Content>
        <StatusBar barStyle='light-content' backgroundColor={Colors.background}/>
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

                  { (this.props.username === 'trainer@ptspotter.co.uk') ? <Text style={[Fonts.style.h2, Fonts.style.mt20]}> MY GYMS</Text> : null }

                  { (this.props.username === 'trainer@ptspotter.co.uk') ?  <View style={Fonts.style.mt15}>
                    <Button light full rounded bordered style={Fonts.style.bordered}  onPress={() => this.setState({open: true})}>
                        <Text style={[Fonts.style.buttonTextNormalGrey]}>ADD GYM</Text>
                    </Button>
                  </View> : null}


                  <ListItem style={{borderBottomWidth:0}}>
                    <Body>
                      <Text style={[Fonts.style.h3, Fonts.style.mt20, {marginLeft: (Platform.OS === 'ios') ? "-7%" : "-1%"}]}> {(this.props.username === 'trainer@ptspotter.co.uk') ? "AVAILABILITY UPON REQUEST" : "MAKE MY PROFILE PRIVATE"}</Text>
                    </Body>
                    <Right style={{marginTop:15}}>
                        <Switch
                          onValueChange={(value) => this.setState({availabilityTrueSwitchIsOn: value})}
                          onTintColor="rgb(172,14,250)"
                          tintColor="#777777"
                          style={{marginRight:0}}
                          value={this.state.availabilityTrueSwitchIsOn} />
                    </Right>
                  </ListItem>

                  <Text style={[Fonts.style.h2, Fonts.style.mt20]}> {(this.props.username === 'trainer@ptspotter.co.uk') ? "TRAINING OPTIONS" : "MY INTERESTS"}</Text>
                  <TouchableOpacity onPress={() => this.setState({trainigOptionOpen: true})}>
                  <View style={[Fonts.style.inputWrapperBordered, {paddingRight:5}]} >
                    <Text style={styles.searchBox}> SEARCH AND ADD</Text>
                    <View style={{backgroundColor:'rgb(172,14,250)', width:30,height:30, borderRadius:100, marginTop:7,marginRight:5, paddingRight:20}}><Icon name='search' style={Fonts.style.borderedIconRight} /></View>
                  </View>
                  <View style={{marginTop:10, flexDirection:'row'}}>
                     <Button rounded small style={Fonts.style.categoryTag}><Text style={Fonts.style.categoryTagText}>Yoga <MaterialCommunityIcons name="close" size={18} color="rgb(255,255,255)" style={{paddingTop:10}}/></Text></Button>
                     <Button rounded small style={Fonts.style.categoryTagGray}><Text style={Fonts.style.categoryTagText}>Cardio <MaterialCommunityIcons name="close" size={18} color="rgb(255,255,255)"/></Text></Button>
                  </View>
                  </TouchableOpacity>

                  { (this.props.username === 'trainer@ptspotter.co.uk') ? <Text style={[Fonts.style.h2, Fonts.style.mt20]}> PHOTOS AND VIDEOS </Text> : null }

                  { (this.props.username === 'trainer@ptspotter.co.uk') ?  <View style={Fonts.style.mt15}>
                    <Button light full rounded bordered style={Fonts.style.bordered}  onPress={() => this.setState({modalPhotosVisible: true})}>
                        <Text style={[Fonts.style.buttonTextNormalGrey]}>ADD PHOTOS AND VIDEOS</Text>
                    </Button>
                  </View> : null}


                  <View style={Fonts.style.mt40}>
                    <Button light full rounded bordered style={Fonts.style.default} >
                        <Text style={[Fonts.style.buttonText, Fonts.style.textBold]}>CONTINUE</Text>
                    </Button>
                  </View>

              </View>

              <Modalss
                offset={100}
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
              </Modalss>

          <Modalss
            offset={200}
            open={this.state.trainigOptionOpen}
            overlayBackground={Colors.popupoverlayBackground}
            modalDidOpen={() => console.log('modal did open')}
            modalDidClose={() => this.setState({trainigOptionOpen: false})}
            style={{alignItems: 'center'}}>
            <View>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                  <Text style={{marginLeft:20}}></Text>
                  <Text style={[Fonts.style.h2,{flex:1,textAlign:'center',marginLeft:20,fontSize:(width >= 325) ? 16 : 12}]}>{(this.props.username === 'trainer@ptspotter.co.uk') ? "ADD NEW WORKOUT" : "MY INTERESTS"}</Text>
                  <Button transparent onPress={() => this.setState({trainigOptionOpen: false})}>
                      <MaterialCommunityIcons name="close" size={22} color="rgb(102,102,102)"/>
                  </Button>
              </View>

              <Text style={styles.modelText}>
                SEARCH AND ADD WORKOUTS FOR 10 OF OCTOBER
              </Text>

              <View style={styles.containers}>

                  <View style={[Fonts.style.inputWrapperBordered, {paddingRight:5}]} >
                    <Input  style={Fonts.style.inputBordered} placeholder='SEARCH AND ADD' placeholderTextColor={Fonts.colors.input}/>
                    <View style={{backgroundColor:'rgb(172,14,250)', width:30,height:30, borderRadius:100, marginTop:7, paddingRight:20,marginRight:5}}><Icon name='search' style={Fonts.style.borderedIconRight} /></View>
                  </View>

                  <View style={{marginTop:10, flexDirection:'row'}}>
                     <Button rounded small style={Fonts.style.categoryTagPink}><Text style={Fonts.style.categoryTagText}>Yoga <MaterialCommunityIcons name="close" size={18} color="rgb(255,255,255)" style={{paddingTop:10}}/></Text></Button>
                     <Button rounded small style={Fonts.style.categoryTagPink}><Text style={Fonts.style.categoryTagText}>Cardio <MaterialCommunityIcons name="close" size={18} color="rgb(255,255,255)"/></Text></Button>
                  </View>

              </View>

            </View>
          </Modalss>

          <Modal
              animationType={"slide"}
              transparent={false}
              visible={this.state.modalPhotosVisible}
              onRequestClose={() => {alert("Modal has been closed.")}}>
               <Container>
                  <View style={styles.headerView}>
                    <View style={styles.navbarview}>
                      <View style={{flex:0.5}}>
                        <Button transparent iconLeft onPress={() => {this.setModalPhotosVisible(!this.state.modalPhotosVisible)}}>
                          <MaterialCommunityIcons name="close" size={28} style={{color:'white'}}/>
                        </Button>
                      </View>


                      <View style={[styles.navbarCenterView, {marginTop : 10}]}>
                          <Text style={[Fonts.style.h2,Fonts.style.textWhite,{textAlign:'center'}]}> PHOTOS & VIDEOS </Text>

                      </View>
                      <View style={{flex:0.5}}>
                      <Button transparent>
                          <Text></Text>
                      </Button>
                      </View>

                  </View>
                </View>

                <AddGallery />

            </Container>
          </Modal>

        </Form>
        </View>
        </Content>

    )
  }
}

class AddGallery extends React.Component {

 render () {
   return (

         <View style={{backgroundColor:Colors.background,height:height}}>

            <Text style={styles.filtertitles}>
              UPLOAD PHOTO
            </Text>
            <View style={styles.containers} >
              <TouchableOpacity >
              <View style={[Fonts.style.inputWrapperBordered, {paddingRight:5}]} >
                <Input disabled style={Fonts.style.inputBordered} placeholder='PICK IMAGE' placeholderTextColor={Colors.whiteMuted}/>
                <View style={{backgroundColor:'rgb(172,14,250)', width:30,height:30, borderRadius:15, marginTop:5,marginRight:5}}><MaterialCommunityIcons name='cloud-upload' style={[Fonts.style.borderedIconRight,{marginLeft:6}]} /></View>
              </View>
              </TouchableOpacity>
            </View>
              <Text style={styles.filtertitles}>
                UPLOAD VIDEO
              </Text>
              <View style={styles.containers} >
              <View style={[Fonts.style.inputWrapperBordered, {paddingRight:5}]} >
                <Input  style={Fonts.style.inputBordered} placeholder='VIDEO URL' placeholderTextColor={Colors.whiteMuted}/>
                <TouchableOpacity>
                <View style={{backgroundColor:'rgb(172,14,250)', width:30,height:30, borderRadius:15, marginTop:5,marginRight:5}}><MaterialCommunityIcons name='plus' style={[Fonts.style.borderedIconRight,{marginLeft:6,fontWeight:'800'}]} /></View>
                </TouchableOpacity>
              </View>
              </View>


            <View style={styles.horizontalRow}>
             <Hr lineColor='white'/>
            </View>
            <View>
            <ScrollView style={{height:365,}} contentContainerStyle={styles.imageCollection}>
              <View style={styles.imageTouch}>
                <Image source={Images.user1} style={styles.imageThumbnail}/>
                <TouchableOpacity style={{height:20,position:'absolute',top:2,right:3}}>
                  <View style={{backgroundColor:'rgb(172,14,250)',alignItems:'center', width:20,height:20, borderRadius:10,}}><Icon name='close' style={{backgroundColor:'transparent',color:'white',fontSize:20,marginRight:0}} /></View>
                </TouchableOpacity>
              </View>

              <View style={styles.imageTouch}>
                <Image source={Images.user2} style={styles.imageThumbnail}/>
                <TouchableOpacity style={{height:20,position:'absolute',top:2,right:3}}>
                  <View style={{backgroundColor:'rgb(172,14,250)',alignItems:'center', width:20,height:20, borderRadius:10,}}><Icon name='close' style={{backgroundColor:'transparent',color:'white',fontSize:20,marginRight:0}} /></View>
                </TouchableOpacity>
              </View>

              <View style={styles.imageTouch}>
                <Image source={Images.user3} style={styles.imageThumbnail}/>
                <TouchableOpacity style={{height:20,position:'absolute',top:2,right:3}}>
                  <View style={{backgroundColor:'rgb(172,14,250)',alignItems:'center', width:20,height:20, borderRadius:10,}}><Icon name='close' style={{backgroundColor:'transparent',color:'white',fontSize:20,marginRight:0}} /></View>
                </TouchableOpacity>
              </View>

              <View style={styles.imageTouch}>
                <Image source={Images.user4} style={styles.imageThumbnail}/>
                <TouchableOpacity style={{height:20,position:'absolute',top:2,right:3}}>
                  <View style={{backgroundColor:'rgb(172,14,250)',alignItems:'center', width:20,height:20, borderRadius:10,}}><Icon name='close' style={{backgroundColor:'transparent',color:'white',fontSize:20,marginRight:0}} /></View>
                </TouchableOpacity>
              </View>

              <View style={styles.imageTouch}>
                <Image source={Images.user5} style={styles.imageThumbnail}/>
                <TouchableOpacity style={{height:20,position:'absolute',top:2,right:3}}>
                  <View style={{backgroundColor:'rgb(172,14,250)',alignItems:'center', width:20,height:20, borderRadius:10,}}><Icon name='close' style={{backgroundColor:'transparent',color:'white',fontSize:20,marginRight:0}} /></View>
                </TouchableOpacity>
              </View>

            </ScrollView>
            </View>


         </View>



   )
 }
}



const mapStateToProps = (state) => {
  return {
    username: state.login.username
  }
}

export default connect(mapStateToProps)(EditProfile)
