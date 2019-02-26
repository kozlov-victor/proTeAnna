import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {TitleService} from "../../services/title.service";

@Component({
  templateUrl: './ration.component.html'
})
export class RationComponent {

  now:string;

  private leadZero(val:number){
    let s:string = val+'';
    if (s.length==1) return `0${s}`;
    return s;
  }

  constructor(private router:Router, private titleService:TitleService) {
    const d:Date = new Date();
    this.now = `
      ${this.leadZero(d.getDate())}-
      ${this.leadZero(d.getMonth()+1)}-
      ${this.leadZero(d.getFullYear())
    }`;
    titleService.title = 'Мій раціон';
  }
}
