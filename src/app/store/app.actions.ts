import { createAction, props } from '@ngrx/store';
import { ITodo } from '../models/todo.model';

export const loadTodos = createAction('[App] Load todos');
export const loadTodosSuccess = createAction('[App] [Success] Load todos');
export const setTodos = createAction(
  '[App] Set todos',
  props<{ payload: ITodo[] }>()
);
