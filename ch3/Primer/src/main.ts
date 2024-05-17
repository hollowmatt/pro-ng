import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

function writeValue(val?: string) {
  console.log(`Value: ${val ?? "Falback value"}`)
}

writeValue("London");
writeValue();