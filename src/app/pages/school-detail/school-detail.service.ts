import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Campus, Review, University } from '../dashboard/dashboard.model';
import { Campaign } from './school-detail.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolDetailService {

  baseURL: string = environment.apiUrl + '/api/v1.0/universities';
  campusURL: string = environment.apiUrl + '/api/v1.0/campuses';
  reviewURL: string = environment.apiUrl + '/api/v1.0/reviews';
  campaignURL: string = environment.apiUrl + '/api/v1.0/campaigns';
  constructor(private httpClient: HttpClient) { }

  getPublishedReviews(id): Observable<Review[]> {
    return this.httpClient.get<Review[]>(`${this.reviewURL}?status=published&campusid=${id}`);
  }

  getUniversityById(id): Observable<University> {
    return this.httpClient.get<University>(`${this.baseURL}/${id}`);
  }
  getCampusById(id): Observable<Campus> {
    return this.httpClient.get<Campus>(`${this.campusURL}/${id}`);
  }

  getCampaign(campusId): Observable<Campaign> {
    return this.httpClient.get<Campaign>(`${this.campaignURL}?campusid=${campusId}`);
  }

  reload(campusId): Observable<Campaign> {
    return this.httpClient.get<Campaign>(`${this.campaignURL}?campusid=${campusId}&reloadredis=true`); 
  }
}
