import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { ITodo } from 'src/app/models/todo.model';
import { loadTodos } from 'src/app/store/app.actions';
import { IAppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  constructor(private store: Store<{ app: IAppState }>) {}

  todos$: Observable<ITodo[]> = this.store
    .select('app')
    .pipe(map((store) => store.todos));

  ngOnInit(): void {
    this.store.dispatch(loadTodos());
  }
}
