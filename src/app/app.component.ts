import { Component } from "@angular/core";
import { SwUrlService } from "./samples/sw-url.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "rxjs-demo";

  constructor(private swUrlService: SwUrlService) {}

  toggleUrl() {
    this.swUrlService.toggleUrl();
  }
}
