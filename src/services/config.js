import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "codertp-60fa4.firebaseapp.com",
  projectId: "codertp-60fa4",
  storageBucket: "codertp-60fa4.appspot.com",
  messagingSenderId: "851938716492",
  appId: "1:851938716492:web:74d35d3e9f582c01517de9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)