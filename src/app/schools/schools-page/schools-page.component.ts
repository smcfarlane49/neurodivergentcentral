import { Observable } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../../shared/services/config.service";

@Component({
  selector: "app-schools-page",
  templateUrl: "./schools-page.component.html"
})
export class SchoolsPageComponent implements OnInit {
  // testimonials: {
  //   id: number;
  //   name: string;
  //   tagline: string;
  //   title: string;
  //   description: string;
  // }[];

  // feedback: {
  //   id: number;
  //   name: string;
  //   userimage: string;
  //   comments: string;
  //   company: string;
  // }[];
  schools$: Observable<any> = new Observable();
  schoolResources$: Observable<any> = new Observable();

  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.getPageData("pages", 4);
    this.getBlockData("schoolResources");
  }

  getPageData(database: string, id?: number) {
    this.schools$ = this.config.getSettings(database, id);
  }

  getBlockData(database: string) {
    this.schoolResources$ = this.config.getSettings(database);
  }
}
