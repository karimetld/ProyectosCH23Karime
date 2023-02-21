class Persona{

    constructor (nombre, apellido){
        this._nombre= nombre;
        this.apellido= apellido;
    }
    set nombre(nombre){
        this.nombre = nombre;
    }
    get nombre(){
        return this._nombre;
    }
}

let persona1 = new Persona ('Juan', 'Perez');
console.log(persona1);

let persona2 = new Persona ('Maria','Jimenez');
console.log(persona2);

