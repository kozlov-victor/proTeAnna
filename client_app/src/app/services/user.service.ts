import {Injectable} from "@angular/core";

@Injectable()
export class UserService {

  private readonly USER_ID = 'userId';

  private userId:number;

  constructor() {
    this.userId = parseInt(localStorage.getItem(this.USER_ID));
    if (Number.isNaN(this.userId)) this.userId = undefined;
  }

  saveUserId(userId:number){
    localStorage.setItem(this.USER_ID,''+userId);
    this.userId = userId;
  }

  hasUserId():boolean{
    return !!this.userId;
  }

  getUserId(){
    return this.userId;
  }

}
