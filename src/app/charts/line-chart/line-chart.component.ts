import { Component, OnInit } from '@angular/core';
import {LINE_CHART_COLORS} from '../../shared/chart.colors';

const LINE_CHART_SAMPLE_DATA: any[] = [
  { data:[32, 14, 66, 21, 76, 20], label: 'A'},
  { data:[12, 23, 52, 62, 19, 70], label: 'B'},
  { data:[70, 21, 11, 93, 50, 60], label: 'C'},
];
const LINE_CHART_LABELS: string[] = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  public lineChartData = LINE_CHART_SAMPLE_DATA;
  public lineChartLabels = LINE_CHART_LABELS;
  public lineChartOptions: any = {
    responsive: true
  };

  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartColors = LINE_CHART_COLORS;


  ngOnInit() {
  }
}
