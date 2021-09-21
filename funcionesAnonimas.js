/*funciones anonimas no tienen nombre y se usan para evitar el cambio
de las variables que esten en el objeto global*/
{function () {
  var a = 10;
  console.log(a);
  function cambiarA() {
    a = 20;
  }
  cambiarA();
  a = 20;
}};

//otro ejemplo de funciones anonimas
function ejecutarFuncion(fn) {
  if (fn() === 1){
      return true;
  } else {
    return false;
  }
}

console.log(

    ejecutarFuncion(function () {
      console.log("Funcion anonima ejecutada");
      return 1;
    })
);
