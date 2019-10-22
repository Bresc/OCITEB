import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacAgropecuariaI02 } from 'src/app/models/fac-agropecuaria-i02';

@Component({
  selector: 'app-fac-agro-i02',
  templateUrl: './fac-agro-i02.component.html',
  styleUrls: ['./fac-agro-i02.component.css']
})
export class FacAgroI02Component implements OnInit {
  public barChart: am4charts.XYChart;

  public especie2014=0;
  public especie2015=0;
  public especie2016=0;
  public especie2017=0;
  public especie2018=0;

  public efectivo2014=0;
  public efectivo2015=0;
  public efectivo2016=0;
  public efectivo2017=0;
  public efectivo2018=0;

  public externo2014=0;
  public externo2015=0;
  public externo2016=0;
  public externo2017=0;
  public externo2018=0;

  constructor(public zone : NgZone,public service: ServiceService) { }

  ngOnInit() {
    this.service.getFacAgropecuariaI02()
          .subscribe(res=>{
             this.service.facAgroI02Array = res as FacAgropecuariaI02[];
             this.countAportes();
             this.createChart();
          });
  }

  countAportes(){
    const array = this.service.facAgroI02Array as FacAgropecuariaI02[];
    
    for(var _i = 0; _i < array.length; _i++){
        if(parseInt(array[_i].ANIOEJECUCION)==2014){
            this.especie2014+=parseInt(array[_i].MONTOESPECIEINTERNO);
            this.externo2014+=parseInt(array[_i].MONTOEXTERNO1);
            if(!isNaN(parseInt(array[_i].MONTOEXTERNO2))){
              this.externo2014+=parseInt(array[_i].MONTOEXTERNO2);
            }
            this.efectivo2014+=parseInt(array[_i].MONTOEFECTIVOINTERNO);
        }else if(parseInt(array[_i].ANIOEJECUCION)==2015){
          this.especie2015+=parseInt(array[_i].MONTOESPECIEINTERNO);
          this.externo2015+=parseInt(array[_i].MONTOEXTERNO1);
          if(!isNaN(parseInt(array[_i].MONTOEXTERNO2))){
            this.externo2015+=parseInt(array[_i].MONTOEXTERNO2);
          }
          this.efectivo2015+=parseInt(array[_i].MONTOEFECTIVOINTERNO);
        }else if(parseInt(array[_i].ANIOEJECUCION)==2016){
          this.especie2016+=parseInt(array[_i].MONTOESPECIEINTERNO);
          this.externo2016+=parseInt(array[_i].MONTOEXTERNO1);
          if(!isNaN(parseInt(array[_i].MONTOEXTERNO2))){
            this.externo2016+=parseInt(array[_i].MONTOEXTERNO2);
          }
          this.efectivo2016+=parseInt(array[_i].MONTOEFECTIVOINTERNO);
        }else if(parseInt(array[_i].ANIOEJECUCION)==2017){
          this.especie2017+=parseInt(array[_i].MONTOESPECIEINTERNO);
          this.externo2017+=parseInt(array[_i].MONTOEXTERNO1);
          if(!isNaN(parseInt(array[_i].MONTOEXTERNO2))){
            this.externo2017+=parseInt(array[_i].MONTOEXTERNO2);
          }
          this.efectivo2017+=parseInt(array[_i].MONTOEFECTIVOINTERNO);
        }else if(parseInt(array[_i].ANIOEJECUCION)==2018){
          this.especie2018+=parseInt(array[_i].MONTOESPECIEINTERNO);
          this.externo2018+=parseInt(array[_i].MONTOEXTERNO1);
          if(!isNaN(parseInt(array[_i].MONTOEXTERNO2))){
            this.externo2018+=parseInt(array[_i].MONTOEXTERNO2);
          }
          this.efectivo2018+=parseInt(array[_i].MONTOEFECTIVOINTERNO);
        }
    }
  }

  createChart() {
    this.zone.runOutsideAngular(() => {
    
      let chart = am4core.create("barChart", am4charts.XYChart);

      // Add data
      chart.data = [{
        "year": "2014",
        "Aporte Especie UPTC": this.especie2014,
        "Aporte Efectivo UPTC": this.efectivo2014,
        "Aporte Externok": this.externo2014
      }, {
        "year": "2015",
        "Aporte Especie UPTC": this.especie2015,
        "Aporte Efectivo UPTC": this.efectivo2015,
        "Aporte Externok": this.externo2015
      }, {
        "year": "2016",
        "Aporte Especie UPTC": this.especie2016,
        "Aporte Efectivo UPTC": this.efectivo2016,
        "Aporte Externok": this.externo2016
      }, {
        "year": "2017",
        "Aporte Especie UPTC": this.especie2017,
        "Aporte Efectivo UPTC": this.efectivo2017,
        "Aporte Externok": this.externo2017
      }, {
        "year": "2018",
        "Aporte Especie UPTC": this.especie2018,
        "Aporte Efectivo UPTC": this.efectivo2018,
        "Aporte Externok": this.externo2018
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
      series1.dataFields.valueY = "Aporte Especie UPTC";
      series1.dataFields.categoryX = "year";
      series1.name = "Aporte Especie UPTC";
      series1.strokeWidth = 3;
      series1.bullets.push(new am4charts.CircleBullet());
      series1.tooltipText = "Place taken by {name} in {categoryX}: {valueY}";
      series1.legendSettings.valueText = "{valueY}";
      series1.visible = false;

      let series2 = chart.series.push(new am4charts.LineSeries());
      series2.dataFields.valueY = "Aporte Efectivo UPTC";
      series2.dataFields.categoryX = "year";
      series2.name = 'Aporte Efectivo UPTC';
      series2.strokeWidth = 3;
      series2.bullets.push(new am4charts.CircleBullet());
      series2.tooltipText = "Place taken by {name} in {categoryX}: {valueY}";
      series2.legendSettings.valueText = "{valueY}";

      let series3 = chart.series.push(new am4charts.LineSeries());
      series3.dataFields.valueY = "Aporte Externok";
      series3.dataFields.categoryX = "year";
      series3.name = 'Aporte Externok';
      series3.strokeWidth = 3;
      series3.bullets.push(new am4charts.CircleBullet());
      series3.tooltipText = "Place taken by {name} in {categoryX}: {valueY}";
      series3.legendSettings.valueText = "{valueY}";

      // Add chart cursor
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.behavior = "zoomY";

      // Add legend
      chart.legend = new am4charts.Legend();
      this.barChart = chart;
    });
   
  }

}
