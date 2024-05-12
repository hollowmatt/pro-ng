//Angular Components
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//Material Components
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule  } from '@angular/material/table';
import { MatCheckboxModule  } from '@angular/material/checkbox';
import { MatFormFieldModule   } from '@angular/material/form-field';
import { MatInputModule   } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
//Local Components
import { TodoItem } from './todoItem';
import { TodoList } from './todoList';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule,
    MatButtonModule, MatToolbarModule, MatIconModule, MatBadgeModule,
    MatTableModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
    MatSlideToggleModule],
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