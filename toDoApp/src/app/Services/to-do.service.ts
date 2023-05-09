import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Todo } from '../todo/todo';
import { ToDoVersion } from '../todo/todoVersion';
import { Constants } from '../config/constants'




@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor(private http: HttpClient)   { }

  getVersion(): Observable<ToDoVersion> {
    return this.http.get<ToDoVersion>(Constants.API_ENDPOINT_TODO_VERSION);
  }

  /* get the list of ToDo items from the server */
  getToDoItems(): Observable<Todo[]> {
    return this.http.get<Todo[]>(Constants.API_ENDPOINT_TODO);
  }

}
