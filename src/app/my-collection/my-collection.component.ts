import { Component, OnInit } from '@angular/core';
import { MyCollectionService } from '../select.book.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-my-collection',
  templateUrl: './my-collection.component.html',
  styleUrls: ['./my-collection.component.css']
})
export class MyCollectionComponent implements OnInit {

  private myCollection: Book[];

  constructor(private selectBookService: MyCollectionService) { }

  ngOnInit() {
    this.selectBookService
        .myCollectionUpdated$
          .pipe(
            filter(books => books != null)
          )
          .subscribe (books => this.myCollection = books);
  }


}
