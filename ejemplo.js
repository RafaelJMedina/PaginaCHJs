let producto = parseInt(
  prompt(
    "Escoge el producto que deseas comprar: 1.Iphone - 2.TV - 3.Ipad - 4.PC"
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

const iphone = new Producto(1, "Iphone", 500);
const tv = new Producto(2, "TV", 1000);
const ipad = new Producto(3, "Ipad", 200);
const pc = new Producto(4, "PC", 800);

while (seguirComprando === true) {
  if (producto === 1) {
    totalCompra = totalCompra + 500;
  } else if (producto === 2) {
    totalCompra = totalCompra + 1000;
  } else if (producto === 3) {
    totalCompra = totalCompra + 200;
  } else if (producto === 4) {
    totalCompra = totalCompra + 800;
  } else {
    producto = parseInt(
      prompt("Escoge un producto habilitado: 1.Iphone - 2.TV - 3.Ipad 4.PC")
    );
    continue;
  }

  decision = parseInt(prompt("Quieres seguir comprando? 1.Si 2.No"));
  if (decision === 1) {
    producto = parseInt(
      prompt(
        "Escoge el producto que deseas comprar; 1.Iphone - 2.TV - 3.Ipad 4.PC"
      )
    );
  } else {
    seguirComprando = false;
  }
}
alert(`El total de tu compra es ${totalCompra}`);

// alert ('El total de tu compra es '+totalCompra)

//1.Iphone = 500
//2.TV = 1000
//3.Ipad = 200
//4.Pc = 800
