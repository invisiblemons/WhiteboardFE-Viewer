import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ModalModule } from "ngx-bootstrap/modal";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DxVectorMapModule } from "devextreme-angular";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { AuthNavbarComponent } from "./auth-navbar/auth-navbar.component";

import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { CalendarModule } from "primeng/calendar";
import { SliderModule } from "primeng/slider";
import { MultiSelectModule } from "primeng/multiselect";
import { ContextMenuModule } from "primeng/contextmenu";
import { DialogModule } from "primeng/dialog";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { ProgressBarModule } from "primeng/progressbar";
import { InputTextModule } from "primeng/inputtext";
import { FileUploadModule } from "primeng/fileupload";
import { ToolbarModule } from "primeng/toolbar";
import { RatingModule } from "primeng/rating";
import { RadioButtonModule } from "primeng/radiobutton";
import { InputNumberModule } from "primeng/inputnumber";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { InputTextareaModule } from "primeng/inputtextarea";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { ChartModule } from "primeng/chart";
import { BadgeModule } from "primeng/badge";
import {CarouselModule} from 'primeng/carousel';
import {SkeletonModule} from 'primeng/skeleton';
import { ChipModule } from 'primeng/chip';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {FieldsetModule} from 'primeng/fieldset';
import { CardComponent } from "./card/card.component";
import {TreeModule} from 'primeng/tree';
import {MenuModule} from 'primeng/menu';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {TabViewModule} from 'primeng/tabview';
import {StyleClassModule} from 'primeng/styleclass';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    JwBootstrapSwitchNg2Module,
    DxVectorMapModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule,
    TableModule,
    ToastModule,
    CalendarModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    DialogModule,
    ButtonModule,
    ProgressBarModule,
    DropdownModule,
    InputTextModule,
    RatingModule,
    FileUploadModule,
    ToolbarModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    ProgressSpinnerModule,
    ChartModule,
    BadgeModule,
    CarouselModule,
    SkeletonModule,
    ChipModule,
    ConfirmPopupModule,
    FieldsetModule,
    TreeModule,
    MenuModule,
    AvatarModule,
    AvatarGroupModule,
    TabViewModule,
    StyleClassModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    AuthNavbarComponent,
    CardComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    AuthNavbarComponent,
    CardComponent,
    FormsModule,
    NgbModule,
    TableModule,
    ToastModule,
    CalendarModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    DialogModule,
    ButtonModule,
    ProgressBarModule,
    DropdownModule,
    InputTextModule,
    RatingModule,
    FileUploadModule,
    ToolbarModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    ProgressSpinnerModule,
    ChartModule,
    BadgeModule,
    CarouselModule,
    SkeletonModule,
    ChipModule,
    ConfirmPopupModule,
    FieldsetModule,
    TreeModule,
    MenuModule,
    AvatarModule,
    AvatarGroupModule,
    TabViewModule,
    StyleClassModule
  ],
})
export class ComponentsModule {}
