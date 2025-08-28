import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo, Todos } from './store/app.reducers';
import { Store } from '@ngrx/store';
import { addTodo, removeTodo } from './store/app.actions';
import { map, Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('ngrx-todos');

  todos$: Observable<Todo[]>;

  todo = signal('');
  descripion = signal('');
  constructor(private store: Store<{ todos: Todos }>) {
    this.todos$ = this.store.select('todos').pipe(map(state => state.todos));
  }

  submit() {
    const newTodo: Todo = {
      id: Date.now(),
      todo: this.todo(),
      description: this.descripion(),
    };

    this.store.dispatch(addTodo({ todo: newTodo }));

    this.todo.set('');
    this.descripion.set('');
  }

  removeTodo(id: number) {
    this.store.dispatch(removeTodo({ id }));
  }
}
