import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { University } from 'src/app/pages/dashboard/dashboard.model';
import { LocalStorageService } from '../../local-storage.service';
import { user } from '../../user.model';
import { SignUpDetailService } from './sign-up-detail.service';

@Component({
  selector: 'app-sign-up-detail',
  templateUrl: './sign-up-detail.component.html',
  styleUrls: ['./sign-up-detail.component.scss']
})
export class SignUpDetailComponent implements OnInit {

  signUpDialog: boolean;
  user: user;
  userToken: string;
  universities: University[];

  constructor( private messageService: MessageService, private router: Router,
    private localStorageService: LocalStorageService,private  signUpDetailService: SignUpDetailService) { }

  ngOnInit(): void {
    this.signUpDialog = true;
    this.userToken = this.localStorageService.getUserToken();
    this.user = JSON.parse(this.userToken);

    this.signUpDetailService.getUni().subscribe((data) => {
      this.universities = data['universitys'];
    })
  }

  hideSignUpDialog() {
    this. signUpDialog = false;
  }

  saveSignUp() {
    this.messageService.add({
      severity: "success",
      summary: "Thành công!",
      detail: "Hoàn thành thông tin người dùng",
      life: 1000,
    });
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 2000);
  }
}
