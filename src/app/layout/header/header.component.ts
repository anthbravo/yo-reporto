import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "a-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  navigate = 0;
  constructor(private router: Router) {}

  ngOnInit() {}

  goToReport() {
    if (this.navigate == 0) {
      this.router.navigateByUrl("/reportes");
      this.navigate = 1;
    } else if (this.navigate == 1) {
      this.router.navigateByUrl("/camara");
      this.navigate = 0;
    }
  }
}
