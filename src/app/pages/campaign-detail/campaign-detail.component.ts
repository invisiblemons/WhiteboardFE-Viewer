import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from '../dashboard/dashboard.model';
import { CampaignDetailService } from './campaign-detail.service';

@Component({
  selector: 'app-campaign-detail',
  templateUrl: './campaign-detail.component.html',
  styleUrls: ['./campaign-detail.component.scss']
})
export class CampaignDetailComponent implements OnInit {

  isShow: boolean;

  campaignId: string;

  reviews: Review[];

  constructor(private router: Router, private route: ActivatedRoute, private services: CampaignDetailService) { }

  ngOnInit(): void {
    this.isShow = true;
    this.route.queryParams.subscribe((params) => {
      this.campaignId = params["id"];
      this.services.getReviews(this.campaignId).subscribe((res) => {
        if(res) {
          this.reviews = res["reviews"];
        }
        this.isShow = false;
      })
    });
  }

}
