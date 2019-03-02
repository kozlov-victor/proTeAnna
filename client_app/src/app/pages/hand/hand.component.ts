import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {TitleService} from "../../services/title.service";

@Component({
  templateUrl: './hand.component.html'
})
export class HandComponent {

  constructor(public router:Router, private titleService:TitleService) {

    titleService.title = 'Введення кількості білку вручну';
  }
}
