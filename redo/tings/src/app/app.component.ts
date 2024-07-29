import { Component } from '@angular/core';
import { TodoItem } from '../todoItem';
import { TodoList } from '../todoList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tings';

  private list = new TodoList("Catnip", [
    new TodoItem("Lick self", false),
    new TodoItem("Lick butt", true),
    new TodoItem("Lick mom"),
    new TodoItem("Ask for food"),
  ]);

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.list.items.filter(item => !item.complete).length;
  }

  get items(): readonly TodoItem[] {
    return this.list.items.filter(item => !item.complete);
  }

  addItem(item: string) {
    if(item != "") {
      this.list.addItem(item);
    } 
  }
}
