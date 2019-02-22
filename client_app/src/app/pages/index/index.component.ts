import {Component} from "@angular/core";

@Component({
  templateUrl: './index.component.html'
})
export class IndexComponent {

  now:string;

  private leadZero(val:number){
    let s:string = val+'';
    if (s.length==1) return `0${s}`;
    return s;
  }

  constructor() {
    const d:Date = new Date();
    this.now = `${this.leadZero(d.getDate())}:${this.leadZero(d.getMonth()+1)}:${this.leadZero(d.getFullYear())}`;
  }
}
