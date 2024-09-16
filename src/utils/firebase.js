// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYN4-wiO53Ve56n45DWjB4OGUUYFF8jtM",
  authDomain: "netflixgpt-87dfa.firebaseapp.com",
  projectId: "netflixgpt-87dfa",
  storageBucket: "netflixgpt-87dfa.appspot.com",
  messagingSenderId: "9829441765",
  appId: "1:9829441765:web:27a7e8a538a00dc169f40c",
  measurementId: "G-VW3749VYYY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth()