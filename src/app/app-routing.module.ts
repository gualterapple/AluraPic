import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { LoginGuard } from './core/auth/login.guard';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    canActivate: [LoginGuard],
    loadChildren: () => import("./home/home.module").then(x => x.HomeModule)
  },
  {
    path: 'user/:userName',
    component: PhotoListComponent,

    resolve: {
      photos: PhotoListResolver,
    },
  },
  {
    path: 'photo/add', component: PhotoFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'photo/:photoId', component: PhotoDetailsComponent,
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
exports: [RouterModule],
})
export class AppRoutingModule { }
