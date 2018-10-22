import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  displaySideBar = true; 
  
  constructor(private router: Router) {}

  navigateToPage(clickType){
    if (clickType==='MY_COLLECTION'){
      this.router.navigate(['mycollection']);
      this.displaySideBar = false; 
    }else {
      this.router.navigate(['browseBooks']);
      this.displaySideBar = false; 
     }
  }

  navigate() {
    this.displaySideBar = true; 
  }
}



