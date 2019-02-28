import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {TitleService} from "../../services/title.service";

@Component({
  templateUrl: './index.component.html'
})
export class IndexComponent {

  now:string;


  constructor(private router:Router, private titleService:TitleService) {
    titleService.title = 'ProTeAnna';
    setTimeout(()=>router.navigate(['/main']),1000);
  }
}
