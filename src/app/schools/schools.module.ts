import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolsRoutingModule } from './schools-routing.module';
import { SchoolResourcesBlockComponent } from './school-resources-block/school-resources-block.component';
import { SchoolsPageComponent } from './schools-page/schools-page.component';


@NgModule({
  declarations: [
    SchoolResourcesBlockComponent,
    SchoolsPageComponent
  ],
  imports: [
    CommonModule,
    SchoolsRoutingModule
  ]
})
export class SchoolsModule { }
