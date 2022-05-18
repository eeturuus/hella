// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import * as firebase from "firebase";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtXwcpdDLCt79cUuRBgdxTITkoBNy4bow",
  authDomain: "hella-b59fe.firebaseapp.com",
  databaseURL: "https://hella-b59fe-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hella-b59fe",
  storageBucket: "hella-b59fe.appspot.com",
  messagingSenderId: "767831601225",
  appId: "1:767831601225:web:a460c5f016bfdee706cf98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);