import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'VG_Inventory';

  all_cards = [
    {name: 'Minerva', image: 'Minerva Image', count : 0},
    {name: 'Fenrir', image: 'Genrir Image', count : 0},
    {name: "FFR Minerva", image: 'FFR Minerva Image', count : 0},
  ];
}
