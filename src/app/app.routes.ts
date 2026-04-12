import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full',
  },
  {
    path: 'splash',
    loadComponent: () =>
      import('./pages/splash/splash.page').then((m) => m.SplashPage),
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'tab1',
    loadComponent: () => import('./tab1/tab1.page').then( m => m.Tab1Page)
  },
  {
    path: 'tab2',
    loadComponent: () => import('./tab2/tab2.page').then( m => m.Tab2Page)
  },
];
