const myURL = document.URL.toString();
const promesa = fetch(myURL);
promesa.then(resultado=> console.log(resultado), //me permite controlar lo que ocurra.// me envia el recurso que estoy solicitando.
e => console.log('error callback ${e}'));
//No es funcion de consola es para hipertexto.


//let url = 'https://randomuser.me/api/'
let url = 'https://jsonplaceholder.typicode.com/users/';
fetch(url)
    .then(Response => Response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

    const mostrarData = (data) => {
        console.log(data)
        let body = ""
        for (var i = 0; i < data.length; i++) {      
           body+=`<tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].name}</td>
                    <td>${data[i].email}</td>
                </tr>`
        }
        document.getElementById('data').innerHTML = body
        //console.log(body)
    }