import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ConfigService } from "src/app/shared/services/config.service";

@Component({
  selector: "app-employers-page",
  templateUrl: "./employers-page.component.html"
})
export class EmployersPageComponent implements OnInit {
  // clients: {
  //   id: number;
  //   name: string;
  //   tagline: string;
  //   title: string;
  //   description: string;
  // }[];
  employers$: Observable<any> = new Observable();

  // companies: { id: number; name: string; weblink: string; logo: string }[];
  employerResources$: Observable<any> = new Observable();
  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.getPageData("pages", 5);
    this.getBlockData("employerResources");
  }

  getPageData(database: string, id?: number) {
    this.employers$ = this.config.getSettings(database, id);
  }

  getBlockData(database: string) {
    this.employerResources$ = this.config.getSettings(database);
  }
}
