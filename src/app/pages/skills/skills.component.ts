import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexYAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
};

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: any;
  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Level",
          data: [80, 70, 80, 80, 80, 75, 90, 80, 80, 60, 80, 65, 60, 70]
        }
      ],
      chart: {
        type: "bar",
        height: this.setHeight(),
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "Angular",
          "React.js",
          "React Native",
          "Javascript",
          "Jquery",
          "SCSS",
          "Bootstrap",
          "Material UI",
          "Node.js",
          "Laravel",
          "Socket.io",
          "Pusher",
          "MySQL",
          "MongoDB"
        ],
        labels: {
          formatter: function (value: any) {
            return value + "%";
          },
          style: {
            colors: ['#ffffff'],
          },
        },
      },
      yaxis:{
        labels:{
          style: {
            colors: '#ffffff'
          },
        }
      }
    };
  }
  setHeight(){
    const divHeight = document.getElementById('fixedRow')
    return divHeight?.clientHeight
  }
}
