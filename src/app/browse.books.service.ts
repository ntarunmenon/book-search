import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concatAll, debounceTime, toArray, distinctUntilChanged, switchMap,map, filter} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class BrowseBooksService {
  constructor(private http: HttpClient) { }

  SEARCH_URL = 'https://www.googleapis.com/books/v1/volumes';

  performsearch(searchTerms:string):Observable<Book[]>{
    console.log('search' + searchTerms);
    return this.http.get(this.SEARCH_URL, {
        params: {
            q:searchTerms
        }
    }).pipe(
        map(data => data['items'])
        ,concatAll()
        , map(data => {
            return {
                id: data['id'],
                title: data['volumeInfo'].title,
                url: data['volumeInfo'].imageLinks.smallThumbnail,
                description: data.hasOwnProperty('searchInfo') ? data['searchInfo'].textSnippet:"",
                author: data['volumeInfo'].authors
            }
        }),
        toArray());
  }

  search(terms: Observable<string>) {
    return terms.pipe(
       debounceTime(400)
       , distinctUntilChanged()
       , filter(term => term.length > 4 )
       , switchMap(term => this.performsearch(term))
    );
  }
}