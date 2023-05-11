import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Todo } from '../todo/todo';
import { ToDoVersion } from '../todo/todoVersion';
import { Constants } from '../config/constants';
import { MessageService } from './message.service';




@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
    )   { }

  private log(message: string) {
    this.messageService.add(`ToDoService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
  
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

  getVersion(): Observable<ToDoVersion> {
    return this.http.get<ToDoVersion>(Constants.API_ENDPOINT_TODO_VERSION);
  }

  /* get the list of ToDo items from the server */
  getToDoItems(): Observable<Todo[]> {
    return this.http.get<Todo[]>(Constants.API_ENDPOINT_TODO);
  }

  addToDoItem(item: Todo): Observable<Todo>  {
    return this.http.post<Todo>(Constants.API_ENDPOINT_TODO, item, this.httpOptions).pipe(
      tap((newTodo: Todo) => this.log(`added todo w/ id=${newTodo.id}`)),
      catchError(this.handleError<Todo>('addTodo'))      
    );
  }

  /** PUT: update the item on the server */
  updateToDoItem(item: Todo): Observable<any> {
    const url = `${Constants.API_ENDPOINT_TODO}/${item.id}`;
    return this.http.put(url, item, this.httpOptions).pipe(
      tap(_ => this.log(`updated todoItem id=${item.id}, new checked status: ${item.isComplete}`)),
      catchError(this.handleError<any>('updateTodo'))
    );
  }

  deleteToDoItem(id: number): Observable<Todo> {
    const url = `${Constants.API_ENDPOINT_TODO}/${id}`;

    return this.http.delete<Todo>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted todo id=${id}`)),
      catchError(this.handleError<Todo>('deleteToDo'))
    );
  }

}
