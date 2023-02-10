// Pedimos al usuario que ingrese dos números
let a = parseInt(prompt("Introduce el primer número: "));
let b = parseInt(prompt("Introduce el segundo número: "));

// Pedimos al usuario que seleccione una operación
let c = parseInt(prompt("Introduce un número del 1 = suma, 2 = resta, 3= multiplicacion y 4 =divison, plis:  "));

// La función calculadora determina qué operación se debe realizar
function calculadora() {
    switch (c) {//Aqui el switch pide el valor principal
        case 1:
            sumar(a,b);//Llamamos suma
            break;
        case 2:
            restar(a,b);//llamamos resta
            break;
        case 3:
            multiplicar(a,b);//llamamos multiplicacion
            break;
        case 4:
            dividir(a,b);//llamamos division
            break;
        default:
            // Si el usuario no ingresa una opción válida, se llama de nuevo a la función
            alert("Introduce un numero del 1 al 4:");
            calculadora();
            break;
    }
}

// Función que suma dos números
function sumar(a,b) {
    let sum1= a + b;
    console.log(sum1);
}

// Función que resta dos números
function restar(c,d) {
    let resultado = d-c;
    console.log(rest1);
}

// Función que multiplica dos números
function multiplicar(e,f) {
    let resultado = e*f;
    console.log(mult);
}

// Función que divide dos números
function dividir(g,h) {
    let resultado = g / h;
    console.log(div);
}
calculadora();
