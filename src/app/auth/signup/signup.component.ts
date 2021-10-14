import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  isLoading = false;

  constructor(public authService: AuthService) {}

  onSignup(loginForm: NgForm){
    if (loginForm.invalid){
      return;
    }

    this.authService.createUser(loginForm.value.email, loginForm.value.password);
  }

}
