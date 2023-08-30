import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { cannotContainSpace, cannotUseAdminUsername } from './username.validator';
import { controlsAreEqual } from './password.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5), cannotContainSpace], cannotUseAdminUsername),
    comment: new FormControl('Ici, mon avis', Validators.required),
    password: new FormGroup({
      new: new FormControl(),
      confirm: new FormControl()
    }, controlsAreEqual) 
  })

  get Username() {
    return this.form.get('username') as FormControl;
  }


  get Comment() {
    return this.form.get('comment');
  }
}
