import {SimpleAddComponent} from "./simple-add.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {SimpleAddRoutingModule} from "./simple-add-routing.module";

const all = [
  SimpleAddComponent,
];

@NgModule({
  declarations: all,
  providers: [],
  exports:   all,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SimpleAddRoutingModule
  ]
})
export class SimpleAddModule {

}
