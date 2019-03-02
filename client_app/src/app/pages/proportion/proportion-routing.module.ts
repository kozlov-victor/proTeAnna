import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ProportionComponent} from "./proportion.component";


const routes: Routes = [
  {
    path: '',
    component: ProportionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProportionRoutingModule { }
