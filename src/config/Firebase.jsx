// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import productos from "../data/asyncMock";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain:import.meta.env.VITE_FIREBASE_AUTHDOMAIN ,
    projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_FIREBASE_APPID
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const productosCollectionRef = collection(db, 'productos');

productos.forEach(async (producto) => {
    const querySnapshot = await getDocs(query(productosCollectionRef, where('id', '==', producto.id)));

    if (querySnapshot.empty) {
        try {
            const docRef = await addDoc(productosCollectionRef, producto);
            console.log(`Se agregó el documento con id: ${docRef.id}`);
        } catch (error) {
            console.log(error);
        }
    } else {
        console.log(`El producto con id ${producto.id} ya existe en la base de datos.`);
    }
});
