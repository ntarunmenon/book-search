import { Component, OnInit } from '@angular/core';
import { MyCollectionService } from '../select.book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {


  private selectedBook:Book; 
  isAddBooks: boolean;

  constructor(private selectBooksService:MyCollectionService,
    private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.selectBooksService.selectedBook$
    .pipe(
      filter(book => book != null)
    )
    .subscribe(
      selectedBook => this.selectedBook = selectedBook);
      this.route.queryParams.subscribe(params => {
        this.isAddBooks = params['isAddBooks'] === 'true';
      });
  }

  addOrRemoveBook(){
    if (this.isAddBooks) {
      this.selectBooksService.addBookToCollection(this.selectedBook);
    } else {
      this.selectBooksService.removeBookFromCollection(this.selectedBook);
    }
    this.router.navigate(['mycollection']);
  }

}
