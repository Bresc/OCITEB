import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacDistanciaF03 } from 'src/app/models/fac-distancia-f03';

@Component({
  selector: 'app-fac-dis-f03',
  templateUrl: './fac-dis-f03.component.html',
  styleUrls: ['./fac-dis-f03.component.css']
})
export class FacDisF03Component implements OnInit {
  private barChart: am4charts.XYChart;
  private investi2014=0;
  private investi2015=0;
  private investi2016=0;
  private investi2017=0;
  private investi2018=0;

  constructor(private zone: NgZone, private service: ServiceService) { }

  ngOnInit() {
    this.service.getFacDistanciaF03()
          .subscribe(res=>{
             this.service.facDisF03Array = res as FacDistanciaF03[];
             this.createChart();
             this.countAportes();
          });
  }
  

  countAportes(){
      const array = this.service.facDisF03Array as FacDistanciaF03[];
      console.log(array.length);
      for(var _i = 0; _i < array.length; _i++){
          if(array[_i].ANIO==="2014"){
              this.investi2014+=array[_i].Nosemilleros;
          }else if(array[_i].ANIO==="2015"){
            this.investi2015+=array[_i].Nosemilleros;
          }else if(array[_i].ANIO==="2016"){
            this.investi2016+=array[_i].Nosemilleros;
          }else if(array[_i].ANIO==="2017"){
            this.investi2017+=array[_i].Nosemilleros;
          }else if(array[_i].ANIO==="2018"){
            this.investi2018+=array[_i].Nosemilleros;
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
