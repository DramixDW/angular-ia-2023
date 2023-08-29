import { Component } from '@angular/core';

interface Movie {
  titre: string,
  description: string,
  likeCount: number,
}

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent {
  movies = [{
    titre: 'Forrest Gump',
    description: 'Il court mais pas la maladie d\'amour',
    likeCount: 420,
  }, {
    titre: 'Alice au pays des merveilles',
    description: 'Un lapin bizarre qu\'il ne faut pas suivre',
    likeCount: 1337,
  }, {
    titre: 'L\'attaque des bananes martiennes',
    description: 'Un film pas terrible',
    likeCount: 4,
  }];

  decrementLikeCount(movie: Movie) {
    movie.likeCount--;
  }

  incrementLikeCount(movie: Movie) {
    movie.likeCount++;
  } 
}
