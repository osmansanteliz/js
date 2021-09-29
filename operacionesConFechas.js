var fecha = new Date(2021, 9, 20);
console.log(fecha);

Date.prototype.sumarDias = function (dias) {
  this.setDate(this.getDate() + dias);
  return dias;
};

console.log(fecha);
console.log(fecha.sumarDias(5));
//llamamos a la funcion para sumar dias
