import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./main/login/login.component";
import { CameraComponent } from "./main/camera/camera.component";
import { ReportsComponent } from "./main/reports/reports.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "camara",
    component: CameraComponent
  },
  {
    path: "reportes",
    component: ReportsComponent
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
