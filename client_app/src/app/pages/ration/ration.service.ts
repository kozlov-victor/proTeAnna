import {BaseService} from "../../services/base.service";
import {ApiResponse} from "../../services/apiResponse";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

export interface ILoginUserResponse {
  userId:number
}

@Injectable()
export class RationService extends BaseService{

  constructor(
    protected httpClient:HttpClient,
    public router:Router
  ) {
    super(httpClient);
  }

  getConsumed(userName:string):Promise<ApiResponse<ILoginUserResponse>>{
    return this.post<ILoginUserResponse>(`/proTeAnnaApi/api/execute.php?${BaseService.objToUrl({method:'loginUser',userName})}`);
  }

}
