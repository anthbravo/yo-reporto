import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { LayoutModule } from "../layout/layout.module";
import { AngularMaterialModule } from "../angular-material/angular-material.module";

import { LoginComponent } from "./login/login.component";
import { ReportsComponent } from "./reports/reports.component";
import { CameraComponent } from "./camera/camera.component";

@NgModule({
  imports: [CommonModule, FormsModule, AngularMaterialModule, LayoutModule],
  declarations: [LoginComponent, ReportsComponent, CameraComponent]
})
export class MainModule {}
