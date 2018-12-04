import firebase from 'firebase';
var config = {
  apiKey: "AIzaSyC-UyC65MzPaytqwZNE3Am_o6A6JLunzqk",
  authDomain: "react-64e42.firebaseapp.com",
  databaseURL: "https://react-64e42.firebaseio.com",
  projectId: "react-64e42",
  storageBucket: "react-64e42.appspot.com",
  messagingSenderId: "172842046681"
};
var fire = firebase.initializeApp(config);
export default fire;