import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndividualsRoutingModule } from './individuals-routing.module';
import { IndividualsPageComponent } from './individuals-page/individuals-page.component';
import { IndividualResourcesBlockComponent } from './individual-resources-block/individual-resources-block.component';
import { IndividualNeurodivergenceBlockComponent } from './individual-neurodivergence-block/individual-neurodivergence-block.component';


@NgModule({
  declarations: [
    IndividualsPageComponent,
    IndividualResourcesBlockComponent,
    IndividualNeurodivergenceBlockComponent
  ],
  imports: [
    CommonModule,
    IndividualsRoutingModule
  ]
})
export class IndividualsModule { }
