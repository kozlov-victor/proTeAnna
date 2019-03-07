import {Component} from "@angular/core";
import {DialogService} from "../../services/dialog.service";

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
    constructor(public dialogService:DialogService) {
    }
}