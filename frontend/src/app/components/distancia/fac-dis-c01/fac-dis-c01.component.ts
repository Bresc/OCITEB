import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacDistanciaC01 } from 'src/app/models/fac-distancia-c01';

@Component({
  selector: 'app-fac-dis-c01',
  templateUrl: './fac-dis-c01.component.html',
  styleUrls: ['./fac-dis-c01.component.css']
})
export class FacDisC01Component implements OnInit {

  private barChart: am4charts.XYChart;
  private a12014=0;
  private a12015=0;
  private a12016=0;
  private a12017=0;
  private a12018=0;
  private a2014=0;
  private a2015=0;
  private a2016=0;
  private a2017=0;
  private a2018=0;
  private b2014=0;
  private b2015=0;
  private b2016=0;
  private b2017=0;
  private b2018=0;
  private c2014=0;
  private c2015=0;
  private c2016=0;
  private c2017=0;
  private c2018=0;
  private d2014=0;
  private d2015=0;
  private d2016=0;
  private d2017=0;
  private d2018=0;
  private r2014=0;
  private r2015=0;
  private r2016=0;
  private r2017=0;
  private r2018=0;

  constructor(private zone : NgZone, private service: ServiceService) { }
  
  ngOnInit() {
      this.service.getFacDistanciaC01()
            .subscribe(res=>{
                this.service.facDisC01Array = res as FacDistanciaC01[];
                this.countAportes();
                this.createChart();
                
            });
  }

  countAportes(){
    const array = this.service.facDisC01Array as FacDistanciaC01[];
    for(var _i = 0; _i < array.length; _i++){
      if(array[_i].ANIO==="2014"){
         this.a12014=array[_i].A1;
         this.a2014=array[_i].A;
         this.b2014=array[_i].B;
         this.c2014=array[_i].C;
         this.d2014=array[_i].D;
         this.r2014=array[_i].R;
      }else if(array[_i].ANIO=="2015"){
        this.a12015=array[_i].A1;
        this.a2015=array[_i].A;
        this.b2015=array[_i].B;
        this.c2015=array[_i].C;
        this.d2015=array[_i].D;
        this.r2015=array[_i].R;
      }else if(array[_i].ANIO=="2016"){
        this.a12016=array[_i].A1;
        this.a2016=array[_i].A;
        this.b2016=array[_i].B;
        this.c2016=array[_i].C;
        this.d2016=array[_i].D;
        this.r2016=array[_i].R;
      }else if(array[_i].ANIO=="2017"){
        this.a12017=array[_i].A1;
        this.a2017=array[_i].A;
        this.b2017=array[_i].B;
        this.c2017=array[_i].C;
        this.d2017=array[_i].D;
        this.r2017=array[_i].R;
      }else if(array[_i].ANIO=="2018"){
        this.a12018=array[_i].A1;
        this.a2018=array[_i].A;
        this.b2018=array[_i].B;
        this.c2018=array[_i].C;
        this.d2018=array[_i].D;
        this.r2018=array[_i].R;
      }
    }
  }

  createChart(){
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
      },{
        "year": 2015,
        "A1": this.a12015,
        "A": this.a2015,
        "B": this.b2015,
        "C": this.c2015,
        "D": this.d2015,
        "R": this.r2015
      },{
        "year": 2016,
        "A1": this.a12016,
        "A": this.a2016,
        "B": this.b2016,
        "C": this.c2016,
        "D": this.d2016,
        "R": this.r2016
      },{
        "year": 2017,
        "A1": this.a12017,
        "A": this.a2017,
        "B": this.b2017,
        "C": this.c2017,
        "D": this.d2017,
        "R": this.r2017
      },{
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
      
      var  valueAxis = chart.xAxes.push(new am4charts.ValueAxis()); 
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
