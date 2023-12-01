// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "prestige-palaces.firebaseapp.com",
  projectId: "prestige-palaces",
  storageBucket: "prestige-palaces.appspot.com",
  messagingSenderId: "66761291827",
  appId: "1:66761291827:web:2b85f3b8d73675c1054b46"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
