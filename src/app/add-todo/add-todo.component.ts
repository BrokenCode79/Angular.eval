import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title: string;

  constructor(private todoService: TodoService) { 
    this.title = "";
  }

  ngOnInit() {
  }

  createTodo(title: string) {
    const todo = { title: title, completed: false };
    this.todoService.createTodo(todo).subscribe(response => {
      console.log(response);
    });
  }

}