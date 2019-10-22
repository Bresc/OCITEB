import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacDistanciaC02 } from 'src/app/models/fac-distancia-c02';

@Component({
  selector: 'app-fac-dis-c02',
  templateUrl: './fac-dis-c02.component.html',
  styleUrls: ['./fac-dis-c02.component.css']
})
export class FacDisC02Component implements OnInit {
  public barChart: am4charts.XYChart;
  public junior2014=0;
  public asociado2014=0;
  public senior2014=0;
  public emerito2014=0;
  public junior2015=0;
  public asociado2015=0;
  public senior2015=0;
  public emerito2015=0;
  public junior2016=0;
  public asociado2016=0;
  public senior2016=0;
  public emerito2016=0;
  public junior2017=0;
  public asociado2017=0;
  public senior2017=0;
  public emerito2017=0;
  public junior2018=0;
  public asociado2018=0;
  public senior2018=0;
  public emerito2018=0;
  constructor(public zone : NgZone, public service : ServiceService) { }

  ngOnInit() {

      this.service.getFacDistanciaC02()
          .subscribe(res=>{
              this.service.facDisC02Array = res as FacDistanciaC02[];
              this.countData();
              this.createChart();
          });
  }

  countData(){
      const array = this.service.facDisC02Array as FacDistanciaC02[];

      for(var _i = 0; _i < array.length; _i++){
          if(array[_i].ANIO==="2014"){
              if(!isNaN(array[_i].InvestigadorJunior)){
                  this.junior2014=array[_i].InvestigadorJunior;
              }
              if(!isNaN(array[_i].InvestigadorAsociado)){
                this.asociado2014=array[_i].InvestigadorAsociado;
              }
              if(!isNaN(array[_i].InvestigadorSenior)){
                this.senior2014=array[_i].InvestigadorSenior;
              }
              if(!isNaN(array[_i].InvestigadorEmerito)){
                this.emerito2014=array[_i].InvestigadorEmerito;
              }
          }else if(array[_i].ANIO==="2015"){
            if(!isNaN(array[_i].InvestigadorJunior)){
                this.junior2015=array[_i].InvestigadorJunior;
            }
            if(!isNaN(array[_i].InvestigadorAsociado)){
               this.asociado2015=array[_i].InvestigadorAsociado;
            }
            if(!isNaN(array[_i].InvestigadorSenior)){
                this.senior2015=array[_i].InvestigadorSenior;
            }
            if(!isNaN(array[_i].InvestigadorEmerito)){
                this.emerito2015=array[_i].InvestigadorEmerito;
            }
          }else if(array[_i].ANIO==="2016"){
            if(!isNaN(array[_i].InvestigadorJunior)){
                this.junior2016=array[_i].InvestigadorJunior;
            }
            if(!isNaN(array[_i].InvestigadorAsociado)){
               this.asociado2016=array[_i].InvestigadorAsociado;
            }
            if(!isNaN(array[_i].InvestigadorSenior)){
                this.senior2016=array[_i].InvestigadorSenior;
            }
            if(!isNaN(array[_i].InvestigadorEmerito)){
                this.emerito2016=array[_i].InvestigadorEmerito;
            }
          }else if(array[_i].ANIO==="2017"){
            if(!isNaN(array[_i].InvestigadorJunior)){
                this.junior2017=array[_i].InvestigadorJunior;
            }
            if(!isNaN(array[_i].InvestigadorAsociado)){
               this.asociado2017=array[_i].InvestigadorAsociado;
            }
            if(!isNaN(array[_i].InvestigadorSenior)){
                this.senior2017=array[_i].InvestigadorSenior;
            }
            if(!isNaN(array[_i].InvestigadorEmerito)){
                this.emerito2017=array[_i].InvestigadorEmerito;
            }
          }else if(array[_i].ANIO==="2018"){
            if(!isNaN(array[_i].InvestigadorJunior)){
                this.junior2018=array[_i].InvestigadorJunior;
            }
            if(!isNaN(array[_i].InvestigadorAsociado)){
               this.asociado2018=array[_i].InvestigadorAsociado;
            }
            if(!isNaN(array[_i].InvestigadorSenior)){
                this.senior2018=array[_i].InvestigadorSenior;
            }
            if(!isNaN(array[_i].InvestigadorEmerito)){
                this.emerito2018=array[_i].InvestigadorEmerito;
            }
          }
      }
  }

  createChart(){
    this.zone.runOutsideAngular(() => {
    
      var chart = am4core.create("barChart", am4charts.XYChart);

      // Add data
      chart.data = [{
        "year": 2014,
        "Junior": this.junior2014,
        "Asociado": this.asociado2014,
        "Senior": this.senior2014,
        "Emérito": this.emerito2014
      },{
        "year": 2015,
        "Junior": this.junior2015,
        "Asociado": this.asociado2015,
        "Senior": this.senior2015,
        "Emérito": this.emerito2015
      },{
        "year": 2016,
        "Junior": this.junior2016,
        "Asociado": this.asociado2016,
        "Senior": this.senior2016,
        "Emérito": this.emerito2016
      },{
        "year": 2017,
        "Junior": this.junior2017,
        "Asociado": this.asociado2017,
        "Senior": this.senior2017,
        "Emérito": this.emerito2017
      },{
        "year": 2018,
        "Junior": this.junior2018,
        "Asociado": this.asociado2018,
        "Senior": this.senior2018,
        "Emérito": this.emerito2018
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
      createSeries("Junior", "Junior");
      createSeries("Asociado", "Asociado");
      createSeries("Senior", "Senior");
      createSeries("Emérito", "Emérito");
      chart.legend = new am4charts.Legend();
  });


  }

}
