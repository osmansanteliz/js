//arreglo de valores booleanos
var arr = [
  true,
  {
    nombre:"Osman",
    apellido:"Santeliz"
  },
  function () {
    console.log("estamos probando este arreglo");
  },
  function persona() {
    console.log(persona.nombre + " " + persona.apellido);
  },
  //un arreglo dentro de otro
  [
    "Nelda",
    "Fabiola",
    "Yeymi",
    "Razam",
    [
      "Gabriela",
      "Catalina"
    ]
  ]
];

console.log(arr);
console.log(arr[0]);
console.log(arr[1].nombre + " " + arr[1].apellido);

//imprimos los valores de los arreglos que estan dentro del arreglo.
console.log(arr[4][4][1]);

//tambien podemos pasar el valor por referencia
var arreglo2 = arr[4][4];

console.log(arreglo2);

//podemos cambiar el dato del arreglo principal
arreglo2[2] = "Cata";
console.log(arreglo2);
