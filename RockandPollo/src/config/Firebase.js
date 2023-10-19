// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgtuS5v4K4BdD-lrtbGFveGfe_-7JejSQ",
    authDomain: "rockandpollo19.firebaseapp.com",
    projectId: "rockandpollo19",
    storageBucket: "rockandpollo19.appspot.com",
    messagingSenderId: "918150801669",
    appId: "1:918150801669:web:5ab4779a847dd41d5baf6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
