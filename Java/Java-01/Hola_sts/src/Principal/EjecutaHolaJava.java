

package principal;
import java.util.Scanner;
import clases.NuevoHola;
public class EjecutarNH {
    
    public static void main(String[] args) {
        
        Scanner sn = new Scanner(System.in);
        
        NuevoHola nh = new NuevoHola("Raúl Martínez");
        nh.saludo();
        
        String nombre;
        System.out.print("Cual es tu nombre:");
        nombre = sn.next();
        
        NuevoHola nh1 = new NuevoHola(nombre);
    }
    
}