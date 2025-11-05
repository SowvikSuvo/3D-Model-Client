// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_rmkrQPN2p73ScHVZdhtJEiEKbh7HxAM",
  authDomain: "modal-games.firebaseapp.com",
  projectId: "modal-games",
  storageBucket: "modal-games.firebasestorage.app",
  messagingSenderId: "518928916391",
  appId: "1:518928916391:web:bb459c105f8b8b9d8ae082",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
