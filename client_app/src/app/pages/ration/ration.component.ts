import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {TitleService} from "../../services/title.service";
import {RationService} from "./ration.service";

@Component({
  templateUrl: './ration.component.html'
})
export class RationComponent {

  now:string;
  consumed:string = '...';

  private leadZero(val:number){
    let s:string = val+'';
    if (s.length==1) return `0${s}`;
    return s;
  }

  constructor(private router:Router, private titleService:TitleService,private rationService:RationService) {
    const d:Date = new Date();
    this.now = `
      ${this.leadZero(d.getDate())}-${this.leadZero(d.getMonth()+1)}-${this.leadZero(d.getFullYear())}`;
    titleService.title = 'Мій раціон';
  }

  async ngOnInit(){
    //this.consumed = this.rationService.
  }

}
