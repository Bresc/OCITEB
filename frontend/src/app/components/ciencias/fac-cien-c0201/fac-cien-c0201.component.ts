import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacCienciasC0201 } from 'src/app/models/fac-ciencias-c0201';

@Component({
  selector: 'app-fac-cien-c0201',
  templateUrl: './fac-cien-c0201.component.html',
  styleUrls: ['./fac-cien-c0201.component.css']
})
export class FacCienC0201Component implements OnInit {
    NivelDeEstudio: "";
    TipoVinculacion: "";
    DocentesEnGrupos: 0;
    DocentesEnProyectos: 0;
    DocentesReconocidos: 0;
  constructor(private zone : NgZone, private service: ServiceService) { }

  ngOnInit() {
     this.service.getFacCienciasC0201()
          .subscribe(res=>{
              this.service.facCienC0201Array = res as FacCienciasC0201[];
              this.countData();
          });
  }


  countData(){
    const array = this.service.facCienC0201Array as FacCienciasC0201[];
  }
  }

