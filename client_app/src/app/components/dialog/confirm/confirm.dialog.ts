import {Component} from "@angular/core";
import {DialogService} from "../../../services/dialog.service";


@Component({
  templateUrl:'./confirm.dialog.html',
  styleUrls: ['./confirm.dialog.scss']
})
export class ConfirmDialog {
    message:string = '';

    constructor(private dialogService:DialogService) {
    }

    sendResult(result:boolean){
        this.dialogService.sendResult(result);
        this.dialogService.close();
    }
}
