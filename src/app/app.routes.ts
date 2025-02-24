import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { VideoChartComponent } from './pages/video-chart/video-chart.component';
import { RootComponent } from './pages/root/root.component';

export const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/home' },
      { path: 'home', component: HomeComponent, data: { title: 'Home' } },
      {
        path: 'about',
        component: AboutComponent,
        data: { title: 'About' },
      },
      {
        path: 'video',
        component: VideoChartComponent,
        data: { title: 'Video Chart' },
      },
    ],
  },

  // {
  //   path: 'not-home',
  //   providers: [NzModalService],
  //   canDeactivate: [canDeactivateFunction],
  //   loadComponent: () =>
  //     import('./../components/home-sidebar/home-sidebar.component').then(
  //       x => x.HomeSidebarComponent
  //     ),
  // },
  // {
  //   path: 'homeOne',
  //   loadComponent: () =>
  //     import('./../components/home-sidebar/home-sidebar.component').then(
  //       x => x.HomeSidebarComponent
  //     ),
  //   outlet: 'sidebar',
  // },
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
