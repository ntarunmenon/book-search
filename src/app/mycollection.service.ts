import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class MyCollectionService {

    private selectedBook = new BehaviorSubject<Book>(null);
    private myCollectionUpdated = new BehaviorSubject<Book[]>(null);
    private myCollection: Book[] = [];
    
    selectedBook$ = this.selectedBook.asObservable();
    myCollectionUpdated$ = this.myCollectionUpdated.asObservable();
  

    selectBook(book:Book){
        this.selectedBook.next(book);
    }

    addBookToCollection(book: Book) {
        this.myCollection.push(book);
        this.myCollectionUpdated.next(this.myCollection.slice());
    }

    removeBookFromCollection(book: Book){
        this.myCollection.splice(this.myCollection.findIndex(b => b.id === book.id),1);
        this.myCollectionUpdated.next(this.myCollection.slice());
    }
}