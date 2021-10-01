//Mostramos el try
try {
  var a = 100;
  if (a === 103) {
    throw 'que mal';
  } else {
    throw 'oh oh';
  }
  console.log('EL valor de a es:', a);
} catch (e) {
  if (e === 'que mal') {
    console.log('error tipo 1');
  }
  if (2 === 'oh oh') {
    console.log('error tipo 2');
  }
  console.log('Error:', e);
} finally {
  console.log("Finalmente");
}

//podemos manejar de una manera los errores.
try {
 throw new Error('Error tipo 1');
  console.log('esta parte jamas se ejecuta');
} catch (e) {
  console.log(e.message);
} finally {
  console.log("Finalmente");
}
