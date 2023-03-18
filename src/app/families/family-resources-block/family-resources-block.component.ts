import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-family-resources-block',
  templateUrl: './family-resources-block.component.html',
  styleUrls: ['./family-resources-block.component.css']
})
export class FamilyResourcesBlockComponent  implements OnInit {
  @Input() familyResource: {
    id: number;
    title: string;
    description: string;
    url: string;
  };

  constructor() {}

  ngOnInit() {}
}
