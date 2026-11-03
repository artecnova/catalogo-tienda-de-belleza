import { db, auth } from "./firebase-config.js";

import {
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";

import {
    collection,
    getDocs,
    doc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";

import {
    signOut
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";


const contenedor = document.getElementById("catalogos-admin");


async function cargarCatalogos(){

    const consulta = await getDocs(collection(db,"catalogos"));


    consulta.forEach((documento)=>{


        const datos = documento.data();


        contenedor.innerHTML += `

        <div class="admin-catalogo">

            <h2>${documento.id}</h2>


            <label>Campaña</label>

            <input 
            id="campaña-${documento.id}"
            value="${datos.Campaña || ""}"
            >


            <label>Enlace</label>

            <input 
            id="enlace-${documento.id}"
            value="${datos.Enlace || ""}"
            >


            <label>Fecha</label>

            <input 
            id="fecha-${documento.id}"
            value="${datos.Fecha || ""}"
            >


            <button 
            class="btn guardar"
            data-id="${documento.id}">
            Guardar cambios
            </button>


        </div>

        `;


    });


    const botones = document.querySelectorAll(".guardar");


    botones.forEach((boton)=>{


        boton.addEventListener("click", async ()=>{


            const id = boton.dataset.id;


            const referencia = doc(db,"catalogos",id);



            await updateDoc(referencia,{

                Campaña:
                document.getElementById(`campaña-${id}`).value,


                Enlace:
                document.getElementById(`enlace-${id}`).value,


                Fecha:
                document.getElementById(`fecha-${id}`).value

            });



            alert("Catálogo actualizado ✅");


        });


    });



}



onAuthStateChanged(auth, (usuario)=>{


    if(usuario){

        cargarCatalogos();

    }else{

        window.location.href="admin.html";

    }


});


document.getElementById("cerrarSesion")
.addEventListener("click",()=>{


    signOut(auth);


    window.location.href="admin.html";


});