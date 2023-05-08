import { Component } from '@angular/core';
import { ToDoService } from '../Services/to-do.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})

export class TodoComponent {

constructor(private toDoService: ToDoService) {}

// Add a todo Item:

// Delete a todo Item:

// List of all todo Items

// Number of completed todo Items:

}
