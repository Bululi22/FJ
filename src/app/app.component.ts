import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextoComponent } from './texto/texto.component';
import { TecladoComponent } from './teclado/teclado.component';
import { ManosComponent } from './manos/manos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TextoComponent, TecladoComponent, ManosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FJ';
}
