//Part 1
//Write a function to insert a name to the end of the list. Add your own name to the end of the list.

function nombres () { //Creo funcion llamada nombres
    let nombres = ["Maria", "Antony", "Joy", "Juan"]; //Creo un Array 
    nombres.push("Karime") //Agrego al final de la lista valor
    console.log(nombres);// Imprimo lista

};

 //nombres(); //Mando a llamar mi funcion


function revisada (){
    let x= false
    let nombres = ["Maria", "Antony", "Joy", "Juan"];
    let nombre= prompt("Git me a name to check");
    for(let i= 0; i< nombres.length; i++){
        if (nombre==nombres[i]) {
            x= true 
        }
        
    }
    console.log(x);
    return x
}

//revisada()

function valoresDuplicados(){
   let nombresNuevos = ["Luz", "Lola", "Perla", "Maria"];
   let nombres = ["Maria", "Antony", "Joy", "Juan"];
   let nuevaLista= [];
   for(let i=0; i<nombres.length; i++){ //4
    for(let j=0; j<nombresNuevos.length; j++){ //4
        if (nombres[i] == nombresNuevos[j]){
            nuevaLista.push(nombres[i]);
        }
    }
   }
   console.log(nuevaLista);
}

valoresDuplicados();

