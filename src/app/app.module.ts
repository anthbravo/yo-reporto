import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";


import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireStorageModule } from "angularfire2/storage";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";

import { environment } from "../environments/environment";

import { AppRoutingModule } from "./app-routing.module";
import { MainModule } from "./main/main.module";

import { AppComponent } from "./app.component";

import { AuthenticationService } from "./shared/services/authentication.service";
import { ReportService } from "./shared/services/report.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    BrowserModule,
    AppRoutingModule,
    MainModule
  ],
  providers: [AuthenticationService, ReportService],
  bootstrap: [AppComponent]
})
export class AppModule {}
