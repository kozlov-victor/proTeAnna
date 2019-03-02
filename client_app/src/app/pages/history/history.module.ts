import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {HistoryComponent} from "./history.component";
import {HistoryRoutingModule} from "./history-routing.module";
import {RationService} from "../ration/ration.service";

const all = [
  HistoryComponent,
];

@NgModule({
  declarations: all,
  providers: [RationService],
  exports:   [...all],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HistoryRoutingModule
  ]
})
export class HistoryModule {

}
