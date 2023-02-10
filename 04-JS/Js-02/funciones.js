//Funciones
division(14, 5);

//Funcion anonima
let funcionAnonima = function () {
    let valor1 = 7;
    let valor2 = 9;
    let suma = valor1 + valor2;
    console.log("Esta funcion anonima: ", suma);
}
funcionAnonima();

//Hoisting
//console.log(edad);
//let edad = "30";



//Pensar a futuro
//agregarCarritoCompra();
//borrarCarrito();
//agregarProducto();
//Pagar();
//


function suma(a, b) {
    let sum1 = a + b
    console.log(sum1);
}
/*
//Por que son importantes las funciones?
- Nos permite reutilizar codigo en lugar de escribirlo varias veces. Podemos llamar nuestra funcion en distintos lugares de nuestro programa, y así lo usamos cuando lo necesitamos sin necesidad de escribirlo de nuevo.
- Nos permite modularizar nuestro codigo, esto es, dividir nuestra aplicacion en partes mas pequeñas e independientes. Así mejoramos el entendimiento y comprensión del código.
- Mantienen su propio espacio, y las variable que se encuentran dentro de una funcion no se pueden acceder fuera de ella (scope).
- Por que podemos probar pequeñas partes de nuestro programa de forma aislada. (Debugging)
*/

/*
Cosas importantes a tener en cuenta para crear funciones
-Nombre que sea descriptivo y evoque al funcionamiento de ese bloque de codigo
-Datos de entrada (Parametros)
-Procesos o instrucciones a ejecutar
-Salida(return)
*/

/*
Palabras reservadas
*/

//Funcion directa

function agregarCarritoCompra() {
    //lo que hace mi funcion
}

// Invocar funcion
agregarCarritoCompra();



//Funcion
function division(parametro1, parametro2) {
    let resultado = parametro1 / parametro2;
    console.log(resultado);
}

division(88, 10);

/* Tipos de funciones:
-Funciones directas - nombre (comunes)
-Funciones anonimas - viven pegadas a una variable constante
- Funciones como metodos (para especificar que hace mi objeto)
- Funciones como constructores(para construir o crear un objeto)
*/

// Funciones flecha
//Sintaxis de una funcion flecha
//Se quita palabra reservada Function y se pone pegada a una variable
// Puede ir en una sola linea
// (=>)
//Es parte de refactorizar el codigo

//const suma = (a, b) => a + b;

//Funcion flecha con mas lineas de codigo
const sumarYMultiplicar = (a, b) => {
    const sum = a + b;
    const result = sum * 2;
    console.log(result);
}

/*
Return
La sentencia return finaliza la ejecucion de la
 funcion, y especifica un valor para ser devuelto 
 a quien llama a la funcion. O lo que es lo mismo,
  usamos return para finalizar y tambien para 
poder asignar el resultado a una variable.

SI NO USAMOS EL RETURN LA FUNCION NUNCA TERMINA Y SI QUEREMOS
USAR EL RESULTADO PARA ALGO DESPUES NO SE PODRA POR QUE NO 
SE ESTA ASIGNANDO A NADA 
*/

function areaCuadrado(){
    let lado = 5;
    let area = lado * lado;
    console.log("El area de mi cuadrado es:", area);
    return area;
}

let resultadoDeMiFuncion = areaCuadrado();
areaCuadrado()
let resultadoDemiFuncion = areaCuadrado();
console.log("El resultado de mi funcion cuadrado es> ", resultadoDeMiFuncion);
