import { Component, OnInit,NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacDistanciaI06 } from 'src/app/models/fac-distancia-i06';

@Component({
  selector: 'app-fac-dis-i06',
  templateUrl: './fac-dis-i06.component.html',
  styleUrls: ['./fac-dis-i06.component.css']
})
export class FacDisI06Component implements OnInit {
  private barChart: am4charts.XYChart;
  private aport2014=0;
  private aport2015=0;
  private aport2016=0;
  private aport2017=0;
  private aport2018=0;
  constructor(private zone:NgZone,private service: ServiceService) { }

  ngOnInit() {
      this.service.getFacDistanciaI06()
          .subscribe(res=>{
              this.service.facDisI06Array = res as FacDistanciaI06[];
              this.createChart();
              this.countAportes();
          });
  }

  countAportes(){
    const array = this.service.facDisI06Array as FacDistanciaI06[];
    for(var _i = 0; _i < array.length; _i++){
        if(array[_i].Anio==="2014"){
           this.aport2014+=array[_i].Aporte;
        }else if(array[_i].Anio==="2015"){
          this.aport2015+=array[_i].Aporte;
        }else if(array[_i].Anio==="2016"){
          this.aport2016+=array[_i].Aporte;
        }else if(array[_i].Anio==="2017"){
          this.aport2017+=array[_i].Aporte;
        }else if(array[_i].Anio==="2018"){
          this.aport2018+=array[_i].Aporte;
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
