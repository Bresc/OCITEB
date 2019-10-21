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
  private barChart: am4charts.XYChart;
  private junior2014=0;
  private asociado2014=0;
  private senior2014=0;
  private emerito2014=0;
  private junior2015=0;
  private asociado2015=0;
  private senior2015=0;
  private emerito2015=0;
  private junior2016=0;
  private asociado2016=0;
  private senior2016=0;
  private emerito2016=0;
  private junior2017=0;
  private asociado2017=0;
  private senior2017=0;
  private emerito2017=0;
  private junior2018=0;
  private asociado2018=0;
  private senior2018=0;
  private emerito2018=0;
  constructor(private zone : NgZone, private service : ServiceService) { }

  ngOnInit() {

      this.service.getFacDistanciaC02()
          .subscribe(res=>{
              this.service.facDisC02Array = res as FacDistanciaC02[];
              this.countData();
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

}
