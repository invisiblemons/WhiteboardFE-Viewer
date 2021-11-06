import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Campus, Review, University } from "../dashboard/dashboard.model";
import { Campaign } from "./school-detail.model";
import { SchoolDetailService } from "./school-detail.service";

@Component({
  selector: "app-school-detail",
  templateUrl: "./school-detail.component.html",
  styleUrls: ["./school-detail.component.scss"],
})
export class SchoolDetailComponent implements OnInit {
  isShowCampus: boolean;

  isShow: boolean;

  isShowCampaign: boolean;

  reviews: any;

  review: any;

  university: University;

  campusId: string;

  campus: Campus;

  responsiveOptions: any;

  onGoingCampaigns: Campaign[] = [];

  campaigns: Campaign[]  = [];

  currentDay: Date = new Date();

  statuses: any;

  constructor(
    private services: SchoolDetailService,
    private route: ActivatedRoute,
    private router: Router
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

  ngOnInit(): void {
    this.isShowCampus = true;
    this.isShow = true;
    this.isShowCampaign = true;

    this.statuses = [
      { label: "Chưa bắt đầu", value: "NotYet" },
      { label: "Đang diễn ra", value: "OnGoing" },
      { label: "Đã kết thúc", value: "Finished" },
      { label: "Đã khoá", value: "Locked" },
    ];

    this.route.queryParams.subscribe((params) => {
      this.campusId = params["id"];
    });

    this.services.getCampusById(this.campusId).subscribe((res) => {
      this.campus = res;
      this.services
        .getUniversityById(this.campus.universityId)
        .subscribe((uni: University) => {
          this.campus.university = uni;
          this.isShowCampus = false;
        });
    });

    

    setTimeout(() => {
      this.services.getCampaign(this.campusId).subscribe((res) => {
        this.campaigns = res["campaigns"];
        this.campaigns.forEach(campaign => {
          this.formatDataCampaign(campaign);
        });
        this.isShowCampaign = false;
      })
      //load school
      this.services.getPublishedReviews(this.campusId).subscribe((res) => {
        if (res) {
          this.reviews = res["reviews"];
          if (this.reviews) {
            this.reviews.forEach((review, index) => {
              this.reviews[index].length = this.reviews[index].pictures.length;
            });
          }
        }
        this.isShow = false;
        
      });
    }, 1000);
  }

  //method
  formatDataCampaign(campaign) {
    campaign.startDay = new Date(campaign.startDay);
    campaign.endDay = new Date(campaign.endDay);
    //get status
    if (this.currentDay < campaign.startDay) {
      campaign.status = this.statuses[0].value;
    } else if (
      this.currentDay > campaign.startDay &&
      this.currentDay < campaign.endDay
    ) {
      campaign.status = this.statuses[1].value;
    } else {
      campaign.status = this.statuses[2].value;
    }
  }

  onSelect(campaign) {
    this.router.navigate(["/detail-campaign"], {
      queryParams: { id: campaign.id },
    });
  }

  reload() {
    this.isShowCampaign = true;
    this.services.reload(this.campusId).subscribe((res) => {
      this.campaigns = res["campaigns"];
        this.campaigns.forEach(campaign => {
          this.formatDataCampaign(campaign);
        });
        this.isShowCampaign = false;
    });
  }
}
