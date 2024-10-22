// firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCiKcNjBC7Uv7-JV78MgKJxLbQv1x2Et9w",
  authDomain: "react-final-montana.firebaseapp.com",
  projectId: "react-final-montana",
  storageBucket: "react-final-montana.appspot.com",
  messagingSenderId: "243618338019",
  appId: "1:243618338019:web:751251fb8d674099c5e1d6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
