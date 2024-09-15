// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTKh4_nVOUt73cyKK9MeJt_VsYpG5vgpY",
  authDomain: "nextjs-785ba.firebaseapp.com",
  projectId: "nextjs-785ba",
  storageBucket: "nextjs-785ba.appspot.com",
  messagingSenderId: "809862251815",
  appId: "1:809862251815:web:77592aef2aed7b5a2a1502",
  measurementId: "G-3YG3K7EQJV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);