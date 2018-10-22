import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  @Output() sideBarClicked = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  myCollectionClick(){
    this.sideBarClicked.emit("MY_COLLECTION");
  }

  browseBookClick(){
    this.sideBarClicked.emit("BROWSE_BOOKS");
  }

}
