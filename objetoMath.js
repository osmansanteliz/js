var PI = Math.PI;
var E = Math.E;

console.log(PI);
console.log(E);

var num = 10.457589;
//redondear un numero
console.log(Math.round(num));

//Mostrar 2 decimales
console.log(Math.round(num*100) / 100);

//floor lo deja en numero entero, quita los decimales
console.log(Math.floor(num));

//funcion para Mostrar un numero random entre el 1 y el 6
function randomEntre(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomEntre(1,6));

//sacar raiz cuadrada
console.log(Math.sqrt(1000));

//exponentes
console.log(Math.pow(10, 2));
