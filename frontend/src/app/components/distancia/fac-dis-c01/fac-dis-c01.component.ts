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
                this.createChart();
                this.countAportes();
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

  }

}
