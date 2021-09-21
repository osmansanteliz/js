function Persona(){
  this.nombre = "Osman";
  this.apellido = "Santeliz";
  this.edad = 32;
  this.pais = "Nicaragua";
}

Persona.prototype.imprimirInfo = function () {
  console.log(this.nombre + " " + this.apellido +"("+ this.edad +")");
};

var os = new Persona();
console.log(os);
console.log(os.pais);
