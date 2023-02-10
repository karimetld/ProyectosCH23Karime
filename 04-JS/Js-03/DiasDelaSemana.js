//Crea un traductor para un día de la semana.
//Tu programa debe leer una variable llamada "diaNumero" e 
//imprimir (console.log) el día correspondiente de la semana,
//donde 0 es domingo y 6 es sábado.
//Para cualesquiera otros valores, tu programa debe imprimir 
//"Numero de día invalido".
//Prueba tu programa para todos los valores de días de la semana.

let diasDelaSemana= ["Domingo", "Lunes", "Martes", "Miercoles","Jueves", "Viernes", "Sabado"] //Array con dias//


let diaNumero = parseInt(prompt("Escribe un numero del 0 al 6")); //Lo que va a correr
if (diaNumero > 6){ //Siempre que quiera hacer una decision 
    console.log("Numero de dia Invalido");

}
else{ //Impresion
    console.log("Numero de dia:",diasDelaSemana[diaNumero]);
}

let q = true;
let p = true;
if (q && p) console.log ("true");


// and &&
//or ||
// not !
