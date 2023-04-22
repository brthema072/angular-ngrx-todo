import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadTodos, loadTodosSuccess, setTodos } from './app.actions';
import { EMPTY, map, of, switchMap, tap, withLatestFrom } from 'rxjs';
import { ITodo } from '../models/todo.model';
import { IAppState } from './app.state';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class TodoEffectService {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<{ app: IAppState }>
  ) {}

  getTodoList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      withLatestFrom(this.store.select((state) => state.app.todos)),
      switchMap(([actions, todos]) => {
        if (!todos.length) {
          return this.http.get<ITodo[]>(
            'https://jsonplaceholder.typicode.com/todos'
          );
        }

        return EMPTY;
      }),
      tap((todos) => this.store.dispatch(setTodos({ payload: todos }))),
      map(() => loadTodosSuccess())
    )
  );
}
