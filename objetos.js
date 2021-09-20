var persona = {
    nombre = "Osman",
    apellido = "Santeliz",
    edad = 32,
    direccion: {
        pais = "Nicaragua",
        ciudad = "Managua"
    } 
};

console.log (persona.nombre.pais);
console.log (persona.direccion);

persona.direccion.zipcode = 11000;
console.log(persona.direccion.zipcode);

console.log (persona);

//Notacion de corchetes
console.log (persona["nombre"]);

//otra manera
var campo = edad;
console.log ([campo])