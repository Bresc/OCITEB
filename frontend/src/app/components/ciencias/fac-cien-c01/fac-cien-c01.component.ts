import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacCienciasC01 } from 'src/app/models/fac-ciencias-c01';
@Component({
  selector: 'app-fac-cien-c01',
  templateUrl: './fac-cien-c01.component.html',
  styleUrls: ['./fac-cien-c01.component.css']
})
export class FacCienC01Component implements OnInit {

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
    this.service.getFacCienciasC01()
    .subscribe(res=>{
        this.service.facCienC01Array = res as FacCienciasC01[];
        this.countData();
    });
  }
    countData(){
      const array = this.service.facCienC01Array as FacCienciasC01[];
      for (var _i = 0; _i < array.length; _i++){
          if(array[_i].Anio==="2014"){
            if(isNaN(array[_i].A1)){
              this.a12014=array[_i].A1;
            }
            if(isNaN(array[_i].A)){
              this.a2014=array[_i].A;
            }
            if(isNaN(array[_i].B)){
              this.b2014=array[_i].B;
            }
            if(isNaN(array[_i].C)){
              this.c2014=array[_i].C;
            }
            if(isNaN(array[_i].D)){
              this.d2014=array[_i].D;
            }
            if(isNaN(array[_i].R)){
              this.r2014=array[_i].R;
            }
          }else if(array[_i].Anio==="2015"){
            if(isNaN(array[_i].A1)){
              this.a12015=array[_i].A1;
            }
            if(isNaN(array[_i].A)){
              this.a2015=array[_i].A;
            }
            if(isNaN(array[_i].B)){
              this.b2015=array[_i].B;
            }
            if(isNaN(array[_i].C)){
              this.c2015=array[_i].C;
            }
            if(isNaN(array[_i].D)){
              this.d2015=array[_i].D;
            }
            if(isNaN(array[_i].R)){
              this.r2015=array[_i].R;
            }
          }else if(array[_i].Anio==="2016"){
            if(isNaN(array[_i].A1)){
              this.a12016=array[_i].A1;
            }
            if(isNaN(array[_i].A)){
              this.a2016=array[_i].A;
            }
            if(isNaN(array[_i].B)){
              this.b2016=array[_i].B;
            }
            if(isNaN(array[_i].C)){
              this.c2016=array[_i].C;
            }
            if(isNaN(array[_i].D)){
              this.d2016=array[_i].D;
            }
            if(isNaN(array[_i].R)){
              this.r2016=array[_i].R;
            }
          }else if(array[_i].Anio==="2017"){
            if(isNaN(array[_i].A1)){
              this.a12017=array[_i].A1;
            }
            if(isNaN(array[_i].A)){
              this.a2017=array[_i].A;
            }
            if(isNaN(array[_i].B)){
              this.b2017=array[_i].B;
            }
            if(isNaN(array[_i].C)){
              this.c2017=array[_i].C;
            }
            if(isNaN(array[_i].D)){
              this.d2017=array[_i].D;
            }
            if(isNaN(array[_i].R)){
              this.r2017=array[_i].R;
            }
          }else if(array[_i].Anio==="2018"){
            if(isNaN(array[_i].A1)){
              this.a12018=array[_i].A1;
            }
            if(isNaN(array[_i].A)){
              this.a2018=array[_i].A;
            }
            if(isNaN(array[_i].B)){
              this.b2018=array[_i].B;
            }
            if(isNaN(array[_i].C)){
              this.c2018=array[_i].C;
            }
            if(isNaN(array[_i].D)){
              this.d2018=array[_i].D;
            }
            if(isNaN(array[_i].R)){
              this.r2018=array[_i].R;
            }
          }
      }
    }
  }