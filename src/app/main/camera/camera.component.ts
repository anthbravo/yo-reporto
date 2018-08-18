import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material";

import { DialogComponent } from "../dialog/dialog.component";

import { Report } from "../../shared/models/report";

import { ReportService } from "../../shared/services/report.service";
import { ReportSendComponent } from "../report-send/report-send.component";
import { AuthenticationService } from "../../shared/services/authentication.service";

@Component({
  selector: "a-camera",
  templateUrl: "./camera.component.html",
  styleUrls: ["./camera.component.scss"]
})
export class CameraComponent implements OnInit {
  @ViewChild("camara")
  camara: ElementRef;

  @ViewChild("canvas")
  canvas: ElementRef;

  context: any;

  report: Report = {
    typeReport: "",
    plate: ""
  };

  buttonCancel: HTMLElement;
  buttonSend: HTMLElement;
  buttonList: HTMLElement;
  buttonPhoto: HTMLElement;
  sizeWidthWindows: number;
  constructor(
    private router: Router,
    public dialog: MatDialog,
    private reportService: ReportService,
    private authenticationService: AuthenticationService
  ) {
    this.sizeWidthWindows = window.innerWidth;
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.buttonCancel = document.getElementById("btnCancel");
    this.buttonSend = document.getElementById("btnSend");
    this.buttonList = document.getElementById("btnList");
    this.buttonPhoto = document.getElementById("btnPhoto");
    this.context = this.canvas.nativeElement.getContext("2d");

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({
          audio: false,
          video: { facingMode: "user" }
        })
        .then(stream => {
          this.camara.nativeElement.src = window.URL.createObjectURL(stream);
          this.camara.nativeElement.play();
        });
    }

    this.resetValues();
  }

  goToReport() {
    console.log("goToReport");
    this.router.navigateByUrl("/reportes");
  }

  photo() {
    console.log(this.sizeWidthWindows);
    console.log("photo");
    this.buttonCancel.style.display = "block";
    this.buttonList.style.display = "block";
    this.buttonPhoto.style.display = "block";
    this.canvas.nativeElement.style.display = "block";
    this.canvas.nativeElement.setAttribute(
      "width",
      this.sizeWidthWindows.toString()
    );
    this.canvas.nativeElement.setAttribute(
      "height",
      (this.sizeWidthWindows * 1.5).toString()
    );
    this.context.drawImage(
      this.camara.nativeElement,
      0,
      0,
      this.sizeWidthWindows,
      this.sizeWidthWindows * 1.5
    );

    this.report.image = this.canvas.nativeElement.toDataURL("image/png");
    this.report.date = new Date();

    this.camara.nativeElement.style.display = "none";

    console.log("report", this.report);
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
      console.log("Cerrado de Dialog");
      this.report.plate = result.plate;
      this.report.typeReport = result.typeReport;

      if (
        !(
          this.report.typeReport == "" ||
          this.report.typeReport == undefined ||
          this.report.plate == "" ||
          this.report.plate == undefined
        )
      ) {
        this.buttonPhoto.style.display = "none";
        this.buttonSend.style.display = "flex";
      }
    });

    console.log("report", this.report);
  }

  send() {
    console.log("send");

    this.report.state = "pendiente";
    this.reportService.sendReport(this.report);

    console.log("report", this.report);

    this.resetValues();
  }

  resetValues() {
    console.log("resetValues");
    this.buttonCancel.style.display = "none";
    this.buttonSend.style.display = "none";
    this.buttonList.style.display = "none";

    this.canvas.nativeElement.style.display = "none";
    this.camara.nativeElement.style.display = "block";
    this.buttonPhoto.style.display = "block";

    this.report = {
      typeReport: "",
      plate: "",
      image: "",
      date: null
    };
  }
}
