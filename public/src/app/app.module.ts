import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//FOR SERVICE TO CLIENT
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
//FOR SERVICE TO CLIENT

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //add for client
    HttpClientModule
  ],
  providers: [/*add for service*/HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
