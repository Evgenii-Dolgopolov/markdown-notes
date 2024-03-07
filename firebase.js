
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5AE0dCr-wSuvDhy-b54a8M_QqvMXcMu4",
  authDomain: "react-notes-10f2b.firebaseapp.com",
  projectId: "react-notes-10f2b",
  storageBucket: "react-notes-10f2b.appspot.com",
  messagingSenderId: "637359287349",
  appId: "1:637359287349:web:37380b032efde681c4d57c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")