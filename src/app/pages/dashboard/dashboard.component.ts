import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MenuItem } from "primeng/api";
import { LocalStorageService } from "../login/local-storage.service";
import { user } from "../login/user.model";
import { Campus, Review, University } from "./dashboard.model";
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

  userModal: boolean;
  notifyModal: boolean;
  responsiveOptions: any;

  uniId: string;
  campuses: Campus[];

  resultReview: Review[] = [];

  constructor(
    private services: DashboardService,
    private localStorageService: LocalStorageService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.responsiveOptions = [
      {
        breakpoint: "1024px",
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: "768px",
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: "560px",
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
  ngOnInit() {
    this.userModal = false;
    this.notifyModal = false;
    this.showComment = false;
    this.showReply = false;
    this.showUser = false;
    this.showNotify = false;

    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return true;
    };

    this.userToken = this.localStorageService.getUserToken();
    let user: user = JSON.parse(this.userToken);
    if (user) {
      this.avatarUrl = user.avatar;
      this.userName = user.name;
    }
    this.isShow = true;

    

    //get publish reviews
    
    this.services.getPublishedReviews().subscribe((res) => {
      if (null !== res) {
        this.reviews = res["reviews"];
        this.reviews.forEach((review, index) => {
          this.reviews[index].length = this.reviews[index].pictures.length;
        });
        this.reviewsRoot = this.reviews;
        this.route.queryParams.subscribe((params) => {
          this.reviews = this.reviewsRoot;
          
          if (this.reviews && params["name"]) {
            
            this.reviews.forEach((review: Review) => {
              if (review.universityName === params["name"]) {
                this.resultReview.push(review);
              }
              
            });
            this.reviews = this.resultReview;
            console.log(this.resultReview);
            if(this.reviews) {
              this.router.routeReuseStrategy.shouldReuseRoute = function () {
                return false;
              };
            }
           
          }
        });
      }
    });


    this.services.getCampuses().subscribe((res) => {
      this.campuses = res;
      if (this.campuses) {
        this.campuses.forEach((campus: Campus, index) => {
          this.services
            .getUniversityById(campus.universityId)
            .subscribe((uni: University) => {
              campus.university = uni;
              if (this.campuses.length - 1 === index) {
                this.isShow = false;
              }
            });
        });
      }
    });

    if (this.userName) {
      this.items = [
        {
          label: "Trang chủ",
          command: (event) => this.router.navigate(["/"]),
          icon: "pi pi-home",
          styleClass: "active",
        },
        // {
        //   label: "Thông báo",
        //   icon: "pi pi-bell",
        //   command: (event) => this.showNotifyModal(),
        // },
        {
          label: "Trang cá nhân",
          icon: "pi pi-user",
          command: (event) => this.showUserModal(),
        },
      ];
    } else {
      this.items = [
        {
          label: "Trang chủ",
          icon: "pi pi-home",
          command: (event) => this.router.navigate(["/"]),
          styleClass: "active",
        },
      ];
    }

    
  }

  showNotifyModal() {
    this.notifyModal = true;
  }

  showUserModal() {
    this.userModal = true;
  }

  onSelectSchool(campus) {
    this.router.navigate(["/detail-school"], {
      queryParams: { id: campus.id },
    });
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
