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
             this.countAportes();
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
  
        // Add data
        chart.data = [{
          "year": "2014",
          "N° Jovenes Investigadores": this.investi2014
        }, {
          "year": "2015",
          "N° Jovenes Investigadores": this.investi2015
        }, {
          "year": "2016",
          "N° Jovenes Investigadores": this.investi2016
        }, {
          "year": "2017",
          "N° Jovenes Investigadores": this.investi2017
        }, {
          "year": "2018",
          "N° Jovenes Investigadores": this.investi2018
        }];
  
        // Create category axis
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "year";
        categoryAxis.renderer.opposite = false;
  
        // Create value axis
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.inversed = false;
        valueAxis.title.text = "Place taken";
        valueAxis.renderer.minLabelPosition = 0.01;
  
        // Create series
        let series1 = chart.series.push(new am4charts.LineSeries());
        series1.dataFields.valueY =  "N° Jovenes Investigadores";
        series1.dataFields.categoryX = "year";
        series1.name = "N° Jovenes Investigadores";
        series1.strokeWidth = 3;
        series1.bullets.push(new am4charts.CircleBullet());
        series1.tooltipText = "{categoryX}: {valueY}";
        series1.legendSettings.valueText = "{valueY}";
        series1.visible = false;

        // Add chart cursor
        chart.cursor = new am4charts.XYCursor();
        chart.cursor.behavior = "zoomY";
  
        // Add legend
        chart.legend = new am4charts.Legend();
        this.barChart = chart;
      });
  }


}
