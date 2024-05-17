import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

function getUKCapital() : string {
  return "London";
}

function writeCity(f: () => string) {
  console.log(`City: ${f()}`)
}

writeCity(getUKCapital);
