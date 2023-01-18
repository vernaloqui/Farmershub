// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvaoY3DbM0omPKLViTB6NsgqpCOTCMrKo",
  authDomain: "farmershub-2fd1b.firebaseapp.com",
  projectId: "farmershub-2fd1b",
  storageBucket: "farmershub-2fd1b.appspot.com",
  messagingSenderId: "416213607333",
  appId: "1:416213607333:web:0b029e79fe5e3157d23e4c",
  measurementId: "G-YQ8MND9CHB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export {auth, db, storage};