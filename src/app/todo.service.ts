import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get(`${this.baseUrl}/todos`);
  }

  createTodo(todo: any) {
    return this.http.post(`${this.baseUrl}/todo`, todo);
  }

  deleteTodo(id: number) {
    return this.http.delete(`${this.baseUrl}/todo/${id}`);
  }
}