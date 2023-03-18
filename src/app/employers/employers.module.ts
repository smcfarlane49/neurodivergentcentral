import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EmployersRoutingModule } from "./employers-routing.module";
import { EmployersPageComponent } from "./employers-page/employers-page.component";
import { EmployerResourcesBlockComponent } from "./employer-resources-block/employer-resources-block.component";

@NgModule({
  declarations: [EmployersPageComponent, EmployerResourcesBlockComponent],
  imports: [CommonModule, EmployersRoutingModule],
})
export class EmployersModule {}
