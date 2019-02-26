import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {TitleService} from "../../services/title.service";

@Component({
  templateUrl: './eat.component.html'
})
export class EatComponent {

  constructor(private router:Router, private titleService:TitleService) {

    titleService.title = 'З\'їсти продукт';
  }
}
