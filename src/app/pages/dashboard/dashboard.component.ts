import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MenuItem } from "primeng/api";
import { LocalStorageService } from "../login/local-storage.service";
import { user } from "../login/user.model";
import { Review, University } from "./dashboard.model";
import { DashboardService } from "./dashboard.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html",
  styleUrls: ["dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  isShow: boolean;

  isShow1: boolean;

  imageUrl: string;

  bgUrl: string;

  reviews: Review[];

  reviewsRoot: Review[];

  reviewer: Review;

  universities: University[];

  university: University;

  items: MenuItem[];

  showComment: boolean;

  showUser: boolean;

  showNotify: boolean;

  showReply: boolean;

  //information user
  userToken: string;
  avatarUrl: string;
  userName: string;

  uniName: string;

  constructor(
    private services: DashboardService,
    private localStorageService: LocalStorageService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.showComment = false;
    this.showReply = false;
    this.showUser = false;
    this.showNotify = false;

    this.userToken = this.localStorageService.getUserToken();
    let user: user = JSON.parse(this.userToken);
    if (user) {
      this.avatarUrl = user.avatarURL;
      this.userName = user.name;
    }
    this.isShow = true;

    //get publish reviews
    this.services.getPublishedReviews().subscribe((res) => {
      if (null !== res) {
        this.reviews = res["reviews"];
        this.reviewsRoot = res["reviews"];
        this.isShow = false;
      }
    });

    this.route.queryParams.subscribe((params) => {
      this.reviews = this.reviewsRoot;
      this.reviews = this.reviews.filter(res => {
        !res.universityName.includes(params["name"]);
      })
    });

    this.services.getUniversities().subscribe((res) => {
      this.universities = res["universitys"];
    });

    this.items = [
      {
        label: "Trang chủ",
        icon: "pi pi-home",
        styleClass: "active",
      },
      {
        label: "Thông báo",
        icon: "pi pi-bell",
        command: (event) => this.showNotifySection(),
      },
      {
        label: "Trang cá nhân",
        icon: "pi pi-user",
        command: (event) => this.showUserSection(),
      },
    ];
  }

  showCommentSection() {
    if (!this.showComment) {
      this.showComment = true;
    } else {
      this.showComment = false;
    }
  }

  showReplyCommentSection() {
    if (!this.showReply) {
      this.showReply = true;
    } else {
      this.showReply = false;
    }
  }

  showUserSection() {
    if (!this.showUser) {
      this.showUser = true;
    } else {
      this.showUser = false;
    }
  }

  showNotifySection() {
    if (!this.showNotify) {
      this.showNotify = true;
    } else {
      this.showNotify = false;
    }
  }
}
