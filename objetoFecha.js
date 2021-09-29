var hoy = new Date();
console.log(hoy);

var fmMili = new Date(0);
console.log(fmMili);

//anio, mes , dia, hora, minuto, segundo, milisegundo
var fFija = new Date(2021,9,29,11,18,20,2);
console.log(fFija);

console.log(hoy.getFullYear());
console.log(hoy.getDate());
console.log(hoy.getHours());
console.log(hoy.getMilliseconds());
console.log(hoy.getMonth());
console.log(hoy.getSeconds());
//devuelve la fecha en milisegundos
console.log(hoy.getTime());
