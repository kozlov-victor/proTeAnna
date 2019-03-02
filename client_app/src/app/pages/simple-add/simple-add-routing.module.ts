import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SimpleAddComponent} from "./simple-add.component";


const routes: Routes = [
  {
    path: '',
    component: SimpleAddComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleAddRoutingModule { }
