import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAY_q67aLfftzHWN5h-TLA_nlJMTxP_eeo",
    authDomain: "todo-list-3ee5b.firebaseapp.com",
    projectId: "todo-list-3ee5b",
    storageBucket: "todo-list-3ee5b.appspot.com",
    messagingSenderId: "771579337317",
    appId: "1:771579337317:web:75435ac17daa01fba2c48c",
    measurementId: "G-QGFYKQ5CZK"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)

