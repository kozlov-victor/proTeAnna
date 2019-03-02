import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {TitleService} from "../../services/title.service";
import {AppDataService, IMeasure, IProduct} from "../../services/app-data.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";

@Component({
  templateUrl: './table.component.html'
})
export class TableComponent {

  formGroup: FormGroup;

  products: IProduct[] = [];
  measureById: {[key:number]:IMeasure} = {};

  selectedProduct: IProduct;
  proteins:number = 20;

  constructor(
    private router:Router,
    private titleService:TitleService,
    private userService:UserService,
    private appDataService:AppDataService
  ) {
    titleService.title = 'Обрати продукт з таблиці';

    const quantityInput: FormControl = new FormControl(1, [
      Validators.required,
      Validators.min(0),
      Validators.max(10000),
    ]);
    this.formGroup = new FormGroup({
      quantityInput,
      filterTermInput: new FormControl()
    });

  }

  get filteredProducts():IProduct[]{
    if (!this.products) return [];
    const term:string = this.formGroup.value.filterTermInput;
    if (!term) return this.products;
    const res:IProduct[] = [];
    const termUpper = term.toUpperCase();
    this.products.forEach((p:IProduct)=>{
      if (p.name.toUpperCase().indexOf(termUpper)>-1) res.push(p);
    });
    return res;
  }

  recalcProteins(){
    let quantity:number = parseFloat(this.formGroup.value.quantityInput);
    let n:number =
      quantity*this.selectedProduct.proteins/this.selectedProduct.quantity;
    const strn:string = n.toFixed(2);
    n = parseFloat(strn);
    this.proteins = n;
  }

  select(p:IProduct){
    this.selectedProduct = p;
    this.recalcProteins();
  }

  inc(){
    let quantity:number = parseFloat(this.formGroup.value.quantityInput);
    if (isNaN(quantity)) quantity = 0;
    if (quantity>10000) quantity = 10000;
    quantity++;
    this.formGroup.patchValue({quantityControl:quantity});
    this.recalcProteins();
  }

  dec(){
    let quantity:number = parseFloat(this.formGroup.value.quantityInput);
    if (isNaN(quantity)) quantity = 0;
    if (quantity>0) quantity--;
    this.formGroup.patchValue({quantityControl:quantity});
    this.recalcProteins();
  }

  edit(){
    let quantity:number = parseFloat(this.formGroup.value.quantityInput);
    if (isNaN(quantity)) quantity = 0;
    if (quantity>10000) quantity = 10000;
    this.formGroup.patchValue({quantityControl:quantity});
    this.recalcProteins();
  }

  async ngOnInit(){
    this.products = await this.appDataService.getAllProducts();
    const measures:IMeasure[] = await this.appDataService.getAllMeasures();
    measures.forEach((m:IMeasure)=>{
        this.measureById[m.id] = m;
    });
  }

  async consume(){
    if (this.formGroup.invalid) return;
    await this.appDataService.addRecord(
      this.userService.getUserId(),
      this.selectedProduct.id,
      this.formGroup.value.quantityInput,
      this.proteins
    );
    await this.router.navigate(['/ration']);
  }

}
