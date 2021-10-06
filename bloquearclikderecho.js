document.onmousedown = function (arg) {
  if(arg.button === 2){
    alert("Click deshabilitado");
    return;
  }

  console.log("Clic izquierdo funciona");
  console.log(arg);
}
