const habilidades = [
    {
        nombre: "HTML",
        nivelDeHabilidad: "Junior",   //Junior  Intermedio Avanzado  Senior
        icono: "./imagenes/html.png"
    },

    {
        nombre: "CSS",
        nivelDeHabilidad: "Junior",
        icono: "./imagenes/css.png"
    },

    {
        nombre: "Javascript",
        nivelDeHabilidad: "Junior",
        icono: "./imagenes/js.png"
    },

    {
        nombre: "React",
        nivelDeHabilidad: "Junior",
        icono: "./imagenes/react.png"
    },

    {
        nombre: "Nodejs",
        nivelDeHabilidad: "Junior",
        icono: "./imagenes/node.png"
    },

    {
        nombre: "Mysql",
        nivelDeHabilidad: "Junior",
        icono: "./imagenes/mysql.png"
    }

]

const contenedorHabilidades = document.querySelector("#contenedor-grid")


const mostrarHabilidades = (listaObjetos) => {

    contenedorHabilidades.innerHTML = ""

    listaObjetos.forEach(objeto => {
        contenedorHabilidades.innerHTML += `
        <div class="bg-grid">
        <img src="${objeto.icono}" alt="${objeto.nombre}">
        <h3>${objeto.nombre}</h3>
        <p>${objeto.nivelDeHabilidad}</p>
        </div>
        `
    })
}

mostrarHabilidades(habilidades)

//////////////////////////////////////////////////////////////////////////////////
// AQUI IMPLEMENTO EL PUNTO 2 DEL MP EL BOTON CON TOGGLE

const botonMostrar = document.querySelector("#botonOculto")
const menuOculto = document.querySelector("#menuOculto")

console.log(menuOculto)

botonMostrar.addEventListener("click",
    function mostrarProyectos() {
        menuOculto.classList.toggle("mostrarMenu")
    }
)


//////////////////////////////////////////////////////////////////////////////////
// aqui implemento el envío del formulario

const inputNombre = document.querySelector("#inputNombre")
const inputEmail = document.querySelector("#inputEmail")
const inputTextArea = document.querySelector("#inputTextArea")
const chat = document.querySelector("#chat")


chat.addEventListener("click", function (evento) {
    evento.preventDefault();
    let nombre = inputNombre.value.trim();
    let email = inputEmail.value.trim();
    let mensaje = inputTextArea.value.trim();

    if (nombre === "" || email === "" || mensaje === "") {
        alert("Debe ingresar todos los campos:")

    } else {
        let miEmail = "rubendariosalazarcamacho@gmail.com"
        const asunto = encodeURIComponent(`Mensaje de ${nombre}`);
        const cuerpo = encodeURIComponent(`Email: ${email}\n\nMensaje: ${mensaje}`);

        window.location.href = `mailto:${miEmail}?subject=${asunto}&body=${cuerpo}`;


        inputEmail.value = ""
        inputNombre.value = ""
        inputTextArea.value = ""


    }

})



