import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

// NOTE (teaching): We intentionally use the default XHR backend (no withFetch()).
// This avoids cases where fetch doesn't trigger Angular change detection on some setups.
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideAnimations(),
    provideRouter(routes),
  ]
}).catch(err => console.error(err));
