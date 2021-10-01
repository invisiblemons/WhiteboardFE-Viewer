import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShellComponent } from './shared/shell/shell.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './auth.service';

const firebaseConfig = {
  apiKey: "AIzaSyAv6X14p4MsNYe77SOrsY8De1YSGr-66a0",
  authDomain: "whiteboardswd.firebaseapp.com",
  projectId: "whiteboardswd",
  storageBucket: "whiteboardswd.appspot.com",
  messagingSenderId: "546664115615",
  appId: "1:546664115615:web:931ee95b7bd3e7823da1aa",
  measurementId: "G-MD39G9K463"
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ShellComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
