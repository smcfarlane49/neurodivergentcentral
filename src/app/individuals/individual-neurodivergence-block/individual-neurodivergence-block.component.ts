import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-individual-neurodivergence-block',
  templateUrl: './individual-neurodivergence-block.component.html'
})
export class IndividualNeurodivergenceBlockComponent implements OnInit {
  @Input() individualNeurodivergence: {
    id: number;
    title: string;
    description1: string;
    description2: string;
    description3: string;
    description4: string;
  };

  constructor() {}

  ngOnInit() {}

}


