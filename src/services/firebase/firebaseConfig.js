// Import the functions you need from the SDKs you need
import { initializeApp, } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  /* apiKey: "AIzaSyCWnm8ec6vtCGSpod6VmJ3p5P8VlTJPZpE",
  authDomain: "mirsa-d97f8.firebaseapp.com",
  projectId: "mirsa-d97f8",
  storageBucket: "mirsa-d97f8.appspot.com",
  messagingSenderId: "903139116269",
  appId: "1:903139116269:web:6834d9de509118d48038e4",
  measurementId: "G-HBS42E1QGW" */ 
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const analytics = getAnalytics(app);