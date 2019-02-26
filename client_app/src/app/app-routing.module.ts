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
  },
  {
    path: 'ration',
    loadChildren: './pages/ration/ration.module#RationModule'
  },
  {
    path: 'eat',
    loadChildren: './pages/eat/eat.module#EatModule'
  },
  {
    path: 'table',
    loadChildren: './pages/table/table.module#TableModule'
  },
  {
    path: 'hand',
    loadChildren: './pages/hand/hand.module#HandModule'
  },
  {
    path: 'history',
    loadChildren: './pages/history/history.module#HistoryModule'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
