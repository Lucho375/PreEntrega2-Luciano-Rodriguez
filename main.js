// Constructor de objetos

class Producto {
    constructor(id, nombre, precio, desc) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.desc = desc;
    }
    iva() {
        let iva = this.precio * 1.21;
        return iva;
    }
}

// Objetos/Productos

const AIKE = new Producto(1, "1/4 Aike", 580, "Hamburguesa con queso cheddar, cebolla brunoise y salsa 1/4.");
const AIKEBURGER = new Producto(2, "Aike Burger", 700, "Hamburguesa con queso cheddar, bacon, cebolla crispy y salsa mil islas.");
const AIKECLASICA = new Producto(3, "Aike Clasica", 620, "Hamburguesa con queso danbo y champiñones salteados en manteca.");

// Arrays

const PRODUCTOS = [AIKE, AIKEBURGER, AIKECLASICA];
let cart = [];

// variables globales

let totalCarrito;
let userName;
alert("Abrir consola")

// Bucle para preguntar el nombre al usuario mientras ingrese el campo vacio.

for (let i = 0; i < 3; i++) {
    userName = prompt("Bienvenido, ingresa tu nombre");
    if (userName == null || userName == "") {
        alert("Error: debe ingresar un nombre");
    } else {
        alert(`Bienvenido ${userName}`);
        realizarPedidoComida();
        break;
    }
}

// Funcion para pedir

function realizarPedidoComida() {
    let pedido;

    // Pedirle al usuario un numero para realizar el pedido

    do {
        if (pedido === "1") {
            console.log(`Agregado al carrito: ${PRODUCTOS[0].nombre} $${PRODUCTOS[0].iva()}`);
            cart.push(PRODUCTOS[0].iva());
        } else if (pedido == "2") {
            console.log(`Agregado al carrito: ${PRODUCTOS[1].nombre} $${PRODUCTOS[1].iva()}`);
            cart.push(PRODUCTOS[1].iva());
        } else if (pedido == "3") {
            console.log(`Agregado al carrito: ${PRODUCTOS[2].nombre} $${PRODUCTOS[2].iva()}`);
            cart.push(PRODUCTOS[2].iva());
        }
        pedido = prompt(`
        **Ingrese un numero para pedir**
        1- ${PRODUCTOS[0].nombre} $ ${PRODUCTOS[0].iva()}
        2- ${PRODUCTOS[1].nombre} $ ${PRODUCTOS[1].iva()}
        3- ${PRODUCTOS[2].nombre} $ ${PRODUCTOS[2].iva()}
        4- Finalizar pedido.
        `);
    } while (pedido < 4);
}


// Acumulador para el carrito

totalCarrito = cart.reduce((acumulador, prod) => acumulador + prod, 0);

alert(`
El total del carrito es : $${totalCarrito}
Gracias ${userName.toUpperCase()}, tu pedido esta siendo enviado.
`);