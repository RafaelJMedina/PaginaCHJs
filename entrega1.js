let producto = parseInt(
  prompt(
    "Escoge el producto que deseas comprar: 1.Bici - 2.TV - 3.Reloj - 4.Placa de video - 5. Kit matero - 6. Pelota del mundial"
  )
);
let totalCompra = 0;
let seguirComprando = true;
let decision;

class Producto {
  constructor(id, nombre, precio) {
    this.id;
    this.nombre;
    this.precio;
  }
}

const bicicleta = new Producto(1, "Bicicleta", 43999);
const tv = new Producto(2, "TV", 60000);
const reloj = new Producto(3, "Reloj", 5000);
const pdv = new Producto(4, "Placa de video", 150000);
const kitmate = new Producto(4, "Kit matero", 9500);
const pelota = new Producto(4, "Pelota del mundial", 10000);

while (seguirComprando === true) {
  if (producto === 1) {
    totalCompra = totalCompra + 43999;
  } else if (producto === 2) {
    totalCompra = totalCompra + 60000;
  } else if (producto === 3) {
    totalCompra = totalCompra + 5000;
  } else if (producto === 4) {
    totalCompra = totalCompra + 150000;
  } else if (producto === 5) {
    totalCompra = totalCompra + 9500;
  } else if (producto === 6) {
    totalCompra = totalCompra + 10000;
  } else {
    producto = parseInt(
      prompt("Escoge un producto habilitado: 1.Bici - 2.TV - 3.Reloj - 4.Placa de video - 5. Kit matero - 6. Pelota del mundial")
    );
    continue;
  }

  decision = parseInt(prompt("Quieres seguir comprando? 1.Si 2.No"));
  if (decision === 1) {
    producto = parseInt(
      prompt(
        "Escoge el producto que deseas comprar; 1.Bici - 2.TV - 3.Reloj - 4.Placa de video - 5. Kit matero - 6. Pelota del mundial"
      )
    );
  } else {
    seguirComprando = false;
  }
}
alert(`El total de tu compra es ${totalCompra}`);
