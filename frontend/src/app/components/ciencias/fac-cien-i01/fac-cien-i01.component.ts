import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacAgropecuariaI01 } from 'src/app/models/fac-agropecuaria-i01';

@Component({
  selector: 'app-fac-agro-i01',
  templateUrl: './fac-agro-i01.component.html',
  styleUrls: ['./fac-agro-i01.component.css']
})
export class FacAgroI01Component implements OnInit {
  private barChart: am4charts.XYChart;


  constructor(private zone : NgZone,private service: ServiceService) { }

  ngOnInit() {
    
  }

  countAportes(){
    const array = this.service.facAgroI01Array as FacAgropecuariaI01[];
  
        
  }
}
