import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'index',
    loadChildren: './pages/index/index.module#IndexModule'
  },
  {
    path: 'main',
    loadChildren: './pages/main/main.module#MainModule'
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
    path: 'proportion',
    loadChildren: './pages/proportion/proportion.module#ProportionModule'
  },
  {
    path: 'simple-add',
    loadChildren: './pages/simple-add/simple-add.module#SimpleAddModule'
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
