package Ejercicios;

public class Java04 {

		public static void main (String [] args) {
			int edad = 18;
			boolean tieneLicencia = true;
			if (edad >= 18 && tieneLicencia) {
			    System.out.println("Puede conducir un coche");
			} else {
			    System.out.println("No puede conducir un coche");
			}
			
			/*    Verificar si un número es par y positivo:
            int num = 6;*/
        int num = 6;
        if (num % 2 == 0 && num > 0) {
            System.out.println("si es par y es positivo");
        }else {
            System.out.println("no se cumple la condicion");
        }
        
        
        
        
            /*Verificar si un número está dentro de un rango específico
            int num = 10;*/
        int num2 = 10;
        if (num2 >= 10 && num2 < 20) {
            System.out.println("esta dentro del rango");
        }else {
            System.out.println("no esta dentro del rango");
        }
        
        
            /*
            Verificar si una cadena es igual a otra o no
            String cadena1 = "Hola";
            String cadena2 = "hola";
            */
        String cadena1 = "Hola";
        String cadena2 = "hola";
        
        if (cadena1 == cadena2) {
            System.out.println("son iguales");
        }else {
            System.out.println("no son iguales");
            }
			
		}
}
