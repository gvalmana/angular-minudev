import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username: string = 'gvalmana';
  name: string = 'Gustavo';
  isLogged: boolean = false;
  favGame: string = '';
  greet() {
    alert('Hola ' + this.name);
  }
  getFavorite(gameName: string) {
    console.log(gameName);
    this.favGame = gameName;
  }
}
