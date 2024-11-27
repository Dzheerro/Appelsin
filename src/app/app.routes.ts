import { Routes } from '@angular/router';

import { HomeComponent } from './shared/components/home/home.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'login', loadComponent: () => import('./shared/components/login/login.component').then((c) => c.LoginComponent) },
  { path: 'sign-up', loadComponent: () => import('./shared/components/signup/signup.component').then((c) => c.SignupComponent) },
  { path: '**', redirectTo: '' }
];
