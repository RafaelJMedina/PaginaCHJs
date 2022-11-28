//PRODUCTOS

const productos = [
    // TECNOLOGIA
    {
        id: "tecnologia-01",
        titulo: "Tecnologia 01",
        imagen: "./img/Tec/3080.jpg",
        categoria: {
            nombre: "Tecnologia",
            id: "tecnologia"
        },
        precio: 1000
    },
    {
        id: "tecnologia-02",
        titulo: "Tecnologia 02",
        imagen: "./img/Tec/tv.jpg",
        categoria: {
            nombre: "Tecnologia",
            id: "tecnologia"
        },
        precio: 1000
    },
    {
        id: "tecnologia-03",
        titulo: "Tecnologia 03",
        imagen: "./img/Tec/alienware.jpg",
        categoria: {
            nombre: "Tecnologia",
            id: "tecnologia"
        },
        precio: 1000
    },
    // ROPA
    {
        id: "camiseta-01",
        titulo: "Camiseta 01",
        imagen: "./img/Camisetas/220px-Camiseta-negra.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "ropas"
        },
        precio: 1000
    },
    {
        id: "camiseta-02",
        titulo: "Camiseta 02",
        imagen: "./img/Camisetas/mockup-camiseta.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "ropas"
        },
        precio: 1000
    },
    {
        id: "camiseta-03",
        titulo: "Camiseta 03",
        imagen: "./img/Camisetas/camisetariver.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "ropas"
        },
        precio: 1000
    },
    // DEPORTE Y VARIOS
    {
        id: "deporte-01",
        titulo: "Deportes 01",
        imagen: "./img/Deportes/botinesMessi.png",
        categoria: {
            nombre: "Deporte",
            id: "deportes"
        },
        precio: 1000
    },
    {
        id: "deporte-02",
        titulo: "Deportes 02",
        imagen: "./img/Deportes/pelota-oficial-copa-mundial-de-la-fifa-qatar-2022_862x485.jpg",
        categoria: {
            nombre: "Deporte",
            id: "deportes"
        },
        precio: 1000
    }
];

const contenedorProdcutos = document.querySelector("#contenedor-productos")


function cargarProductos() {
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;
        contenedorProdcutos.append(div);
    })
}

cargarProductos()