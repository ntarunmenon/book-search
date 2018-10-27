import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyCollectionComponent } from './my-collection/my-collection.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AppRoutingModule } from './/app-routing.module';
import { BrowseBooksComponent } from './browse-books/browse-books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { SelectBookService } from './select.book.service';

@NgModule({
  declarations: [
    AppComponent,
    MyCollectionComponent,
    SideBarComponent,
    BrowseBooksComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SelectBookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
