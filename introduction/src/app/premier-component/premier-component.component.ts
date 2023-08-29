import { Component } from '@angular/core';

@Component({
  selector: 'app-premier-component',
   templateUrl: './premier-component.component.html',
   /* template: `
      <p>
        J'ai écrit mon html dans le tsq (:
      </p>
   `,
  */
  styleUrls: ['./premier-component.component.css']
  /*
  styles: [`
    .banane {
      background-color: purple;
    }
  `]
  */
})
export class PremierComponentComponent {
    title = 'le titre de mon composant';
    classBanane = 'banane';
    isRead = true;
    inputValue = 'placeholder';
    nickname = '';

    isReadToggle() {
      this.isRead = !this.isRead;
    }

    setNickName(input: HTMLInputElement) {
      this.nickname = input.value;
      input.value = '';
    }
}
