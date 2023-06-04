import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "Your stuff here",
  authDomain: "Your stuff here",
  projectId: "Your stuff here",
  storageBucket: "Your stuff here",
  messagingSenderId: "Your stuff here",
  appId: "Your stuff here",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
