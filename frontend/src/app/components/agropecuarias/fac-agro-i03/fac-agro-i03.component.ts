import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacAgropecuariaI03 } from 'src/app/models/fac-agropecuaria-i03';

@Component({
  selector: 'app-fac-agro-i03',
  templateUrl: './fac-agro-i03.component.html',
  styleUrls: ['./fac-agro-i03.component.css']
})
export class FacAgroI03Component implements OnInit {
  private barChart: am4charts.XYChart;
  private entidad2014 =0;
  private entidad2015=0; 
  private entidad2016=0; 
  private entidad2017 = 0;
  private entidad2018 = 0;
  private cenInvestigacion2014 =0;
  private cenInvestigacion2015=0; 
  private cenInvestigacion2016=0; 
  private cenInvestigacion2017 = 0;
  private cenInvestigacion2018 = 0;
  private colciencias2014 =0;
  private colciencias2015=0; 
  private colciencias2016=0; 
  private colciencias2017 = 0;
  private colciencias2018 = 0;
  private hospitales2014 =0;
  private hospitales2015=0; 
  private hospitales2016=0; 
  private hospitales2017 = 0;
  private hospitales2018 = 0;
  private privadas2014 =0;
  private privadas2015=0; 
  private privadas2016=0; 
  private privadas2017 = 0;
  private privadas2018 = 0;
  private ong2014 =0;
  private ong2015=0; 
  private ong2016=0; 
  private ong2017 = 0;
  private ong2018 = 0;
  constructor(private zone : NgZone, private service: ServiceService) { }

  ngOnInit() {

    this.service.getFacAgropecuariaI03()
          .subscribe(res=>{
             this.service.facAgroI03Array = res as FacAgropecuariaI03[];
             this.countAportes();
             this.createChart();
          });
  }

