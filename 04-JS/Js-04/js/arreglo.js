let lista = [ 12, 5, 80, 34];
lista.sort(
    function(valor1,valor2){
        return valor2 > valor1;
    }
)
console.log(lista);

let (lista) = [12, 5, 80,34];
let (nueva1) = lista.map(
    function (valor) {
    return valor *2
    } 
);
console.log(nueva1);

lista.sort(
    function(a,b){
        return b-a;

    }
)

console.log(lista);

let remover= lista.slice (1,2);
console.log(remover);



lista.pop();
console.log(lista);



let masE= lista.concat(100,200,300);
console.log(masE);

lista.push(100);
console.log(lista);


let msj = lista.join("-");
console.log(msj);


let listaNueva = lista.slice(1,4)
console.log(listaNueva);



console.log (lista.length);

for (let i= 0; i< lista.length; i++){
    console.log("--->"+lista[i]);
}

