// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL5Be3xNrIYucQZsgOR_b2lpiAMDVqsI0",
  authDomain: "app-trabajadores-83224.firebaseapp.com",
  projectId: "app-trabajadores-83224",
  storageBucket: "app-trabajadores-83224.appspot.com",
  messagingSenderId: "13391863713",
  appId: "1:13391863713:web:10641412e8fc72207f35e0"
};

// Initialize Firebase  
export const appfb = initializeApp(firebaseConfig);
export const db = getFirestore(appfb);