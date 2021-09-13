import * as firebase from "firebase/app";
// import firebase from 'firebase/app'


  firebase.initializeApp({
    apiKey: "AIzaSyDGTxTe0HfGsqE6IdP3XtZkBMlV-UgAcfA",
    authDomain: "vue-auth-b5d13.firebaseapp.com",
    databaseURL: "https://vue-auth-b5d13-default-rtdb.firebaseio.com",
    projectId: "vue-auth-b5d13",
    storageBucket: "vue-auth-b5d13.appspot.com",
    messagingSenderId: "841268526252",
    appId: "1:841268526252:web:c26a3a4955b50394983309"
  })

  export { firebase };