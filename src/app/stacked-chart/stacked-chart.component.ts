import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-stacked-chart',
  templateUrl: './stacked-chart.component.html',
  styleUrls: [ './stacked-chart.component.html' ]
})
export class StackedChartComponent  {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['CDP', 'CDE', 'CDA'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

    public barChartData: ChartDataSets[] = [
      { data: [3200,0,6698], label: 'Java', stack: 'a' },
      { data: [1115,0,1700], label: 'Python', stack: 'a' },
      { data: [4736,0,0], label: 'Go', stack: 'a' },
      { data: [0,5600,0], label: 'TypeScript', stack: 'a' }
    ];

  constructor() { }

  ngOnInit() {
  }
}
