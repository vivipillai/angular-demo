import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Boards } from './dashboard';

@Injectable({
  providedIn: 'root',
})

export class DashboardService {
  private boardsUrl = 'api/boards';
  private boards: Boards[];

  constructor(private http: HttpClient) { }

  getBoards(): Observable<Boards[]> {
    if (this.boards) {
      return of(this.boards);
    }
    return this.http.get<Boards[]>(this.boardsUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        tap(data => this.boards = data),
        catchError(this.handleError)
      );
  }

  createBoard(board: Boards): Observable<Boards> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Boards>(this.boardsUrl, board, { headers: headers })
      .pipe(
        tap(data => console.log('createboard: ' + JSON.stringify(data))),
        tap(data => {
          this.boards.push(data);
        }),
        catchError(this.handleError)
      );
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
