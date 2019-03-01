import {BaseService} from "../../services/base.service";
import {ApiResponse} from "../../services/apiResponse";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";



export interface IConsumed {
  id :number,
  userId: number,
  productId: number,
  quantity:number,
  proteins:number
  date:string
}

@Injectable()
export class RationService extends BaseService{

  constructor(
    protected httpClient:HttpClient,
    public router:Router
  ) {
    super(httpClient);
  }

  getRecordsForDate(userId:number,day:number,month:number,year:number):Promise<ApiResponse<IConsumed[]>>{
    return this.post<IConsumed[]>(`/proTeAnnaApi/api/execute.php?${BaseService.objToUrl(
      {
        method:'getRecordsForDate',
        userId,
        day,month,year
      })
    }`);
  }

}
