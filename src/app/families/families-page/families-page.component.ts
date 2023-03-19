import { Observable } from 'rxjs';
import { Component, OnInit } from "@angular/core";
import { ConfigService } from "../../shared/services/config.service";

@Component({
  selector: "app-families-page",
  templateUrl: "./families-page.component.html"
})
export class FamiliesPageComponent implements OnInit {
  // services: {
  //   id: number;
  //   name: string;
  //   tagline: string;
  //   title: string;
  //   description: string;
  // }[];
  families$: Observable<any> = new Observable();
  familyResources$: Observable<any> = new Observable();
  familiesNeurodivergences$: Observable<any> = new Observable();

  constructor(private config: ConfigService) {}

  ngOnInit() {
    this.getPageData("pages", 3);
    this.getBlockData("familyResources");
    this.getFamilyData("familiesNeurodivergences", 1);
  }

  getPageData(database: string, id?: number) {
    this.families$ = this.config.getSettings(database, id);
  }
  getBlockData(database: string) {
    // this.config.getSettings(database).subscribe((data) => {
    //   this.features = data;
    //   console.log("features: ", this.features);
    // });
    this.familyResources$ = this.config.getSettings(database);
  }

  getFamilyData(database: string, id?: number) {
    this.familiesNeurodivergences$ = this.config.getSettings(database, id);
  }
}
