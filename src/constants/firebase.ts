import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyALLOv-gv-cjOEq5gNDVuW2HZuV3EAb_zA',
  authDomain: 'our-sponsors.firebaseapp.com',
  projectId: 'our-sponsors',
  storageBucket: 'our-sponsors.appspot.com',
  messagingSenderId: '704163402159',
  appId: '1:704163402159:web:887ecb34cd324c9b5e9f5a',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();
const db = firebaseApp.firestore();
export default Object.freeze({auth, db});
export {auth, db};

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALLOv-gv-cjOEq5gNDVuW2HZuV3EAb_zA",
  authDomain: "our-sponsors.firebaseapp.com",
  projectId: "our-sponsors",
  storageBucket: "our-sponsors.appspot.com",
  messagingSenderId: "704163402159",
  appId: "1:704163402159:web:887ecb34cd324c9b5e9f5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
*/
