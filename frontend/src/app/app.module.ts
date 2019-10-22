import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';
import { BackgroundComponent } from './components/background/background.component';

import {HttpClientModule} from '@angular/common/http'

import {AppRoutingModule,routingComponents} from './app-routing.module';
import { FacEduI03Component } from './components/educacion/fac-edu-i03/fac-edu-i03.component';
import { FacEduI04Component } from './components/educacion/fac-edu-i04/fac-edu-i04.component';
import { FacEduI05Component } from './components/educacion/fac-edu-i05/fac-edu-i05.component';
import { FacEduI06Component } from './components/educacion/fac-edu-i06/fac-edu-i06.component';
import { FacEduF01Component } from './components/educacion/fac-edu-f01/fac-edu-f01.component';
import { FacEduF02Component } from './components/educacion/fac-edu-f02/fac-edu-f02.component';
import { FacEduF03Component } from './components/educacion/fac-edu-f03/fac-edu-f03.component';
import { FacEduC01Component } from './components/educacion/fac-edu-c01/fac-edu-c01.component';
import { FacEduC02Component } from './components/educacion/fac-edu-c02/fac-edu-c02.component';
import { FacEduC021Component } from './components/educacion/fac-edu-c021/fac-edu-c021.component';
import { FacEduPb03Component } from './components/educacion/fac-edu-pb03/fac-edu-pb03.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    routingComponents,
    FacEduI03Component,
    FacEduI04Component,
    FacEduI05Component,
    FacEduI06Component,
    FacEduF01Component,
    FacEduF02Component,
    FacEduF03Component,
    FacEduC01Component,
    FacEduC02Component,
    FacEduC021Component,
    FacEduPb03Component
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
