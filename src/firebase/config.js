// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKunarM8GGTRHECPX41ij2YQ8R3qcAAZE",
  authDomain: "husky-website.firebaseapp.com",
  projectId: "husky-website",
  storageBucket: "husky-website.appspot.com",
  messagingSenderId: "1033043470948",
  appId: "1:1033043470948:web:1eb6c365911175ac15cd71"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//const app = initializeApp(firebaseConfig);
//import { initializeApp } from "firebase/app";

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp}

/* if
          request.time < timestamp.date(2022, 12, 11); */