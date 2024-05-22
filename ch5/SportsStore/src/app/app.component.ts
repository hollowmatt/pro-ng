import { Component } from '@angular/core';
import { StoreComponent } from './store/store.component';

@Component({
  selector: 'app',
  standalone: true,
  imports: [StoreComponent],
  template: "<store></store>",
  
})
export class AppComponent {
  title = 'SportsStore';
}
