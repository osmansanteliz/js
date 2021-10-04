var i = 1;

while (i < 10) {
  i++;
  if (i === 5) {
    continue;
  }
  console.log(i);
}

//con la palabra continue omitimos el valor 5
//podemos romper el ciclo con la palabra break si ese fuera el caso
//esto es a manera de practica.

// con el ciclo do while ejecuta el codigo 1 vez y despues evalua
do {
  i++;
  console.log(i);
  break;
} while (i < 10);
