import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-teclado',
  standalone: true,
  imports: [NgClass],
  templateUrl: './teclado.component.html',
  styleUrl: './teclado.component.css'
})
export class TecladoComponent {
  @Input() primeraLetraTexto: string | undefined; // Recibir la primera letra

}
