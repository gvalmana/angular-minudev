import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <h1>Los juegos favoritos de {{ username }}</h1>
    <ul>
      @for (game of games; track game.id) {
        <li (click)="favoriteGame(game.name)">{{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() username: string = ''
  @Output() addFavoriteEvent = new EventEmitter<string>()
  favoriteGame(gameName: string) {
    this.addFavoriteEvent.emit(gameName)
  }
  games = [
    {
      'id': 1,
      'name': 'Monster Hunter'
    },
    {
      'id': 2,
      'name': 'Super Smash Bros. Ultimate'
    },
    {
      'id': 3,
      'name': 'Super Mario Odyssey'
    },
    {
      'id': 4,
      'name': 'Super Mario 64'
    }
  ]
}
