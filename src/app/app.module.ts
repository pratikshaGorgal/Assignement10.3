import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { BookComponent } from './book/book.component';
import { WildcardComponent } from './wildcard/wildcard.component';

@NgModule({
  declarations: [
    AppComponent,
    TechnologiesComponent,
    BookComponent,

    WildcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
