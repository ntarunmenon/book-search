import { Component, OnInit } from '@angular/core';
import { SelectBookService } from '../select.book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {


  private selectedBook:Book; 
  isAddBooks: boolean;

  constructor(private selectBooksService:SelectBookService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.selectBooksService.selectedBook$.subscribe(
      selectedBook => this.selectedBook = selectedBook);

      this.route.queryParams.subscribe(params => {
        this.isAddBooks = params['isAddBooks'] === 'true';
      });
  }

}
