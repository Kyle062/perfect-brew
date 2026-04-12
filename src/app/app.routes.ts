import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash', // Default page
    pathMatch: 'full',
  },
  {
    path: 'splash',
    loadComponent: () =>
      import('./pages/splash/splash.page').then((m) => m.SplashPage),
  },
  {
    path: 'tab1',
    loadComponent: () => import('./tab1/tab1.page').then((m) => m.Tab1Page),
  },
  {
    path: 'tab2',
    loadComponent: () => import('./tab2/tab2.page').then((m) => m.Tab2Page),
  },
  {
    path: 'tab3',
    loadComponent: () => import('./tab3/tab3.page').then((m) => m.Tab3Page),
  },
  {
    path: 'tab4',
    loadComponent: () => import('./tab4/tab4.page').then((m) => m.Tab4Page),
  },
  {
    path: 'tab5',
    loadComponent: () => import('./tab5/tab5.page').then((m) => m.Tab5Page),
  },
  {
    path: 'product-details/:id', 
    loadComponent: () =>
      import('./pages/product-details/product-details.page').then(
        (m) => m.ProductDetailsPage,
      ),
  },
];
