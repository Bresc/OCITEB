import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacAgropecuariaI04 } from 'src/app/models/fac-agropecuaria-i04';

@Component({
  selector: 'app-fac-agro-i04',
  templateUrl: './fac-agro-i04.component.html',
  styleUrls: ['./fac-agro-i04.component.css']
})
export class FacAgroI04Component implements OnInit {
  public barChart: am4charts.XYChart;
  public gibnaAporte=0;
  public gipsoAporte=0;
  public gidimevetzAporte=0;
  public giaAporte=0;
  public cideAporte=0;
  public gibnaNumProductos=0;
  public gipsoNumProductos=0;
  public gidimevetzNumProductos=0;
  public giaNumProductos=0;
  public cideNumProductos=0;  
  constructor(public zone: NgZone,public service: ServiceService) { }

  ngOnInit() {
    this.service.getFacAgropecuariaI04()
          .subscribe(res=>{
             this.service.facAgroI04Array = res as FacAgropecuariaI04[];
             this.createChart();
             this.countAportes();
          });
  }

  countAportes(){
    const array = this.service.facAgroI04Array as FacAgropecuariaI04[];

    for(var _i = 0; _i < array.length; _i++){
      if(array[_i].Grupo==="GIBNA"){
        this.gibnaAporte=array[_i].Valor;
        this.gibnaNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="GIPSO"){
        this.gipsoAporte=array[_i].Valor;
        this.gipsoNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="GIDIMEVETZ"){
        this.gidimevetzAporte=array[_i].Valor;
        this.gidimevetzNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="GIA"){
        this.giaAporte=array[_i].Valor;
        this.giaNumProductos=array[_i].Noproductos;
      }else if(array[_i].Grupo==="CIDE"){
        this.cideAporte=array[_i].Valor;
        this.cideNumProductos=array[_i].Noproductos;
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
        "Grupo": "GIBNA",
        "Aporte": this.gibnaAporte
      }, {
        "Grupo": "GIPSO",
        "Aporte": this.gipsoAporte
      },{
        "Grupo": "GIDIMEVETZ",
        "Aporte": this.gidimevetzAporte
      },{
        "Grupo": "GIA",
        "Aporte": this.giaAporte
      },
      {
        "Grupo": "CIDE",
        "Aporte": this.cideAporte
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
