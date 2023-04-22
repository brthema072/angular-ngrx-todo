import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ITodo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: ITodo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodoList().subscribe({
      next: (todos) => (this.todos = todos),
      error: (err) => console.log(err),
    });
  }
}
