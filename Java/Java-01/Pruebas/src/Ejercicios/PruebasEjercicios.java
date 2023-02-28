package Ejercicios;

public class PruebasEjercicios {
	
	public static void main(String[] args) {
//Ejercicio 1
//Declara 3 variables de tipo entero y utiliza el operador * y %
		int num1 = 1, num2= 3, num3= 37;			
		
				
		System.out.println(num2* num3); 
		System.out.println(num3 % 2);
		
//Ejercicio 2
//Declara dos variables de tipo boolean y utiliza el operador ==

		     boolean Fine= false;
		     boolean TmayorDeEdad= true;
		     
		     if (Fine==true&& TmayorDeEdad==true) {
		    	 System.out.println("Puedes entrar a coco bongo");
		     } else{
		    	 
		    	 System.out.println("No puedes entrar a coco bongo");
		     }
		     
//Ejercicio 3
//Declara dos variables de tipo Double y utiliza el operador <
		     
		     
		    	
		     double PanPieza= 9.5;
		     double	Baguette= 5.25;	 
		     
		     if (PanPieza< Baguette) {
		    	 System.out.println("El baguette es mas caro que la pieza de pan");
		    	 
		     }else {
		    	 System.out.println("La pieza de pan es mas cara");
		     }
		     
//Ejercicio 4
//Conversion de Farenheit a Kelvin y a centigrados
	     
		     
		   //fahrenheit a celcius 
		     
		     double gradosFahrenheit = 64;
		     
		     System.out.println((5 * gradosFahrenheit - 32));
		     
		     double Celsius = (gradosFahrenheit - 32) * (5.0/9.0);
		     
		     //fahrenheit a Kelvin   
		     double Kelvin = 273.15 + (gradosFahrenheit - 32)* (5.0/9.0) ;
		     
		     System.out.println(Celsius);
		     System.out.println(Kelvin);
		   //Verificacion de si un numero es par o impar	  
		    boolean esPar = gradosFahrenheit % 2 == 0; //Question mark
		    System.out.printf("El numero %s es par: %s",gradosFahrenheit,esPar);
	
	}
	
	public static String getName() {
		return "Karime";
	}
	

}


