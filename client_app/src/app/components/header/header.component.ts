import {Component} from "@angular/core";
import {Location} from '@angular/common';
import {TitleService} from "../../services/title.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  title:string = '';

  constructor(private _location: Location,public titleService:TitleService){}

  navigateBack() {
    this._location.back();
  }

}
