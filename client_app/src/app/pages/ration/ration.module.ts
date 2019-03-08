import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RationComponent} from "./ration.component";
import {RationRoutingModule} from "./ration-routing.module";
import {RationService} from "./ration.service";
import {CommonAppModule} from "../../common-app.module";
import {ConfirmDialog} from "../../components/dialog/confirm/confirm.dialog";

const all = [
  RationComponent
];

@NgModule({
  declarations: all,
  providers: [RationService],
  exports:   [...all],
  entryComponents: [ConfirmDialog],
  imports: [
    CommonModule,
    CommonAppModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RationRoutingModule
  ]
})
export class RationModule {

}
