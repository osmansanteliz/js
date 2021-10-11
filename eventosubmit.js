function validar() {
  var nombre = document.getElementById("txtNombre").value;
  var apellido = document.getElementById("txtApellido").value;

  if(nombre.length < 1 || nombre  == "Nombre"){
    alert("Digite Su Nombre");
    return false;
  }

  if(apellido.length < 1 || apellido  == "Apellido"){
    alert("Digite Su Apellido");
    return false;
  }

  return true;

}
