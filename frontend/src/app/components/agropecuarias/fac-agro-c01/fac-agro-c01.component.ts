import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacAgropecuariaC01 } from 'src/app/models/fac-agropecuaria-c01';

@Component({
  selector: 'app-fac-agro-c01',
  templateUrl: './fac-agro-c01.component.html',
  styleUrls: ['./fac-agro-c01.component.css']
})
export class FacAgroC01Component implements OnInit {
  public a12014=0;
  public a12015=0;
  public a12016=0;
  public a12017=0;
  public a12018=0;
  public a2014=0;
  public a2015=0;
  public a2016=0;
  public a2017=0;
  public a2018=0;
  public b2014=0;
  public b2015=0;
  public b2016=0;
  public b2017=0;
  public b2018=0;
  public c2014=0;
  public c2015=0;
  public c2016=0;
  public c2017=0;
  public c2018=0;
  public d2014=0;
  public d2015=0;
  public d2016=0;
  public d2017=0;
  public d2018=0;
  public r2014=0;
  public r2015=0;
  public r2016=0;
  public r2017=0;
  public r2018=0;
  constructor(public zone : NgZone, public service: ServiceService) { }

  ngOnInit() {
     this.service.getFacAgropecuariaC01()
          .subscribe(res=>{
              this.service.facAgroC01Array = res as FacAgropecuariaC01[];
              this.countData();
              this.createChart();
          });
  }


  countData(){
    const array = this.service.facAgroC01Array as FacAgropecuariaC01[];
    for (var _i = 0; _i < array.length; _i++){
      console.log(this.a12014)
        if(array[_i].Anio==="2014"){
          if(!isNaN(array[_i].A1)){
            this.a12014=array[_i].A1;

          }
          if(!isNaN(array[_i].A)){
            this.a2014=array[_i].A;
          }
          if(!isNaN(array[_i].B)){
            this.b2014=array[_i].B;
          }
          if(!isNaN(array[_i].C)){
            this.c2014=array[_i].C;
          }
          if(!isNaN(array[_i].D)){
            this.d2014=array[_i].D;
          }
          if(!isNaN(array[_i].R)){
            this.r2014=array[_i].R;
          }
        }else if(array[_i].Anio==="2015"){
          if(!isNaN(array[_i].A1)){
            this.a12015=array[_i].A1;
          }
          if(!isNaN(array[_i].A)){
            this.a2015=array[_i].A;
          }
          if(!isNaN(array[_i].B)){
            this.b2015=array[_i].B;
          }
          if(!isNaN(array[_i].C)){
            this.c2015=array[_i].C;
          }
          if(!isNaN(array[_i].D)){
            this.d2015=array[_i].D;
          }
          if(!isNaN(array[_i].R)){
            this.r2015=array[_i].R;
          }
        }else if(array[_i].Anio==="2016"){
          if(!isNaN(array[_i].A1)){
            this.a12016=array[_i].A1;
          }
          if(!isNaN(array[_i].A)){
            this.a2016=array[_i].A;
          }
          if(!isNaN(array[_i].B)){
            this.b2016=array[_i].B;
          }
          if(!isNaN(array[_i].C)){
            this.c2016=array[_i].C;
          }
          if(!isNaN(array[_i].D)){
            this.d2016=array[_i].D;
          }
          if(!isNaN(array[_i].R)){
            this.r2016=array[_i].R;
          }
        }else if(array[_i].Anio==="2017"){
          if(!isNaN(array[_i].A1)){
            this.a12017=array[_i].A1;
          }
          if(!isNaN(array[_i].A)){
            this.a2017=array[_i].A;
          }
          if(!isNaN(array[_i].B)){
            this.b2017=array[_i].B;
          }
          if(!isNaN(array[_i].C)){
            this.c2017=array[_i].C;
          }
          if(!isNaN(array[_i].D)){
            this.d2017=array[_i].D;
          }
          if(!isNaN(array[_i].R)){
            this.r2017=array[_i].R;
          }
        }else if(array[_i].Anio==="2018"){
          if(!isNaN(array[_i].A1)){
            this.a12018=array[_i].A1;
          }
          if(!isNaN(array[_i].A)){
            this.a2018=array[_i].A;
          }
          if(!isNaN(array[_i].B)){
            this.b2018=array[_i].B;
          }
          if(!isNaN(array[_i].C)){
            this.c2018=array[_i].C;
          }
          if(!isNaN(array[_i].D)){
            this.d2018=array[_i].D;
          }
          if(!isNaN(array[_i].R)){
            this.r2018=array[_i].R;
          }
        }
    }
  }

  createChart() {
    this.zone.runOutsideAngular(() => {

      var chart = am4core.create("barChart", am4charts.XYChart);

      // Add data
      chart.data = [{
        "year": 2014,
        "A1": this.a12014,
        "A": this.a2014,
        "B": this.b2014,
        "C": this.c2014,
        "D": this.d2014,
        "R": this.r2014
      }, {
        "year": 2015,
        "A1": this.a12015,
        "A": this.a2015,
        "B": this.b2015,
        "C": this.c2015,
        "D": this.d2015,
        "R": this.r2015
      }, {
        "year": 2016,
        "A1": this.a12016,
        "A": this.a2016,
        "B": this.b2016,
        "C": this.c2016,
        "D": this.d2016,
        "R": this.r2016
      }, {
        "year": 2017,
        "A1": this.a12017,
        "A": this.a2017,
        "B": this.b2017,
        "C": this.c2017,
        "D": this.d2017,
        "R": this.r2017
      }, {
        "year": 2018,
        "A1": this.a12018,
        "A": this.a2018,
        "B": this.b2018,
        "C": this.c2018,
        "D": this.d2018,
        "R": this.r2018
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
      createSeries("A1", "A1");
      createSeries("A", "A");
      createSeries("B", "B");
      createSeries("C", "C");
      createSeries("D", "D");
      createSeries("R", "R");

      chart.legend = new am4charts.Legend();
    });


  }

}
