import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyB2RMOHHJm3sO0TpLvWIKrcANVhMkNC-Mg",
  authDomain: "barter-1b2ac.firebaseapp.com",
  databaseURL: "https://barter-1b2ac.firebaseio.com",
  projectId: "barter-1b2ac",
  storageBucket: "barter-1b2ac.appspot.com",
  messagingSenderId: "700635395378",
  appId: "1:700635395378:web:5709adf545e49fe327132b"
};
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
