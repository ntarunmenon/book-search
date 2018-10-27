import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class SelectBookService {

    private selectedBook = new BehaviorSubject<Book>(null);
    selectedBook$ = this.selectedBook.asObservable();

    selectBook(book:Book){
        this.selectedBook.next(book);
    }
}