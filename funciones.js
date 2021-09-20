function primeraFuncion(){
    var a = 20;
    console.log(a);
}

//para invocar la funcion
primeraFuncion();

function imprimir (nombre, apellido){
    // lo mismo que el if pero con menos lineas
    apellido = apellido || "xxx";
    // === objeto y valor sean lo mismo
    /*if (apellido === undefined){
        apellido = "xxx";
    }*/
    console.log(nombre + " " + apellido)
}

//variable explicita
// var nombre = "0sman";

//Variable anonima
imprimir ("Osman", "Santeliz");

function imp (persona){
    console.log(persona.nombre + "" + apellido);
}

imprimir({
    nombre = "Osman",
    apellido = "Santeliz"
});

// objeto
var obj = {
    noombre = "Osman",
    apellido = "Santeliz"
}

imp(obj);
console.log(obj);

//mandar funcion a una funcion
function imprimir (fn){
    imprimir (function(){
        console.log("funcion anonima")
    })
}

var mifuncion = function(){
    console.log("mifuncion")
}

imprimir(mifuncion);