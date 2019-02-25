import {BaseService} from "../../services/base.service";
import {ApiResponse} from "../../services/apiResponse";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

export interface ILoginUserResponse {
  userId:number
}

@Injectable()
export class RegisterService extends BaseService{

  constructor(protected httpClient:HttpClient) {
    super(httpClient);
  }

  loginUser(email:string):Promise<ApiResponse<ILoginUserResponse>>{
    return this.post<ILoginUserResponse>('/proTeAnnaApi/api/execute.php',{method:'loginUser',userName:email});
  }

}
