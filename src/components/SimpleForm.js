import React, {Component} from 'react'
import {Launcher} from 'react-chat-window'

class SimpleForm extends Component {
  constructor() {
    super();
    this.state = {
      messageList: [
        {
          author: 'them',
          type: 'text',
          data: {
            text: 'Hi, Welcome!'
          }
        },
      ]
    };
  }

  _onMessageWasSent(message) {
    console.log('message',message);

    this.setState({
      messageList: [...this.state.messageList, message]
    })

    fetch(window.location.origin+'/api/chatbot?crsf=c2a79270-a6ee-49e5-9cf4-2c114d733892',{
       method: "POST",
       headers: {
         'Content-type': 'application/json'
       },
       body: JSON.stringify(message)
     })
    .then((result) => result.json())
    .then((info) => {

         this.setState({
           messageList: [...this.state.messageList,info[0]]
         })
         // console.log('state after update',this.state);
         console.log('.',info);
      })
  }


  render() {
    return (<div>
      <Launcher
        agentProfile={{
          teamName: 'FinChatBot',
        }}
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        messageList={this.state.messageList}
        showEmoji = {false}
        mute = {true}
        style={{color: "green"}}
      />
    </div>)
  }
}


export default SimpleForm;
