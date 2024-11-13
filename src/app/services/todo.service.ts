import { Injectable, inject } from '@angular/core';
import { TodoItem } from '../models/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  http = inject(HttpClient);
  
  getTodos() {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get<Array<TodoItem>>(url);
  }
  constructor() {}
}
