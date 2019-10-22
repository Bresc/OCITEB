import { Component, OnInit,NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacDistanciaI06 } from 'src/app/models/fac-distancia-i06';

@Component({
  selector: 'app-fac-dis-i06',
  templateUrl: './fac-dis-i06.component.html',
  styleUrls: ['./fac-dis-i06.component.css']
})
export class FacDisI06Component implements OnInit {
  public barChart: am4charts.XYChart;
  public aport2014=0;
  public aport2015=0;
  public aport2016=0;
  public aport2017=0;
  public aport2018=0;
  constructor(public zone:NgZone,public service: ServiceService) { }

  ngOnInit() {
      this.service.getFacDistanciaI06()
          .subscribe(res=>{
              this.service.facDisI06Array = res as FacDistanciaI06[];
              this.countAportes();
              this.createChart();
              this.countAportes();
          });
  }

  countAportes(){
    const array = this.service.facDisI06Array as FacDistanciaI06[];
    for(var _i = 0; _i < array.length; _i++){
        if(array[_i].Anio==="2014"){
           this.aport2014+=array[_i].Aporte;
        }else if(array[_i].Anio==="2015"){
          this.aport2015+=array[_i].Aporte;
        }else if(array[_i].Anio==="2016"){
          this.aport2016+=array[_i].Aporte;
        }else if(array[_i].Anio==="2017"){
          this.aport2017+=array[_i].Aporte;
        }else if(array[_i].Anio==="2018"){
          this.aport2018+=array[_i].Aporte;
        }
    }
  }

  createChart(){
    this.zone.runOutsideAngular(() => {
    
      let chart = am4core.create("barChart", am4charts.XYChart);

      // Add data
      chart.data = [{
        "year": "2014",
        "Aporte": this.aport2014
      }, {
        "year": "2015",
        "Aporte": this.aport2015
      }, {
        "year": "2016",
        "Aporte": this.aport2016
      }, {
        "year": "2017",
        "Aporte": this.aport2017
      }, {
        "year": "2018",
        "Aporte": this.aport2018
      }];

 // Create value axis
 let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
 valueAxis.renderer.inversed = false;
 valueAxis.title.text = "Place taken";
 valueAxis.renderer.minLabelPosition = 0.01;

      // Create category axis
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "year";
      categoryAxis.renderer.opposite = false;

     

      // Create series
      let series1 = chart.series.push(new am4charts.LineSeries());
      series1.dataFields.valueY = "Aporte";
      series1.dataFields.categoryX = "year";
      series1.name = "Aporte";
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
