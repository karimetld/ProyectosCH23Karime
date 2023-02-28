package tiposDeDatosYVariables;
public class tiposDeDatos {
    public static void main(String[] args) {
    
        byte centigrados = 1;
        double fahrenheit = (centigrados * 1.8) + 32;
        double kelvin = centigrados + 273.15;
        System.out.println("1 centigrado a fahrenheit es" + fahrenheit);
        System.out.println("1 centigrado a kelvin es" + kelvin);
        /*
         * ºF = ºC x 1.8 + 32 formula para convertir grados centigrados a fahrenheit K =
         * ºC + 273.15
         */
   
        double horasTrabajadas = 8.3; //Double y Float se pueden ocupar para numeros decimales, aunque double es mas preciso.
        byte pago = 10;
        double multiplicación = horasTrabajadas * pago;
        System.out.println(multiplicación);
        
        double num = 1.61;
        int numInt = (int)num; //Aqui la variable num que es decimal se convierte a entero con (int)num y se guarda en la variable numInt.
        long numLong = (long)num;
        System.out.println("double: " + num);
        System.out.println("int: " + numInt);
        System.out.println("long: " + numLong);
    
      //casteo a entero 
        //Como ponemos un entero? 
        int numIntCasteo = (int) num; // se pone entre parentesis el tipo de dato que quiero convertir y luego el nombre de la variable que quiero convertir 
        //casteo a long 
        long numLongCasteo = (long) num;
        System.out.println ("double:  " + num);
        System.out.println ("int:  " + numInt);
        System.out.println ("long:  " + numLong);
        /*Como es un número entero lo corta y solo lo marca com el 1, por que el entero pues es solo ese número 
        Supongamos que yo ahora tengo un string */
        String cantidad = "15";
        String precio = "115.20";
        /*que pasaria si quisieramos hacer una operación ?
        tendriamos que cambiarlos 
        String es una clase y es por eso que tiene metodos para hacer estas conversiones 
        ahora como lo hariamos para cambiarlo a un double o un int?*/
        int cantEntero = Integer.parseInt(cantidad);  
         //( Integer que es la clase que hace referencia a los enteros ) Pars es un parseo es decir una conversión de un string a un entero  y vamos a hacer lo mismo con double 
        double precioDouble = Double.parseDouble(precio);
         /*(Para los double tenemos una clase raper que Double pero con mayuscula la D y luego tenemos parseDouble que es el metodo y ahi abrimos parentesis y colocamos el valor que queremos convertir 
        Una vez haciendo esto ya lo estamos convirtiendo y podemos hacer una operación 
        System.out.printIn(El valor total de la compra es: + (“cantEntero * precioDouble”));
        Ahora supongamos que lo queremos hacer al reves 
        tenemos un */
        int edad = 30;
        double estatura = 1.61;
        /*supongamos que no vamos a utilizarlos como número ni para alguna operación 
        vamos a utilizar*/
        
    }
}