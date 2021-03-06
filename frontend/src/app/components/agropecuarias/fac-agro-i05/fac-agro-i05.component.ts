import { Component, OnInit,NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacAgropecuariaI05 } from 'src/app/models/fac-agropecuaria-i05';

@Component({
  selector: 'app-fac-agro-i05',
  templateUrl: './fac-agro-i05.component.html',
  styleUrls: ['./fac-agro-i05.component.css']
})
export class FacAgroI05Component implements OnInit {
  public barChart: am4charts.XYChart;
  public aport2014=0;
  public aport2015=0;
  public aport2016=0;
  public aport2017=0;
  public aport2018=0;
  constructor(public zone: NgZone, public service: ServiceService) { }

  ngOnInit() {
    this.service.getFacAgropecuariaI05()
          .subscribe(res=>{
             this.service.facAgroI05Array = res as FacAgropecuariaI05[];
             this.countAportes();
             this.createChart();
          });
  }

  countAportes(){
    const array = this.service.facAgroI05Array as FacAgropecuariaI05[];
    for(var _i = 0; _i < array.length; _i++){
        if(array[_i].Vigenciadocumento==="2014"){
          if(!isNaN(array[_i].Valorrecaudo)){
           this.aport2014+=array[_i].Valorrecaudo;
          }
        }else if(array[_i].Vigenciadocumento==="2015"){
          if(!isNaN(array[_i].Valorrecaudo)){
            this.aport2015+=array[_i].Valorrecaudo;
           }
        }else if(array[_i].Vigenciadocumento==="2016"){
          if(!isNaN(array[_i].Valorrecaudo)){
            this.aport2016+=array[_i].Valorrecaudo;
           }
        }else if(array[_i].Vigenciadocumento==="2017"){
          if(!isNaN(array[_i].Valorrecaudo)){
            this.aport2017+=array[_i].Valorrecaudo;
           }
        }else if(array[_i].Vigenciadocumento==="2018"){
          if(!isNaN(array[_i].Valorrecaudo)){
            this.aport2018+=array[_i].Valorrecaudo;
           }
        }
    }
  }

  createChart(){
    this.zone.runOutsideAngular(() => {
      var chart = am4core.create("barChart", am4charts.XYChart3D);

      // Add data
      chart.data = [{
        "year": 2014,
        "income": this.aport2014,
        "color": chart.colors.next()
      }, {
        "year": 2015,
        "income": this.aport2015,
        "color": chart.colors.next()
      }, {
        "year": 2016,
        "income": this.aport2016,
        "color": chart.colors.next()
      }, {
        "year": 2017,
        "income": this.aport2017,
        "color": chart.colors.next()
      }, {
        "year": 2018,
        "income": this.aport2018,
        "color": chart.colors.next()
      }];
      
      // Create axes
      var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "year";
      categoryAxis.numberFormatter.numberFormat = "#";
      categoryAxis.renderer.inversed = true;
      
      var  valueAxis = chart.xAxes.push(new am4charts.ValueAxis()); 
      
      // Create series
      var series = chart.series.push(new am4charts.ColumnSeries3D());
      series.dataFields.valueX = "income";
      series.dataFields.categoryY = "year";
      series.name = "Income";
      series.columns.template.propertyFields.fill = "color";
      series.columns.template.tooltipText = "{valueX}";
      series.columns.template.column3D.stroke = am4core.color("#fff");
      series.columns.template.column3D.strokeOpacity = 0.2;

      this.barChart = chart;
      
      }); // end am4core.ready()
  }

}
