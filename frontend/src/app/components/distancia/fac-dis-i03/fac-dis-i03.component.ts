import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacDistanciaI03 } from 'src/app/models/fac-distancia-i03';

@Component({
  selector: 'app-fac-dis-i03',
  templateUrl: './fac-dis-i03.component.html',
  styleUrls: ['./fac-dis-i03.component.css']
})
export class FacDisI03Component implements OnInit {

  private barChart: am4charts.XYChart;  
  private entidad2017 = 0;
  private entidad2018 = 0;

  constructor(private zone : NgZone, private service: ServiceService) { }

  
  ngOnInit() {
    this.service.getFacDistanciaI03()
          .subscribe(res=>{
             this.service.facDisI03Array = res as FacDistanciaI03[];
             this.countAportes();
             this.createChart();
             this.countAportes();
          });
  }

  countAportes(){
    const array = this.service.facDisI03Array as FacDistanciaI03[];
    for(var _i = 0; _i < array.length; _i++){
        if(parseInt(array[_i].ANIOEJECUCION)==2017){
           this.entidad2017+=array[_i].MONTOEFECTIVOINTERNO;
        }else if(parseInt(array[_i].ANIOEJECUCION)==2018){
           this.entidad2018+=array[_i].MONTOEFECTIVOINTERNO; 
        }
    }
  }


  createChart(){
    this.zone.runOutsideAngular(() => {
    
      let chart = am4core.create("barChart", am4charts.XYChart);

      // Add data
      chart.data = [{
        "year": "2017",
        "Entidades del Gobierno Regional": this.entidad2017
      }, {
        "year": "2018",
        "Entidades del Gobierno Regional": this.entidad2018
      }];

      // Create category axis
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "year";
      categoryAxis.renderer.opposite = true;

      // Create value axis
      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.inversed = true;
      valueAxis.title.text = "Place taken";
      valueAxis.renderer.minLabelPosition = 0.01;

      // Create series
      let series1 = chart.series.push(new am4charts.LineSeries());
      series1.dataFields.valueY = "Entidades del Gobierno Regional";
      series1.dataFields.categoryX = "year";
      series1.name = "Entidades del Gobierno Regional";
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
