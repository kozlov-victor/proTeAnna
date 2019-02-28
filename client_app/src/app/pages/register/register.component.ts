import {Component} from "@angular/core";
import {TitleService} from "../../services/title.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ILoginUserResponse, RegisterService} from "./register.service";
import {ApiResponse} from "../../services/apiResponse";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {el} from "@angular/platform-browser/testing/src/browser_util";

@Component({
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  formGroup: FormGroup;

  constructor(
    private router:Router,
    private titleService: TitleService,
    private registerService:RegisterService,
    private userService:UserService
  ) {
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
    if (!resp.isSuccess()) {

    } else {
      const loginUser:ILoginUserResponse = resp.payload;
      this.userService.saveUserId(loginUser.userId);
      this.router.navigate(['/main']);
    }
  }

}
