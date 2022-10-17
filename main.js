// Constructor de objetos

class Producto {
    constructor(id, nombre, precio, desc, tipo) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.desc = desc;
        this.tipo = tipo;
    }
    iva() {
        let iva = this.precio * 1.21;
        return iva;
    }
}

// Objetos/Productos

const AIKE = new Producto(1, "1/4 Aike", 580, "Hamburguesa con queso cheddar, cebolla brunoise y salsa 1/4.", "comida");
const AIKEBURGER = new Producto(2, "Aike Burger", 700, "Hamburguesa con queso cheddar, bacon, cebolla crispy y salsa mil islas.", "comida");
const AIKECLASICA = new Producto(3, "Aike Clasica", 620, "Hamburguesa con queso danbo y champiñones salteados en manteca.", "comida");
const COCACOLA = new Producto(4, "Coca-Cola", 250, "bebida de cola", "bebida");

// Arrays

const PRODUCTOS = [AIKE, AIKEBURGER, AIKECLASICA, COCACOLA];
let cart = [];

// variables globales

let totalCarrito;
let userName;
let menuElegido;
alert("Abrir consola")
elegirMenu();
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
        else if(pedido == "4") {
            console.log(`Agregado al carrito: ${PRODUCTOS[3].nombre} $${PRODUCTOS[3].iva()}`);
            cart.push(PRODUCTOS[2].iva());
        }
        pedido = prompt(`
        **Ingrese un numero para pedir**
        1- ${PRODUCTOS[0].nombre} $ ${PRODUCTOS[0].iva()}
        2- ${PRODUCTOS[1].nombre} $ ${PRODUCTOS[1].iva()}
        3- ${PRODUCTOS[2].nombre} $ ${PRODUCTOS[2].iva()}
        4- ${PRODUCTOS[3].nombre} $ ${PRODUCTOS[3].iva()}
        5- Finalizar pedido.
        `);
    } while (pedido < 5);
}

function elegirMenu() {
    menuElegido = prompt(`
    Que menu desea ver?
    1- Comida
    2- Bebidas
    `
    );
    if (menuElegido == 1) {
        menuElegido = "comida";
    } else if (menuElegido == 2) {
        menuElegido = "bebida";
    }

    //Filtrado de array COMIDA O BEBIDA
    const productoFiltrado = PRODUCTOS.filter((prod) => prod.tipo.includes(menuElegido));
    console.table(productoFiltrado);
}

// Acumulador para el carrito

totalCarrito = cart.reduce((acumulador, prod) => acumulador + prod, 0);

alert(`
El total del carrito es : $${totalCarrito}
Gracias ${userName.toUpperCase()}, tu pedido esta siendo enviado.
`);