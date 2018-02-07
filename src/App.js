import React, { Component } from 'react';
import fire from './fire';

import { Button, Input, Form } from 'semantic-ui-react'

class App extends Component {
  state = {
    messages: []
  };

  componentWillMount() {
    /* Create reference to messages in Firebase Database */
    let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    messagesRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: [message].concat(this.state.messages) });
    })
  };

  handleFormSubmit = (e) => {
    const message = this.refs.message.value;
    console.log(message);
    const messages = [...this.state.messages, message];
    this.setState({ messages: messages });
    /* Send the message to Firebase */
    fire.database().ref('messages').push(message);
    this.refs.message.value = ''; // <- clear the input
    e.preventDefault(); // <- prevent form submit from reloading the page
  };

  render() {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <Form.Field>
          <input
            ref='message'
            type='text'
            placeholder='Type a message...' />
        </Form.Field>
        <Form.Button type='submit'>Submit</Form.Button>
        <ul>
          { /* Render the list of messages */
            this.state.messages.map( message => <li key={message.id}>{message.text}</li> )
          }
        </ul>
      </Form>
    );
  }
}

export default App;
