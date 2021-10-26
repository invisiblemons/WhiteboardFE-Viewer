import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
@Component({
  selector: "app-sign-up",
  templateUrl: "sign-up.component.html",
  styleUrls: ["sign-up.component.scss"]
})
export class SignUpComponent implements OnInit{
  focus;
  focus1;


  constructor(private authService: AuthService) {}

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("login-page");
  }

  signUpGoogle() {
    this.authService.googleAuth();
  }


}
