//existen 3 tipos de cajas de dialogo
alert("Hola Mundo");

//1 regresa eun boolean

var acepto = confirm("Estas seguro que desea borrar algo?");
console.log(acepto);

//2 captura de un mensaje de texto en pantalla
//el segundo valor es opcional pero le podemos asignar uno por defecto

var nombre = prompt("ingrese su nombre: ", "Nombre")
console.log(nombre);

/*hay que tener mucho cuidado con este tipo de cajas de dialogo,
 por que js no es asincrono (solo hace un proceso secuencial a la vez).
 Es recomendable usar el sweetalert*/
