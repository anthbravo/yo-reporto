import { Component, OnInit, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material";

import { DialogComponent } from "../dialog/dialog.component";

import { Report } from "../../shared/models/report";

@Component({
  selector: "a-camera",
  templateUrl: "./camera.component.html",
  styleUrls: ["./camera.component.scss"]
})
export class CameraComponent implements OnInit {
  report: Report = {
    typeReport: "",
    plate: ""
  };

  buttonCancel: HTMLElement;
  buttonSend: HTMLElement;
  buttonList: HTMLElement;
  buttonPhoto: HTMLElement;

  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit() {
    this.buttonCancel = document.getElementById("idCancel");
    this.buttonSend = document.getElementById("idSend");
    this.buttonList = document.getElementById("idList");
    this.buttonPhoto = document.getElementById("idPhoto");

    this.resetValues();
  }

  goToReport() {
    console.log("goToReport");
    this.router.navigateByUrl("/reportes");
  }

  photo() {
    console.log("photo");
    this.buttonCancel.style.display = "block";
    this.buttonList.style.display = "block";
    this.buttonPhoto.style.display = "block";
  }

  cancel() {
    console.log("cancel");
    this.resetValues();
  }

  list() {
    console.log("list");
    const dialogRef = this.dialog.open(DialogComponent, {
      width: "80%",
      height: "80%",
      data: { typeReport: this.report.typeReport }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      this.report = result;
      console.log("this.report.plate : " + this.report.plate);
      if (
        !(
          this.report.typeReport == "" ||
          this.report.typeReport == undefined ||
          this.report.plate == "" ||
          this.report.plate == undefined
        )
      ) {
        this.buttonPhoto.style.display = "none";
        this.buttonSend.style.display = "block";
      }
    });
  }

  send() {
    console.log("send");
  }

  resetValues() {
    console.log("resetValues");
    this.buttonCancel.style.display = "none";
    this.buttonSend.style.display = "none";
    this.buttonList.style.display = "none";

    this.buttonPhoto.style.display = "block";

    this.report = {
      typeReport: "",
      plate: ""
    };
  }
}