  countAportes(){
    const array = this.service.facAgroI03Array as FacAgropecuariaI03[];
    for(var _i = 0; _i < array.length; _i++){
        if(array[_i].TIPODEENTIDAD==="CENTRO DE INVESTIGACIÓN Y DESARROLLO TECNOLÓGICO"){
           if(array[_i].ANIOEJECUCION==="2014"){
              this.cenInvestigacion2014+=array[_i].MONTOEXTERNO1;
           }else if(array[_i].ANIOEJECUCION==="2015"){
              this.cenInvestigacion2015+=array[_i].MONTOEXTERNO1;
           }else if(array[_i].ANIOEJECUCION==="2016"){
            this.cenInvestigacion2016+=array[_i].MONTOEXTERNO1;
           }else if(array[_i].ANIOEJECUCION==="2017"){
            this.cenInvestigacion2017+=array[_i].MONTOEXTERNO1;
           }else if(array[_i].ANIOEJECUCION==="2018"){
            this.cenInvestigacion2018+=array[_i].MONTOEXTERNO1;
           }
        }else if(array[_i].TIPODEENTIDAD==="COLCIENCIAS"){
              if(array[_i].ANIOEJECUCION==="2014"){
                this.colciencias2014+=array[_i].MONTOEXTERNO1;
              }else if(array[_i].ANIOEJECUCION==="2015"){
                  this.colciencias2015+=array[_i].MONTOEXTERNO1;
              }else if(array[_i].ANIOEJECUCION==="2016"){
                  this.colciencias2016+=array[_i].MONTOEXTERNO1;
              }else if(array[_i].ANIOEJECUCION==="2017"){
                  this.colciencias2017+=array[_i].MONTOEXTERNO1;
              }else if(array[_i].ANIOEJECUCION==="2018"){
                  this.colciencias2018+=array[_i].MONTOEXTERNO1;
              }    
         }else if(array[_i].TIPODEENTIDAD==="ENTIDADES DEL GOBIERNO REGIONAL"){
          if(array[_i].ANIOEJECUCION==="2014"){
            this.entidad2014+=array[_i].MONTOEXTERNO1;
          }else if(array[_i].ANIOEJECUCION==="2015"){
              this.entidad2015+=array[_i].MONTOEXTERNO1;
          }else if(array[_i].ANIOEJECUCION==="2016"){
              this.entidad2016+=array[_i].MONTOEXTERNO1;
          }else if(array[_i].ANIOEJECUCION==="2017"){
              this.entidad2017+=array[_i].MONTOEXTERNO1;
          }else if(array[_i].ANIOEJECUCION==="2018"){
              this.entidad2018+=array[_i].MONTOEXTERNO1;
          } 
        }else if(array[_i].TIPODEENTIDAD==="INSTITUCIONES PRIVADAS SIN FINES DE LUCRO IPSFL"){
          if(array[_i].ANIOEJECUCION==="2014"){
            this.privadas2014+=array[_i].MONTOEXTERNO1;
          }else if(array[_i].ANIOEJECUCION==="2015"){
              this.privadas2015+=array[_i].MONTOEXTERNO1;
          }else if(array[_i].ANIOEJECUCION==="2016"){
              this.privadas2016+=array[_i].MONTOEXTERNO1;
          }else if(array[_i].ANIOEJECUCION==="2017"){
              this.privadas2017+=array[_i].MONTOEXTERNO1;
          }else if(array[_i].ANIOEJECUCION==="2018"){
              this.privadas2018+=array[_i].MONTOEXTERNO1;
          }
        }else if(array[_i].TIPODEENTIDAD==="ONG, ASOCIACIONES Y AGREMIACIONES PROFESIONALES"){
          if(array[_i].ANIOEJECUCION==="2014"){
            this.ong2014+=array[_i].MONTOEXTERNO1;
          }else if(array[_i].ANIOEJECUCION==="2015"){
              this.ong2015+=array[_i].MONTOEXTERNO1;
          }else if(array[_i].ANIOEJECUCION==="2016"){
              this.ong2016+=array[_i].MONTOEXTERNO1;
          }else if(array[_i].ANIOEJECUCION==="2017"){
              this.ong2017+=array[_i].MONTOEXTERNO1;
          }else if(array[_i].ANIOEJECUCION==="2018"){
              this.ong2018+=array[_i].MONTOEXTERNO1;
          }
        }else if(array[_i].TIPODEENTIDAD==="HOSPITALES Y CLÍNICAS"){
          if(array[_i].ANIOEJECUCION==="2014"){
            this.hospitales2014+=array[_i].MONTOEXTERNO1;
          }else if(array[_i].ANIOEJECUCION==="2015"){
              this.hospitales2015+=array[_i].MONTOEXTERNO1;
          }else if(array[_i].ANIOEJECUCION==="2016"){
              this.hospitales2016+=array[_i].MONTOEXTERNO1;
          }else if(array[_i].ANIOEJECUCION==="2017"){
              this.hospitales2017+=array[_i].MONTOEXTERNO1;
          }else if(array[_i].ANIOEJECUCION==="2018"){
              this.hospitales2018+=array[_i].MONTOEXTERNO1;
          }
        }
    }
  }
  
  createChart(){
    this.zone.runOutsideAngular(() => {
    
      let chart = am4core.create("barChart", am4charts.XYChart);

      // Add data
      chart.data = [{
        "year": "2017",
        "Entidades del Gobierno Regional": this.entidad2017
      }, {
        "year": "2018",
        "Entidades del Gobierno Regional": this.entidad2018
      }];

      // Create category axis
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "year";
      categoryAxis.renderer.opposite = true;

      // Create value axis
      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.inversed = true;
      valueAxis.title.text = "Place taken";
      valueAxis.renderer.minLabelPosition = 0.01;

      // Create series
      let series1 = chart.series.push(new am4charts.LineSeries());
      series1.dataFields.valueY = "Entidades del Gobierno Regional";
      series1.dataFields.categoryX = "year";
      series1.name = "Entidades del Gobierno Regional";
      series1.strokeWidth = 3;
      series1.bullets.push(new am4charts.CircleBullet());
      series1.tooltipText = "{categoryX}: {valueY}";
      series1.legendSettings.valueText = "{valueY}";
      series1.visible = false;

      

      // Add chart cursor
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.behavior = "zoomY";

      // Add legend
      chart.legend = new am4charts.Legend();
      this.barChart = chart;
    });
  }

}
