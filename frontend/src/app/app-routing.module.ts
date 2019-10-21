import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AgropecuariasComponent } from './components/agropecuarias/agropecuarias.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { EconomicasComponent } from './components/economicas/economicas.component';
import { CienciasComponent } from './components/ciencias/ciencias.component';
import { DerechoComponent } from './components/derecho/derecho.component';
import { DistanciaComponent } from './components/distancia/distancia.component';
import { ChiquinquiraComponent } from './components/chiquinquira/chiquinquira.component';
import { DuitamaComponent } from './components/duitama/duitama.component';
import { SogamosoComponent } from './components/sogamoso/sogamoso.component';
import { FacDisI02Component } from './components/distancia/fac-dis-i02/fac-dis-i02.component';
import { FacDisI03Component } from './components/distancia/fac-dis-i03/fac-dis-i03.component';
import { FacDisI04Component } from './components/distancia/fac-dis-i04/fac-dis-i04.component';
import { FacDisI05Component } from './components/distancia/fac-dis-i05/fac-dis-i05.component';
import { FacDisI06Component } from './components/distancia/fac-dis-i06/fac-dis-i06.component';
import { FacDisF01Component } from './components/distancia/fac-dis-f01/fac-dis-f01.component';
import { FacDisF02Component } from './components/distancia/fac-dis-f02/fac-dis-f02.component';
import { FacDisF03Component } from './components/distancia/fac-dis-f03/fac-dis-f03.component';
import { FacDisC01Component } from './components/distancia/fac-dis-c01/fac-dis-c01.component';
import { FacDisC02Component } from './components/distancia/fac-dis-c02/fac-dis-c02.component';
import { FacDisC021Component } from './components/distancia/fac-dis-c021/fac-dis-c021.component';
import { FacDisPb03Component } from './components/distancia/fac-dis-pb03/fac-dis-pb03.component';
import { FacAgroI02Component } from './components/agropecuarias/fac-agro-i02/fac-agro-i02.component';

const routes: Routes = [
    {path: '', redirectTo: '/home',pathMatch: 'full'},
    {path: 'home', component: CarouselComponent},
    {path: 'agropecuarias', component: AgropecuariasComponent},
    {path: 'agro_i02', component: FacAgroI02Component},
    {path: 'educacion', component: EducacionComponent},
    {path: 'economicas', component: EconomicasComponent},
    {path: 'ciencias', component: CienciasComponent},
    {path: 'derecho', component: DerechoComponent},
    {path: 'distancia', component: DistanciaComponent},
    {path: 'dis_i02', component:FacDisI02Component},{path: 'dis_i03', component:FacDisI03Component},
    {path: 'dis_i04', component:FacDisI04Component},{path: 'dis_i05', component:FacDisI05Component},
    {path: 'chiquinquira', component: ChiquinquiraComponent},{path: 'dis_i06', component:FacDisI06Component},
    {path: 'dis_f01', component: FacDisF01Component},{path: 'dis_f02', component: FacDisF02Component},
    {path: 'duitama', component: DuitamaComponent},{path:'dis_f03', component:FacDisF03Component},
    {path: 'dis_c01', component: FacDisC01Component},{path:'dis_c02', component: FacDisC02Component},
    {path: 'dis_c021', component: FacDisC021Component},{path:'dis_pb03',component: FacDisPb03Component},
    {path: 'sogamoso', component: SogamosoComponent}
    ]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{ }

export const routingComponents = [CarouselComponent,AgropecuariasComponent,
                                 EducacionComponent, EconomicasComponent,
                                 CienciasComponent, DerechoComponent,
                                 DistanciaComponent, FacDisI02Component,
                                 FacDisI03Component,FacDisI04Component,ChiquinquiraComponent,
                                 FacDisI05Component, FacDisI06Component, FacDisF01Component,
                                 FacDisF02Component,FacDisF03Component, FacDisC01Component,
                                 FacDisC02Component,FacDisC021Component,FacDisPb03Component,
                                 FacAgroI02Component,
                                 DuitamaComponent, SogamosoComponent]