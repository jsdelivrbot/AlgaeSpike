import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';

import { DatabaseworkComponent } from './databaseTest/databasework/databasework.component';
import {DashboardComponent} from './Lakes/pages/dashboard/dashboard.component';
import {ProfileComponent} from './Lakes/pages/profile/profile.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
