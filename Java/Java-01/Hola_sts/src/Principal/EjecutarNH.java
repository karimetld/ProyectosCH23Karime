package Principal;
import java.util.Scanner;
import Clases.NuevoHola;
public class EjecutarNH {
    
    public static void main(String[] args) {
        
        Scanner teclado = new Scanner(System.in);
        
        /*NuevoHola nh = new NuevoHola("Karime");
        nh.saludo();*/
        
        
        //String nombre;
        System.out.print("Ingresa tu nombre por fis:");
        String nombre = teclado.next();
        
        NuevoHola nh1 = new NuevoHola();
        nh1.saludoConNombreString(nombre);
        
    }
    
}