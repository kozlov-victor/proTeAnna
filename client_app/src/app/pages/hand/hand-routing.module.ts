import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HandComponent} from "./hand.component";


const routes: Routes = [
  {
    path: '',
    component: HandComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HandRoutingModule { }
