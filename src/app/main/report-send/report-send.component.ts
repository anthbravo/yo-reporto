import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "a-report-send",
  templateUrl: "./report-send.component.html",
  styleUrls: ["./report-send.component.scss"]
})
export class ReportSendComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToCamera() {
    this.router.navigateByUrl("/camara");
  }
}
