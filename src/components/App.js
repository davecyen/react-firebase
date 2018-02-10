import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import LandingPage from './Landing/LandingPage';
import SignUpPage from './SignUp';
import SignInPage from './SignIn';
import PasswordForgetPage from './PasswordForget';
import HomePage from './Home/HomePage';
import AccountPage from './Account/AccountPage';

import * as routes from '../constants/routes';
import withAuthentication from './withAuthentication';

// class MessagesDemo extends Component {
//   state = {
//     messages: []
//   };
//
//   componentWillMount() {
//     /* Create reference to messages in Firebase Database */
//     let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
//     messagesRef.on('child_added', snapshot => {
//       /* Update React state when message is added at Firebase Database */
//       let message = { text: snapshot.val(), id: snapshot.key };
//       this.setState({ messages: [message].concat(this.state.messages) });
//     })
//   };
//
//   handleFormSubmit = (e) => {
//     const message = this.refs.message.value;
//     console.log(message);
//     const messages = [...this.state.messages, message];
//     this.setState({ messages: messages });
//     /* Send the message to Firebase */
//     fire.database().ref('messages').push(message);
//     this.refs.message.value = ''; // <- clear the input
//     e.preventDefault(); // <- prevent form submit from reloading the page
//   };
//
//   render() {
//     return (
//       <div>
//         <Form onSubmit={this.handleFormSubmit}>
//           <Form.Field>
//             <input
//               ref='message'
//               type='text'
//               placeholder='Type a message...' />
//           </Form.Field>
//           <Form.Button type='submit'>Submit</Form.Button>
//           <ul>
//             { /* Render the list of messages */
//               this.state.messages.map( message => <li key={message.id}>{message.text}</li> )
//             }
//           </ul>
//         </Form>
//       </div>
//     );
//   }
// }

const App = () => (
  <Router>
    <div>
      <Route
        exact path={routes.LANDING}
        component={LandingPage}
      />
      <Route
        exact path={routes.SIGN_UP}
        component={SignUpPage}
      />
      <Route
        exact path={routes.SIGN_IN}
        component={SignInPage}
      />
      <Route
        exact path={routes.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route
        exact path={routes.HOME}
        component={HomePage}
      />
      <Route
        exact path={routes.ACCOUNT}
        component={AccountPage}
      />
    </div>
  </Router>
);

export default App;
