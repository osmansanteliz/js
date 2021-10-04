var nota = 80;

if (nota >= 90) {
  console.log("A");
}else if (nota >= 80) {
  console.log("B");
}else if (nota >= 70) {
  console.log("C");
}else if (nota >= 60) {
  console.log("D");
}else {
  console.log("F");
}

console.log("Termino el código");

// otra manera de usar el if
var a = 10;
var b = 20;

var c = (a > b)? a : b;
console.log(c);

//con funciones y parametros
function getNombre(nombre) {
  let nom = nombre || "Sin Nombre";
  console.log(nom);
}

//Devolvera sin nombre debifo a que el argumento esta vacio en este caso
getNombre();
