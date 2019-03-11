import {NgModule} from "@angular/core";
import {ConsumedTableComponent} from "./components/consumed-table/consumed-table.component";
import {CommonModule} from "@angular/common";
import {ConfirmDialog} from "./components/dialog/confirm/confirm.dialog";
import {DialogComponent} from "./components/dialog/dialog.component";
import {DialogService} from "./services/dialog.service";
import {AlertDialog} from "./components/dialog/alert/alert.dialog";

@NgModule({
  declarations: [
    ConsumedTableComponent,
    DialogComponent,
    ConfirmDialog,
    AlertDialog
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ConsumedTableComponent,
    DialogComponent,
    ConfirmDialog,
    AlertDialog
  ],
  entryComponents: [ConfirmDialog,AlertDialog],
  providers: [DialogService],
})
export class CommonAppModule {
}
