import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoItem } from './todoItem';
import { TodoList } from './todoList';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private list = new TodoList("Nip", [
    new TodoItem("Take a nap", true),
    new TodoItem("Have some treats"),
    new TodoItem("Cuddle"),
  ]);

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.list.items.filter(item => !item.complete).length;
  }
}
