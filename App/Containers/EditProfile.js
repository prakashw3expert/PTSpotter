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


//<Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
export default class EditProfile extends React.Component {

  state = {
      colorTrueSwitchIsOn: true,
      colorFalseSwitchIsOn: false,
    };

   
  render () {

    let imageView;
    imageView = <Image source={Images.addPhotoCircle} style={styles.userImage}/> 
      
     
    return (

      <Content>
        <ScrollView>
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
                          <Input style={{ height:45,fontWeight:'bold',fontSize:14,color:'rgba(102,102,102,0.5)',marginLeft:10}} placeholder='NAME'/> 
                      </Item>
                      <Item rounded style={Fonts.style.inputBox}>
                          <Image source={Images.emailIcon} style={{marginTop:5,marginLeft:15}}/>
                          <Input style={{ height:45,fontWeight:'bold',fontSize:14,color:'rgba(102,102,102,0.5)'}} placeholder='tarunbardawa3@gmail.com'/> 
                          <Image source={Images.discardChangeIcon} style={{marginTop:3,marginRight:15}}/>
                      </Item>
                      <Item rounded style={Fonts.style.inputBox}>
                          <Image source={Images.phoneIcon} style={{marginTop:5,marginLeft:15}}/>
                          <Input style={{ flex:1,fontWeight:'bold',fontSize:14,color:'rgba(102,102,102,0.5)'}} placeholder='+91 9024503444'/> 
                          <Image source={Images.discardChangeIcon} style={{marginTop:3,marginRight:15}}/>
                      </Item>

                      <Item rounded style={Fonts.style.textArea}>                             
                            <Input bordered style={{height:100,padding:10, fontSize:14,fontWeight:'600', height:60}} multiline = {true} placeholder='About' /> 
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
                        <Text style={{fontWeight:'bold',fontSize:12,color:'#777777',flex:1, marginLeft:10}}>AVAILABILITY UPON REQUEST</Text>

                        <Switch
                          onValueChange={(value) => this.setState({colorTrueSwitchIsOn: value})}
                          onTintColor="#d007df"
                          thumbTintColor="#fff"
                          tintColor="#777777"
                          style={{marginRight:10}}
                          value={this.state.colorTrueSwitchIsOn} />
                      </View>

                      <Text style={[Fonts.style.subHeading,{marginTop:10,marginLeft:10}]}>TRAINING OPTIONS</Text>

                      <Item rounded style={{marginLeft:10,marginRight:10,marginTop:10,marginBottom:5, height:35}}>

                            <Input style={{ height:30, fontSize:12,fontWeight:'600' }} placeholder='SEARCH AND ADD'/>
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



        </ScrollView>
        </Content>
    )
  }
}


class FormView extends React.Component {

 render () {
   return (

         <View style={styles.HealthFeedsView}>
            <Text>Header </Text>
         </View>

   )
 }
}
