
import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDT4P0K7vKjikHupDEnNwWOcHISI_Z7s6Y",
  authDomain: "react-firebase-b84a7.firebaseapp.com",
  databaseURL: "https://react-firebase-b84a7.firebaseio.com",
  projectId: "react-firebase-b84a7",
  storageBucket: "react-firebase-b84a7.appspot.com",
  messagingSenderId: "565346356211"
};
var fire = firebase.initializeApp(config);
export default fire;
