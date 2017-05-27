// @flow

import React from 'react'
import { ScrollView,KeyboardAvoidingView, Text,StatusBar, Image, Modal, View,TouchableOpacity,PickerIOS,Dimensions,Platform } from 'react-native'
import { Container, Content,Input,Form,Item,Icon,List,Body,Thumbnail,Button,Grid,Col, Switch,Left, Right, ListItem } from 'native-base';
import update from 'react-addons-update';
import { Images,Fonts,Colors } from '../Themes'
import RoundedButton from '../Components/RoundedButton'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Hr from 'react-native-hr'
import { Actions as NavigationActions } from 'react-native-router-flux'
import styles from './Styles/EditProfileStyle'
import Modalss from 'react-native-simple-modal';
var PickerItemIOS = PickerIOS.Item
const { width, height } = Dimensions.get('window')
var ImagePicker = require('react-native-image-picker');
import { connect } from 'react-redux'
import {api} from  "../Services/Api"
import { call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import LoginActions from '../Redux/UserRedux'

class EditProfile extends React.Component {

  constructor(props) {
         super(props);
         this.state = {
           open: false,
           modalVisible: false,
           trainigOptionOpen : false,
           trainigModalVisible : false,
           availabilityTrueSwitchIsOn: true,
           availabilityFalseSwitchIsOn: false,
           modalPhotosVisible : false,
           gymname : '',
           postcode : '',
           avatarSource: null,
           myGyms : [],
           myInterests : [],
           name : '',
           email : '',
           phone : '',
           about : '',
           categories : [],

         }
         this.addGym = this.addGym.bind(this);
         this.removeGym = this.removeGym.bind(this);
         this.addInterest = this.addInterest.bind(this);
         this.removeInterest = this.removeInterest.bind(this);
         this.updateUserProfile = this.updateUserProfile.bind(this);
         this.handleInterest = this.handleInterest.bind(this);

     }


  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  setModalPhotosVisible(visible) {
    this.setState({modalPhotosVisible: visible});
  }

  componentWillMount () {
    console.log(this.props.user.profile);

    this.setState({
      name : (this.props.user.profile.name) ? this.props.user.profile.name : '',
      email : (this.props.user.profile.email) ? this.props.user.profile.email : '',
      phone : (this.props.user.profile.phone) ? this.props.user.profile.phone : '',
      about : (this.props.user.profile.about) ? this.props.user.profile.about : '',
      myGyms : (this.props.user.profile.myGyms) ? this.props.user.profile.myGyms : [],
      myInterests : (this.props.user.profile.myInterests) ? this.props.user.profile.myInterests : []
    })
  }

  componentDidMount () {

    api.getCategories(this.props.user.accessToken)
     .then((response) => {
        this.setState({categories : response.data})
          console.log('category List : ', this.state.categories)
     })
    // this.setState({email : this.props.prevData.email})
    // this.setState({mobile : this.props.prevData.mobile})
    //console.log(this.props.user.profile.myInterests);
  }
  selectPhotoTapped() {
  const options = {
    quality: 1.0,
    maxWidth: 500,
    maxHeight: 500,
    storageOptions: {
      skipBackup: true
    }
  };

  ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response);

    if (response.didCancel) {
      console.log('User cancelled photo picker');
    }
    else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    }
    else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    }
    else {
      let source = { uri: response.uri };

      // You can also display the image using data:
      // let source = { uri: 'data:image/jpeg;base64,' + response.data };

      this.setState({
        avatarSource: source
      });
    }
  });
}

addGym = () => {

  // var currentGyms = this.state.myGyms;
  // currentGyms.push({"name" : this.state.gymname, "postcode" : this.state.postcode});
  // this.setState({myGyms : currentGyms, gymname : '', postcode : '', open: false });
  this.setState(prevState => ({
    myGyms: [...prevState.myGyms, {"name" : this.state.gymname, "postcode" : this.state.postcode}],
    open : false,
    gymname : '', postcode : '',
  }));
  console.log('After Adding My Gyms : ',this.state.myGyms);


}

removeGym = (item) => {

  this.setState({
    myGyms: this.state.myGyms.filter((it, i) => it.name !== item.name)

  })

    console.log('After Remove My Gyms : ',this.state.myGyms);


}

