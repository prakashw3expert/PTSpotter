import React from 'react'
import { GiftedChat, Bubble,MessageText } from 'react-native-gifted-chat';
import { Container, Content, Button } from 'native-base';
import styles from './Styles/ChatScreenStyle'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Ionicons from 'react-native-vector-icons/Ionicons';
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
          },
          right: {
            letterSpacing : 0.1
          }
        }}
      />
    );
  }
  render() {

    return (

      <Container>
      <StatusBar barStyle='light-content' />
          
              <GiftedChat
                messages={this.state.messages}
                onSend={this.onSend}
                user={{
                  _id: 1,
                }}
                renderBubble={this.renderBubble}
                renderMessageText={this.renderMessageText}
              />
          
      </Container>

      
    );
  }
}