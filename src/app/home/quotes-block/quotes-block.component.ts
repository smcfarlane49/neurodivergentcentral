import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quotes-block',
  templateUrl: './quotes-block.component.html',
  styleUrls: ['./quotes-block.component.css']
})
export class QuotesBlockComponent implements OnInit {
  @Input() quote: { id: number; name: string; quote: string; author: string; source: string; url: string; }

  constructor() {}

  ngOnInit() {}
}
