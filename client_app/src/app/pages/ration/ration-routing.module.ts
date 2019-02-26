import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RationComponent} from "./ration.component";


const routes: Routes = [
  {
    path: '',
    component: RationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RationRoutingModule { }
