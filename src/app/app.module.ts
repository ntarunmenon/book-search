import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyCollectionComponent } from './my-collection/my-collection.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AppRoutingModule } from './/app-routing.module';
import { BrowseBooksComponent } from './browse-books/browse-books.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCollectionComponent,
    SideBarComponent,
    BrowseBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
