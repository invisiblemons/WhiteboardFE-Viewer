import { Component, OnInit, HostListener } from "@angular/core";
import { Router } from "@angular/router";
import PerfectScrollbar from "perfect-scrollbar";
import { ToastrService } from "ngx-toastr";

var misc: any = {
  sidebar_mini_active: true
};

@Component({
  selector: "app-auth-layout",
  templateUrl: "./auth-layout.component.html",
  styleUrls: ["./auth-layout.component.scss"]
})
export class AuthLayoutComponent implements OnInit {
  constructor(public router: Router, public toastr: ToastrService) {}
  @HostListener("window:scroll", ["$event"])
  showNavbarButton = () => {
    var mainPanel: any = document.getElementsByClassName("main-panel")[0];
    var navbarMinimize: any = document.getElementsByClassName(
      "navbar-minimize-fixed"
    )[0];

    if (
      document.documentElement.scrollTop > 50 ||
      document.scrollingElement.scrollTop > 50 ||
      mainPanel.scrollTop > 50
    ) {
      navbarMinimize.style.opacity = 1;
    } else if (
      document.documentElement.scrollTop <= 50 ||
      document.scrollingElement.scrollTop <= 50 ||
      mainPanel.scrollTop <= 50
    ) {
      navbarMinimize.style.opacity = 0;
    }
  };

  ngOnInit() {
    var mainPanel: any = document.getElementsByClassName("main-panel")[0];

    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      var ps = new PerfectScrollbar(mainPanel);
      var tables: any = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    this.showNavbarButton();
  }
}
