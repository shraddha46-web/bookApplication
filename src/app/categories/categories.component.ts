import { Component, OnInit } from '@angular/core';
// import { Books } from '../common/book';
import { Router,Route } from '@angular/router';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  bookListType: {};
 
  constructor(private router:Router) {
    this.bookListType = ['Fiction', 'Drama', 'Humour', 'Politics', 'Philosophy', 'History', 'Adventure'];
   }

  ngOnInit(): void {
    
  }
  gotoList(cat_name) {
    console.log(cat_name);
    this.router.navigate(['list',cat_name]);
    //router.navigateByUrl("/team/33/user/11");
    
  }

}
