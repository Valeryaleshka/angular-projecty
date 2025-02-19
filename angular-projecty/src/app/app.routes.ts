import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AppNotFoundComponent } from '../components/app-not-found/app-not-found.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '404',
    component: AppNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];
