import {HttpClient} from "@angular/common/http";
import {ApiResponse, STATUS} from "./apiResponse";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

interface IKeyVal {
  [key:string]:any
}

export class BaseService {

    static objToUrl(obj:IKeyVal){
      let res:string =
        Object.keys(obj).map((k:string)=>`${k}=${encodeURIComponent(''+obj[k])}`).join('&');
      return res;
    }

    constructor(protected httpClient:HttpClient) {

    }

    private processUrl(url:string):string{
        if (url.indexOf('/')==0) url = url.substr(1, url.length -1 );
        return `${environment.BASE_URL}${url}`
    }

    async post<T>(url: string, params: IKeyVal = {}): Promise<ApiResponse<T>> {
        try {
            let payload:T = await this.httpClient.post(this.processUrl(url), params).toPromise() as T;
            let response: ApiResponse<T> = new ApiResponse();
            response.status = STATUS.OK;
            response.payload = payload;
            return response;
        } catch (e) {
            let response: ApiResponse<T> = new ApiResponse();
            response.fromParams(e.error);
            response.status = STATUS.ERROR;
            return response;
        }

    }

    postObservable<T>(url: string, params: IKeyVal = {}): Observable<ApiResponse<T>> {
        return this.httpClient.post(this.processUrl(url),params) as Observable<ApiResponse<T>>;
    }
}
