import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';
import { BackgroundComponent } from './components/background/background.component';

import {HttpClientModule} from '@angular/common/http'

import {AppRoutingModule,routingComponents} from './app-routing.module';
import { FacAgroC021Component } from './components/agropecuarias/fac-agro-c021/fac-agro-c021.component';
import { FacAgroPb03Component } from './components/agropecuarias/fac-agro-pb03/fac-agro-pb03.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    routingComponents,
    FacAgroC021Component,
    FacAgroPb03Component
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
