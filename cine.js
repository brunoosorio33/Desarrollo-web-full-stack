const edad = 15;
const tieneEntrada = false;

if (tieneEntrada) {
    console.log("Debes comprar una entrada primero");
} else if (tieneEntrada && edad >= 18) {
    console.log("Has comprado la entrada y puedes acceder");
} else {
    console.log("Acceso denegado, eres menor");
}


/* const sunnyDay = true;
let message;

if(sunnyDay){
    message = "Vamos pa la playa"
}else{
    message = "nos quedamos en casa"
}


*/

const sunnyDay = true;
const message = sunnyDay ? "Vamos a la playa" : "Nos quedamos en casa"

console.log(message); 

function message() {
    console.log("Hola mundo")
}