import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';
import { SelectBookService } from '../select.book.service';

@Component({
  selector: 'app-browse-books',
  templateUrl: './browse-books.component.html',
  styleUrls: ['./browse-books.component.css'],
  providers: [BooksService]
})
export class BrowseBooksComponent implements OnInit {

  searchResults: Book[];
  searchTerm$ = new Subject<string>();

  constructor(private booksService:BooksService,
    private router: Router,
    private selectBookService:SelectBookService) { 
    this.booksService.search(this.searchTerm$)
    .subscribe(results => {
      console.log(results);
      this.searchResults = results;
    });
  }

  ngOnInit() {
    this.searchResults = [];
  }

  selectBook(book){
    this.selectBookService.selectBook(book);
    this.router.navigate(['bookDetail'],{ queryParams: { isAddBooks: 'true' }});
  }

}
