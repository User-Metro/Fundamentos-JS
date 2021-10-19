/*
usar el método string.concat(string) para crear una cadena, pero es un proceso que repercute más en el rendimiento
*/
let nombre = "Juan";
let apellido = "Pérez";
let edad = 28;

let resultado_3 = "La persona, ";
resultado_3 = resultado_3.concat(nombre);
resultado_3 = resultado_3.concat(" ");
resultado_3 = resultado_3.concat(apellido);
resultado_3 = resultado_3.concat(" va a tener ");
resultado_3 = resultado_3.concat(edad);
resultado_3 = resultado_3.concat(" años");

console.log(resultado_3);
