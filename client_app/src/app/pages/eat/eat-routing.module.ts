import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {EatComponent} from "./eat.component";


const routes: Routes = [
  {
    path: '',
    component: EatComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EatRoutingModule { }
