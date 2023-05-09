import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../Services/to-do.service';
import { Todo } from './todo';
import { ToDoVersion } from './todoVersion';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  providers: [ToDoService],
  styleUrls: ['./todo.component.sass']
})

export class TodoComponent implements OnInit {
  version: ToDoVersion = {
    Major: 0,
    Minor: 0,
    Revision: 0,
    Message: 'Undefined from server!'
  };
  toDoItems: Todo[] = [];

  constructor(private toDoService: ToDoService) { }

  ngOnInit(): void {
    this.getVersion();
    this.getToDoItems();
  }

  // Version
  getVersion(): void {
    this.toDoService.getVersion()
      .subscribe((version: ToDoVersion) => { 
        this.version = version
       });
  }

  // Add a todo Item:

  // Delete a todo Item:

  // List of all todo Items
  getToDoItems(): void {
    this.toDoService.getToDoItems()
      .subscribe((items: Todo[]) => { this.toDoItems = items}) ;
  }

  // Number of completed todo Items:

}
