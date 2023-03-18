import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-individual-resources-block",
  templateUrl: "./individual-resources-block.component.html"
})
export class IndividualResourcesBlockComponent implements OnInit {
  @Input() individualResource: {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    url: string;
  };

  constructor() {}

  ngOnInit() {}
}
