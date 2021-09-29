var a = new String("Osmann Santeliz");
//esto devuelve la primera letra del objeto string
console.log(a[0]);

var b = "Santeliz";
console.log(b.toUpperCase());
console.log(a.toLowerCase());

var i = b.indexOf("n");
console.log("La letra N en mi apellido esta en la posicion: ", i);

//esto devolvera la ultima letra en caso que exista dos reperidas
i = a.lastIndexOf("n");
console.log("La segunda letra N en mi nombre esta en la posicion: ", i);

//empezar a contar desde donde quiero el texto
var nombre = a.substr(2, 4)
console.log(nombre);

// tambien podemos cortar cuando encuentre un espacio
var nombre = a.substr(0, a.indexOf(" "));
console.log(nombre);

// separar los caracteres segun lo indiquemos en el argumento
var split = a.split("");
console.log(split);
console.log(split.length);
