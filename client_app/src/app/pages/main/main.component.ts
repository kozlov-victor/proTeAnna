import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {TitleService} from "../../services/title.service";
import {UserService} from "../../services/user.service";

@Component({
  templateUrl: './main.component.html'
})
export class MainComponent {


  constructor(
    public router:Router,
    private titleService:TitleService,
    public userService:UserService)
  {
    titleService.title = 'Головне меню';
  }
}
