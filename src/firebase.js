import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyDtk38Qp__OKnNKiqzNrVRQf_LGRNQv2tY",
    authDomain: "clone1-9a094.firebaseapp.com",
    databaseURL: "https://clone1-9a094.firebaseio.com",
    projectId: "clone1-9a094",
    storageBucket: "clone1-9a094.appspot.com",
    messagingSenderId: "889053029942",
    appId: "1:889053029942:web:bbfdc8d4fbcc81a19a1a97",
    measurementId: "G-BG62VN1MNQ"
  });

  const db =  firebaseApp.firestore();

  export default db;