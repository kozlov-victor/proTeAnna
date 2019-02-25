
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RegisterRoutingModule} from "./register-routing.module";
import {RegisterComponent} from "./register.component";
import {RegisterService} from "./register.service";


const all = [
  RegisterComponent,
];

@NgModule({
  declarations: all,
  providers: [RegisterService],
  exports:   all,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule {

}
