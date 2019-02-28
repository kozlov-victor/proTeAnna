import {MainComponent} from "./main.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MainRoutingModule} from "./main-routing.module";

const all = [
  MainComponent,
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
    MainRoutingModule
  ]
})
export class MainModule {

}
