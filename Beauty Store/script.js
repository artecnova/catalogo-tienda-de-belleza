const secciones = document.querySelectorAll("section");
const enlaces = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let actual = "";

    secciones.forEach((seccion) => {

        const inicio = seccion.offsetTop - 150;

        const altura = seccion.offsetHeight;

        if (scrollY >= inicio && scrollY < inicio + altura) {

            actual = seccion.getAttribute("id");

        }

    });

    enlaces.forEach((link) => {

        link.classList.remove("activo");

        if (link.getAttribute("href") === "#" + actual) {

            link.classList.add("activo");

        }

    });

});

const elementos = document.querySelectorAll(".reveal");

function mostrarElementos(){

    const altoPantalla = window.innerHeight;

    elementos.forEach((elemento)=>{

        const posicion = elemento.getBoundingClientRect().top;

        if(posicion < altoPantalla - 120){

            elemento.classList.add("visible");

        }

    });

}

window.addEventListener("scroll", mostrarElementos);

mostrarElementos();