import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    // This makes Splash the first page that loads
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full',
  },
  {
    path: 'splash',
    loadComponent: () => import('./pages/splash/splash.page').then(m => m.SplashPage)
  },
 
];