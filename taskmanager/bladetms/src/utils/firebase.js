
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "task-manager-84f18.firebaseapp.com",
  projectId: "task-manager-84f18",
  storageBucket: "task-manager-84f18.firebasestorage.app",
  messagingSenderId: "904870419163",
  appId: "1:904870419163:web:0f335d63c3f796fa114afe"
};


export const app = initializeApp(firebaseConfig);