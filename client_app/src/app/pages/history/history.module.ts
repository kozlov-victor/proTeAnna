import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {HistoryComponent} from "./history.component";
import {HistoryRoutingModule} from "./history-routing.module";
import {RationService} from "../ration/ration.service";
import {ConsumedTableComponent} from "../../components/consumed-table/consumed-table.component";
import {CommonAppModule} from "../../common-app.module";

const all = [
  HistoryComponent
];

@NgModule({
  declarations: all,
  providers: [RationService],
  exports:   [...all],
  imports: [
    CommonModule,
    CommonAppModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HistoryRoutingModule
  ]
})
export class HistoryModule {

}
