import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacDistanciaI02 } from 'src/app/models/FacDistanciaI02';

@Component({
  selector: 'app-fac-dis-i02',
  templateUrl: './fac-dis-i02.component.html',
  styleUrls: ['./fac-dis-i02.component.css']
})
export class FacDisI02Component implements OnInit {

  private barChart: am4charts.XYChart;

  private especie2014=0;
  private especie2015=0;
  private especie2016=0;
  private especie2017=0;
  private especie2018=0;

  private efectivo2014=0;
  private efectivo2015=0;
  private efectivo2016=0;
  private efectivo2017=0;
  private efectivo2018=0;

  private externo2014=0;
  private externo2015=0;
  private externo2016=0;
  private externo2017=0;
  private externo2018=0;

  constructor(private zone : NgZone,private service: ServiceService) { }


  ngOnInit() {

    this.service.getFacDistanciaI01()
          .subscribe(res=>{
             this.service.facDisI02Array = res as FacDistanciaI02[];
             this.createChart();
             this.countAportes();
          });

          
  }


  countAportes(){
    const array = this.service.facDisI02Array as FacDistanciaI02[];
    
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
