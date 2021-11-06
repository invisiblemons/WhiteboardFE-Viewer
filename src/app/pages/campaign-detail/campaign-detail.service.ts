import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Review } from '../dashboard/dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class CampaignDetailService {

  baseURL: string = environment.apiUrl + '/api/v1.0/reviews';
  constructor(private httpClient: HttpClient) { }

  getReviews(campaignId) {
    return this.httpClient.get<Review[]>(`${this.baseURL}?status=published&campaignid=${campaignId}`);
  }
}
