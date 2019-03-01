import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {TitleService} from "../../services/title.service";
import {AppDataService, IMeasure, IProduct} from "../../services/app-data.service";

@Component({
  templateUrl: './table.component.html'
})
export class TableComponent {

  products: IProduct[] = [];
  measureById: {[key:number]:IMeasure} = {};

  selectedProduct: IProduct;
  quantity:number = 1;
  proteins:number = 20;

  constructor(
    private router:Router,
    private titleService:TitleService,
    private appDataService:AppDataService
  ) {
    titleService.title = 'Обрати продукт з таблиці';
  }

  recalcProteins(){
    let n:number =
      this.quantity*this.selectedProduct.proteins/this.selectedProduct.quantity;
    const strn:string = n.toFixed(2);
    n = parseFloat(strn);
    this.proteins = n;
  }

  select(p:IProduct){
    this.selectedProduct = p;
    this.recalcProteins();
  }

  inc(){
    this.quantity = parseFloat(''+this.quantity);
    if (isNaN(this.quantity)) this.quantity = 0;
    if (this.quantity>10000) this.quantity = 10000;
    this.quantity++;
    this.recalcProteins();
  }

  dec(){
    this.quantity = parseFloat(''+this.quantity);
    if (isNaN(this.quantity)) this.quantity = 0;
    if (this.quantity==0) return;
    this.quantity--;
    this.recalcProteins();
  }

  edit(){
    this.quantity = parseFloat(''+this.quantity);
    if (isNaN(this.quantity)) this.quantity = 0;
    if (this.quantity>10000) this.quantity = 10000;
    this.recalcProteins()
  }

  async ngOnInit(){
    this.products = await this.appDataService.getAllProducts();
    const measures:IMeasure[] = await this.appDataService.getAllMeasures();
    measures.forEach((m:IMeasure)=>{
        this.measureById[m.id] = m;
    });
  }

}
