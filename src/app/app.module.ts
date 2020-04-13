import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";

import { SimpleFilmsComponent } from "./samples/simple-films/simple-films.component";
import { SimpleFilms2Component } from "./samples/simple-films2/simple-films2.component";
import { SimpleFilms3Component } from "./samples/simple-films3/simple-films3.component";
import { WikipediaComponent } from "./samples/wikipedia/wikipedia.component";

import { SimpleFilms4Component } from "./samples/simple-films4/simple-films4.component";

import { InMemoryDataService } from "./samples/in-memory-data.service";
import { SwUrlService } from "./samples/sw-url.service";
import { SimpleFilmsService } from "./samples/simple-films/simple-films.service";
import { SimpleFilmsService2 } from "./samples/simple-films2/simple-films2.service";
import { SimpleFilmsService3 } from "./samples/simple-films3/simple-films3.service";
import { SimpleFilmsService4 } from "./samples/simple-films4/simple-films4.service";
import { WikipediaService } from "./samples/wikipedia.service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [
    AppComponent,
    SimpleFilmsComponent,
    SimpleFilms2Component,
    SimpleFilms3Component,
    SimpleFilms4Component,
    WikipediaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    RouterModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      passThruUnknownUrl: true,
    }),
    ReactiveFormsModule,
  ],
  providers: [
    SwUrlService,
    SimpleFilmsService,
    SimpleFilmsService2,
    SimpleFilmsService3,
    SimpleFilmsService4,
    WikipediaService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
