import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateFormsComponent } from './components/forms/template-forms/template-forms.component';
import { FormsModule } from '@angular/forms';
import { CourseFormComponent } from './components/forms/course-form/course-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormsComponent,
    CourseFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
