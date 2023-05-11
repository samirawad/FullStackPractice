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
    major: 0,
    minor: 0,
    revision: 0,
    message: 'Undefined from server!'
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
  addToDoItem(name: string) {
    name = name.trim();
    if(!name) { return; }
    var newTodo = {
      name: name,
      isComplete: false
    } as Todo;
    this.toDoService.addToDoItem(newTodo)
      .subscribe(newItem => {
        this.toDoItems.push(newItem);
      });
  }

  deleteToDoItem(item: Todo){
    this.toDoItems = this.toDoItems.filter(i => i !== item);
    this.toDoService.deleteToDoItem(item.id).subscribe();    
  }

  // Delete a todo Item:

  // List of all todo Items
  getToDoItems(): void {
    this.toDoService.getToDoItems()
      .subscribe((items: Todo[]) => { this.toDoItems = items}) ;
  }

  updateCheckedStatus(newCheckedStatus: boolean, item: Todo) {
    item.isComplete = newCheckedStatus;
    this.toDoService.updateToDoItem(item).subscribe();
  }
  // Number of completed todo Items:

}
