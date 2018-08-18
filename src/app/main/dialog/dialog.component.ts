import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

import { Report } from "../../shared/models/report";

@Component({
  selector: "a-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"]
})
export class DialogComponent {
  reports: Array<Report> = [
    {
      typeReport: "estacionamiento-prohibido",
      name: "Estacionamiento en Zona Prohibida"
    },
    {
      typeReport: "obstruccion-peatonal",
      name: "Obstrucción Pase Peatonal"
    }
  ];

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Report
  ) {}
}
