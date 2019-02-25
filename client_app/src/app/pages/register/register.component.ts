import {Component} from "@angular/core";
import {TitleService} from "../../services/title.service";

@Component({
  templateUrl: './register.component.html'
})
export class RegisterComponent {



  constructor(private titleService:TitleService) {
      titleService.title = 'Реєстрація';
  }
}
