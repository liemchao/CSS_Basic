
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmwi4Ve_9gMCoXqYqU-cxBvLymitwcXqw",
  authDomain: "crmweb-121a0.firebaseapp.com",
  projectId: "crmweb-121a0",
  storageBucket: "crmweb-121a0.appspot.com",
  messagingSenderId: "208115782526",
  appId: "1:208115782526:web:60ba1e1d9941942866d92f",
  measurementId: "G-CS6M1WDG8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
