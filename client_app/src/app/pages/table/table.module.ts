import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {TableComponent} from "./table.component";
import {TableRoutingModule} from "./table-routing.module";

const all = [
  TableComponent,
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
    TableRoutingModule
  ]
})
export class TableModule {

}
