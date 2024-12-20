import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';
import { mergeApplicationConfig } from '@angular/core';

const config = {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
};

bootstrapApplication(AppComponent, mergeApplicationConfig(appConfig, config))
  .catch((err) => console.error(err));