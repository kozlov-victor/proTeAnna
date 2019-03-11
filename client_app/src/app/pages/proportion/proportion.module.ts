import {ProportionComponent} from "./proportion.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ProportionRoutingModule} from "./proportion-routing.module";
import {CommonAppModule} from "../../common-app.module";

const all = [
  ProportionComponent,
];

@NgModule({
  declarations: all,
  providers: [],
  exports:   all,
  imports: [
    CommonModule,
    CommonAppModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProportionRoutingModule
  ]
})
export class ProportionModule {

}
