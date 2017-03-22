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
    imageView = <Image source={Images.addImageCircle} style={styles.userImage}/> 
      
     
    return (

      <Content>
        <ScrollView>
          <Form>
              <View style={styles.headerView}>
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


          </View>

                      <Text style={styles.headingTitle}>GENERAL</Text>

                      <Item rounded style={{marginLeft:10,marginRight:10,marginTop:10,marginBottom:5, height:35}}>
                          <Icon name='refresh' style={{marginTop:3}}/>
                          <Input style={{ height:30, fontSize:14}} placeholder='Name'/> 
                      </Item>
                      <Item rounded style={{marginLeft:10,marginRight:10,marginTop:5,marginBottom:5,height:35}}>                             
                            <Icon name='refresh'style={{marginTop:3}}/>
                            <Input style={{ height:30,fontWeight:'bold',fontSize:14}} placeholder='tarunbardawa3@gmail.com'/>
                      </Item> 
                      <Item rounded style={{marginLeft:10,marginRight:10,marginTop:5,marginBottom:5, height:35}}>
                            <Icon name='refresh' style={{marginTop:3}} />
                            <Input style={{ height:30, fontSize:14}} placeholder='+44 (123) 458712' />
                      </Item>                       
                      <Item rounded style={{margin:8, height:110,borderRadius:10}}>                             
                            <Input bordered style={{height:110, fontSize:14,fontWeight:'600', height:60}} multiline = {true} placeholder='About' /> 
                      </Item>

                      <Text style={styles.headingTitle}>MY GYMS</Text>

                      <Button rounded bordered block style={{borderColor:'#777777',
                      height:36,
                      marginLeft:30,
                      marginRight:30,
                      marginTop:10,
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

                      <Text style={styles.headingTitle}>TRAINING OPTIONS</Text>

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
