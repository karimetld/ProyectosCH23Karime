/*
Que encontramos en el arbol del DOM?
-Node/nodos: Es la unidad mas basica dentro del documento, puede ser una etiqueta
un texto dentro de una etiqueta o un comentario.
    <title> NODO
    Manipulacion del DOM: es una nodo pero es hijo de title
    </title

-Document: Tambien es un nodo del tipo documento, es el nodo raiz a partir del cual se
desarrollan o generan todos los demas nodos. (DOCTYPE).

-Element: Son todos aquellos definidos por etiquetas <div> <h1> <img> <p> 

-Atributes: Son nodos que dan informacion asociada al tipo de elemento 

-Comentarios: Comentarios y otros elementos que estan dentro del HTML.

*/

/*
Como leer nodos de mi documento(DOM):

-Metodos Tradicionales: (Que se usan en versiones anteriores)
     - document.getElementById (botonSuma)
    - document.getElementByTagName (<button>)
    - document.getElementByClassName (botones)

- Metodos recientes:
- document.querySelector(#botonSuma)
-document.querySelectorAll(.botones)

*/

//GET ELEMENT
var elementoID= document.getElementById("BotonResta");
console.log(elementoID);

var ElementoEtiqueta= document.getElementsByTagName("button");
console.log(ElementoEtiqueta);
console.log("Este es el primer elemento de mi coleccion de botones", ElementoEtiqueta[0]);

var elementoClassName= document.getElementsByClassName("botones");
console.log(elementoClassName);

var unElemento = document.querySelector("#input1");
console.log(unElemento);

var variosElementos = document.querySelectorAll(".botones");
console.log(variosElementos);

//CONSTRUIR CALCULADORA
var input1= document.getElementById("input1");
var input2= document.getElementById("input2");

var botonSuma= document.getElementById("botonSuma");
var botonResta= document.getElementById("botonResta");
var botonMultiplicacion= document.getElementById("botonMultiplicacion");
var botonDivision= document.getElementById("botonDivision");

var resultado= document.getElementById("resultado");

//CONSTRUIMOS FUNCIONES DE CALCULADORA
function suma(){
    let valor1= parseInt(input1.value); //Pido numero 1
    let valor2= parseInt(input2.value);  //Pido numero 2
    let suma= valor1 + valor2; // Calculo la suma
    resultado.innerHTML = suma; //Pongo el resultado en su lugar el HTML siempre va con mayuscula
}


function resta(){
    let valor1= parseInt(input1.value);
    let valor2= parseInt(input2.value);
    let resta= valor1 - valor2;
    resultado.innerHTML = resta;
}

function multiplicacion(){
    let valor1= parseInt(input1.value);
    let valor2= parseInt(input2.value);
    let multiplicacion= valor1 * valor2
    resultado.innerHTML = multiplicacion;
}

function division(){
        let valor1= parseInt(input1.value);
        let valor2= parseInt(input2.value);
        let division= valor1 / valor2
        resultado.innerHTML= division;

}

/*COMO SE CREA UN EVENTO (addEventListener)
    -node.addEventListener ("Evento a escuchar", lo que quiero que haga)
    -NODE es el nodo donde aterrizo el evento
    -add.EventListener(palabra reservada para usar el evento)
    - evento a escuchar (click, mouseover,etc.)
    -Lo que quiero que haga (La llamada de la funcion)

*/
botonSuma.addEventListener("click",suma);
botonResta.addEventListener("click", resta);
botonMultiplicacion.addEventListener("click", multiplicacion);
botonDivision.addEventListener("click", division);


/*
Creacion de nodos
- document.createElement(tipoNodo)
*/

//Creacion de una etiqueta del tipo imagen
const imagenPerrito= document.createElement("img");
//Ceamos atributos a la etiqueta
imagenPerrito.src= "https://www.petdarling.com/wp-content/uploads/2021/01/cachorros.jpg";
imagenPerrito.alt= "Foto de perrito tierno"
imagenPerrito.style.width= "150px";
imagenPerrito.style.borderRadius= "900px"

//Poner elementos o nodos en el html
document.body.append(imagenPerrito);

//MODIFICAR ELEMENTOS
//1er paso es identificar el nodo que quiero cambiar(outer)
// 2do Modificar el nodo (inner)

var resultadoQueCambia= document.getElementById("resultado");
resultadoQueCambia.innerHTML = "Saludos, cambie el texto juas juas";

/*
MANIPULACION DEL DOM
- metodos para acceder a elementos
    -document.getElementById
    -document.getElementByTagName
    -document.getElementByClassName

- metodos para crear elementos
    -document.createElement(etiqueta)
    -document.createTextNode(texto)- Investigar

- metodos para insertar elementos
    -parentElement.append
    -parentElement.insertBefore
    -parentElement.insertAdjacentElement
    
- metodos para modificar elementos
    -node.outerHTML(Leer o refenciar el elemento)
    - node.innerHtml (Modificar el elemento)


*/
//Primer paso: Definir con que voy a interactuar (almacena en una variable)

const textoAModificar= document.querySelector("#h1")

//Creo una funcion que cambia de color segun el color que le paso como parametro 
function cambiarColor(color){
    textoAModificar.style.color= color;

}

