import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCc-KoSIA2tTwQ6mkFQ3DguxZ9rmyazJnE",
    authDomain: "login-d258c.firebaseapp.com",
    databaseURL: "https://login-d258c.firebaseio.com",
    projectId: "login-d258c",
    storageBucket: "login-d258c.appspot.com",
    messagingSenderId: "407077388753",
    appId: "1:407077388753:web:ca2bb576fef71aa46ae0f0",
    measurementId: "G-18ELQ38B8N"
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();