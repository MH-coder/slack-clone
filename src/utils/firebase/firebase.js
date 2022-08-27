import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyApz6EvYU8NV5FBVSP2cosi3XemjtaTJFo",
    authDomain: "slackclone-5fe14.firebaseapp.com",
    projectId: "slackclone-5fe14",
    storageBucket: "slackclone-5fe14.appspot.com",
    messagingSenderId: "346596743434",
    appId: "1:346596743434:web:f70a7d59351676ff8302f3",
    measurementId: "G-DY40G1LK54"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore()
export const auth = firebase.auth()
export const provider = new firebase.auth.GoogleAuthProvider()
