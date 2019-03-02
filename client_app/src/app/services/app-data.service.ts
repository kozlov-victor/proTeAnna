
import {BaseService} from "./base.service";
import {ApiResponse, Void} from "./apiResponse";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

export interface IProduct {
  id:number,
  measureId:number,
  name:string,
  quantity:number,
  proteins:number
}


export interface IMeasure {
  id:number,
  name:string
}

export const NullMeasure:IMeasure = {
  id:-1,
  name: 'г'
};

export const NullProduct:IProduct = {
  id:-1,
  measureId:-1,
  name:'Ручне введення',
  quantity:-1,
  proteins:-1
};

@Injectable()
export class AppDataService extends BaseService {

  private products:IProduct[];
  private measures:IMeasure[];

  constructor(protected httpClient:HttpClient) {
    super(httpClient);
  }

  async getAllProducts():Promise<IProduct[]> {
    if (this.products) return Promise.resolve(this.products);
    const resp:ApiResponse<IProduct[]> = await this.post<IProduct[]>(`/proTeAnnaApi/api/execute.php?${BaseService.objToUrl(
      {
        method:'getProducts'
      }
    )}`);
    if (resp.isSuccess()) {
      this.products = resp.payload;
      return this.products;
    }
    return Promise.reject(null);
  }

  async getAllMeasures():Promise<IMeasure[]> {
    if (this.measures) return Promise.resolve(this.measures);
    const resp:ApiResponse<IMeasure[]> = await this.post<IMeasure[]>(`/proTeAnnaApi/api/execute.php?${BaseService.objToUrl(
      {
        method:'getMeasures'
      }
    )}`);
    if (resp.isSuccess()) {
      this.measures = resp.payload;
      return this.measures;
    }
    return Promise.reject(null);
  }

  async addRecord(userId:number,productId:number,quantity:number,proteins:number):Promise<Void>{
    return await this.post<IMeasure[]>(`/proTeAnnaApi/api/execute.php?${BaseService.objToUrl(
      {
        method:'addRecord',
        userId,
        productId,
        quantity,
        proteins
      }
    )}`);
  }


}
