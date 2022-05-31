import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7VToFizTYGCEyMLUxVB0615H4k8TZitg",
  authDomain: "foodie-app-969ca.firebaseapp.com",
  projectId: "foodie-app-969ca",
  storageBucket: "foodie-app-969ca.appspot.com",
  messagingSenderId: "824154820994",
  appId: "1:824154820994:web:ddf09c754caca34d927f9b",
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
