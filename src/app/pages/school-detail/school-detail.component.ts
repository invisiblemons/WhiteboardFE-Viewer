import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Campus, Review, University } from "../dashboard/dashboard.model";
import { SchoolDetailService } from "./school-detail.service";

@Component({
  selector: "app-school-detail",
  templateUrl: "./school-detail.component.html",
  styleUrls: ["./school-detail.component.scss"],
})
export class SchoolDetailComponent implements OnInit {
  isShowCampus: boolean;

  isShow: boolean;

  reviews: any;

  review: any;

  university: University;

  campusId: string;

  campus: Campus;

  constructor(
    private services: SchoolDetailService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isShowCampus = true;
    this.isShow = true;
    this.route.queryParams.subscribe((params) => {
      this.campusId = params["id"];
    });

    this.services.getCampusById(this.campusId).subscribe((res) => {
      this.campus = res;
      this.services.getUniversityById(this.campus.universityId).subscribe((uni: University) => {
        this.campus.university = uni;
        this.isShowCampus = false;
      });
      
    });

    // this.services.getCampusById(this.campusId).subscribe((res) => {
    //   this.campus = res;
    // });

    setTimeout(() => {
      //load school
      this.services.getPublishedReviews(this.campusId).subscribe((res) => {
        if(res)
        {
          this.reviews = res["reviews"];
        if(this.reviews)
        {
          this.reviews.forEach((review, index) => {
            this.reviews[index].length = this.reviews[index].pictures.length;
          });
        }
        }
        this.isShow = false;
      });
      
    }, 1000);
  }
}
