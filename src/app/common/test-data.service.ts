import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Books } from './book';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestDataService {
  public base_url;
  constructor(private http: HttpClient) {
    this.base_url = environment.base_url;
  }

  getList(): Observable<Books[]> {

    return this.http.get<Books[]>(this.base_url);
    // .pipe(
    //   tap(_ => this.log('fetched heroes')),
    //   catchError(this.handleError<Hero[]>('getHeroes', []))
    // );
  }

  gettopicList(topic): Observable<Books[]> {
    //return this.http.get<Books[]>(this.base_url+"?topic="+topic);
    return this.http.get<Books[]>(this.base_url + "?topic=" + topic + "&mime_type=image/jpeg");

  }
  getNextList(topic,parameterList): Observable<Books[]> {
    const postUrl = "http://gutendex.com/books/?";
    return this.http.get<Books[]>(postUrl + "?topic=" + topic + "&mime_type=image/jpeg&ids="+parameterList);
    //return this.http.get<Books[]>(this.base_url + "?topic=" + topic + "&mime_type=image/jpeg&ids="+parameterList);
  }
///?ids=11,12,13
  //?topic=Fiction&mime_type=image/jpeg&search=Twain%20The%20Adventures%20of%20Tom%20Sawyer

  searchList(topic, searchTxt): Observable<Books[]> {
    //return this.http.get<Books[]>(this.base_url+"?topic="+topic+"&mime_type=image/jpeg");
    return this.http.get<Books[]>(this.base_url + "?topic=" + topic + "&mime_type=image/jpeg&search=" + searchTxt);
  }

  /** GET heroes from the server */
  // getHeroes(): Observable<Hero[]> {
  //   return this.http.get<Hero[]>(this.heroesUrl)
  //     .pipe(
  //       tap(_ => this.log('fetched heroes')),
  //       catchError(this.handleError<Hero[]>('getHeroes', []))
  //     );
  // }


  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  /*  private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
  
        // TODO: better job of transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`);
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
  */
}
