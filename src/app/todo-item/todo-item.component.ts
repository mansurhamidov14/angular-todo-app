import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodoItem } from '../services/todo.service';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: ITodoItem;
  @Output() onToggle = new EventEmitter();

  public ngOnInit(): void {
    this.todo.createdDate = new Date(this.todo.createdAt).toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  public handleToggle(todo: ITodoItem): void {
    this.onToggle.emit(todo);
  }
}
