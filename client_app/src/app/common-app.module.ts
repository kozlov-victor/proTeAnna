import {NgModule} from "@angular/core";
import {ConsumedTableComponent} from "./components/consumed-table/consumed-table.component";
import {CommonModule} from "@angular/common";
import {ConfirmDialog} from "./components/dialog/confirm/confirm.dialog";
import {DialogComponent} from "./components/dialog/dialog.component";
import {DialogService} from "./services/dialog.service";

@NgModule({
  declarations: [
    ConsumedTableComponent,
    DialogComponent,
    ConfirmDialog
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ConsumedTableComponent,
    ConfirmDialog,
    DialogComponent
  ],
  providers: [DialogService],
})
export class CommonAppModule {
}
