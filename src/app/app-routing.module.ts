import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SimpleFilmsComponent } from "./samples/simple-films/simple-films.component";
import { SimpleFilms2Component } from "./samples/simple-films2/simple-films2.component";
import { SimpleFilms3Component } from "./samples/simple-films3/simple-films3.component";
import { SimpleFilms4Component } from "./samples/simple-films4/simple-films4.component";
import { WikipediaComponent } from "./samples/wikipedia/wikipedia.component";

const routes: Routes = [
  {
    path: "simple-films",
    component: SimpleFilmsComponent,
  },
  {
    path: "simple-films-2",
    component: SimpleFilms2Component,
  },
  {
    path: "simple-films-3",
    component: SimpleFilms3Component,
  },
  {
    path: "simple-films-4",
    component: SimpleFilms4Component,
  },
  {
    path: "wiki-search",
    component: WikipediaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
