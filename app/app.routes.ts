import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ListRoutes } from './components/container/list/list.routes';
// import { DogListComponent } from './dogs/dog-list.component';
import { ListComponent } from './components/container/list/list.component';

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  { path: 'list', component: ListComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
