import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {TitleService} from "../../services/title.service";

@Component({
  templateUrl: './proportion.component.html'
})
export class ProportionComponent {


  constructor(private router:Router, private titleService:TitleService) {
    titleService.title = 'proportion component';
  }
}
