import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Observable } from "rxjs";

import { Report } from "../../shared/models/report";

import { ReportService } from "../../shared/services/report.service";

@Component({
  selector: "a-reports",
  templateUrl: "./reports.component.html",
  styleUrls: ["./reports.component.scss"]
})
export class ReportsComponent implements OnInit {
  readonly DEFAULT_PICTURE =
    "https://img.peru21.pe/files/article_content_ec_fotos/uploads/2017/08/08/598982b36f8ef.jpeg";

  states: Array<String> = ["todos", "pendiente", "aceptado", "rechazado"];
  filterForState: string;
  reports: Observable<Report[]>;

  constructor(private router: Router, private reportService: ReportService) {}

  ngOnInit() {
    this.reports = this.reportService.listAllReports();
    this.filterForState = "todos";
  }

  goToCamera() {
    this.router.navigateByUrl("/camara");
  }

  filterState(event) {
    console.log("filterState", event.value);
    this.filterForState = event.value;
  }
}
