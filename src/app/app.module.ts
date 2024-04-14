import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatieBarComponent } from './navigatie-bar/navigatie-bar.component';
import { NavigatieBarModule } from './navigatie-bar/navigatie-bar.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { WerksessiesComponent } from './werksessies/werksessies.component';
import { WerksessiesModule } from './werksessies/werksessie.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigatieBarModule,
    HomeModule,
    WerksessiesModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
