// Import the functions you need from the SDKs you need
import { initializeApp ,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBRezeGV6R9ceiat1agUn2u2IrURUcMZWQ",
  authDomain: "prepmaster-32b73.firebaseapp.com",
  projectId: "prepmaster-32b73",
  storageBucket: "prepmaster-32b73.firebasestorage.app",
  messagingSenderId: "162251085479",
  appId: "1:162251085479:web:56c80b049cd01fb9b9ad82",
  measurementId: "G-W6TPYRD920"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();   
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
