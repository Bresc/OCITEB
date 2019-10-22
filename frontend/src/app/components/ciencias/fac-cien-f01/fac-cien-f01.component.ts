import { Component, OnInit,NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacCienciasF01 } from 'src/app/models/fac-ciencias-f01';

@Component({
  selector: 'app-fac-cien-f01',
  templateUrl: './fac-cien-f01.component.html',
  styleUrls: ['./fac-cien-f01.component.css']
})
export class FacCienF01Component implements OnInit {
  private barChart: am4charts.XYChart;
  private veterinaria2014=0;
  private ingAgro2014=0;
  private veterinaria2015=0;
  private ingAgro2015=0;
  private veterinaria2016=0;
  private ingAgro2016=0;
  private veterinaria2017=0;
  private ingAgro2017=0;
  private veterinaria2018=0;
  private ingAgro2018=0;

  private investigadores2014=0;
  private investigadores2015=0;
  private investigadores2016=0;
  private investigadores2017=0;
  private investigadores2018=0;
  constructor(private zone : NgZone, private service: ServiceService) { }

  ngOnInit() {
    this.service.getFacCienciasF01()
          .subscribe(res=>{
              this.service.facCienF01Array = res as FacCienciasF01[];
              this.countData();
              this.createChart();
              this.createGraph();
          });
  }

  countData(){
  const array = this.service.facCienF01Array as FacCienciasF01[];
    for (var _i = 0; _i < array.length; _i++){
      if(array[_i].Anio==="2014"){
        this.investigadores2014++;
        if(array[_i].Programa==="MEDICINA VETERINARIA Y ZOOTECNIA"){
            this.veterinaria2014++;
        }else if(array[_i].Programa==="INGENIERIA AGRONOMICA"){
            this.ingAgro2014++;
        }
      }else if(array[_i].Anio==="2015"){
            this.investigadores2015++;
            if(array[_i].Programa==="MEDICINA VETERINARIA Y ZOOTECNIA"){
              this.veterinaria2015++;
            }else if(array[_i].Programa==="INGENIERIA AGRONOMICA"){
              this.ingAgro2015++;
            }
      }else if(array[_i].Anio==="2016"){
            this.investigadores2016++;
            if(array[_i].Programa==="MEDICINA VETERINARIA Y ZOOTECNIA"){
              this.veterinaria2016++;
            }else if(array[_i].Programa==="INGENIERIA AGRONOMICA"){
              this.ingAgro2016++;
            }
      }else if(array[_i].Anio==="2017"){
            this.investigadores2017++;
            if(array[_i].Programa==="MEDICINA VETERINARIA Y ZOOTECNIA"){
              this.veterinaria2017++;
            }else if(array[_i].Programa==="INGENIERIA AGRONOMICA"){
              this.ingAgro2017++;
            }
      }else if(array[_i].Anio==="2018"){
            this.investigadores2018++;
            if(array[_i].Programa==="MEDICINA VETERINARIA Y ZOOTECNIA"){
                this.veterinaria2018++;
            }else if(array[_i].Programa==="INGENIERIA AGRONOMICA"){
                this.ingAgro2018++;
            }
      }
  }
    }
    createChart(){
      this.zone.runOutsideAngular(() => {
      
          let chart = am4core.create("barChart", am4charts.XYChart);
    
          // Add data
          chart.data = [{
            "year": "2014",
            "N° Jovenes Investigadores": this.investigadores2014
          }, {
            "year": "2015",
            "N° Jovenes Investigadores": this.investigadores2015
          }, {
            "year": "2016",
            "N° Jovenes Investigadores": this.investigadores2016
          }, {
            "year": "2017",
            "N° Jovenes Investigadores": this.investigadores2017
          }, {
            "year": "2018",
            "N° Jovenes Investigadores": this.investigadores2018
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
          this.barChart = chart;
        });
    }
  
    createGraph() {
      this.zone.runOutsideAngular(() => {
  
        var chart = am4core.create("chartdiv", am4charts.XYChart);
  
        // Add data
        chart.data = [{
          "year": 2014,
          "Medicina veterinaria y zootecnia": this.veterinaria2014,
          "Ingenieria agronomica": this.ingAgro2014
        }, {
          "year": 2015,
          "Medicina veterinaria y zootecnia": this.veterinaria2015,
          "Ingenieria agronomica": this.ingAgro2015
        }, {
          "year": 2016,
          "Medicina veterinaria y zootecnia": this.veterinaria2016,
          "Ingenieria agronomica": this.ingAgro2016
        }, {
          "year": 2017,
          "Medicina veterinaria y zootecnia": this.veterinaria2017,
          "Ingenieria agronomica": this.ingAgro2017
        }, {
          "year": 2018,
          "Medicina veterinaria y zootecnia": this.veterinaria2018,
          "Ingenieria agronomica": this.ingAgro2018
        }];
  
        // Create axes
        var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "year";
        categoryAxis.numberFormatter.numberFormat = "#";
        categoryAxis.renderer.inversed = true;
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.cellStartLocation = 0.1;
        categoryAxis.renderer.cellEndLocation = 0.9;
  
        var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.opposite = true;
  
        // Create series
        function createSeries(field, name) {
          var series = chart.series.push(new am4charts.ColumnSeries());
          series.dataFields.valueX = field;
          series.dataFields.categoryY = "year";
          series.name = name;
          series.columns.template.tooltipText = "{name}: [bold]{valueX}[/]";
          series.columns.template.height = am4core.percent(100);
          series.sequencedInterpolation = true;
  
          var valueLabel = series.bullets.push(new am4charts.LabelBullet());
          valueLabel.label.text = "{valueX}";
          valueLabel.label.horizontalCenter = "left";
          valueLabel.label.dx = 10;
          valueLabel.label.hideOversized = false;
          valueLabel.label.truncate = false;
  
          var categoryLabel = series.bullets.push(new am4charts.LabelBullet());
          categoryLabel.label.text = "{name}";
          categoryLabel.label.horizontalCenter = "right";
          categoryLabel.label.dx = -10;
          categoryLabel.label.fill = am4core.color("#fff");
          categoryLabel.label.hideOversized = false;
          categoryLabel.label.truncate = false;
        }
        createSeries("Medicina veterinaria y zootecnia", "Medicina veterinaria y zootecnia");
        createSeries("Ingenieria agronomica", "Ingenieria agronomica");
       
  
        chart.legend = new am4charts.Legend();
      });
}
}
