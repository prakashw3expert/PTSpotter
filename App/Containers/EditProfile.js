// @flow

import React from 'react'
import { ScrollView, Text, Image, View,Switch,TouchableOpacity } from 'react-native'
import { Container, Content,Input,
  Form,Item, Left,Icon,
  Body, Right, ListItem,
  Thumbnail,List,Button,
  Card, CardItem,Label } from 'native-base';

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
                      <Text style={[Fonts.style.landingTitle,{flex:1, textAlign:'center',color:'white',fontWeight:'bold'}]}>EDIT PROFILE</Text>
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

              <Text style={[Fonts.style.subHeading,{marginTop:10,marginLeft:10}]}>GENERAL</Text>

              <Item rounded style={Fonts.style.inputBox}>
                  <Image source={Images.nameIcon} style={{marginTop:5,marginLeft:15}}/>
                  <Input style={Fonts.style.textInput} placeholder='NAME'/> 
              </Item>
              <Item rounded style={Fonts.style.inputBox}>
                  <Image source={Images.emailIcon} style={{marginTop:5,marginLeft:15}}/>
                  <Input style={{ flex:1,alignSelf:'stretch',fontWeight:'bold',fontSize:14,color:'rgba(102,102,102,0.5)'}} placeholder='tarunbardawa3@gmail.com'/> 
                  <Image source={Images.discardChangeIcon} style={{marginTop:3,marginRight:15}}/>
              </Item>
              <Item rounded style={Fonts.style.inputBox}>
                  <Image source={Images.phoneIcon} style={{marginTop:5,marginLeft:15}}/>
                  <Input style={{ flex:1,alignSelf:'stretch',fontWeight:'bold',fontSize:14,color:'rgba(102,102,102,0.5)'}} placeholder='+91 9024503444'/> 
                  <Image source={Images.discardChangeIcon} style={{marginTop:3,marginRight:15}}/>
              </Item>

              <Item rounded style={Fonts.style.textArea}>                             
                    <Input bordered style={{padding:10, fontSize:14,fontWeight:'600',height:'100%'}} multiline = {true} placeholder='About' /> 
              </Item>

              <Text style={[Fonts.style.subHeading,{marginTop:'8%',marginLeft:10}]}>MY GYMS</Text>


              <Button rounded bordered block style={{borderColor:'#777777',
              height:45,
              marginLeft:30,
              marginRight:30,
              marginTop:'8%',
              marginBottom:5,borderWidth:2}}>
                <Text style={{color:'darkgray',fontWeight:'bold'}}>ADD GYM</Text>
            </Button>
            <View style={styles.switchView}>
                <Text style={[Fonts.style.regular14,{marginLeft:10,flex:1}]}>AVAILABILITY UPON REQUEST</Text>

                <Switch
                  onValueChange={(value) => this.setState({colorTrueSwitchIsOn: value})}
                  onTintColor="#d007df"
                  thumbTintColor="#fff"
                  tintColor="#777777"
                  style={{marginRight:10}}
                  value={this.state.colorTrueSwitchIsOn} />
            </View>

            <Text style={[Fonts.style.subHeading,{marginTop:10,marginLeft:10,marginBottom:20}]}>TRAINING OPTIONS</Text>

            <Item rounded style={Fonts.style.inputBox}>
                  <Input style={Fonts.style.regular14} placeholder='SEARCH AND ADD' placeholderTextColor='rgba(102,102,102,0.5)'/> 
                  <Image source={Images.discardChangeIcon} style={{marginTop:3,marginRight:15}}/>
              </Item>

            <Button rounded block style={{backgroundColor:'#d007df',
            height:41,
            marginLeft:30,
            marginRight:30,
            marginTop:10,
            marginBottom:20}}>
              <Text style={{color:'white',fontWeight:'bold',fontSize:12}}>CONTINUE</Text>
          </Button>

        </Form>
        </View>
        </ScrollView>

    )
  }
}


