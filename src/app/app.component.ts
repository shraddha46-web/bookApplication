import { Component } from '@angular/core';
import { from } from 'rxjs';
import { HttpClientModule} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'booksApp';
}
