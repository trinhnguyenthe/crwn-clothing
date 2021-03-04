import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAv9Yr5sAtEgff-3SHiRuMifsE2qr7OqRs",
  authDomain: "crwn-clothingdb-4b93f.firebaseapp.com",
  projectId: "crwn-clothingdb-4b93f",
  storageBucket: "crwn-clothingdb-4b93f.appspot.com",
  messagingSenderId: "262025000338",
  appId: "1:262025000338:web:1278113bdb01a6bb0b3d4b",
  measurementId: "G-4N54LZ783V",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
