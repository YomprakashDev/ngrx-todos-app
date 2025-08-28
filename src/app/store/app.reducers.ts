import { createReducer, on } from "@ngrx/store";
import { addTodo, removeTodo } from "./app.actions";

export interface Todos {
    todos: Todo[]
}
export interface Todo {
    id: number;
    todo: string;
    description: string
}
export const initialState: Todos = {
    todos: []
}
export const todoReducer = createReducer(
    initialState,
    on(addTodo, (state, { todo }) => ({
        ...state, todos: [...state.todos, todo]
    })),
    on(removeTodo, (state, { id }) => ({
        ...state,
        todos: [...state.todos.filter(todo => todo.id !== id)]
    })),
)