import { createAction, props } from '@ngrx/store';
import { Todo } from './app.reducers';

export const addTodo = createAction(
    '[todo] add todo',props<{ todo: Todo }>()
)

export const removeTodo = createAction(
    '[todo] remove todo',props<{ id: number }>()
)