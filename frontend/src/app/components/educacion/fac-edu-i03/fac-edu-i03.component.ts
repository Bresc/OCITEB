import { Component, OnInit,NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ServiceService } from 'src/app/services/service.service';
import { FacEducacionI03 } from 'src/app/models/fac-educacion-i03';

@Component({
  selector: 'app-fac-edu-i03',
  templateUrl: './fac-edu-i03.component.html',
  styleUrls: ['./fac-edu-i03.component.css']
})
export class FacEduI03Component implements OnInit {
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
  private privadas2014 =0;
  private privadas2015=0; 
  private privadas2016=0; 
  private privadas2017 = 0;
  private privadas2018 = 0;
  constructor(private zone: NgZone, private service: ServiceService) { }

  ngOnInit() {
    this.service.getFacEducacionI03()
    .subscribe(res=>{
        this.service.facEduI03Array = res as FacEducacionI03[];
        this.countAportes();
        this.createChart();
    });
  }


  countAportes(){
    const array = this.service.facEduI03Array as FacEducacionI03[];
    
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
      }
  }
  }

  createChart() {
    this.zone.runOutsideAngular(() => {
    
      let chart = am4core.create("barChart", am4charts.XYChart);

      // Add data
      chart.data = [{
        "year": "2014",
        "Centro de investigación y desarrollo tecnológico	": this.cenInvestigacion2014,
        "Colciencias": this.colciencias2014,
        "Entidades del Gobierno Regional": this.entidad2014,
        "Instituciones privadas sin fines de lucro IPSFL":this.privadas2014
      }, {
        "year": "2015",
        "Centro de investigación y desarrollo tecnológico	": this.cenInvestigacion2015,
        "Colciencias": this.colciencias2015,
        "Entidades del Gobierno Regional": this.entidad2015,
        "Instituciones privadas sin fines de lucro IPSFL":this.privadas2015
      }, {
        "year": "2016",
        "Centro de investigación y desarrollo tecnológico	": this.cenInvestigacion2016,
        "Colciencias": this.colciencias2016,
        "Entidades del Gobierno Regional": this.entidad2016,
        "Instituciones privadas sin fines de lucro IPSFL":this.privadas2016
      }, {
        "year": "2017",
        "Centro de investigación y desarrollo tecnológico	": this.cenInvestigacion2017,
        "Colciencias": this.colciencias2017,
        "Entidades del Gobierno Regional": this.entidad2017,
        "Instituciones privadas sin fines de lucro IPSFL":this.privadas2017
      }, {
        "year": "2018",
        "Centro de investigación y desarrollo tecnológico	": this.cenInvestigacion2018,
        "Colciencias": this.colciencias2018,
        "Entidades del Gobierno Regional": this.entidad2018,
        "Instituciones privadas sin fines de lucro IPSFL":this.privadas2018
      }];

      // Create category axis
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "year";
      categoryAxis.renderer.opposite = false;

      // Create value axis
      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.inversed = false;
      valueAxis.title.text = "Place taken";
      valueAxis.renderer.minLabelPosition = 0.01;

      // Create series
      let series1 = chart.series.push(new am4charts.LineSeries());
      series1.dataFields.valueY = "Centro de investigación y desarrollo tecnológico	";
      series1.dataFields.categoryX = "year";
      series1.name = "Centro de investigación y desarrollo tecnológico	";
      series1.strokeWidth = 3;
      series1.bullets.push(new am4charts.CircleBullet());
      series1.tooltipText = "{name} in {categoryX}: {valueY}";
      series1.legendSettings.valueText = "{valueY}";
      series1.visible = false;

      let series2 = chart.series.push(new am4charts.LineSeries());
      series2.dataFields.valueY = "Colciencias";
      series2.dataFields.categoryX = "year";
      series2.name = 'Colciencias';
      series2.strokeWidth = 3;
      series2.bullets.push(new am4charts.CircleBullet());
      series2.tooltipText = "{name} in {categoryX}: {valueY}";
      series2.legendSettings.valueText = "{valueY}";

      let series3 = chart.series.push(new am4charts.LineSeries());
      series3.dataFields.valueY = "Entidades del Gobierno Regional";
      series3.dataFields.categoryX = "year";
      series3.name = 'Entidades del Gobierno Regional';
      series3.strokeWidth = 3;
      series3.bullets.push(new am4charts.CircleBullet());
      series3.tooltipText = "Place taken by {name} in {categoryX}: {valueY}";
      series3.legendSettings.valueText = "{valueY}";

      let series4 = chart.series.push(new am4charts.LineSeries());
      series4.dataFields.valueY = "Hospitales y Clínicas";
      series4.dataFields.categoryX = "year";
      series4.name = 'Hospitales y Clínicas';
      series4.strokeWidth = 3;
      series4.bullets.push(new am4charts.CircleBullet());
      series4.tooltipText = "Place taken by {name} in {categoryX}: {valueY}";
      series4.legendSettings.valueText = "{valueY}";

      let series5 = chart.series.push(new am4charts.LineSeries());
      series5.dataFields.valueY = "Instituciones privadas sin fines de lucro IPSFL";
      series5.dataFields.categoryX = "year";
      series5.name = 'Instituciones privadas sin fines de lucro IPSFL';
      series5.strokeWidth = 3;
      series5.bullets.push(new am4charts.CircleBullet());
      series5.tooltipText = "Place taken by {name} in {categoryX}: {valueY}";
      series5.legendSettings.valueText = "{valueY}";

      let series6 = chart.series.push(new am4charts.LineSeries());
      series6.dataFields.valueY = "ONG Asociaciones y Agremiaciones Profesionales";
      series6.dataFields.categoryX = "year";
      series6.name = 'ONG Asociaciones y Agremiaciones Profesionales';
      series6.strokeWidth = 3;
      series6.bullets.push(new am4charts.CircleBullet());
      series6.tooltipText = "Place taken by {name} in {categoryX}: {valueY}";
      series6.legendSettings.valueText = "{valueY}";

      // Add chart cursor
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.behavior = "zoomY";

      // Add legend
      chart.legend = new am4charts.Legend();
      this.barChart = chart;
    });
   
  }

}
