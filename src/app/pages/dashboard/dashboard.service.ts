import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Campus, Review, University } from './dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  baseURL: string = environment.apiUrl + '/api/v1.0/reviews';
  campusURL: string = environment.apiUrl + '/api/v1.0/campuses';
  uniURL: string = environment.apiUrl + '/api/v1.0/universities';
  constructor(private httpClient: HttpClient) { }

  getPublishedReviews(): Observable<Review[]> {
    return this.httpClient.get<Review[]>(`${this.baseURL}?sortby=date&order=des&status=Published`);
  }

  getCampuses(): Observable<Campus[]> {
    return this.httpClient.get<Campus[]>(`${this.campusURL}`);
  }

  getUniversityById(id): Observable<University> {
    return this.httpClient.get<University>(`${this.uniURL}/${id}`);
  }
}
