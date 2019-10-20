import { Component, OnInit,NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import {ServiceService} from '../../services/service.service';
import { FacDistanciaI01 } from 'src/app/models/fac-distancia-i01';

@Component({
  selector: 'app-distancia',
  templateUrl: './distancia.component.html',
  styleUrls: ['./distancia.component.css'],
  providers : [ServiceService]
})
export class DistanciaComponent implements OnInit {

  private barChart: am4charts.XYChart;
  private anio2014=0;
  private anio2015=0;
  private anio2016=0;
  private anio2017=0;
  private anio2018=0;

  private semilla2014=0;
  private semilla2015=0;
  private semilla2016=0;
  private semilla2017=0;
  private semilla2018=0;

  private contra2014=0;
  private contra2015=0;
  private contra2016=0;
  private contra2017=0;
  private contra2018=0;

  private sinfin2014=0;
  private sinfin2015=0;
  private sinfin2016=0;
  private sinfin2017=0;
  private sinfin2018=0;

  constructor(private zone : NgZone,private service : ServiceService) { 
    
  }

  ngOnInit() {
    this.service.getFacDistanciaI01()
          .subscribe(res=>{
             this.service.facDisI01Array = res as FacDistanciaI01[];
             console.log(this.service.facDisI01Array[0].PROYECTO);
             this.countAnios();
             this.createChart();
          });
    
          
  }

  createChart(){
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("barChart", am4charts.XYChart);
  
      // ... chart code goes here ...
      chart.paddingRight = 20;

      chart.data = [{
        "Año": "2014",
        "Num": this.anio2014
      }, {
        "Año": "2015",
        "Num": this.anio2015
      }, {
        "Año": "2016",
        "Num": this.anio2016
      }, {
        "Año": "2017",
        "Num": this.anio2017
      }, {
        "Año": "2018",
        "Num": this.anio2018
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

  countAnios(){
    const array =  this.service.facDisI01Array as FacDistanciaI01[];
    for (var _i = 0; _i < array.length; _i++) {
        //console.log(array[_i].ANIOEJECUCION);
        if(parseInt(array[_i].ANIOEJECUCION)==2014){
            this.anio2014++;
            if(array[_i].TIPOFINANCIACION==="CAPITAL SEMILLA"){
                this.semilla2014++;
            }else if(array[_i].TIPOFINANCIACION==="CONTRAPARTIDA"){
                this.contra2014++;
            }else if(array[_i].TIPOFINANCIACION==="SIN FINANCIACION"){
              this.sinfin2014++;
            }
        }else if(parseInt(array[_i].ANIOEJECUCION)==2015){
            this.anio2015++;
            if(array[_i].TIPOFINANCIACION==="CAPITAL SEMILLA"){
              this.semilla2015++;
            }else if(array[_i].TIPOFINANCIACION==="CONTRAPARTIDA"){
              this.contra2015++;
            }else if(array[_i].TIPOFINANCIACION==="SIN FINANCIACION"){
            this.sinfin2015++;
            }
        }else if(parseInt(array[_i].ANIOEJECUCION)==2016){
            this.anio2016++;
            if(array[_i].TIPOFINANCIACION==="CAPITAL SEMILLA"){
              this.semilla2016++;
            }else if(array[_i].TIPOFINANCIACION==="CONTRAPARTIDA"){
              this.contra2016++;
            }else if(array[_i].TIPOFINANCIACION==="SIN FINANCIACION"){
            this.sinfin2016++;
            }
        }else if(parseInt(array[_i].ANIOEJECUCION)==2017){
          this.anio2017++;
          if(array[_i].TIPOFINANCIACION==="CAPITAL SEMILLA"){
            this.semilla2017++;
          }else if(array[_i].TIPOFINANCIACION==="CONTRAPARTIDA"){
            this.contra2017++;
          }else if(array[_i].TIPOFINANCIACION==="SIN FINANCIACION"){
          this.sinfin2017++;
          }
        }else if(parseInt(array[_i].ANIOEJECUCION)==2018){
          this.anio2018++;
          if(array[_i].TIPOFINANCIACION==="CAPITAL SEMILLA"){
            this.semilla2018++;
          }else if(array[_i].TIPOFINANCIACION==="CONTRAPARTIDA"){
            this.contra2018++;
          }else if(array[_i].TIPOFINANCIACION==="SIN FINANCIACION"){
          this.sinfin2018++;
          }
      }
    }



  }

  ngAfterViewInit() {
    /*this.zone.runOutsideAngular(() => {
      let chart = am4core.create("barChart", am4charts.XYChart);
  
      // ... chart code goes here ...
      chart.paddingRight = 20;

      chart.data = [{
        "Año": "2014",
        "Num": this.anio2014
      }, {
        "Año": "2015",
        "Num": this.anio2015
      }, {
        "Año": "2016",
        "Num": this.anio2016
      }, {
        "Año": "2017",
        "Num": 10
      }, {
        "Año": "2018",
        "Num": 10
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
    });*/
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.barChart) {
        this.barChart.dispose();
      }
    });
  }

}
