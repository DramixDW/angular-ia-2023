import { Component } from '@angular/core';

@Component({
  selector: 'app-deuxieme-component',
  templateUrl: './deuxieme-component.component.html',
  styleUrls: ['./deuxieme-component.component.css']
})
export class DeuxiemeComponentComponent {
  isVisible = false;
  buttonText = 'Affiche le texte caché :)';
  movies = [{
    titre: 'Forrest Gump',
    description: 'Il court mais pas la maladie d\'amour',
  }, {
    titre: 'Alice au pays des merveilles',
    description: 'Un lapin bizarre qu\'il ne faut pas suivre'
  }, {
    titre: 'L\'attaque des bananes martiennes',
    description: 'Un film pas terrible'
  }];
  mode: 'list' | 'card' | '' = '';

  toggleVisibility() {
    this.isVisible = !this.isVisible;
    this.toggleButtonText()
  }

  toggleButtonText() {
    if (this.isVisible) {
      return this.buttonText = 'Cache le message affiché';
    }
    return this.buttonText = 'Affiche le texte caché :)';
  }
}
