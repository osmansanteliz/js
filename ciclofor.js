for (var i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
};

//for in
var persona = function () {
  this.nombre = "Osman";
  this.apellido = "Santeliz";
  this.edad = 32;
};

var o = new persona();

for( var prop in o){
  console.log(prop);
}

for (var num in [1,2,3,4,5,6,7,8]) {
  console.log(num);
}
