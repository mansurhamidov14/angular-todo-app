import { Injectable } from '@angular/core';
import { mockTodos } from 'src/consts';

export interface ITodoItem {
  title: string;
  done: boolean;
  createdAt: number;
  createdDate?: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  list: ITodoItem[];

  constructor() {
    this.list = mockTodos;
  }

  public getList (): ITodoItem[] {
    return this.list;
  }

  public toggle (todo: ITodoItem) {
    todo.done = !todo.done;
  }

  public addTodo (todo: ITodoItem) {
    this.list.push(todo);
  }
}
