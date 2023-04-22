import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodoList(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos');
  }

  getTodoListById(id: number): Observable<ITodo> {
    return this.http.get<ITodo>(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
  }
}
