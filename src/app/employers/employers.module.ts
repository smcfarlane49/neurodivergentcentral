import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EmployersRoutingModule } from "./employers-routing.module";
import { EmployersPageComponent } from "./employers-page/employers-page.component";
import { EmployerResourcesBlockComponent } from "./employer-resources-block/employer-resources-block.component";
import { EmployerDataBlockComponent } from './employer-data-block/employer-data-block.component';

@NgModule({
  declarations: [EmployersPageComponent, EmployerResourcesBlockComponent, EmployerDataBlockComponent],
  imports: [CommonModule, EmployersRoutingModule],
})
export class EmployersModule {}
