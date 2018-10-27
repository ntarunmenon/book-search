import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BrowseBooksService } from '../books.service';
import { Router } from '@angular/router';
import { MyCollectionService } from '../select.book.service';

@Component({
  selector: 'app-browse-books',
  templateUrl: './browse-books.component.html',
  styleUrls: ['./browse-books.component.css'],
  providers: [BrowseBooksService]
})
export class BrowseBooksComponent implements OnInit {

  searchResults: Book[];
  searchTerm$ = new Subject<string>();

  constructor(private booksService:BrowseBooksService,
    private router: Router,
    private selectBookService:MyCollectionService) { 
    this.booksService.search(this.searchTerm$)
    .subscribe(results => {
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
