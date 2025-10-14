"use client";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "robotic-talks.firebaseapp.com",
  projectId: "robotic-talks",
  storageBucket: "robotic-talks.firebasestorage.app",
  messagingSenderId: "122902874227",
  appId: "1:122902874227:web:547f6aba4e16bfd8b24206",
  measurementId: "G-8ZLECMZ8RV",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
