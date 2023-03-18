import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomePageComponent } from "./home-page/home-page.component";
import { QuotesBlockComponent } from './quotes-block/quotes-block.component';

@NgModule({
  declarations: [HomePageComponent, QuotesBlockComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
