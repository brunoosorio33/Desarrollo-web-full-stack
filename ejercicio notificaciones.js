// Ejercicio el centro de notificacion

const smartphone = {
    model: "Galaxy S24",
    user: "Erika",
    bandejaEntrada: []
} 

// Paso 2

smartphone.bandejaEntrada.push("Whatsapp de mama", "Alerta de seguridad", "Youtube: Nuevo video");

// Paso 3

smartphone.bandejaEntrada.shift();

// Paso 4

let totalPendientes = smartphone.bandejaEntrada.length
console.log(smartphone.bandejaEntrada.length)

console.log("Lista de objetos claves", Object.keys(smartphone));
console.log("A " + smartphone.user + " le quedan " +  totalPendientes + " notificaciones ")

