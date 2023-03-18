import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployersPageComponent } from "./employers-page/employers-page.component";

const routes: Routes = [
  {
    path: "",
    component: EmployersPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployersRoutingModule {}
