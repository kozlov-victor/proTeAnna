import {Component, ElementRef} from "@angular/core";
import {Router} from "@angular/router";
import {TitleService} from "../../services/title.service";
import {IConsumed, RationService} from "./ration.service";
import {UserService} from "../../services/user.service";
import {ApiResponse} from "../../services/apiResponse";
import {AppDataService} from "../../services/app-data.service";
import {DialogRef, DialogService} from "../../services/dialog.service";
import {ConfirmDialog} from "../../components/dialog/confirm/confirm.dialog";

@Component({
  templateUrl: './ration.component.html'
})
export class RationComponent {

  now:string;
  consumed:IConsumed[] = [];
  total:number;

  constructor(
    private elementRef:ElementRef,
    public router:Router,
    private titleService:TitleService,
    private rationService:RationService,
    private userService:UserService,
    private appDataService:AppDataService,
    private dialogService:DialogService
  ) {
    const d:Date = new Date();
    this.now = this.appDataService.formatDate(d);
    titleService.title = 'Мій раціон';
  }

  private calcTotal(){
    this.total = 0;
    this.consumed.forEach((c:IConsumed)=>this.total+=(+c.proteins));
    this.total = parseFloat(this.total.toFixed(2));
  }

  async ngOnInit(){

    const userId = this.userService.getUserId();
    const d:Date = new Date();
    const date:number = d.getDate();
    const year:number = d.getFullYear();
    const month:number = d.getMonth()+1;
    const res:ApiResponse<IConsumed[]> = await this.rationService.getRecordsForDate(userId,date,month,year);
    if (!res.isSuccess()) {

    } else {
      this.consumed = res.payload;
      this.calcTotal();
    }

  }


  async deleteRow(row:IConsumed){
    const ref:DialogRef = this.dialogService.openDialog<boolean>(ConfirmDialog,this.elementRef);
    ref.componentInstance.message = `Видалити запис?`;
    const result:boolean = await ref.getResult<boolean>();
    if (!result) return;
    await this.rationService.deleteRecordById(row.id);
    this.consumed.splice(this.consumed.indexOf(row),1);
    this.calcTotal();

  }

}
