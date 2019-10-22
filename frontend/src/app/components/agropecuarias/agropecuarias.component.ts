import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import {ServiceService} from '../../services/service.service';
import { FacAgropecuariaI01 } from 'src/app/models/fac-agropecuaria-i01';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-agropecuarias',
  templateUrl: './agropecuarias.component.html',
  styleUrls: ['./agropecuarias.component.css']
})





export class AgropecuariasComponent implements OnInit {

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
    this.service.getFacAgropecuariaI01()
          .subscribe(res=>{
             this.service.facAgroI01Array = res as FacAgropecuariaI01[];
             this.countAnios();
             this.createChart();
             this.createGraph();
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
    const array =  this.service.facAgroI01Array as FacAgropecuariaI01[];
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

  createGraph() {
    this.zone.runOutsideAngular(() => {
    
      let chart = am4core.create("chartdiv", am4charts.XYChart);

      // Add data
      chart.data = [{
        "year": "2014",
        "Capital Semilla": this.semilla2014,
        "Contrapartida": this.contra2014,
        "Sin Financiación": this.sinfin2014
      }, {
        "year": "2015",
        "Capital Semilla": this.semilla2015,
        "Contrapartida": this.contra2015,
        "Sin Financiación": this.sinfin2015
      }, {
        "year": "2016",
        "Capital Semilla": this.semilla2016,
        "Contrapartida": this.contra2016,
        "Sin Financiación": this.sinfin2016
      }, {
        "year": "2017",
        "Capital Semilla": this.semilla2017,
        "Contrapartida": this.contra2017,
        "Sin Financiación": this.sinfin2017
      }, {
        "year": "2018",
        "Capital Semilla": this.semilla2018,
        "Contrapartida": this.contra2018,
        "Sin Financiación": this.sinfin2018
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
      series1.dataFields.valueY = "Capital Semilla";
      series1.dataFields.categoryX = "year";
      series1.name = "Capital Semilla";
      series1.strokeWidth = 3;
      series1.bullets.push(new am4charts.CircleBullet());
      series1.tooltipText = "{name} in {categoryX}: {valueY}";
      series1.legendSettings.valueText = "{valueY}";
      series1.visible = false;

      let series2 = chart.series.push(new am4charts.LineSeries());
      series2.dataFields.valueY = "Contrapartida";
      series2.dataFields.categoryX = "year";
      series2.name = 'Contrapartida';
      series2.strokeWidth = 3;
      series2.bullets.push(new am4charts.CircleBullet());
      series2.tooltipText = "{name} in {categoryX}: {valueY}";
      series2.legendSettings.valueText = "{valueY}";

      let series3 = chart.series.push(new am4charts.LineSeries());
      series3.dataFields.valueY = "Sin Financiación";
      series3.dataFields.categoryX = "year";
      series3.name = 'Sin Financiación';
      series3.strokeWidth = 3;
      series3.bullets.push(new am4charts.CircleBullet());
      series3.tooltipText = "{name} in {categoryX}: {valueY}";
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
