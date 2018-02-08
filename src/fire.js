import firebase from 'firebase';

const env = 'prod';
// const env = 'dev';

const devConfig = {
  apiKey: "AIzaSyDT4P0K7vKjikHupDEnNwWOcHISI_Z7s6Y",
  authDomain: "react-firebase-b84a7.firebaseapp.com",
  databaseURL: "https://react-firebase-b84a7.firebaseio.com",
  projectId: "react-firebase-b84a7",
  storageBucket: "react-firebase-b84a7.appspot.com",
  messagingSenderId: "565346356211"
};

const prodConfig = {
  apiKey: "AIzaSyCfvK9YdCmfSaibrPymBWVoGVeVTRDS8Fw",
  authDomain: "react-firebase-prod.firebaseapp.com",
  databaseURL: "https://react-firebase-prod.firebaseio.com",
  projectId: "react-firebase-prod",
  storageBucket: "react-firebase-prod.appspot.com",
  messagingSenderId: "139452593418"
};

const config = env === 'prod'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  var fire = firebase.initializeApp(config);
}
export default fire;
