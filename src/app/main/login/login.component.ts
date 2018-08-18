import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AuthenticationService } from "../../shared/services/authentication.service";

@Component({
  selector: "a-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {}

  loginWithGoole(): void {
    console.log("Logueo");
    this.authenticationService
      .signInWithGoogle()
      .then(res => {
        console.log("Logueo Correcto");
        this.router.navigateByUrl("/camara");
      })
      .catch(error => {
        // var errorCode = error.code;
        console.log(error.message);
      });
  }
}
