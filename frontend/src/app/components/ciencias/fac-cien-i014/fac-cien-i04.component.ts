import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacCienciasI04 } from 'src/app/models/fac-ciencias-i04';

@Component({
  selector: 'app-fac-cien-i04',
  templateUrl: './fac-cien-i04.component.html',
  styleUrls: ['./fac-cien-i04.component.css']
})
export class FacAgroI01Component implements OnInit {
  private barChart: am4charts.XYChart;
  private gibnaAporte=0;
  private gipsoAporte=0;
  private gidimevetzAporte=0;
  private giaAporte=0;
  private cideAporte=0;
  private gibnaNumProductos=0;
  private gipsoNumProductos=0;
  private gidimevetzNumProductos=0;
  private giaNumProductos=0;
  private cideNumProductos=0; 
  constructor(private zone : NgZone,private service: ServiceService) { }

  ngOnInit() {
    this.service.getFacAgropecuariaI04()
          .subscribe(res=>{
             this.service.facCienI04Array = res as FacCienciasI04[];
             this.createChart();
             this.countAportes();
          });
  }

  countAportes(){
    for(var _i = 0; _i < array.length; _i++){
      if(array[_i].Grupo==="GIBNA"){
        this.gibnaAporte=array[_i].Valor;
        this.gibnaNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="GIPSO"){
        this.gipsoAporte=array[_i].Valor;
        this.gipsoNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="GIDIMEVETZ"){
        this.gidimevetzAporte=array[_i].Valor;
        this.gidimevetzNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="GIA"){
        this.giaAporte=array[_i].Valor;
        this.giaNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="CIDE"){
        this.cideAporte= array[_i].Valor;
        this.cideNumProductos=array[_i].Noproductos;
      }
    }
  }

  createChart(){
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("barChart", am4charts.XYChart);
  
      // ... chart code goes here ...
      //chart.paddingRight = 20;
      this.countAportes();
      chart.data = [{
        "Grupo": "GIBNA",
        "Aporte": this.gibnaAporte
      }, {
        "Grupo": "GIPSO",
        "Aporte": this.gipsoAporte
      },{
        "Grupo": "GIDIMEVETZ",
        "Aporte": this.gidimevetzAporte
      },{
        "Grupo": "GIA",
        "Aporte": this.giaAporte
      },
      {
        "Grupo": "CIDE",
        "Aporte": this.cideAporte
      }];

      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "Grupo";
      categoryAxis.title.text = "Grupo";

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.title.text = "Aporte";
      
      let series = chart.series.push(new am4charts.ColumnSeries());
    series.name = "Aporte";
    series.columns.template.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
    series.columns.template.fill = am4core.color("#104547"); // fill
    series.dataFields.valueY = "Aporte";
    series.dataFields.categoryX = "Grupo";

      this.barChart = chart;
    });
  }

}
