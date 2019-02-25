import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ApiResponse, IApiResponse} from "./apiResponse";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

interface IKeyVal {
  [key:string]:any
}

export class BaseService {

    constructor(protected httpClient:HttpClient) {

    }

    private processUrl(url:string):string{
        if (url.indexOf('/')==0) url = url.substr(1, url.length -1 );
        return `${environment.BASE_URL}${url}`
    }

    async post<T>(url: string, params: IKeyVal = {},headers = null): Promise<ApiResponse<T>> {
        try {
            let resp:IApiResponse<T> = await this.httpClient.post(this.processUrl(url), params, {headers}).toPromise() as IApiResponse<T>;
            let response: ApiResponse<T> = new ApiResponse();
            response.fromParams(resp);
            return response;
        } catch (e) {
            let response: ApiResponse<T> = new ApiResponse();
            response.fromParams(e.error);
            return response;
        }

    }

    postObservable<T>(url: string, params: IKeyVal = {}): Observable<ApiResponse<T>> {
        return this.httpClient.post(this.processUrl(url),params) as Observable<ApiResponse<T>>;
    }
}
