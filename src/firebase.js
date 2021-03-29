import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBlR-5T_X8s5NfTgDt-by3qQfvU501R3AI",
  authDomain: "slack-clone-21759.firebaseapp.com",
  projectId: "slack-clone-21759",
  storageBucket: "slack-clone-21759.appspot.com",
  messagingSenderId: "422101548453",
  appId: "1:422101548453:web:cd4a3f9b8ef2b73ba53c4c",
  measurementId: "G-M75N0XQ9GT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
