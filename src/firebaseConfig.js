import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmXw7CQ6USXqKvYMfPPMkqulMiHejNM_w",
  authDomain: "react-firebase-auth-35e67.firebaseapp.com",
  projectId: "react-firebase-auth-35e67",
  storageBucket: "react-firebase-auth-35e67.appspot.com",
  messagingSenderId: "291665827525",
  appId: "1:291665827525:web:ac47eb3b7dce4d46c402ac"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore(); // Initialize Firestore

export default app;
export { db };
