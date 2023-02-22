import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNo25y7XaBBlraAytLlYhNjV7eqai4b2U",
  authDomain: "auth-ad142.firebaseapp.com",
  projectId: "auth-ad142",
  storageBucket: "auth-ad142.appspot.com",
  messagingSenderId: "115688522536",
  appId: "1:115688522536:web:2ddc7f3ac064b6d44d061d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
