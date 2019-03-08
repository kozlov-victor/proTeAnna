import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {TitleService} from "../../services/title.service";
import {IConsumed, RationService} from "./ration.service";
import {UserService} from "../../services/user.service";
import {ApiResponse} from "../../services/apiResponse";
import {AppDataService} from "../../services/app-data.service";

@Component({
  templateUrl: './ration.component.html'
})
export class RationComponent {

  now:string;
  consumed:IConsumed[] = [];
  total:number;

  constructor(
    public router:Router,
    private titleService:TitleService,
    private rationService:RationService,
    private userService:UserService,
    private appDataService:AppDataService
  ) {
    const d:Date = new Date();
    this.now = this.appDataService.formatDate(d);
    titleService.title = 'Мій раціон';
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
      this.total = 0;
      this.consumed.forEach((c:IConsumed)=>this.total+=(+c.proteins));
      this.total = parseFloat(this.total.toFixed(2));
    }


  }

}
