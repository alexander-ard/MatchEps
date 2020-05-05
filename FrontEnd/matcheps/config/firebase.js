import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDQ5sYUxdcAPAuF2fX9bDG9jYUGL_dhG2U",
    authDomain: "matcheps-comments.firebaseapp.com",
    databaseURL: "https://matcheps-comments.firebaseio.com",
    projectId: "matcheps-comments",
    storageBucket: "matcheps-comments.appspot.com",
    messagingSenderId: "922848573809",
    appId: "1:922848573809:web:31b7fc486f2fa678e09ed0",
    measurementId: "G-7E1RW5ZW3B"
};

const db = firebaseConfig.firestore();

export { db };