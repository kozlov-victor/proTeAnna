

import {NgModule} from "@angular/core";
import {ConsumedTableComponent} from "./components/consumed-table/consumed-table.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
     ConsumedTableComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ConsumedTableComponent
  ],
  providers: [ ],
})
export class CommonAppModule {}
