import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCollectionComponent } from './my-collection/my-collection.component';
import { BrowseBooksComponent } from './browse-books/browse-books.component';

const appRoutes: Routes = [
    { path: 'mycollection', component: MyCollectionComponent },
    { path: 'browseBooks',      component: BrowseBooksComponent },
    { path: '',
    redirectTo: '/mycollection',
    pathMatch: 'full'
    }
];
@NgModule({
exports :[RouterModule],
imports: [RouterModule.forRoot(appRoutes)]
})
export class AppRoutingModule { }
