import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos = [
    { text: 'Un premier todo d\'exemple', isCompleted: false },
    { text: 'Un deuxième todo d\'exemple', isCompleted: true }
  ];
  newTodo:string ='';

  constructor(){
    this.newTodo = '';
  }


  addTodo(newTodo: string) {
    this.todos.push({ text: newTodo, isCompleted: false });
  }

  removeTodo(todo: { text: string, isCompleted: boolean }) {
    this.todos = this.todos.filter(t => t !== todo);
  }

  toggleTodo(todo: { text: string, isCompleted: boolean }) {
    todo.isCompleted = !todo.isCompleted;
  }
}
