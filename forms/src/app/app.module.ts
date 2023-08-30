import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateFormsComponent } from './components/forms/template-forms/template-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseFormComponent } from './components/forms/course-form/course-form.component';
import { ReactiveFormComponent } from './components/forms/reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormsComponent,
    CourseFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
