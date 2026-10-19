// Precos fijos Ejercicio 1

const coffee = 2.50;

const breadToast = 4.80

const juice = 3.00;

let totalAccount = coffee + breadToast + juice;
console.log(totalAccount);

totalAccount = totalAccount + 1.50

console.log(totalAccount);


// Ejercicio 2

const placePassword = 6;
const minRequired = 8;

let isSafe = placePassword === minRequired;

console.log("Es la contraseña segura:" + isSafe);


// Ejercicio 3


const userAge = 17;
const login = userAge >= 18; 

console.log(login)


// Ejercicio 4

const stock = 5

const buy = 10

let haySuficiente = stock >= buy

console.log(haySuficiente);

// Ejercicio 5

let nowTemp = 22
const idealTemp = 25

let sameTemp = nowTemp === idealTemp;
console.log(sameTemp);

let diffTemp = nowTemp !== idealTemp;
console.log(diffTemp);

// Ejercicio 6

const minAge = 12
const heightMin = 140
const priceEnter = 15

let name = 'Juan'
let userAges = 14
let heightUser = 135
let cash = 20

let cost = priceEnter * 2
let balance = cost - cash

let edadSuficiente = userAges >= minAge
console.log(edadSuficiente);

let alturaSuficiente = heightUser >= heightMin
console.log(alturaSuficiente);

let puedePagar = cash >= priceEnter
console.log(puedePagar);


// Array 

const alumnos = ["Alberto", "Bruno", "Angel", "Fatima", "Abraham", "Valeria", "Alexandra", "Maria"];

console.log(alumnos[2]);
console.log(alumnos[6]);
console.log(alumnos[1]);
console.log(alumnos[7]);
console.log(alumnos[4]);
console.log(alumnos[2]);

console.log(typeof(alumnos));

console.log(alumnos.length)

// Ejercicio Lista de reproduccion.

const playlist = ["Yellow", "Paranormal", "Maps"];
console.log("Primera cancion es", playlist[0]);

playlist[2] = "Despacito"

console.log("Numero de canciones:", playlist.length);
console.log(playlist);


// Ejercicio Inventario de la tienda de deportes.

const products = ["Balon", "Raqueta", "Zapatillas", "Gorra"];
console.log("El segundo producto es", products[1])
console.log("Cantidad de productos", products.length)

products[2] = "Botas"

let inventory = products.length >= 4
console.log(inventory);


// Datos del objeto

const car = {
  brand: "Tesla",
  model: "Model 3",
  year: 2023,
  osElectric: true
};

console.log(car.brand);
console.log(car.model);


/* Cambiar valor */

car.year = 2026
console.log(car.year)

car.model = "New"
console.log(car.model);


// Ejemplo 2

const person = {
  name: "Enrique",
  age: 25,
  job: "Driver",
  hobbie: "Sports"
}

console.log(person.name);
console.log(person.age);


// Ejercicio perfil de usuario

const usuario = {
  name: "Pedro",
  surname: "Martinez",
  age: 22,
  isConected: true
}

console.log("Perfi de: " + usuario.name + " " + usuario.surname);

usuario.age = usuario.age + 1;
usuario.isConected = false;

console.log(usuario);


//  Ejercicio coche

const coche = {
  marca: 'Peugot',
  modelo: 2008,
  precioBase: 15000,
  km: 100000,
  estado: 'Usado',
  extras: ["Aire acondicionado", "Asiento de cuero"]
}

console.log("Vehiculo a la venta:",coche.marca , coche.modelo)
console.log("primer extra del coche:", coche.extras[0])

coche.extras[2] = 'techo solar'
console.log(coche.extras)

let precioFinal = coche.precioBase * 1.21

coche.estado = 'Nuevo'

console.log(coche.estado)

let esCaro = precioFinal > 50000
console.log(esCaro);

let esSemiNuevo = coche.km <= 10000
console.log(esSemiNuevo);

// Ejercicio 


