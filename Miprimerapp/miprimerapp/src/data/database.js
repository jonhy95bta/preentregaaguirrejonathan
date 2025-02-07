
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { doc, getDoc, writeBatch } from "firebase/firestore";
import { query, where, addDoc } from "firebase/firestore";
import products from "./data"


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
    const docRef = doc(db, "productos", itemId);
    const docSnapshot = await getDoc(docRef);
    //Verifica que exista el producto
    if (!docSnapshot.exists()) {
        throw new Error("El producto no existe");
    }

    return { ...docSnapshot.data(), id: docSnapshot.id };
}

export async function getAsynItemsByCategory(catId) {
    const productsColRef = collection(db, "productos");

    const q = query(productsColRef, where("category", "==", catId.toLowerCase()));

    const productosSnapshot = await getDocs(q);

    const documentsData = productosSnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }));

    return documentsData;
}

export async function createDocument() {

    const docRef = await addDoc(collection(db, "productos"),

        {

            title: 'Esterilla de yoga antideslizante',
            price: 24.99,
            stock: 20,
            img: 'https://picsum.photos/seed/yoga/300/200',
            category: 'yoga'


        })
    console.log("documento creado", docRef.id);

}

export async function exportProductsToDB() {

    for (let item of products) {
        delete item.id;
        const docID = await addDoc(collection(db, "productos"), item)
        console.log("creado documento", docID.id);

    }

}

export async function exportProductsWithBatch() {
    const batch = writeBatch(db)

    for (let item of products) {

        const itemid= `${item.id}`;
        delete item.id
        const newDoc = doc(db,"productos",`item-${itemid}`);
        batch.set(newDoc,item)

    }

    const commitRes = await batch.commit()
    console.log ("commit de products", commitRes)
}

export async function updateStock(){



}

export async function createBuyOrder(orderData){

    const newOrderDoc =
    await addDoc(collection(db,"orders"), orderData)
    
    return newOrderDoc.id

}

export async function createBuyOrderWithStockUpdate(){



}