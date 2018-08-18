import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Report } from "../../shared/models/report";

@Component({
  selector: "a-reports",
  templateUrl: "./reports.component.html",
  styleUrls: ["./reports.component.scss"]
})
export class ReportsComponent implements OnInit {
  readonly DEFAULT_PICTURE =
    "https://img.peru21.pe/files/article_content_ec_fotos/uploads/2017/08/08/598982b36f8ef.jpeg";

  states: Array<String> = ["pendiente", "aceptado", "rechazado"];
  reports: Array<Report> = [
    {
      typeReport: "obstruccion-peatonal",
      state: "pendiente",
      plate: "ABCDEFG232323",
      date: new Date()
    },
    {
      typeReport: "estacionamiento-prohibido",
      state: "aceptado",
      plate: "ABCDEFG232323",
      date: new Date()
    },
    {
      typeReport: "obstruccion-peatonal",
      state: "rechazado",
      plate: "ABCDEFG23232",
      date: new Date()
    },
    {
      typeReport: "estacionamiento-prohibido",
      state: "rechazado",
      plate: "ABCDEFG56565",
      date: new Date()
    },
    {
      typeReport: "obstruccion-peatonal",
      state: "aceptado",
      plate: "ABCDEFG333333",
      date: new Date()
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  goToCamera() {
    this.router.navigateByUrl("/camara");
  }

  filterState(event) {
    console.log("filterState", event.value);
  }
}
