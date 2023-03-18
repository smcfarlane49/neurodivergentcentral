import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((mod) => mod.HomeModule),
  },
  {
    path: "individuals",
    loadChildren: () =>
      import("./individuals/individuals.module").then((mod) => mod.IndividualsModule),
  },
  {
    path: "families",
    loadChildren: () =>
      import("./families/families.module").then((mod) => mod.FamiliesModule),
  },
  {
    path: "schools",
    loadChildren: () =>
      import("./schools/schools.module").then(
        (mod) => mod.SchoolsModule
      ),
  },
  {
    path: "employers",
    loadChildren: () =>
      import("./employers/employers.module").then((mod) => mod.EmployersModule),
  },
  {
    path: "404",
    loadChildren: () =>
      import("./notfound/notfound.module").then((mod) => mod.NotfoundModule),
  },
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
