var carro = {
  color: "Verde",
  marca: "Chevrolet",
  imprimir:function () {
    var salida = this.marca + "-" + this.color;
    return salida;
  }
}

var carro2 ={
  color: "Rojo",
  marca: "Toyota"
}

console.log(carro.imprimir);

var logCarro = function (arg1, arg2) {
  console.log("Carro: ", this.imprimir);
}

//con la funcion bind especifico el objeto que se debe llamar para obtener el resultado
var logModeloCarro = logCarro.bind(carro);
logModeloCarro();
console.log(logModeloCarro());

//otras manera de hacerlo
logModeloCarro.call(carro, "Mazda", "RX");
logModeloCarro.apply(carro,["Honda", "Civic"]);

//funciones prestadas
console.log(carro.imprimir.call(carro2));
