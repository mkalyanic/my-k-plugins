
import { Component } from '@angular/core';
import * as Highcharts from "highcharts/highcharts";
import { Options } from "highcharts";

import  highchartsHeatmap from 'highcharts/modules/heatmap';
  highchartsHeatmap(Highcharts);

import  treemap from 'highcharts/modules/treemap';
  treemap(Highcharts)

 import { DataService } from "../../data.service";


@Component({
  selector: 'app-heatmap-chart',
  templateUrl: './heatmap-chart.component.html',
  styleUrls: ['./heatmap-chart.component.css']
})


export class HeatmapChartComponent  {

  chartOptions: Options 
  Highcharts: typeof Highcharts = Highcharts; // required
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false

  constructor( dataService:DataService ){
    
      this.chartOptions = {
        chart: {
          type: 'heatmap',
          marginTop: 40,
          marginBottom: 80,
          plotBorderWidth: 1
        },
      
        title: {
          text: 'Sales per employee per weekday'
        },
      
        xAxis: {
          categories: dataService.getXaxisCategories()
        },
      
        yAxis: {
          categories: dataService.getYaxisCategories(),
          title: null,
          reversed: true
        },
      
        // accessibility: {
        //   point: {
        //       descriptionFormatter: function (point) {
        //           var ix = point.index + 1,
        //               xName = getPointCategoryName(point, 'x'),
        //               yName = getPointCategoryName(point, 'y'),
        //               val = point.value;
        //           return ix + '. ' + xName + ' sales ' + yName + ', ' + val + '.';
        //       }
        //   }
        // },
      
        colorAxis: {
          min: 0,
          minColor: '#FFFFFF',
          // maxColor: highcharts.getOptions().colors[0]
        },
      
        legend: {
          align: 'right',
          layout: 'vertical',
          margin: 0,
          verticalAlign: 'top',
          y: 25,
          symbolHeight: 280
        },
      
        tooltip: {
          // formatter: function () :any {
          //     return '<b>' + getPointCategoryName(this.point, 'x') + '</b> sold <br><b>' +
          //         this.point.value + '</b> items on <br><b>' + getPointCategoryName(this.point, 'y') + '</b>';
          // }
      },
      
      
      series: [{
        name: 'Sales per employee',
        borderWidth: 1,
        type: "heatmap",
        data: dataService.getData(),
        
        dataLabels: {
            enabled: true,
            color: '#000000'
        }
      }],
      
      responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                yAxis: {
                    labels: {
                        // formatter: function () {
                        //     return this.value.charAt(0);
                        // }
                    }
                }
            }//chartOption
        }]//rules
      }
    }//chart option
  }//constructor

}
  
