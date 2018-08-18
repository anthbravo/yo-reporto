import { Injectable } from "@angular/core";

import {
  AngularFirestore,
  AngularFirestoreCollection
} from "angularfire2/firestore";

import { Observable } from "rxjs";

import { Report } from "../models/report";

@Injectable({
  providedIn: "root"
})
export class ReportService {
  private reportCollection: AngularFirestoreCollection<Report>;
  reports: Observable<Report[]>;

  constructor(private angularFireStore: AngularFirestore) {
    this.reportCollection = angularFireStore.collection<Report>(
      localStorage.getItem("uid")
    );
    this.reports = this.reportCollection.valueChanges();
  }

  sendReport(report: Report) {
    this.reportCollection.add(report);
  }
}
