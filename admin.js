import { auth } from "./firebase-config.js";

import { 
    signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";


const correo = document.getElementById("correo");
const password = document.getElementById("password");
const boton = document.getElementById("btnLogin");
const mensaje = document.getElementById("mensaje");


boton.addEventListener("click", async ()=>{


    try{

        const usuario = await signInWithEmailAndPassword(
            auth,
            correo.value,
            password.value
        );


        mensaje.innerHTML = "Ingreso correcto ✅";


        setTimeout(()=>{

            window.location.href="panel.html";

        },1000);



    }catch(error){


        mensaje.innerHTML = "Correo o contraseña incorrectos ❌";


        console.log(error);


    }


});