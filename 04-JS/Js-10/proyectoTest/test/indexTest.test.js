//prueba efectiva
//const indexTest = require ("../calculadora")

import { indexTest } from "../calculadora";
test('test suma', () => {
   const r = indexTest.suma(1,2);
   expect (r).toBe(3);

});

test.todo('test resta'); //Deja como en espera para despues programar esa actividad el TO DO 
test.todo('test multi');
test.todo('test div');
