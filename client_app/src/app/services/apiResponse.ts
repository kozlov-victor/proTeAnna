
export enum STATUS {
    OK = 'OK',
    ERROR = 'ERROR'
}

export interface Void {}

export interface  IValidationError {
    code: string,
    message: string
}

export interface IApiResponse<T> {
    status:STATUS,
    message:string,
    payload:T,
    validationErrors: IValidationError[]
}

export class ApiResponse<T> {

    status: STATUS;
    message:string;
    payload: T;
    validationErrors:IValidationError[];

    isSuccess():boolean{
        return this.status==STATUS.OK
    }

    fromParams(params: IApiResponse<T>){
        this.status = params.status;
        this.message = params.message;
        this.payload = params.payload;
        this.validationErrors = params.validationErrors
    }


}