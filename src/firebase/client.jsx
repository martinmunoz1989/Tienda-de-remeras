// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"
import { getStorage, uploadBytes } from "firebase/storage"
import { ref, getDownloadURL } from "firebase/storage";


// Your web app's Firebase configuration
const apiKey = import.meta.env.VITE_apiKey;
const authDomain = import.meta.env.VITE_authDomain;
const projectId = import.meta.env.VITE_projectId;
const storageBucket = import.meta.env.VITE_storageBucket;
const messagingSenderId = import.meta.env.VITE_messagingSenderId;
const appId = import.meta.env.VITE_appId;

const firebaseConfig = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//traemos firestore y lo guardamos en firestore
export const firestore = getFirestore(app);

export const storage = getStorage(app);

// Función para obtener la URL de las imágenes en la carpeta "productos"
export async function obtenerURLImagen(nombreImagen) {

    const rutaCompleta = `productos/${nombreImagen}`;
    const referenciaImagen = ref(storage, rutaCompleta);

    return getDownloadURL(referenciaImagen);
}