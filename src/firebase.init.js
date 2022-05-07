// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5QC24onGlzzT9iWZUIPqfX3n3h_J6Pzc",
  authDomain: "system-management-ui.firebaseapp.com",
  projectId: "system-management-ui",
  storageBucket: "system-management-ui.appspot.com",
  messagingSenderId: "579149225090",
  appId: "1:579149225090:web:3b126edf18f2a87f44689b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;