import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy{
  isLoading = false;
  private authStatusSub: Subscription;
  constructor(public authService: AuthService) {}

  ngOnInit(){
    this.authStatusSub = this.authService.getAuthStatusListener()
    .subscribe(authStatus => {
      this.isLoading = false;
    });
  }

  onSignup(loginForm: NgForm){
    if (loginForm.invalid){
      return;
    }
    this.isLoading = true;
    this.authService.createUser(loginForm.value.email, loginForm.value.password);
  }

  ngOnDestroy(){
    this.authStatusSub.unsubscribe();
  }

}
