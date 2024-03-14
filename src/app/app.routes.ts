import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./components/login/login.component').then(mod => mod.LoginComponent)},
  { path: 'token-info', loadComponent: () => import('./components/token-info/token-info.component').then(mod => mod.TokenInfoComponent)},
  { path: 'token-update', loadComponent: () => import('./components/token-update/token-update.component').then(mod => mod.TokenUpdateComponent), canActivate: [authGuard()]},
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];
