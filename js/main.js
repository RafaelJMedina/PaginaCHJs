const productos = [
    {
        id: "tecnologia-01",
        titulo: "3080 TI",
        imagen: "./img/Tec/3080.jpg",
        categoria: {
            nombre: "Tecnologia",
            id: "tecnologias"
        },
        precio: 170000
    },
    {
        id: "tecnologia-02",
        titulo: "Smart Tv 55'",
        imagen: "./img/Tec/tv.jpg",
        categoria: {
            nombre: "Tecnologia",
            id: "tecnologias"
        },
        precio: 125000
    },
    {
        id: "tecnologia-03",
        titulo: "Netbook Alien-Ware",
        imagen: "./img/Tec/alienware.jpg",
        categoria: {
            nombre: "Tecnologia",
            id: "tecnologias"
        },
        precio: 400000
    },
    {
        id: "camiseta-01",
        titulo: "Camiseta Negra",
        imagen: "./img/Camisetas/220px-Camiseta-negra.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "ropas"
        },
        precio: 6000
    },
    {
        id: "camiseta-02",
        titulo: "Camiseta Blanca",
        imagen: "./img/Camisetas/mockup-camiseta.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "ropas"
        },
        precio: 7500
    },
    {
        id: "camiseta-03",
        titulo: "Camiseta de River",
        imagen: "./img/Camisetas/camisetariver.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "ropas"
        },
        precio: 9500
    },
    {
        id: "deporte-01",
        titulo: "Botines del 10",
        imagen: "./img/Deportes/botinesMessi.png",
        categoria: {
            nombre: "Deporte",
            id: "deportes"
        },
        precio: 30000
    },
    {
        id: "deporte-02",
        titulo: "Pelota Al Rihla",
        imagen: "./img/Deportes/pelota-oficial-copa-mundial-de-la-fifa-qatar-2022_862x485.jpg",
        categoria: {
            nombre: "Deporte",
            id: "deportes"
        },
        precio: 12999
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


async function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            
            <div class="card" style="width: 18rem;">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}">
            <div class="card-body">
                <h5 class="card-title">${producto.titulo}</h5>
                <p class="card-text">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
      
    Toast.fire({
        icon: 'success',
        title: 'Producto agregado'
    })

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        // En vez de modificar el objeto original, creamos una copia
        // usando el operador spread (...) y le agregamos la propiedad cantidad.
        const nuevoProducto = { ...productoAgregado, cantidad: 1 };
        productosEnCarrito.push(nuevoProducto);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    console.log("¡Producto agregado!", idBoton); 
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}

function encontrarProductoMasBarato() {
    const productoMasBarato = productos.reduce((acumulador, producto) => {
        if (producto.precio < acumulador.precio) {
            return producto;
        } else {
            return acumulador;
        }
    });

    console.log(`El producto más barato es: ${productoMasBarato.titulo} ($${productoMasBarato.precio})`);
}
encontrarProductoMasBarato();