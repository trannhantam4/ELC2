// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { initializeFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGhdyKU-yOSrrLQmZAfRU0yjUjlOQOERc",
  authDomain: "elc2-504a5.firebaseapp.com",
  projectId: "elc2-504a5",
  storageBucket: "elc2-504a5.appspot.com",
  messagingSenderId: "827355421235",
  appId: "1:827355421235:web:4ce5b7aa88cef5d868a146",
  measurementId: "G-C6ZN6P7XNY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize FireStore
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  useFetchStreams: false,
});
