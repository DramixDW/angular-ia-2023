import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent {
  contactMethods = ['email', 'phone', 'fax'];
  submit(form: NgForm) {
    console.log(form);
  }

  alert(contactMethod: string) {
    alert(`Bravo, je vous contacterai par ${contactMethod}`)
  }
}
