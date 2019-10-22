import { Component, OnInit,NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacDistanciaI04 } from 'src/app/models/fac-distancia-i04';

@Component({
  selector: 'app-fac-dis-i04',
  templateUrl: './fac-dis-i04.component.html',
  styleUrls: ['./fac-dis-i04.component.css']
})
export class FacDisI04Component implements OnInit {

  public barChart: am4charts.XYChart;
  public ticaAporte=0;
  public siekAporte=0;
  public ticaNumProductos=0;
  public siekNumProductos=0;  

  constructor(public zone: NgZone,public service: ServiceService) { }


  ngOnInit() {
    this.service.getFacDistanciaI04()
          .subscribe(res=>{
             this.service.facDisI04Array = res as FacDistanciaI04[];
             this.createChart();
             this.countAportes();
          });
  }

  countAportes(){
    const array = this.service.facDisI04Array as FacDistanciaI04[];

    for(var _i = 0; _i < array.length; _i++){
      if(array[_i].Grupo==="TICA"){
        this.ticaAporte+=array[_i].Valor;
        this.ticaNumProductos+=array[_i].Noproductosporgrupo;
      }else if(array[_i].Grupo==="SIEK"){
        this.siekAporte+=array[_i].Valor;
        this.siekNumProductos+=array[_i].Noproductosporgrupo;
      }
    }
  }



  createChart(){
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("barChart", am4charts.XYChart);
  
      // ... chart code goes here ...
      //chart.paddingRight = 20;
      this.countAportes();
      chart.data = [{
        "Grupo": "TIKA",
        "Aporte": this.siekAporte
      }, {
        "Grupo": "SIEK",
        "Aporte": this.ticaAporte
      }];

      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "Grupo";
      categoryAxis.title.text = "Grupo";

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.title.text = "Aporte";
      
      let series = chart.series.push(new am4charts.ColumnSeries());
    series.name = "Aporte";
    series.columns.template.tooltipText = "Series: {name}\nCategory: {categoryX}\nValue: {valueY}";
    series.columns.template.fill = am4core.color("#104547"); // fill
    series.dataFields.valueY = "Aporte";
    series.dataFields.categoryX = "Grupo";

      this.barChart = chart;
    });
  }



}
