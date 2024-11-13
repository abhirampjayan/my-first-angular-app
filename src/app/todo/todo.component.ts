import { Component, OnInit, inject, signal } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { TodoItem } from '../models/todo.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent implements OnInit {
  todoService = inject(TodoService);
  todos = signal<Array<TodoItem>>([]);
  ngOnInit(): void {
    this.todoService
      .getTodos()
      .pipe(
        catchError((err) => {
          console.error(err);
          throw err;
        })
      )
      .subscribe((todos) => {
        this.todos.set(todos);
      });
  }
}
