// Import the functions you need from the SDKs you need
import { initializeApp, } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWnm8ec6vtCGSpod6VmJ3p5P8VlTJPZpE",
  authDomain: "mirsa-d97f8.firebaseapp.com",
  projectId: "mirsa-d97f8",
  storageBucket: "mirsa-d97f8.appspot.com",
  messagingSenderId: "903139116269",
  appId: "1:903139116269:web:6834d9de509118d48038e4",
  measurementId: "G-HBS42E1QGW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const analytics = getAnalytics(app);