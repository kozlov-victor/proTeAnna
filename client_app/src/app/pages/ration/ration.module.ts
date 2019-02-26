import {IndexComponent} from "../index/index.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {IndexRoutingModule} from "../index/index-routing.module";
import {RationComponent} from "./ration.component";
import {RationRoutingModule} from "./ration-routing.module";

const all = [
  RationComponent,
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
    RationRoutingModule
  ]
})
export class RationModule {

}
