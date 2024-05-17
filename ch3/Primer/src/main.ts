import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

function writeValue(val: string = "default value", ...extraInfo: string []) {
  console.log(`Value: ${val ?? "Fallback value"}, Extras: ${extraInfo}`)
}

writeValue("London", "raining", "cold");
writeValue("Paris");
writeValue("Pittsburgh", "armpit");
writeValue();