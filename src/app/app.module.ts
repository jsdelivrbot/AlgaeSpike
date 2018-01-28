import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DatabaseworkComponent } from './databaseTest/databasework/databasework.component';


@NgModule({
  declarations: [
    AppComponent,
    DatabaseworkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
