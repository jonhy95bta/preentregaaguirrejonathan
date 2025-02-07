
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { query, where } from "firebase/firestore";

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


export default async function getAsyncData() {

    const collectionRef = collection(db, "productos")
    const productosSnapshot = await getDocs(collectionRef)

    const documentsData = productosSnapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
    }
    )
    return documentsData;
}

export async function getAsyncItemById(itemId) {
    const docRef = doc(db, "productos", itemId)
    const docSnapshot = await getDoc(docRef)
    const docData = docSnapshot.data();
    return docData;
}

export async function getAsynItemsByCategory(catId){
    const productsColRef = collection(db,"productos");
    const q = query(productsColRef, where("category", "==", catId));

    const productosSnapshot = await getDocs(q)

    const documentsData = productosSnapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
    }
    )
    return documentsData;
}