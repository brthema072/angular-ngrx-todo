import { ITodo } from '../models/todo.model';

export interface IAppState {
  todos: ITodo[];
}

export const appInitState: IAppState = {
  todos: [],
};
