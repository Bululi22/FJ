import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { TecladoComponent } from '../teclado/teclado.component';
import { ManosComponent } from '../manos/manos.component';

@Component({
  selector: 'app-texto',
  standalone: true,
  templateUrl: './texto.component.html',
  styleUrls: ['./texto.component.css'],
  imports: [NgClass, NgFor, NgIf, TecladoComponent, ManosComponent]
})
export class TextoComponent implements OnInit {
  //textoBorrado: string = this.generarLetrasAleatorias();
  textoBorrado: string = "a a a a a a a a a a"
  textoEnArray: string[] = [];

  ngOnInit(): void {
    this.actualizarTextoMostrado();
  }

  generarLetrasAleatorias(): string {
    let frase = '';
    const caracteres = 'abcdefghijklmnopqrstuvwxyz            ';
    const longitud = caracteres.length;
    const numLetras = 10;
    
    for (let i = 0; i < numLetras; i++) {
      const a = Math.floor(Math.random() * longitud);
      frase += caracteres.charAt(a);
    }
    
    return frase;
  }

  actualizarTextoMostrado() {
    this.textoEnArray = this.textoBorrado.split('');
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const primeraLetra = this.textoBorrado.charAt(0).toLowerCase();
    const teclaPresionada = event.key.toLowerCase();
 
    if (teclaPresionada === primeraLetra) {
      this.textoBorrado = this.textoBorrado.substring(1);
       

      // Llamar a actualizarTextoMostrado para reflejar los cambios en el array
      this.actualizarTextoMostrado();
      console.log("*********")
      console.log(this.textoEnArray.length)
      console.log("*********")
    }
  }
}
