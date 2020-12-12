import { Component, OnInit } from '@angular/core';
import { TestDataService } from '../common/test-data.service';
import { Books } from '../common/book';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  allBookList: Books[];
  notEmptyPost = true;
  notScrolly = true;
  bookListType: {};
  startIndex = 0;
  lastIndex = 0;

  constructor(private apiService: TestDataService, private route: ActivatedRoute, private spinner: NgxSpinnerService) { }
  topic: string;
  ngOnInit(): void {
    // this.getBookList();
    this.topic = this.route.snapshot.paramMap.get('category');
    console.log(this.topic);
    this.gettopicList(this.topic);
  }
  filterargs: {}
  getBookList() {
    this.filterargs = { subjects: 'hello' };
    this.spinner.show();
    this.apiService.getList().subscribe(res => {
      this.allBookList = res['results'];
      this.spinner.hide();
    });
  }
  gettopicList(category) {
    this.apiService.gettopicList(category).subscribe(res => {
      this.allBookList = res['results'];
      this.startIndex = 0;
      this.lastIndex = 10;
      console.log(res)
    });

  }
  // scroll(event) {
  //   this.startIndex = this.lastIndex + 1;
  //   this.lastIndex = this.startIndex + 10;
  //   console.log("=========scroll================");
  //   console.log(this.startIndex);
  //   console.log(this.lastIndex);
  // }


  // Push a search term into the observable stream.
  search(term: string): void {
    this.apiService.searchList(this.topic, term).subscribe(res => {
      this.allBookList = res['results'];

    });

  }

  openLink(book) {
    var formats = Object.values(book['formats']);
    var openMediaLink = "";
    formats.forEach(function (item, index) {
      var link = item.toString();
      if (link.endsWith(".htm")) {
        openMediaLink = link.toString();
      } else if (link.endsWith(".txt")) {
        openMediaLink = link;
      }
    });
    console.log("==openMediaLink==");
    console.log(openMediaLink);
    if (!openMediaLink) {
      Swal.fire('No viewable version available');
    } else {
      //if http or https not present then added http;//
      let url: string = '';
      if (!/^http[s]?:\/\//.test(openMediaLink)) {
        url += 'http://';
      }
      url += openMediaLink;
      window.open(url, '_blank');
    }

  }
  onScrollDown() {
    if (this.notScrolly && this.notEmptyPost) {
      this.spinner.show();
      //this.notScrolly = false;
      this.loadNextPost();
      this.startIndex = this.lastIndex + 1;
      this.lastIndex = this.startIndex + 10;
    }
  }
  loadNextPost() {
    if (this.allBookList) {
      const lastPost = this.allBookList[this.allBookList.length - 1];
      if (lastPost) {
        var lastPostId = lastPost['id'];
      }
      var parameterArray = [];
      for (var i = 1; i <= 10; i++) {
        parameterArray.push(lastPostId + i);
      }
      var parameterList = parameterArray.join();
      this.apiService.getNextList(this.topic, parameterList).subscribe(res => {
        const newPost = res['results']
        if (newPost.length === 0) {
          this.notEmptyPost = false;
          this.notScrolly = false;
        } else {
          this.allBookList = this.allBookList.concat(newPost);

        }
        this.notScrolly = true;
        this.spinner.hide();
      });
    }
  }


}
