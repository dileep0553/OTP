import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavheaderComponent } from './header/navheader/navheader.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path:'otp',component:NavheaderComponent,children:[
          {path:'home',component:HomeComponent},
          {path:'',redirectTo:'home',pathMatch:"full"}
      ]},
      {path:'',redirectTo:'otp',pathMatch:"full"}
    ])
  ],
  exports:[RouterModule]
})
export class RouteModule { }
