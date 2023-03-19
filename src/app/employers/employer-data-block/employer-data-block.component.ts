import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-employer-data-block',
  templateUrl: './employer-data-block.component.html'
})
export class EmployerDataBlockComponent implements OnInit {
  @Input() employersNeurodivergence: {
    id: number;
    title: string;
    numberlist1: string;
    numberlist2: string;
    numberlist3: string;
    numberlist4: string;
    numberlist5: string;
    conclusion: string;
  };

  constructor() {}

  ngOnInit() {}

}
