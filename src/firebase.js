import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBE0zKypBcMs6H_WU7k34UC3wNjoB9yRoM",
  authDomain: "droper-a7893.firebaseapp.com",
  projectId: "droper-a7893",
  storageBucket: "droper-a7893.appspot.com",
  messagingSenderId: "1069028426254",
  appId: "1:1069028426254:web:05bc3636ce15d1365e725f",
  measurementId: "G-BJQVR2JYH2"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: (doc) => {
    return { id: doc.id, ...doc.data() };
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
};

const storage = firebase.storage();
const auth = firebase.auth();

export { database, storage, auth };
export default firebase;
