import { Observable } from 'rxjs';
import { Component, OnInit } from "@angular/core";
import { ConfigService } from "src/app/shared/services/config.service";

@Component({
  selector: "app-individuals-page",
  templateUrl: "./individuals-page.component.html"
})
export class IndividualsPageComponent implements OnInit {
  individuals$: Observable<any> = new Observable();

  individualNeurodivergences$: Observable<any> = new Observable()
  individualResources$: Observable<any> = new Observable();

  constructor(private config: ConfigService) {}

  ngOnInit(): void {
    this.getPageData("pages", 2);
    this.getNeurodivergence("individualNeurodivergences")
    this.getBlockData("individualResources");
  }

  getPageData(database: string, id?: number): void {
    this.individuals$ = this.config.getSettings(database, id);
  }

  getNeurodivergence(database: string) {
    this.individualNeurodivergences$ = this.config.getSettings(database);
  }

  getBlockData(database: string) {
    this.individualResources$ = this.config.getSettings(database);
  }
}
