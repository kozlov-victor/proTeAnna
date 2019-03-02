import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {TitleService} from "../../services/title.service";
import {IConsumed, RationService} from "./ration.service";
import {UserService} from "../../services/user.service";
import {ApiResponse} from "../../services/apiResponse";
import {el} from "@angular/platform-browser/testing/src/browser_util";
import {AppDataService, IMeasure, IProduct, NullMeasure, NullProduct} from "../../services/app-data.service";

@Component({
  templateUrl: './ration.component.html'
})
export class RationComponent {

  now:string;
  consumed:IConsumed[] = [];
  total:number = 0;

  products:IProduct[] = [];
  measures:IMeasure[] = [];

  productById:{[id:number]:IProduct} = {};
  measureById:{[id:number]:IMeasure} = {};

  private leadZero(val:number){
    let s:string = val+'';
    if (s.length==1) return `0${s}`;
    return s;
  }

  constructor(
    public router:Router,
    private titleService:TitleService,
    private rationService:RationService,
    private userService:UserService,
    private appDataService:AppDataService
  ) {
    const d:Date = new Date();
    this.now = `
      ${this.leadZero(d.getDate())}-${this.leadZero(d.getMonth()+1)}-${this.leadZero(d.getFullYear())}`;
    titleService.title = 'Мій раціон';
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

    const userId = this.userService.getUserId();
    const d:Date = new Date();
    const date:number = d.getDate();
    const year:number = d.getFullYear();
    const month:number = d.getMonth()+1;
    const res:ApiResponse<IConsumed[]> = await this.rationService.getRecordsForDate(userId,date,month,year);
    if (!res.isSuccess()) {

    } else {
      this.consumed = res.payload;
      this.consumed.forEach((c:IConsumed)=>this.total+=(+c.proteins));
      this.total = parseFloat(this.total.toFixed(2));
    }
  }

}
