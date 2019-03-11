import {Component, ElementRef} from "@angular/core";
import {Router} from "@angular/router";
import {TitleService} from "../../services/title.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AppDataService} from "../../services/app-data.service";
import {UserService} from "../../services/user.service";
import {DialogRef, DialogService} from "../../services/dialog.service";
import {ConfirmDialog} from "../../components/dialog/confirm/confirm.dialog";
import {AlertDialog} from "../../components/dialog/alert/alert.dialog";

@Component({
  templateUrl: './proportion.component.html',
  styleUrls: ['./proportion.component.scss']
})
export class ProportionComponent {

  formGroup:FormGroup;

  constructor(
              private elementRef:ElementRef,
              private router:Router,
              private titleService:TitleService,
              private appDataService:AppDataService,
              private userService:UserService,
              private dialogService:DialogService
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

    const altName:FormControl = new FormControl('',[
      Validators.required,
    ]);

    this.formGroup = new FormGroup({
      a,b,c,altName
    });
  }


  get calculated():string{
    const a:number = +this.formGroup.value.a;
    const b:number = +this.formGroup.value.b;
    const c:number = +this.formGroup.value.c;
    if (isNaN(a) || isNaN(b) || isNaN(c)) return '?';
    const res:number = c*b/a;
    return res.toFixed(2);
  }

  async consume(){
    if (!this.formGroup.value.altName) {
      const ref:DialogRef = this.dialogService.openDialog(AlertDialog,this.elementRef);
      ref.componentInstance.message = 'Необхідно ввести назву продукту';
      return;
    }
    if (this.formGroup.invalid) return;
    await this.appDataService.addRecord(
      this.userService.getUserId(),
      -1,
      +this.formGroup.value.c,
      +this.calculated,
      this.formGroup.value.altName
    );
    await this.router.navigate(['/ration']);
  }

}
