import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {TitleService} from "../../services/title.service";
import {IConsumed, RationService} from "../ration/ration.service";
import {UserService} from "../../services/user.service";
import {AppDataService, IMeasure, IProduct, NullMeasure, NullProduct} from "../../services/app-data.service";
import {ApiResponse} from "../../services/apiResponse";

@Component({
  templateUrl: './history.component.html'
})
export class HistoryComponent {

  date:Date = new Date();
  list:IConsumed[] = [];
  proteins:number;

  products:IProduct[] = [];
  measures:IMeasure[] = [];

  productById:{[id:number]:IProduct} = {};
  measureById:{[id:number]:IMeasure} = {};

  constructor(
    private router:Router,
    private titleService:TitleService,
    private userService:UserService,
    private rationService:RationService,
    private appDataService:AppDataService
  ) {
    titleService.title = 'Моя історія';

  }

  async ngOnInit(){
    this.products = await this.appDataService.getAllProducts();
    this.measures = await this.appDataService.getAllMeasures();

    this.measures.forEach((m:IMeasure)=>{
      this.measureById[m.id] = m;
    });
    this.measureById[-1] = NullMeasure;

    this.products.forEach((p:IProduct)=>{
      this.productById[p.id] = p;
    });
    this.productById[-1] = NullProduct;
    await this.loadHistoryList();
  }

  async dayInc(){
    this.date.setDate(this.date.getDate() + 1);
    await this.loadHistoryList();
  }

  async dayDec(){
    this.date.setDate(this.date.getDate() - 1);
    await this.loadHistoryList();
  }

  get dateFormatted():string {
    return this.appDataService.formatDate(this.date);
  }

  async loadHistoryList(){
    const date:number = this.date.getDate();
    const month:number = this.date.getMonth()+1;
    const year:number = this.date.getFullYear();
    const userId:number = this.userService.getUserId();
    const resp:ApiResponse<IConsumed[]> = await this.rationService.getRecordsForDate(userId,date,month,year);
    if (resp.isSuccess()) {
      this.proteins = 0;
      this.list = resp.payload;
      this.list.forEach((r:IConsumed)=>this.proteins+=+r.proteins);
      this.proteins = parseFloat(this.proteins.toFixed(2));
    }
    else {
      this.list = [];
    }
  }

}
