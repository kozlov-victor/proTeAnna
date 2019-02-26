import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {EatComponent} from "./eat.component";
import {EatRoutingModule} from "./eat-routing.module";

const all = [
  EatComponent,
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
    EatRoutingModule
  ]
})
export class EatModule {

}
