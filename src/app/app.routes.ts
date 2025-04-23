import { Routes } from '@angular/router';
import { RootComponent } from './pages/root/root.component';
import { HeaderTitles } from './shared/common/constants/header-menu';

export const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/orders' },
      {
        path: 'orders',
        loadComponent: () =>
          import('./pages/home/home.component').then(x => x.HomeComponent),
        data: { title: HeaderTitles.home },
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./pages/about/about.component').then(x => x.AboutComponent),
        data: { title: HeaderTitles.about },
      },
      {
        path: 'video',
        loadComponent: () =>
          import('./pages/video-chart/video-chart.component').then(
            x => x.VideoChartComponent
          ),
        data: { title: HeaderTitles.video },
      },
    ],
  },
  {
    path: '404',
    loadComponent: () =>
      import('./pages/app-not-found/app-not-found.component').then(
        x => x.AppNotFoundComponent
      ),
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];
