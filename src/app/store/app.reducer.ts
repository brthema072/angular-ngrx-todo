import { createReducer, on } from '@ngrx/store';
import { appInitState } from './app.state';
import { setTodos } from './app.actions';

export const appReducer = createReducer(
  appInitState,
  on(setTodos, (state, actions) => {
    const { payload, type } = actions;

    state = {
      ...state,
      todos: payload,
    };

    return state;
  })
);
