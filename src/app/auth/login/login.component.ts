import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit, OnDestroy{
  isLoading = false;

  private authStatusSub: Subscription;
  constructor(public authService: AuthService) {}

  ngOnInit(){
    this.authStatusSub = this.authService.getAuthStatusListener()
    .subscribe(authStatus => {
      this.isLoading = false;
    });
  }

  onLogin(loginForm: NgForm){
   if (loginForm.invalid){
     return;
   }
   this.isLoading = true;
   this.authService.login(loginForm.value.email, loginForm.value.password);

  }

  ngOnDestroy(){
    this.authStatusSub.unsubscribe();
  }
}
