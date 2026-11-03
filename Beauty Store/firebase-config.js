// Importar Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDo31cRO0q8J-XGFRuxaXNYlUCBEuemiP0",
    authDomain: "beauty-store-fd723.firebaseapp.com",
    projectId: "beauty-store-fd723",
    storageBucket: "beauty-store-fd723.firebasestorage.app",
    messagingSenderId: "334162953957",
    appId: "1:334162953957:web:378acdfe7a4916c2dd760c"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Base de datos
const db = getFirestore(app);

// Autenticación
const auth = getAuth(app);

export { db, auth };