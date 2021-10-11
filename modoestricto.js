"use strict";
//modo estricto en js se declara en la parte superior del archivo

//tambien podemos meter el use strict dentro de una funcion
function getNombre() {
  "use strict";
  nombre2 = "Osman";
  return nombre2;

}

console.log(getNombre());
