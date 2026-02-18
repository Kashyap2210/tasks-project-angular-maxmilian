/**
// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app';
// import { appConfig } from './app/app.config';
 
// The below approach only works if we are using Standalone components
// This approach does not work for Module based components
// Hence we comment it out and check below code
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));

*/

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
