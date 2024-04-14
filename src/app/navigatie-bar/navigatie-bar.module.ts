import { NgModule } from "@angular/core";
import { NavigatieBarComponent } from "./navigatie-bar.component";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
    declarations: [
      NavigatieBarComponent
    ],
    imports: [
      AppRoutingModule
    ],
    exports: [NavigatieBarComponent]
  })
  export class NavigatieBarModule { }