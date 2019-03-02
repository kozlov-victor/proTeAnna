import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {TitleService} from "../../services/title.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AppDataService} from "../../services/app-data.service";
import {UserService} from "../../services/user.service";

@Component({
  templateUrl: './proportion.component.html',
  styleUrls: ['./proportion.component.scss']
})
export class ProportionComponent {

  formGroup:FormGroup;

  constructor(private router:Router,
              private titleService:TitleService,
              private appDataService:AppDataService,
              private userService:UserService
  ) {
    titleService.title = 'Розрахунок пропорції';

    const a = new FormControl(100,[
      Validators.required,
      Validators.min(1),
      Validators.max(10000)
    ]);
    const b = new FormControl(30,[
      Validators.required,
      Validators.min(1),
      Validators.max(10000)
    ]);
    const c = new FormControl(50,[
      Validators.required,
      Validators.min(1),
      Validators.max(10000)
    ]);

    this.formGroup = new FormGroup({
      a,b,c
    });
  }


  get calculated():string{
    if (!this.formGroup.valid) return '?';
    const a:number = +this.formGroup.value.a;
    const b:number = +this.formGroup.value.b;
    const c:number = +this.formGroup.value.c;
    const res:number = c*b/a;
    return res.toFixed(2);
  }

  async consume(){
    if (this.formGroup.invalid) return;
    await this.appDataService.addRecord(
      this.userService.getUserId(),
      -1,
      +this.formGroup.value.c,
      +this.calculated
    );
    await this.router.navigate(['/ration']);
  }

}
