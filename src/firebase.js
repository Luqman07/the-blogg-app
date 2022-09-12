// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGadjTsJWorFo3t_oVNlcibQJXHcVxeow",
    authDomain: "the-blogg-2.firebaseapp.com",
    projectId: "the-blogg-2",
    storageBucket: "the-blogg-2.appspot.com",
    messagingSenderId: "666809988286",
    appId: "1:666809988286:web:c5f9da377c4ea80d551aef"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);