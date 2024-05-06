import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-texto',
  standalone: true,
  imports: [],
  templateUrl: './texto.component.html',
  styleUrl: './texto.component.css'
})
export class TextoComponent {

  textoMostrado: string = "a&nbsp;e&nbsp;i&nbsp;o&nbsp;u";
  textoBorrado: string = "a e i o u";

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
     // Obtener la primera letra del texto a borrar
     const primeraLetra = this.textoBorrado.charAt(0).toLowerCase();
    
     // Obtener la tecla presionada (convertirla a minúsculas para que sea insensible a mayúsculas/minúsculas)
     const teclaPresionada = event.key.toLowerCase();
 
     // Verificar si la tecla presionada es la misma que la primera letra del texto a borrar
     if (teclaPresionada === primeraLetra) {
       // Eliminar la primera letra del texto a borrar
       this.textoBorrado = this.textoBorrado.substring(1);
       

     }
    console.log(primeraLetra);
  }
}

