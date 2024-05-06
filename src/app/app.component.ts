import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextoComponent } from './texto/texto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TextoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FJ';
}
