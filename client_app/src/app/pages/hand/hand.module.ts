import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {HandComponent} from "./hand.component";
import {HandRoutingModule} from "./hand-routing.module";

const all = [
  HandComponent,
];

@NgModule({
  declarations: all,
  providers: [],
  exports:   [...all],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HandRoutingModule
  ]
})
export class HandModule {

}
