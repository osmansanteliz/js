function determinaDato(a) {
  if (a === undefined){
    console.log("A es undefined... no se que hacer");
  }
  if (typeof a === "number"){
    console.log("A es un numero... puedo hacer operaciones con numeros");
  }
  if(typeof a === "String"){
    console.log("A es un texto, puedo hacer cualquier cosa con texto");
  }
  if (typeof a === "object"){
    console.log("A es un objeto");
    if (a instanceof Number){
      console.log("A es un objeto numerico");
    }
  }

  //pasamos undefined
  determinaDato();

  //le pasamos un numero
  determinaDato(1);

  //le pasamos texto
  determinaDato("Osman");

  //le pasamos un objeto
  determinaDato({
    nombre: "Osman";
  });

  //aqui pasamos un objeto tipo numero
  var b = new number(3);
  console.log(b);
  determinaDato(b);
}
