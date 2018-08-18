import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
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

  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.buttonCancel = document.getElementById("btnCancel");
    this.buttonSend = document.getElementById("btnSend");
    this.buttonList = document.getElementById("btnList");
    this.buttonPhoto = document.getElementById("btnPhoto");
    this.context = this.canvas.nativeElement.getContext("2d");

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ audio: false, video: { facingMode: "user" } })
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
    console.log("photo");
    this.buttonCancel.style.display = "block";
    this.buttonList.style.display = "block";
    this.buttonPhoto.style.display = "block";
    this.canvas.nativeElement.style.display = "block";

    this.context.drawImage(this.camara.nativeElement, 0, 0, 640, 480);

    this.report.image = this.canvas.nativeElement.toDataURL("image/png");
    this.report.date = new Date();

    this.camara.nativeElement.style.display = "none";

    console.log("date", this.report.date);

    // this.imgStorage.insertProduct(nuevaImg);
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
