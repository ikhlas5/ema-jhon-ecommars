// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE4Lt4qQkc0VlOxCiVMcsoMMU9JD9nvhA",
  authDomain: "ema-john-ecommerce-7d8a9.firebaseapp.com",
  projectId: "ema-john-ecommerce-7d8a9",
  storageBucket: "ema-john-ecommerce-7d8a9.appspot.com",
  messagingSenderId: "1052929401910",
  appId: "1:1052929401910:web:51cf6a8750cc9fd234e497"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;