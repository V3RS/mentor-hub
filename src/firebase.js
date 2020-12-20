import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAcGQVqmeIEYQ5BpJdV8-i96fplzr1jn84",
    authDomain: "learn-firestore-9ddbe.firebaseapp.com",
    databaseURL: "https://learn-firestore-9ddbe.firebaseio.com",
    projectId: "learn-firestore-9ddbe",
    storageBucket: "learn-firestore-9ddbe.appspot.com",
    messagingSenderId: "539442724690",
    appId: "1:539442724690:web:943ab594a40719decc048b"
  }

firebase.initializeApp(config)

export const provider = new firebase.auth.GoogleAuthProvider()

export const auth = firebase.auth()

export default firebase