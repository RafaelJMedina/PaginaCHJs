class Producto {
  constructor(id, nombre, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
  restaStock() {
    this.stock = this.stock - 1;
    console.log(`El stock de ${this.nombre} ha sido actualizado`);
  }
}

const bicicleta = new Producto(0, "Bicicleta", 43999, 15);
const tv = new Producto(1, "TV", 60000, 10);
const reloj = new Producto(2, "Reloj", 5000, 30);
const pdv = new Producto(3, "Placa de video", 150000, 20);
const kitmate = new Producto(4, "Kit matero", 9500, 100);
const pelota = new Producto(5, "Pelota del mundial", 10000, 500);

const productos = [bicicleta, tv, reloj, pdv, kitmate, pelota];

const carrito = [];

let productoOfrecidos = "Tenemos para ofrecerle: ";

function agregarCarrito() {
  for (item of productos) {
    productoOfrecidos += ` \n ${item.id} - ${item.nombre} a tan solo ${item.precio}`;
  }

  productoOfrecidos += `\nIngrese el nro de Item que desea agregar a su carrito. Para finalizar ingrese 99`;
  let respuesta = parseInt(prompt(productoOfrecidos));

  while (isNaN(respuesta)) {
    alert("Por favor ingrese sólo números");
    respuesta = parseInt(prompt(productoOfrecidos));
  }

  while (respuesta != 99) {
    switch (respuesta) {
      case 0:
        carrito.push(productos[0]);
        alert(`Agregamos al carrito el producto ${productos[0].nombre}`);
        productos[0].restaStock();
        break;
      case 1:
        carrito.push(productos[1]);
        alert(`Agregamos al carrito el producto ${productos[1].nombre}`);
        productos[1].restaStock();
        break;
      case 2:
        carrito.push(productos[2]);
        alert(`Agregamos al carrito el producto ${productos[2].nombre}`);
        productos[2].restaStock();
        break;
      case 3:
        carrito.push(productos[3]);
        alert(`Agregamos al carrito el producto ${productos[3].nombre}`);
        productos[3].restaStock();
        break;
      case 4:
        carrito.push(productos[4]);
        alert(`Agregamos al carrito el producto ${productos[4].nombre}`);
        productos[4].restaStock();
        break;
      case 5:
        carrito.push(productos[5]);
        alert(`Agregamos al carrito el producto ${productos[5].nombre}`);
        productos[5].restaStock();
        break;
      default:
        alert(`No tenemos el producto que elegiste`);
        break;
    }
    respuesta = parseInt(prompt(productoOfrecidos));
  }
  alert("Cerramos tu pedido");
  mostrarCarrito()
}


let productosCarrito = `Vas a llevar: `
let precioCarrito = 0


agregarCarrito();


function mostrarCarrito(){
  for (itemsElegidos of carrito){
    productosCarrito += ` \n - ${itemsElegidos.nombre}`
    precioCarrito += itemsElegidos.precio
  }

  alert(`Tu Carrito: \n ${productosCarrito} \n Por un total de ${precioCarrito}`)
}