addInterest = (item) => {

  this.setState(prevState => ({
    myInterests: [...prevState.myInterests, { "id" : item.id, "name" : item.name}],

  }));
  console.log('After Adding My Interest : ',this.state.myInterests);


}

removeInterest = (item) => {

  this.setState({
    myInterests: this.state.myInterests.filter((itm, i) => itm.id !== item.id)

  })

    console.log('After Remove My Interest : ',this.state.myInterests);


}

handleInterest = (item) => {
  console.log('item : ', item);
  var selected = false;
  this.state.myInterests.map(itm => {
    if(itm.id === item.id) {
      selected = true
    }
  })

  if(selected === true) {
    console.log('already')
    this.removeInterest(item)
    selected = false
  }
  else{
    console.log('Not Have')
    this.addInterest(item)
  }

}

updateUserProfile () {

 if(this.state.name === '') {
   this.refs.name._root.focus()
 }
 else{
  const info = {
    name : this.state.name,
    email : this.state.email,
    phone : this.state.phone,
    about : this.state.about,
    myGyms : this.state.myGyms,
    myInterests : this.state.myInterests
  }

  this.props.attemptUpdateProfile(this.props.user.accessToken, this.props.user.userId, info )
}
}


/*Images.addPhotoCircle*/
  render () {

    let imageView;
    imageView = this.state.avatarSource === null ?
                <Image source={Images.addPhotoCircle} style={styles.userImage}/> :
                <Image source={this.state.avatarSource} style={styles.userImage}/>


    var colors = ['rgb(251, 99, 39)', 'rgb(36, 240, 133)', 'rgb(251, 179, 39)', 'rgb(36, 195, 200)', 'rgb(31, 199, 116)'];


    return (
        <Container>
        <Content disableKBDismissScroll={true} >
        <StatusBar barStyle='light-content' backgroundColor={Colors.background}/>
          <View>
          <Form>
              <View style={styles.headerView}>
                <Image source={Images.editProfileHeader}>
                    <View style={styles.navbarview}>
                      <Button transparent iconLeft onPress={NavigationActions.pop}>
                        <Ionicons name='ios-arrow-back' size={30} style={{color:'white',marginLeft:(width >= 325 ? 0 : 25)}}/>
                      </Button>
                      <Text style={[Fonts.style.h1, Fonts.style.textWhite,{flex:1, textAlign:'center',marginTop:(width >= 325 ? 10 : 10),marginRight:(width >= 325 ? 0 : 20)}]}>EDIT PROFILE</Text>
                      <Button transparent>
                          <Text></Text>
                      </Button>
                    </View>
                    <View style={styles.profileimage} >
                      <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                       {imageView}
                      </TouchableOpacity>
                      <Text style={styles.username}>{(this.state.name !== '') ? this.state.name : ''}</Text>
                    </View>
                </Image>

              </View>

              <View style={styles.containers}>

                  <Text style={[Fonts.style.h2, Fonts.style.mt20]}> GENERAL</Text>
                  <View style={Fonts.style.inputWrapperBordered}>
                    <Icon name='person' style={Fonts.style.borderedIcon} />
                    <Input style={Fonts.style.inputBordered}
                           placeholder='NAME'
                           placeholderTextColor={Fonts.colors.input}
                           value={(this.state.name !== '') ? this.state.name : ''}
                           onChangeText={(text) => this.setState({name : text})}
                           ref={'name'}
                           />
                  </View>

                  <View style={Fonts.style.inputWrapperBordered}>
                    <Icon name='mail' style={Fonts.style.borderedIcon} />
                    <Input disabled style={Fonts.style.inputBordered}
                          placeholder='EMAIL ADDRESS'
                          placeholderTextColor={Fonts.colors.input}
                          value={(this.state.email !== '') ? this.state.email : ''}
                          onChangeText={(text) => this.setState({email : text})}
                          />
                  </View>

                  <View style={Fonts.style.inputWrapperBordered}>
                    <Icon name='call' style={Fonts.style.borderedIcon} />
                    <Input disabled style={Fonts.style.inputBordered}
                          placeholder='PHONE NUMBER'
                          placeholderTextColor={Fonts.colors.input}
                          value = {(this.state.phone !== '') ? this.state.phone.toString() : ''}
                          onChangeText={(text) => this.setState({phone : text})}
                          />
                  </View>

                  <View style={Fonts.style.inputWrapperBordered}>
                    <Input multiline={true} numberOfLines = {30}
                          style={Fonts.style.inputMultipleBordered}
                          placeholder='ABOUT'
                          placeholderTextColor={Fonts.colors.input}
                          value={(this.state.about !== '') ? this.state.about : ''}
                          onChangeText={(text) => this.setState({about : text})}
                          onSubmitEditing={ () => {
                            this.refs.scroll.scrollToFocusedInput(reactNode)
                          }}
                          />
                  </View>

                  { (this.props.user.profile.role === 'trainer') ? <Text style={[Fonts.style.h2, Fonts.style.mt20]}> MY GYMS</Text> : null }

                  {
                    (this.props.user.profile.role === 'trainer' && this.state.myGyms) ?
                     <View>
                        <List dataArray={this.state.myGyms} renderRow={(item,i) =>
                        <ListItem style={{borderBottomWidth : 1, borderBottomColor:'rgba(102,102,102,0.1)'}}>
                            <Body>
                           <Text style={styles.gymname}>{item.name}</Text>
                           <Text style={[styles.gymname,{color : 'rgba(102,102,102,0.5)'}]}>{item.postcode}</Text>
                           </Body>
                           <Right>
                             <MaterialCommunityIcons name="close" size={(width >= 325) ? 22 : 16} color="rgb(178,178,178)" onPress = {() => this.removeGym(item)}/>
                           </Right>
                       </ListItem>
                   } />

                     </View>
                     : null
                  }
                  { (this.props.user.profile.role === 'trainer') ?  <View style={Fonts.style.mt15}>
                    <Button light full rounded bordered style={Fonts.style.bordered}  onPress={() => this.setState({open: true})}>
                        <Text style={[Fonts.style.buttonTextNormalGrey]}>ADD GYM</Text>
                    </Button>
                  </View> : null}


                  <ListItem style={{borderBottomWidth:0}}>
                    <Body>
                      <Text style={[Fonts.style.h3, Fonts.style.mt20, {marginLeft: (Platform.OS === 'ios') ? "-7%" : "-1%"}]}> {(this.props.user.profile.role === 'trainer') ? "AVAILABILITY UPON REQUEST" : "MAKE MY PROFILE PRIVATE"}</Text>
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

                  <Text style={[Fonts.style.h2, Fonts.style.mt20]}> {(this.state.role === 'trainer') ? "TRAINING OPTIONS" : "MY INTERESTS"}</Text>
                  <TouchableOpacity onPress={() => this.setState({trainigOptionOpen: true})}>
                  <View style={[Fonts.style.inputWrapperBordered, {paddingRight:5}]} >
                    <Text style={styles.searchBox}> SEARCH AND ADD</Text>
                    <View style={{backgroundColor:'rgb(172,14,250)', width:30,height:30, borderRadius:100, marginTop:7,marginRight:5, paddingRight:20}}><Icon name='search' style={Fonts.style.borderedIconRight} /></View>
                  </View>
                  </TouchableOpacity>
                  <View style={{marginTop:10, flexDirection:'row', flexWrap : 'wrap'}}>
                     {

                       this.state.myInterests.map((interest, i) => {
                          return <Button rounded small key={i} style={Fonts.style.categoryTagPink} onPress={() => this.removeInterest(interest)}>
                                <Text style={Fonts.style.categoryTagText}>{interest.name}</Text>
                                <MaterialCommunityIcons name="close" size={25} color="rgb(255,255,255)" style={{paddingTop:3,backgroundColor:'transparent'}}/>
                              </Button>
                       })

                    }
                  </View>


                  { (this.props.user.profile.role === 'trainer') ? <Text style={[Fonts.style.h2, Fonts.style.mt20]}> PHOTOS AND VIDEOS </Text> : null }

                  { (this.props.user.profile.role === 'trainer') ?  <View style={Fonts.style.mt15}>
                    <Button light full rounded bordered style={Fonts.style.bordered}  onPress={() => this.setState({modalPhotosVisible: true})}>
                        <Text style={[Fonts.style.buttonTextNormalGrey]}>ADD PHOTOS AND VIDEOS</Text>
                    </Button>
                  </View> : null}


                  <View style={Fonts.style.mt40}>
                    <Button light full rounded bordered style={Fonts.style.default} onPress= {this.updateUserProfile}>
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
                    <Input  style={Fonts.style.inputBordered}
                          placeholder='GYM NAME'
                          placeholderTextColor={Fonts.colors.input}
                          onChangeText={(text) => this.setState({gymname : text})}
                          />
                  </View>

                  <View style={[Fonts.style.inputWrapperBordered,{height:45}]}>
                    <MaterialCommunityIcons name='barcode' style={[Fonts.style.borderedIcon,{color:'rgba(172,14,250,0.5)'}]} />
                    <Input style={Fonts.style.inputBordered}
                          placeholder='POSTCODE'
                          placeholderTextColor={Fonts.colors.input}
                          onChangeText={(text) => this.setState({postcode : text})}
                          />
                  </View>

              </View>



                  <View style={[Fonts.style.mt15,Fonts.style.mb15]}>
                    <Button light full rounded bordered style={Fonts.style.bordered}  onPress={this.addGym}>
                        <Text style={[Fonts.style.buttonTextNormalGrey]}>ADD GYM</Text>
                    </Button>
                  </View>

                </View>
              </Modalss>



          <Modal
              animationType={"slide"}
              transparent={false}
              visible={this.state.modalPhotosVisible}
              onRequestClose={() => {this.setModalPhotosVisible(!this.state.modalPhotosVisible)}}>
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
                <Text style={[Fonts.style.h2,{flex:1,textAlign:'center',fontSize:(width >= 325) ? 16 : 12}]}>{(this.props.user.profile.role === 'trainer') ? "ADD TRAINING OPTIONS" : "MY INTERESTS"}</Text>
                <Button transparent onPress={() => this.setState({trainigOptionOpen: false})}>
                    <MaterialCommunityIcons name="close" size={22} color="rgb(102,102,102)"/>
                </Button>
            </View>

            <View style={styles.containers}>

                <View style={[Fonts.style.inputWrapperBordered, {paddingRight:15}]} >
                  <Input  style={Fonts.style.inputBordered} placeholder='SEARCH AND ADD' placeholderTextColor={Fonts.colors.input}/>
                  <TouchableOpacity style={{height : 30 , width : 30}}>
                  <View style={{backgroundColor:'rgb(172,14,250)', width:30,height:30, borderRadius:100, marginTop:7, paddingRight:20,marginRight:5}}><Icon name='search' style={Fonts.style.borderedIconRight} /></View>
                  </TouchableOpacity>
                </View>
                <ScrollView style={{height:200}}>
                <View style={{marginTop:10, flexDirection:'row',flexWrap :'wrap',}}>
                  {
                    this.state.categories.map((item,i) => {
                      var selected = false
                      this.state.myInterests.map(val => {
                        if(item.id === val.id){
                          //console.log('called');
                          selected = true
                        }

                      })
                    if(selected === true){

                      selected = false
                      return <Button key={i} rounded small style={Fonts.style.categoryTagPink} onPress={() => this.handleInterest(item)}>
                                  <Text style={Fonts.style.categoryTagText}>{item.name}</Text>
                                  <MaterialCommunityIcons name="close" size={18} color="rgb(255,255,255)" style={{paddingTop:3,backgroundColor:'transparent'}}/>
                                </Button>
                    }
                    else{
                      selected = false
                      return <Button key={i} rounded small style={{
                        paddingLeft:(width >= 325) ? 15 : 10,
                        paddingRight:(width >= 325) ? 15 : 10,
                        paddingTop : 0,
                        paddingBottom : 0,
                        height:(width >= 325) ? 35 : 30,
                        backgroundColor : colors[i % 5],
                        marginRight : 5,
                        marginBottom : 5
                      }} onPress={() => this.handleInterest(item)}>
                                <Text style={Fonts.style.categoryTagText}>{item.name}</Text>
                                <MaterialCommunityIcons name="plus" size={18} color="rgb(255,255,255)" style={{paddingTop:3, backgroundColor:'transparent'}}/>
                              </Button>

                    }



                        })


                  }

                </View>
                </ScrollView>

            </View>

          </View>
        </Modalss>

        </Container>

    );
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
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptUpdateProfile: (token, userId, data) => dispatch(LoginActions.updateProfile(token, userId, data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
