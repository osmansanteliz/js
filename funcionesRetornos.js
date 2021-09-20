function obteneraleatorio(){
    return Math.random();
}

console.log(obteneraleatorio() + 10);

function obtnerNombre(){
    return ("Osman")
}

//funcion que regresa un booleano
function booleano(){
    if (obteneraleatorio() > 0.5){
        return true;
    } else {
        return false;
    }
}

if (booleano){
    console.log("Es mayor a 0.5")
} else {
    console.log("Es mejor a 0.5")
}

function crearPersona(nombre, apellido){
    return{
        nombre:nombre,
        apellido:apellido
    }
}

var persona = crearPersona("Osman","Santeliz");

function crearFuncion(){
    return function(nombre){
        console.log("Me crearon" + nombre)
    }
}

var nuevaFuncion = crearFuncion();

nuevaFuncion(persona.nombre);