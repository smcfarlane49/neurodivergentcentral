import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyResourcesBlockComponent } from './family-resources-block.component';

describe('FamilyResourcesBlockComponent', () => {
  let component: FamilyResourcesBlockComponent;
  let fixture: ComponentFixture<FamilyResourcesBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyResourcesBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyResourcesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
