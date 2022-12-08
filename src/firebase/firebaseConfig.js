// Import the functions you need from the SDKs you need
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnhR7khUmaJYKLI1vQiTv32R51kERHFrk",
  authDomain: "fir-day-projects-abarrotao.firebaseapp.com",
  projectId: "fir-day-projects-abarrotao",
  storageBucket: "fir-day-projects-abarrotao.appspot.com",
  messagingSenderId: "480916208534",
  appId: "1:480916208534:web:abb9f2b18afa48cbd6bbb7",
  measurementId: "G-23LLLF6W2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const dataBase = getFirestore(app);
export const google = new GoogleAuthProvider();

// const analytics = getAnalytics(app);
