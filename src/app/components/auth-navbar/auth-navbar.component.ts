import { Component, OnInit, ElementRef, OnDestroy } from "@angular/core";
import { Location } from "@angular/common";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { LocalStorageService } from "../../pages/login/local-storage.service";
import { user } from "../../pages/login/user.model";

var misc: any = {
  sidebar_mini_active: true
};
@Component({
  selector: "app-auth-navbar",
  templateUrl: "./auth-navbar.component.html",
  styleUrls: ["./auth-navbar.component.scss"]
})
export class AuthNavbarComponent implements OnInit, OnDestroy {
  location: Location;

  private toggleButton: any;
  public isCollapsed = true;

  userToken: string;

  //information admin
  avatarUrl: string;
  name: string;

  isLogin: boolean;
  isSignUp: boolean;

  constructor(
    location: Location,
    private element: ElementRef,
    private router: Router,
    public toastr: ToastrService,
    private localStorageService: LocalStorageService
  ) {
    this.location = location;
  }
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  updateColor = () => {
    var navbar = document.getElementsByClassName("navbar")[0];
    if (window.innerWidth < 993 && !this.isCollapsed) {
      navbar.classList.add("bg-white");
      navbar.classList.remove("navbar-transparent");
    } else {
      navbar.classList.remove("bg-white");
      navbar.classList.add("navbar-transparent");
    }
  };

  ngOnInit() {

    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
   }
    if(this.router.url === '/auth/login') {
      this.isLogin  =true;
      this.isSignUp = false;
    } else if(this.router.url === '/auth/sign-up') {
      this.isLogin  =false;
      this.isSignUp = true;
    }

    this.userToken = this.localStorageService.getUserToken();
    let user: user = JSON.parse(this.userToken);
    if(user){
      this.avatarUrl = user.avatar;
      this.name = user.name;
    }
    window.addEventListener("resize", this.updateColor);
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName("navbar-toggler")[0];
  }
  ngOnDestroy() {
    window.removeEventListener("resize", this.updateColor);
  }
  signOut() {
    this.localStorageService.removeUser();
    this.router.navigate(['/auth']);
  }
}
