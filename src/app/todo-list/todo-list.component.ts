import { Component, Input } from '@angular/core';
import { ITodoItem, TodoService } from '../services/todo.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  list: ITodoItem[];
  toggleDone: TodoService['toggle'];
  newTodoTitle = '';

  constructor(public todoService: TodoService) {
    this.list = todoService.getList();
    this.toggleDone = todoService.toggle;
  }

  public addTodo () {
    const newTodo = {
      title: this.newTodoTitle,
      done: false,
      createdAt: new Date().getTime()
    };
    this.todoService.addTodo(newTodo);
    this.newTodoTitle = '';
  }
}
