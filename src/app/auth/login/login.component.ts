import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent {
  isLoading = false;

  constructor(public authService: AuthService) {}

  onLogin(loginForm: NgForm){
   if (loginForm.invalid){
     return;
   }
   this.isLoading = true;
   this.authService.login(loginForm.value.email, loginForm.value.password);

  }
}
