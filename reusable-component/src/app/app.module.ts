import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PostCardComponent } from './post-card/post-card.component';
import { ZippyComponent } from './zippy/zippy.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    PostCardComponent,
    ZippyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
