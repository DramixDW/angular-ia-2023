import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PremierComponentComponent } from './premier-component/premier-component.component';
import { DeuxiemeComponentComponent } from './deuxieme-component/deuxieme-component.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { CoffeeDirective } from './coffee.directive';
import { SpongebobPipe } from './spongebob.pipe';
import { SummaryPipe } from './summary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PremierComponentComponent,
    DeuxiemeComponentComponent,
    HighlightDirective,
    MoviesListComponent,
    CoffeeDirective,
    SpongebobPipe,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
