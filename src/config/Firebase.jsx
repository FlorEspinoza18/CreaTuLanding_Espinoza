// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import productos from "../data/asyncMock";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9kr8BYWVm7VQ5cPk6XmBfKCSua7q-Ohc",
    authDomain: "gifted-journeys.firebaseapp.com",
    projectId: "gifted-journeys",
    storageBucket: "gifted-journeys.appspot.com",
    messagingSenderId: "474460963271",
    appId: "1:474460963271:web:5be08b711198a017a599e2"
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
