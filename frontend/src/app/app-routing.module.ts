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

const routes: Routes = [
    {path: '', redirectTo: '/home',pathMatch: 'full'},
    {path: 'home', component: CarouselComponent},
    {path: 'agropecuarias', component: AgropecuariasComponent},
    {path: 'educacion', component: EducacionComponent},
    {path: 'economicas', component: EconomicasComponent},
    {path: 'ciencias', component: CienciasComponent},
    {path: 'derecho', component: DerechoComponent},
    {path: 'distancia', component: DistanciaComponent},
    {path: 'chiquinquira', component: ChiquinquiraComponent},
    {path: 'duitama', component: DuitamaComponent},
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
                                 DistanciaComponent, ChiquinquiraComponent,
                                 DuitamaComponent, SogamosoComponent]