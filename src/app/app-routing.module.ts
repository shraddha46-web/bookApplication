import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from "../app/book-list/book-list.component"
//import { BookCategoryComponent } from "../app/book-category/book-category.component";
import { CategoriesComponent } from "../app/categories/categories.component";
import { NotFoundComponent } from "../app/not-found/not-found.component";
const routes: Routes = [
  {path:'',redirectTo:'/books_category', pathMatch: 'full' },
  {path:'list/:category',component:BookListComponent},
  {path:'books_category',component:CategoriesComponent},
   {path:'**',component:NotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
