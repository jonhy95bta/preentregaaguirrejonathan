
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCDDkOoU57KP1kpr7JEsYLCEZ86UrAd8Ko",
    authDomain: "react-ecommerce-jha.firebaseapp.com",
    projectId: "react-ecommerce-jha",
    storageBucket: "react-ecommerce-jha.firebasestorage.app",
    messagingSenderId: "980373687163",
    appId: "1:980373687163:web:520951aaf60ea405dd8bde",
    measurementId: "G-ENGFYXPM0S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const db = getFirestore(app)