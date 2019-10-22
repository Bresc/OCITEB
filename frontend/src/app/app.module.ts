import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';
import { BackgroundComponent } from './components/background/background.component';

import {HttpClientModule} from '@angular/common/http'

import {AppRoutingModule,routingComponents} from './app-routing.module';
import { FacAgroC021Component } from './components/agropecuarias/fac-agro-c021/fac-agro-c021.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    routingComponents,
    FacAgroC021Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
