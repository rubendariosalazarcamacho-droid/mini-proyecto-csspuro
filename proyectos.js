const proyectos = [
    {
        titulo: "Results summary component",
        descripcion: "This challenge has something for everyone. It’s a HTML and CSS only project, but we’ve also provided a JSON file of the test results for anyone wanting to practice JS.",
        imagen: "./imagenes/proyecto3.jpg"
    },

    {
        titulo: "Blog preview card",
        descripcion: "This HTML & CSS-only challenge is a perfect project for beginners getting up to speed with HTML and CSS fundamentals, like HTML structure and the box model.",
        imagen: "./imagenes/proyecto1.jpg"
    },

    {
        titulo: "QR code component",
        descripcion: "Un primer reto perfecto si eres nuevo en HTML y CSS. El diseño de la tarjeta no se mueve, así que es ideal si aún no has aprendido a crear diseños adaptables.",
        imagen: "./imagenes/proyecto2.jpg"
    },

    {
        titulo: "Tip calculator app",
        descripcion: "This small app is perfect for anyone starting to get to grips with JavaScript. The calculator functionality will be a nice test!",
        imagen: "./imagenes/proyecto4.jpg"
    }
]

const contenedorProyectos = document.querySelector("#contenedorProyectos")

const mostrarProyectos = (listaProyectos) => {
    contenedorProyectos.innerHTML = ""
    listaProyectos.forEach(element => {
        contenedorProyectos.innerHTML += `
        <div class="itemProyecto">
        <img class="imagenJs" src="${element.imagen}" alt="${element.titulo}">
        <h2 class="h2Js">${element.titulo}</h2>
        <p class="pJs">${element.descripcion}</p>
        </div>
        `
    });
}

mostrarProyectos(proyectos)

