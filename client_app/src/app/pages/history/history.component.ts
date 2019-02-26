import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {TitleService} from "../../services/title.service";

@Component({
  templateUrl: './history.component.html'
})
export class HistoryComponent {

  constructor(private router:Router, private titleService:TitleService) {

    titleService.title = 'Моя історія';
  }
}
