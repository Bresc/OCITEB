import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacAgropecuariaI04 } from 'src/app/models/fac-agropecuaria-i04';

@Component({
  selector: 'app-fac-agro-i04',
  templateUrl: './fac-agro-i04.component.html',
  styleUrls: ['./fac-agro-i04.component.css']
})
export class FacAgroI04Component implements OnInit {
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
  constructor(private zone: NgZone,private service: ServiceService) { }

  ngOnInit() {
    this.service.getFacAgropecuariaI04()
          .subscribe(res=>{
             this.service.facAgroI04Array = res as FacAgropecuariaI04[];
             this.createChart();
             this.countAportes();
          });
  }

  countAportes(){
    const array = this.service.facAgroI04Array as FacAgropecuariaI04[];

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
        this.cideAporte=array[_i].Valor;
        this.cideNumProductos=array[_i].Noproductos;
      }
    }
  }

  createChart(){
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("barChart", am4charts.XYChart);
  
      // ... chart code goes here ...
      chart.paddingRight = 20;

      chart.data = [{
        "Año": "2014",
        "Num": 3
      }, {
        "Año": "2015",
        "Num": 6
      }, {
        "Año": "2016",
        "Num": 7
      }, {
        "Año": "2017",
        "Num": 1
      }, {
        "Año": "2018",
        "Num": 9
      }];

      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "Año";
      categoryAxis.title.text = "Año";

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.title.text = "Num Proyectos";
      
      let series = chart.series.push(new am4charts.ColumnSeries());
    series.name = "Num";
    series.columns.template.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
    series.columns.template.fill = am4core.color("#104547"); // fill
    series.dataFields.valueY = "Num";
    series.dataFields.categoryX = "Año";

      this.barChart = chart;
    });
  }

}
