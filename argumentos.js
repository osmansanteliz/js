var argumentos = 10;

function miFuncion(a,b,c,d) {
  //console.log(argumentos);
  if (argumentos == 4) {
    console.error("La funcion necesita 4 parametros");
    //alert("La funcion necesita 4 parametros");
    return;
  }
  console.log(a + b + c + d);
}

miFuncion(10, 20, 30, 40);
