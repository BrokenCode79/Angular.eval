import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-delete-todo',
  templateUrl: './delete-todo.component.html',
  styleUrls: ['./delete-todo.component.css']
})
export class DeleteTodoComponent implements OnInit {
  todos: any[];

  constructor(private todoService: TodoService) {
    this.todos = [];
  }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos as any[];
    });
  }


  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(response => {
      console.log(response);
    });
  }
}