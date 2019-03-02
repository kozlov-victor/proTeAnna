import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {TitleService} from "../../services/title.service";

@Component({
  templateUrl: './simple-add.component.html'
})
export class SimpleAddComponent {


  constructor(private router:Router, private titleService:TitleService) {
    titleService.title = 'simple-add component';
  }
}
