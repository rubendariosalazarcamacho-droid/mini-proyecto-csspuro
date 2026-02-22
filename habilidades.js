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
    
    listaObjetos.forEach (objeto =>{
        contenedorHabilidades.innerHTML +=`
        <div class="bg-grid">
        <img src="${objeto.icono}" alt="${objeto.nombre}">
        <h3>${objeto.nombre}</h3>
        <p>${objeto.nivelDeHabilidad}</p>
        </div>
        `
    })
}

mostrarHabilidades(habilidades)

