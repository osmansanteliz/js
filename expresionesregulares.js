//primera expresion
var reg1 = RegExp("a");
//segunda expresion
var reg2 = /a/;

var texto = "Hola Mundo, 1234567";

var arr = texto.match(reg2);

console.log(arr);

//evaluar numeros
var arr = texto.match(/[0-9]/);
console.log(arr);

//evaluar caracteres
var arr = texto.match(/[a-z]/);
console.log(arr);

//devolver los tres primeros caracteres
var arr = texto.match(/.../);
console.log(arr);

//devuelve los caracteres hasta encontrar el deseado con ^
var arr = texto.match(/^.o/);
console.log(arr);

//encontrar espacio entre los caracteres
var arr = texto.match(/\s/);
console.log(arr);
