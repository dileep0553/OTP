import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavheaderComponent } from './header/navheader/navheader.component';
import { RouteModule } from './/route.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms'
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
    NavheaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouteModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
