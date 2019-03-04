import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {TitleService} from "../../services/title.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AppDataService} from "../../services/app-data.service";
import {UserService} from "../../services/user.service";

@Component({
  templateUrl: './simple-add.component.html'
})
export class SimpleAddComponent {

  formGroup:FormGroup;

  constructor(

    private router:Router,
    private titleService:TitleService,
    private appDataService:AppDataService,
    private userService:UserService

  ) {
    titleService.title = 'Кількість спожитого білку';

    const proteins = new FormControl(50,[
      Validators.required,
      Validators.min(1),
      Validators.max(10000)
    ]);

    const altName:FormControl = new FormControl('',[
      Validators.required,
    ]);

    this.formGroup = new FormGroup({
      proteins,altName
    });
  }


  async consume(){
    if (this.formGroup.invalid) return;
    await this.appDataService.addRecord(
      this.userService.getUserId(),
      -1,
      -1,
      +this.formGroup.value.proteins,
      this.formGroup.value.altName
    );
    await this.router.navigate(['/ration']);
  }


}
