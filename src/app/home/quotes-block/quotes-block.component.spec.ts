import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesBlockComponent } from './quotes-block.component';

describe('QuotesBlockComponent', () => {
  let component: QuotesBlockComponent;
  let fixture: ComponentFixture<QuotesBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuotesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
