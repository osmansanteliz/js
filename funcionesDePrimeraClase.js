function a(){
  console.log("Funcion A");
}

a();

a.nombre = "Maria";

//regresa el nombre de la funcion
a.name = "Maria";

//se sobrescribe el mecanismo y regresa el nombre de maria
a.apply = "Maria";
