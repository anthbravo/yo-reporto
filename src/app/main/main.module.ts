import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AngularMaterialModule } from "../angular-material/angular-material.module";

import { LoginComponent } from "./login/login.component";
import { ReportsComponent } from "./reports/reports.component";
import { CameraComponent } from "./camera/camera.component";
import { ReportSendComponent } from "./report-send/report-send.component";
import { DialogComponent } from "./dialog/dialog.component";

@NgModule({
  imports: [CommonModule, FormsModule, BrowserModule, AngularMaterialModule],
  declarations: [
    LoginComponent,
    ReportsComponent,
    CameraComponent,
    ReportSendComponent,
    DialogComponent
  ],
  entryComponents: [DialogComponent],
  exports: [LoginComponent, ReportsComponent, CameraComponent]
})
export class MainModule {}
