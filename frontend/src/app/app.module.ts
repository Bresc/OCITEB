import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';
import { BackgroundComponent } from './components/background/background.component';

import {HttpClientModule} from '@angular/common/http'

import {AppRoutingModule,routingComponents} from './app-routing.module';
import { FacCienC01Component } from './components/ciencias/fac-cien-c01/fac-cien-c01.component';
import { FacCienC02Component } from './components/ciencias/fac-cien-c02/fac-cien-c02.component';
import { FacCienC0201Component } from './components/ciencias/fac-cien-c0201/fac-cien-c0201.component';
import { FacCienF01Component } from './components/ciencias/fac-cien-f01/fac-cien-f01.component';
import { FacCienF02Component } from './components/ciencias/fac-cien-f02/fac-cien-f02.component';
import { FacCienF03Component } from './components/ciencias/fac-cien-f03/fac-cien-f03.component';
import { FacCienI02Component } from './components/ciencias/fac-cien-i02/fac-cien-i02.component';
import { FacCienI03Component } from './components/ciencias/fac-cien-i03/fac-cien-i03.component';
import { FacCienI04Component } from './components/ciencias/fac-cien-i04/fac-cien-i04.component';
import { FacCienI05Component } from './components/ciencias/fac-cien-i05/fac-cien-i05.component';
import { FacCienI06Component } from './components/ciencias/fac-cien-i06/fac-cien-i06.component';
import { FacCienPb03Component } from './components/ciencias/fac-cien-pb03/fac-cien-pb03.component';
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
    FacCienC01Component,
    FacCienC02Component,
    FacCienC0201Component,
    FacCienF01Component,
    FacCienF02Component,
    FacCienF03Component,
    FacCienI02Component,
    FacCienI03Component,
    FacCienI04Component,
    FacCienI05Component,
    FacCienI06Component,
    FacCienPb03Component,
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
