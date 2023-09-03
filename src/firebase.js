// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAN7SRvfsDk522MvsyeIFmfUBp6G-GGjxg",
  authDomain: "netflix-clone-d28ee.firebaseapp.com",
  projectId: "netflix-clone-d28ee",
  storageBucket: "netflix-clone-d28ee.appspot.com",
  messagingSenderId: "208121560835",
  appId: "1:208121560835:web:36cc52903a607a59633336"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);