import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { ReactiveFormsModule } from "@angular/forms";

// Components
import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer/footer.component";
import { NavmenuComponent } from "./navmenu/navmenu.component";
import { NavigationComponent } from './navigation/navigation.component';
import { WebsiteBlockComponent } from "./website-block/website-block.component";

// Modules
import { AppRoutingModule } from "./app-routing.module";
import { IndividualsModule } from "./individuals/individuals.module";
import { EmployersModule } from "./employers/employers.module";
import { HomeModule } from "./home/home.module";
import { NotfoundModule } from "./notfound/notfound.module";
import { FamiliesModule } from "./families/families.module";
import { SchoolsModule } from "./schools/schools.module";

// Services
import { ConfigService } from "./shared/services/config.service";
import { InMemoryDataService } from "./shared/services/in-memory-data.service";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    NavmenuComponent,
    WebsiteBlockComponent,
  ],
  imports: [
    IndividualsModule,
    AppRoutingModule,
    BrowserModule,
    EmployersModule,
    HomeModule,
    HttpClientModule,
    NotfoundModule,
    ReactiveFormsModule,
    FamiliesModule,
    SchoolsModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      passThruUnknownUrl: true,
    }),
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent],
})
export class AppModule {}
