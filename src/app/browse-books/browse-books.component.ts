import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse-books',
  templateUrl: './browse-books.component.html',
  styleUrls: ['./browse-books.component.css']
})
export class BrowseBooksComponent implements OnInit {

  searchResults: Book[];


  constructor() { }

  ngOnInit() {
    this.searchResults = [];
    this.searchResults[0] = {
      title:'The Alchemist',
      url: 'http://books.google.com/books/content?id=6bBPrgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
      description:'This is an adventure story about a young shepherd' + 
      'boy who learns how to live his dreams. This is a story which has been compared' + 
      'to the works of Richard Bach, and is aimed at the young and old alike.',
      author:'Paulo Coelho'
    }
  }

}
