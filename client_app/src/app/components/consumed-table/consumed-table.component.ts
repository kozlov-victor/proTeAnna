
import {AppDataService, IMeasure, IProduct, NullMeasure, NullProduct} from "../../services/app-data.service";
import {Component, EventEmitter, Input, Output} from "@angular/core";
import {IConsumed} from "../../pages/ration/ration.service";


@Component({
  selector: 'app-consumed-table',
  templateUrl: './consumed-table.component.html',
  styleUrls: ['./consumed-table.component.scss']
})
export class ConsumedTableComponent {

  @Input()
  public consumed:IConsumed[] = [];
  @Input() showDelete:boolean = false;
  @Output() onDelete:EventEmitter<IConsumed> = new EventEmitter<IConsumed>();

  products:IProduct[] = [];
  measures:IMeasure[] = [];

  productById:{[id:number]:IProduct} = {};
  measureById:{[id:number]:IMeasure} = {};

  constructor(private appDataService:AppDataService){

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
  }

  emitDelete(row:IConsumed) {
    this.onDelete.emit(row);
  }

}
