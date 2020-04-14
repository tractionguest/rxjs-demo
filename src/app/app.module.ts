import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";

import { MovieComponent } from "./samples/movies/movie.component";
import { SimpleFilmsComponent } from "./samples/simple-films/simple-films.component";
import { SimpleFilms2Component } from "./samples/simple-films2/simple-films2.component";
import { SimpleFilms3Component } from "./samples/simple-films3/simple-films3.component";
import { WikipediaComponent } from "./samples/wikipedia/wikipedia.component";

import { SimpleFilms4Component } from "./samples/simple-films4/simple-films4.component";

import { FilmService } from "./samples/movies/film.service";
import { InMemoryDataService } from "./samples/in-memory-data.service";
import { SwUrlService } from "./samples/sw-url.service";
import { SimpleFilmsService } from "./samples/simple-films/simple-films.service";
import { SimpleFilmsService2 } from "./samples/simple-films2/simple-films2.service";
import { SimpleFilmsService3 } from "./samples/simple-films3/simple-films3.service";
import { SimpleFilmsService4 } from "./samples/simple-films4/simple-films4.service";
import { WikipediaService } from "./samples/wikipedia.service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ErrorIsolationComponent } from "./samples/error-isolation/error-isolation.component";
import { LeakyComponent } from "./samples/leaky-component/leaky.component";
import { TimeService } from "./samples/time.service";
import { TakeUntilComponent } from "./samples/take-until/take-until.component";
import { MultiStreamService } from "./samples/multi-stream/multi-stream.service";
import { MultiStreamComponent } from "./samples/multi-stream/multi-stream.component";

@NgModule({
  declarations: [
    AppComponent,
    ErrorIsolationComponent,
    LeakyComponent,
    MovieComponent,
    MultiStreamComponent,
    SimpleFilmsComponent,
    SimpleFilms2Component,
    SimpleFilms3Component,
    SimpleFilms4Component,
    TakeUntilComponent,
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
    FilmService,
    MultiStreamService,
    SwUrlService,
    SimpleFilmsService,
    SimpleFilmsService2,
    SimpleFilmsService3,
    SimpleFilmsService4,
    TimeService,
    WikipediaService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
