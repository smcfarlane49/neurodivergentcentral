import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-school-resources-block',
  templateUrl: './school-resources-block.component.html'
})
export class SchoolResourcesBlockComponent implements OnInit {
  @Input() schoolResource: {
    id: number;
    title: string;
    description: string;
    url: string;
  };

  constructor() {}

  ngOnInit() {}
}
