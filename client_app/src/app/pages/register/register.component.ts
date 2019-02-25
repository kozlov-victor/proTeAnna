import {Component} from "@angular/core";
import {TitleService} from "../../services/title.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ILoginUserResponse, RegisterService} from "./register.service";
import {ApiResponse} from "../../services/apiResponse";

@Component({
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  formGroup: FormGroup;

  constructor(private titleService: TitleService,private registerService:RegisterService) {
    titleService.title = 'Реєстрація';
    const emailInput: FormControl = new FormControl(null, [
      Validators.required,
      Validators.email
    ]);
    this.formGroup = new FormGroup({
      emailInput
    });
  }

  async onSubmit() {
    if (!this.formGroup.valid) return;
    const resp:ApiResponse<ILoginUserResponse> = await this.registerService.loginUser(this.formGroup.value.emailInput);
    console.log(resp);
  }

}
