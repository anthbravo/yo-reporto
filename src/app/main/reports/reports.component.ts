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
  public closeIcon;
  constructor(private router: Router, private reportService: ReportService) {}

  ngOnInit() {
    this.reports = this.reportService.listAllReports();
    this.filterForState = "todos";

  }

  modalScreen(q){
      
      var img  =  document.createElement('img');  
      var modal = document.createElement("div");
      modal.setAttribute("id","modal");
      modal.style.background="rgba(23,23,23,.8)";
      modal.style.position="absolute";
      modal.style.top="0";
      modal.style.left="0";
      modal.style.display="flex";
      modal.style.justifyContent="center";
      modal.style.alignItems="center";
      modal.style.zIndex="1";
      modal.style.width="100%";
      modal.style.height="100vh";

      img.setAttribute("class","img-c");
      img.setAttribute("src",q);
      document.getElementsByTagName("body")[0].appendChild(modal);
      modal.appendChild(img);
      img.style.width="150px";
      img.style.height="150px";

    }

  goToCamera() {
    this.router.navigateByUrl("/camara");
  }

  filterState(event) {
    console.log("filterState", event.value);
    this.filterForState = event.value;
  }
  show(report){
    this.modalScreen(report.image);

   document.getElementById('modal').addEventListener('click', e=>{
      document.getElementById('modal').remove();
    })
    }

}
