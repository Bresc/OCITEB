import { Component, OnInit,NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacCienciasF03 } from 'src/app/models/fac-ciencias-f03';

@Component({
  selector: 'app-fac-cien-f03',
  templateUrl: './fac-cien-f03.component.html',
  styleUrls: ['./fac-cien-f03.component.css']
})
export class FacCienF03Component implements OnInit {
  private barChart: am4charts.XYChart;
  private semilleros2014=0;
  private semilleros2015=0;
  private semilleros2016=0;
  private semilleros2017=0;
  private semilleros2018=0;
  constructor(private zone : NgZone, private service: ServiceService) { }

  ngOnInit() {
    this.service.getFacCienciasF03()
      .subscribe(res=>{
          this.service.facCienF03Array = res as FacCienciasF03[];
          this.createData();
          this.createChart();
      });
  }
  createData(){
    const array = this.service.facCienF03Array as FacCienciasF03[];
    for(var _i = 0; _i < array.length; _i++){
      if(array[_i].Anio==="2014"){
          this.semilleros2014=array[_i].Nosemilleros;
      }else if(array[_i].Anio==="2015"){
          this.semilleros2015=array[_i].Nosemilleros;
      }else if(array[_i].Anio==="2016"){
        this.semilleros2016=array[_i].Nosemilleros;
      }else if(array[_i].Anio==="2017"){
        this.semilleros2017=array[_i].Nosemilleros;
      }else if(array[_i].Anio==="2018"){
        this.semilleros2018=array[_i].Nosemilleros;
      }
  }
  }

  createChart(){
    this.zone.runOutsideAngular(() => {
    
      let chart = am4core.create("barChart", am4charts.XYChart);
  
      // Add data
      chart.data = [{
        "year": "2014",
        "N° semilleros": this.semilleros2014
      }, {
        "year": "2015",
        "N° semilleros": this.semilleros2015
      }, {
        "year": "2016",
        "N° semilleros": this.semilleros2016
      }, {
        "year": "2017",
        "N° semilleros": this.semilleros2017
      }, {
        "year": "2018",
        "N° semilleros": this.semilleros2018
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
      series1.dataFields.valueY =  "N° semilleros";
      series1.dataFields.categoryX = "year";
      series1.name = "N° semilleros";
      series1.strokeWidth = 3;
      series1.bullets.push(new am4charts.CircleBullet());
      series1.tooltipText = "{categoryX}: {valueY}";
      series1.legendSettings.valueText = "{valueY}";
      series1.visible = false;

      // Add chart cursor
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.behavior = "zoomY";

      this.barChart = chart;
      });
  }


}
