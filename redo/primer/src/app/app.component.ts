import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'primer';

  writeValue(val: string="defaulat") {
    val === "" ? null : val;
    console.log(`Value: ${val ?? "Fallback Value"}`);
  }
}
