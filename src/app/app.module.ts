import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';

import { DatabaseworkComponent } from './databaseTest/databasework/databasework.component';
import {DashboardComponent} from './Lakes/pages/dashboard/dashboard.component';
import {ProfileComponent} from './Lakes/pages/profile/profile.component';

import {BuoyDataService} from './Lakes/services/buoyData/buoyData.service';

@NgModule({
  declarations: [
    AppComponent,
    DatabaseworkComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
      BuoyDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
