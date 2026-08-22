import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";

import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyDhYPTmWOqYgUOk3a0QK0WJBFIYlGZdWA0",
  authDomain: "padho-aur-kamao-3eeae.firebaseapp.com",
  projectId: "padho-aur-kamao-3eeae",
  storageBucket: "padho-aur-kamao-3eeae.firebasestorage.app",
  messagingSenderId: "670063905617",
  appId: "1:670063905617:web:9b3a7e62fdeea14fbfa170",
  measurementId: "G-7J1YV8HN3F"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);


export {
  app,
  auth,
  db,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  collection,
  addDoc,
  serverTimestamp
};


onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Firebase user logged in:", user.email);
  } else {
    console.log("No user logged in");
  }
});
