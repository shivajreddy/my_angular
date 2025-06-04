import { Routes } from '@angular/router';
import { Page1 } from './page1/page1';
import { App } from './app';

export const routes: Routes = [
  { path: '', component: App },
  { path: 'page1', component: Page1 },
];
