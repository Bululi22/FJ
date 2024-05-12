import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-manos',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './manos.component.html',
  styleUrl: './manos.component.css'
})
export class ManosComponent {
  @Input() arrayDeTexto: string[] = [];

  obtenerClaseDedo(d: number): string {
    let primeraLetra = this.arrayDeTexto[0];
    switch (d){
      case 1:{
        if (['q', 'a', 'z'].includes(primeraLetra)) {
          return 'dedoSeleccionado';
        }
        break;
      }
      case 2:{
        if (['w', 's', 'x'].includes(primeraLetra)) {
          return 'dedoSeleccionado';
        }
        break;
      }
      case 3:{
        if (['e', 'd', 'c'].includes(primeraLetra)) {
          return 'dedoSeleccionado';
        }
        break;
      }
      case 4:{
        if (['r', 'f', 'v', 't', 'b', 'g'].includes(primeraLetra)) {
          return 'dedoSeleccionado';
        }
        break;
      }
      case 5:{
        if ([' '].includes(primeraLetra)) {
          return 'dedoSeleccionado';
        }
        break;
      }
      case 6:{
        if ([' '].includes(primeraLetra)) {
          return 'dedoSeleccionado';
        }
        break;
      }
      case 7:{
        if (['y', 'n', 'm', 'h', 'j','u'].includes(primeraLetra)) {
          return 'dedoSeleccionado';
        }
        break;
      }
      case 8:{
        if (['i', 'k', ','].includes(primeraLetra)) {
          return 'dedoSeleccionado';
        }
        break;
      }
      case 9:{
        if (['o', 'l', '.'].includes(primeraLetra)) {
          return 'dedoSeleccionado';
        }
        break;
      }
      case 10:{
        if (['p', ';', '/'].includes(primeraLetra)) {
          return 'dedoSeleccionado';
        }
        break;
      }
    }
  }
}
