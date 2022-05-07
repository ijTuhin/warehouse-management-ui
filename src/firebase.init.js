// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe8iklv2irSwk039HdhURd3aJqx1FDLLM",
  authDomain: "warehouse-management-ui.firebaseapp.com",
  projectId: "warehouse-management-ui",
  storageBucket: "warehouse-management-ui.appspot.com",
  messagingSenderId: "802747567687",
  appId: "1:802747567687:web:8cc0fab0e19db89cc66b62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;