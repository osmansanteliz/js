//typeof nos dice el tipo de dato
function identifica(param){
  //console.log(typeof param);

  if(typeof param == "function"){
    param();
  } else {
    console.log(param);
  }
}

//tipo entero
identifica(1);

//tipo string
identifica("1");

//tipo object
identifica({});

/*function persona() {
}

var persona = new persona();*/

//tipo objeto
identifica(function () {console.log("Soy anonima");});
