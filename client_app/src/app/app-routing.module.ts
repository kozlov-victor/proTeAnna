import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'index',
    loadChildren: './pages/index/index.module#IndexModule'
  },
  {
    path: 'register',
    loadChildren: './pages/register/register.module#RegisterModule'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
