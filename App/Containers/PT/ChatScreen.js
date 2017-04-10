import React from 'react'
import { GiftedChat, Bubble,MessageText, InputToolbar, Composer } from 'react-native-gifted-chat';
import { Container, Content, Button } from 'native-base';
import styles from './Styles/ChatScreenStyle'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Images,Colors,Fonts } from '../../Themes'
import { ScrollView, Text, Image, View,Dimensions,StatusBar } from 'react-native'
export default class ChatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      username: this.props.username,
    };
    this.onSend = this.onSend.bind(this);
  }
  componentWillMount() {
    this.setState({
      messages: [
      {
          _id: 4,
          text: 'Dont have time for such information. Lets go to Gym!',
          createdAt: new Date(Date.UTC(2017, 3, 31, 10, 35, 0)),
          user: {
            _id: 1,
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
      {
          _id: 3,
          text: 'Good for them!',
          createdAt: new Date(Date.UTC(2017, 3, 31, 10, 30, 0)),
          user: {
            _id: 1,
            name: 'Tarun Bardawa',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
        {
          _id: 2,
          text: 'Nokia phones, is unveiling a trio of Nokia-branded Android devices today that are designed to cater for the mid-range of the smartphone market.',
          createdAt: new Date(Date.UTC(2017, 3, 31, 10, 20, 0)),
          user: {
            _id: 2,
            name: 'Tarun Bardawa',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },
        {
          _id: 1,
          text: 'Nokia’s phones are making a comeback. HMD Global, the Finnish company!',
          createdAt: new Date(Date.UTC(2017, 3, 31, 10, 15, 0)),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        },



      ],
    });
  }
  onSend(messages = []) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }

renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: 'rgb(234,234,234)',
          },
          right: {
            backgroundColor: 'rgb(172,14,250)',
          }
        }}
      />
    );
  }

  renderMessageText(props) {
    return (
      <MessageText
        {...props}
        textStyle={{
          left: {
            color: 'rgb(102,102,102)',
            letterSpacing : 0.1,
            fontFamily : Fonts.type.regular,
            fontSize : 14,

          },
          right: {
            letterSpacing : 0.1,
            fontFamily : Fonts.type.regular,
            fontSize : 14,

          }
        }}
      />
    );
  }

  renderInputToolbar(props) {
    return (
      <InputToolbar
        {...props}
        accessoryStyle={{
          borderTopWidth : 2,
          borderColor : Colors.separetorLineColor,
        }}

        textStyle={{
          fontFamily : Fonts.type.regular,
          fontSize  : 14,
          color  : Colors.purpleColor
        }}
      />
    );
  }

  renderComposer(props) {
    return (
      <Composer
        {...props}
        placeholder = "WRITE YOUR MESSAGE"
        placeholderTextColor = {Colors.mutedColor}

        textInputStyle={{
          fontFamily : Fonts.type.regular,
          fontSize  : 14,
          lineHeight  : 23,
          letterSpacing  : 1.8,
          color  : Colors.mutedColor
        }}
      />
    );
  }


  render() {

    return (
      <Container>
      <StatusBar barStyle='light-content' />
      <View style={styles.headerView}>
            <View style={styles.navbarview}>
              <View style={{flex:.5,marginBottom:5}}>
                <Button transparent iconLeft onPress={NavigationActions.pop}>
                  <FontAwesome name='angle-left' style={{fontSize:28,color:"rgb(255, 255, 255)"}} />
                </Button>
              </View>
              <View style={[styles.navbarCenterView,{marginBottom:5}]}>
                  <Text style={[Fonts.style.h1,Fonts.style.textWhite,{textAlign:'center',flex:1}]}> Ernest Woods </Text>
              </View>
              <View style={{flex:.5,flexDirection:'row',justifyContent:'flex-end',}}>
              <Button transparent onPress={() => this.setState({open: true})}>
                  <Ionicons name="md-more" size={30} style={{color:'white',justifyContent:'center'}}/>
              </Button>
              </View>

          </View>
      </View>

      <Container>
          <GiftedChat
          messages={this.state.messages}
          onSend={this.onSend}
          user={{
          _id: 1,
          }}
          renderBubble={this.renderBubble}
          renderMessageText={this.renderMessageText}
          renderInputToolbar={this.renderInputToolbar}
          renderComposer={this.renderComposer}
          />
      </Container>
      </Container>


    );
  }
}
