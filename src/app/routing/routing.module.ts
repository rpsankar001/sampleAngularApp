import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: '../home/home.module#HomeModule',
  },
  {
    path: 'login',
    loadChildren: '../login/login.module#LoginModule',
  },
  {
    path: 'registration',
    loadChildren: '../registration/registration.module#RegistrationModule',
    data: { preload: true }
  },
  {
    path: '',
    loadChildren: '../home/home.module#HomeModule'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})


export class RoutingModule { }
