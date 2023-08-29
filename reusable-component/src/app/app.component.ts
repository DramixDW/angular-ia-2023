import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reusable-component';

  updateFavorite(isFavorite: boolean) {
    console.log('update favorite');
    console.log(isFavorite);
  }
}
