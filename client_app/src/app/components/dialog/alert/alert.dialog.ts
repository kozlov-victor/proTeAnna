import {Component} from "@angular/core";
import {DialogService} from "../../../services/dialog.service";


@Component({
  templateUrl:'./alert.dialog.html',
  styleUrls: ['./alert.dialog.scss']
})
export class AlertDialog {
    message:string = '';

    constructor(private dialogService:DialogService) {
    }

    sendResult(result:boolean){
        this.dialogService.sendResult(result);
        this.dialogService.close();
    }
}
