import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {TitleService} from "../../services/title.service";

@Component({
  templateUrl: './table.component.html'
})
export class TableComponent {

  constructor(private router:Router, private titleService:TitleService) {

    titleService.title = 'Обрати продукт з таблиці';
  }
}
