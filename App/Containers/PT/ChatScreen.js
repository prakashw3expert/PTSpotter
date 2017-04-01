import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat';

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
  render() {

    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        user={{
          _id: 1,
        }}
      />
    );
  }
}