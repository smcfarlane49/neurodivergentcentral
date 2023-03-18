import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamiliesRoutingModule } from './families-routing.module';
import { FamiliesPageComponent } from './families-page/families-page.component';
import { FamilyResourcesBlockComponent } from './family-resources-block/family-resources-block.component';


@NgModule({
  declarations: [
    FamiliesPageComponent,
    FamilyResourcesBlockComponent
  ],
  imports: [
    CommonModule,
    FamiliesRoutingModule
  ]
})
export class FamiliesModule { }
