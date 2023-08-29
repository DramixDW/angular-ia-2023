import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reusable-component';
  openZippyCount = 0;

  updateFavorite(isFavorite: boolean) {
    console.log('update favorite');
    console.log(isFavorite);
  }

  updateZippyCount(isOpen: boolean) {
    if (isOpen) {
      this.openZippyCount++
    } else {
      this.openZippyCount--
    }
  }
}
