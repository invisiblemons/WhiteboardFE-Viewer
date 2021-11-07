import { Component, OnInit, ElementRef, OnDestroy } from "@angular/core";
import { Location } from "@angular/common";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { LocalStorageService } from "../../pages/login/local-storage.service";
import { user } from "../../pages/login/user.model";
import { NavbarService } from "./navbar.service";
import { University } from "src/app/pages/dashboard/dashboard.model";
import { AutoComplete } from 'primeng/autocomplete';

var misc: any = {
  sidebar_mini_active: true
};
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit, OnDestroy {
  location: Location;

  private toggleButton: any;
  public isCollapsed = true;

  universities: University[];

  universitiesName: string[] = [];

  searchResult: string[] = [];

  university: University;

  userToken: string;

  selectedUni: string;

  //information admin
  avatarUrl: string;
  name: string;

  constructor(
    location: Location,
    private element: ElementRef,
    private router: Router,
    public toastr: ToastrService,
    private localStorageService: LocalStorageService,
    private navbarService: NavbarService
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
    // this.userToken = this.localStorageService.getUserToken();
    // let user: user = JSON.parse(this.userToken);
    // if(user){
    //   this.avatarUrl = user.avatar;
    //   this.name = user.name;
    // }
    window.addEventListener("resize", this.updateColor);
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName("navbar-toggler")[0];

    //get uni
    this.navbarService.getUni().subscribe((data) => {
      this.universities = data['universitys'];
      this.universities.forEach(uni => {
        this.universitiesName.push(uni.name);
      });
    })
  }

  
  ngOnDestroy() {
    window.removeEventListener("resize", this.updateColor);
  }
  signOut() {
    this.localStorageService.removeUser();
    this.router.navigate(['/auth']);
  }

  onSelect($event) {
      this.router.navigate(['/'], { queryParams: { name: $event} });
  }


  search($event) {
    this.searchResult = [];
    this.universitiesName.forEach(name => {
      if(name.toLocaleLowerCase().includes($event.query.toLocaleLowerCase())) {
         this.searchResult.push(name);
      }
    });
}
}
