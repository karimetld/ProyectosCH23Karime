
//Parte 1 solucion:
let nombre1= ["sofia", "david", "juan"];
//Parte 2 solucion:
let nombre2= ["david", "juan", "sara", "agustin"];

//Parte 3 solucion:
let nombre3= ["david","renata", "juan", "sara", "agustin", "elena"];



function anidado(){
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < i; j++) {
            console.log("*");
        }
        
    }
    
}

for (let i = 1; i <= 5; i++) { //bucle exterior itera 5 veces, empezando desde 1
let asterisco = ''; //cadena vacía para almacenar cada fila de asteriscos
for (let j = 1; j <= i; j++) { //el bucle interior itera 'i' veces, empezando desde 1
  asterisco += '* '; //agrega un asterisco seguido de un espacio a la cadena de la fila
}
console.log(asterisco); // imprime la cadena de la fila en una nueva línea
}


//Ejercicio 3

//Parte 1:

let xValue = 10;
while (xValue > 0) {
  console.log(xValue);
  xValue-=0.5;
}

//Parte 2:
let x= 1;
while (x <= 100 ){
    console.log(x);
    x+=2;
}

//Parte 3:
let n= 6;
while (n <= 6){
    console.log("["+ n+ "]");

}

//Parte 4:
function sumaDeLosPrimeros5EnterosPositivos() {
    let suma = 0; // Declarar la variable suma y establecer su valor inicial en 0
    let i = 1;  // Declarar la variable i y establecer su valor inicial en 1
    while (i <= 19) {
      suma += i; // Agregar el valor actual de i a la variable suma
      i++;
    }
    return suma; // Devolver el valor de suma al final del bucle
  }

  console.log(sumaDeLosPrimeros5EnterosPositivos()); // Imprimir el resultado