// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrIiVOqbgC3CYYkY02Z-s0zd-Id8e14ug",
  authDomain: "asset-manegment.firebaseapp.com",
  databaseURL: "https://asset-manegment-default-rtdb.firebaseio.com",
  projectId: "asset-manegment",
  storageBucket: "asset-manegment.appspot.com",
  messagingSenderId: "254597993646",
  appId: "1:254597993646:web:cb74a26e5e44940eae093f",
  measurementId: "G-TK6EZKH7N8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)