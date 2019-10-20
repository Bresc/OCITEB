import { Component, OnInit,NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacDistanciaI05 } from 'src/app/models/fac-distancia-i05';

@Component({
  selector: 'app-fac-dis-i05',
  templateUrl: './fac-dis-i05.component.html',
  styleUrls: ['./fac-dis-i05.component.css']
})
export class FacDisI05Component implements OnInit {
  private barChart: am4charts.XYChart;
  private aport2014=0;
  private aport2015=0;
  private aport2016=0;
  private aport2017=0;
  private aport2018=0;
  constructor(private zone: NgZone, private service: ServiceService) { }

  ngOnInit() {
    this.service.getFacDistanciaI05()
          .subscribe(res=>{
             this.service.facDisI05Array = res as FacDistanciaI05[];
             this.createChart();
             this.countAportes();
          });
  }

  countAportes(){
    const array = this.service.facDisI05Array as FacDistanciaI05[];
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
