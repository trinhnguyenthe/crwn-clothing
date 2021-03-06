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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
