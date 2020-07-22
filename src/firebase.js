import firebase from 'firebase';


  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA8PR4XRdnMRIzZv9oV6BCujlI5PPZM7Jg",
    authDomain: "blogs-ad3f9.firebaseapp.com",
    databaseURL: "https://blogs-ad3f9.firebaseio.com",
    projectId: "blogs-ad3f9",
    storageBucket: "blogs-ad3f9.appspot.com",
    messagingSenderId: "708371859796",
    appId: "1:708371859796:web:827a913f8937c873fe60c1",
    measurementId: "G-CPJ0N67LYT"
  })
  const db = firebaseApp.firestore()

  export default db;