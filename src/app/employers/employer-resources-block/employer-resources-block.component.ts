import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-employer-resources-block",
  templateUrl: "./employer-resources-block.component.html"
})
export class EmployerResourcesBlockComponent implements OnInit {
  @Input() employerResource: {
    id: number;
    title: string;
    description: string;
    url: string;
  };

  constructor() {}

  ngOnInit() {}
}
