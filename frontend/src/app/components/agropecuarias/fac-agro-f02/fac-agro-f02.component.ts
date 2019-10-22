import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacAgropecuariaF02 } from 'src/app/models/fac-agropecuaria-f02';

@Component({
  selector: 'app-fac-agro-f02',
  templateUrl: './fac-agro-f02.component.html',
  styleUrls: ['./fac-agro-f02.component.css']
})
export class FacAgroF02Component implements OnInit {
  public barChart: am4charts.XYChart;
  public investigadores2014=0;
  public investigadores2018=0;
  public veterinaria2014=0;
  public ingAgro2014=0;
  public veterinaria2018=0;
  public ingAgro2018=0;
  constructor(public zone: NgZone, public service: ServiceService) { }

  ngOnInit() {
    this.service.getFacAgropecuariaF02()
      .subscribe(res=>{
          this.service.facAgroF02Array = res as FacAgropecuariaF02[];
          this.createData();
          this.createChart();
          this.createGraph();
      });
  }

  createData(){
    const array = this.service.facAgroF02Array as FacAgropecuariaF02[];
    for(var _i = 0; _i < array.length; _i++){
        if(array[_i].AnionEjecucion==="2014"){
          this.investigadores2014++;
          if(array[_i].Programa==="INGENIERIA AGRONOMICA"){
             this.ingAgro2014++;
          }else if(array[_i].Programa==="MEDICINA VETERINARIA Y ZOOTECNIA"){
              this.veterinaria2014++;
          }
        }else if(array[_i].AnionEjecucion==="2018"){
            this.investigadores2018++;
            if(array[_i].Programa==="INGENIERIA AGRONOMICA"){
              this.ingAgro2018++;
           }else if(array[_i].Programa==="MEDICINA VETERINARIA Y ZOOTECNIA"){
               this.veterinaria2018++;
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
        },{
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