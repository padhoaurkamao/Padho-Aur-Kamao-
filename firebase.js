// ============================================
// PADHO AUR KAMAO - FIREBASE.JS
// Firebase Project: padho-aur-kamao-3eeae
// ============================================


// ============================================
// FIREBASE APP
// ============================================

import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";


// ============================================
// FIREBASE AUTHENTICATION
// ============================================

import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";


// ============================================
// FIRESTORE
// ============================================

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  doc,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


// ============================================
// FIREBASE CONFIG
// ============================================

const firebaseConfig = {

  apiKey:
    "AIzaSyDhYPTmWOqYgUOk3a0QK0WJBFIYlGZdWA0",

  authDomain:
    "padho-aur-kamao-3eeae.firebaseapp.com",

  projectId:
    "padho-aur-kamao-3eeae",

  storageBucket:
    "padho-aur-kamao-3eeae.firebasestorage.app",

  messagingSenderId:
    "670063905617",

  appId:
    "1:670063905617:web:9b3a7e62fdeea14fbfa170",

  measurementId:
    "G-7J1YV8HN3F"

};


// ============================================
// INITIALIZE FIREBASE
// ============================================

const app =
  initializeApp(firebaseConfig);


// ============================================
// INITIALIZE AUTH
// ============================================

const auth =
  getAuth(app);


// ============================================
// INITIALIZE FIRESTORE
// ============================================

const db =
  getFirestore(app);


// ============================================
// EXPORT EVERYTHING
// ============================================

export {

  // Firebase
  app,

  // Authentication
  auth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,

  // Firestore
  db,
  collection,
  addDoc,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  doc,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp

};


// ============================================
// AUTH STATE MONITOR
// ============================================

onAuthStateChanged(
  auth,
  (user) => {

    if (user) {

      console.log(
        "✅ Firebase User Logged In:",
        user.email
      );

      console.log(
        "UID:",
        user.uid
      );

    } else {

      console.log(
        "ℹ️ No Firebase User Logged In"
      );

    }

  }
);
