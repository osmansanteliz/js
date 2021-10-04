//tiene dos funciones
setTimeout(function () {
  console.log("pasó un segundo");
}, 1000);
//el numero mil es la cantidad en milisegundos, y esta funcion solo se ejecuta una vez

//La otra funcion es setInterval, y este lo podemos ejecutar las veces que indiquemos
var segundos = 0;
var intervalo = setInterval(function () {
  segundos++;
  console.log("Segundos", segundos);
  if (segundos === 3){
    clearInterval(intervalo);
  }
});
