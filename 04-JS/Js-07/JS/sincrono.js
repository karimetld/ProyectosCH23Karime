//JavaScript Sincrono o bloqueante
alert("Cohorte23");
console.log("Hola, buenos dias");
alert("Dia del michito");//Aqui va de manera sincrona de manera secuencial
console.log("Como estas?"); //Proceso secuencial

//Esta funcion permite hacer asincronia
//setTimeout(
  //  function(){
      //  console.log("HOLA MUNDO,CON RETRASO");
    //}, 1000 
//)console.log("Sorpresa!!");


//Se creo una variable y se creo una funcion flecha con setTimeout se mando lo que tiene la funcion 
//Fue una funcion con asincronia 
const myCallback=()=> console.log("Hola mundo con retraso");
setTimeout(myCallback);
console.log("Sorpresa!!");

