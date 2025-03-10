import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { auth } from "firebase";
import * as firebase from "firebase/app";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  constructor(public angularFireAuth: AngularFireAuth) {}

  signInWithGoogle() {
    return this.angularFireAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }
}
