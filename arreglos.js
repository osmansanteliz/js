var arr = [1,2,3,4,5,6,7];
console.log(arr);
console.log(arr[4]);
/*regresa le numero 5 por que igual que en otros lenguajes el arreglo inicia
desde el indice 0*/

//invertir el arreglo
arr.reverse();
console.log(arr);

//map nos permite trabajar con cada elemento del arreglo
arr = arr.map(function (elemento) {
  elemento *= 2;
  return elemento;
});
console.log(arr);

//raiz cuadrada
arr = arr.map(Math.sqrt);
console.log(arr);

//une los datos del arreglo con los caracteres que le especifiquemos
arr = arr.join("/..");
console.log(arr);

//lo contrario a join, en este caso parte los elementos del arreglo
arr = arr.split("|..");
console.log(arr);

//ingresamos un nuevo elemento al arreglo
arr.push("8");
console.log(arr);

//ingresar un elemento pero al inicio del arreglo
arr.unshift("0");
console.log(arr);

//metodo tostring
console.log(arr.toString());

//eliminar elemento
var eliminar = arr.pop();
console.log(arr, eliminar);

//eliminar mas de un elemento en el arreglo
arr.splice(1, 3);
console.log(arr);

//eliminar y agregar mas de un elemento en el arreglo
arr.splice(1, 1, "10", "20", "30");
console.log(arr);

//corta con el primero parametro el cero, el 2do parametro indica hasta donde
//quiero cortar sin incluir ese numero (trabajamos con los indices del arreglo)
arr = arr.slice(0,3);
console.log(arr);
