import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { University } from 'src/app/pages/dashboard/dashboard.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignUpDetailService {

  uniURL: string = environment.apiUrl + '/api/v1.0/universities';
  constructor(private httpClient: HttpClient) { }

  getUni(): Observable<University[]> {
    return this.httpClient.get<University[]>(`${this.uniURL}`);
  }
}
