import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { AngularMaterialModule } from "../angular-material/angular-material.module";

@NgModule({
  imports: [CommonModule, AngularMaterialModule],
  exports: [HeaderComponent],
  declarations: [HeaderComponent]
})
export class LayoutModule {}
