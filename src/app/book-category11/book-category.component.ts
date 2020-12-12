import { Component, OnInit } from '@angular/core';
import { Books } from '../common/book';
import { Router,Route } from '@angular/router';
@Component({
  selector: 'app-book-category',
  templateUrl: './book-category.component.html',
  styleUrls: ['./book-category.component.css']
})
export class BookCategoryComponent implements OnInit {
  bookListType: {};
  constructor(private route:Route, private router:Router) { }

  ngOnInit(): void {
    this.bookListType = ['Fiction', 'Drama', 'Humour', 'Politics', 'Philosophy', 'History', 'Adventure'];
  }
  gotoList(cat_name) {
    console.log(cat_name);
    //this.router.navigate(['list',cat_name]);
    //router.navigateByUrl("/team/33/user/11");
    
  }

}
