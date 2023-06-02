import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexLegend, ApexPlotOptions, ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis, ChartComponent } from 'ng-apexcharts';
import { interval, Subscription } from 'rxjs';
import { AppService } from 'src/app/data/services/app.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  markers: any; //ApexMarkers;
  stroke: any; //ApexStroke;
  yaxis: ApexYAxis;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  colors: string[];
  labels: string[] | number[];
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  legend: ApexLegend;
  fill: ApexFill;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-chart-ranking',
  templateUrl: './chart-ranking.component.html',
  styleUrls: ['./chart-ranking.component.css']
})
export class ChartRankingComponent {
  @ViewChild("chartCircle", { static: false }) chartCircle!: ChartComponent;
  public chartOptionsCircle?: Partial<ChartOptions> | any;

  loadingChartSpinner = true;
  valueChartSpinner = 0;

  constructor(private appService: AppService, private breakpointObserver: BreakpointObserver, private cdr: ChangeDetectorRef){
    this.appService.newTheme.subscribe((theme) => this.loadCharts(theme));
  }

  loadCharts(theme: string) {
    if (theme === "") return;
    this.loadingChartSpinner = true;
    let speedChart = 0;
    const themeColor = theme === 'dark' ? '#f2f2f2' : '#000';
    const isMovil = this.breakpointObserver.isMatched('(max-width: 768px)');
    if (isMovil) {
      const subs$: Subscription = interval(200).subscribe(res => {
        this.valueChartSpinner = this.valueChartSpinner + 45;
        if (this.valueChartSpinner === 135) {
          subs$.unsubscribe();
          speedChart = 120;
          this.setCharts(themeColor,speedChart);
        }
      });
    }
    else {
      speedChart = 400;
      this.setCharts(themeColor,speedChart);
    }
    // this.cdr.detectChanges();
  }

  setCharts(themeColor: string,speedChart:number) {
    this.loadingChartSpinner = false;
    this.valueChartSpinner = 0;

    this.chartOptionsCircle = {
      series: [70],
      chart: {
        height: 250,
        type: "radialBar",
        foreColor: themeColor,
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: speedChart,
          // animateGradually: {
          //   enabled: true,
          //   delay: 150
          // },
          // dynamicAnimation: {
          //   enabled: true,
          //   speed: 350
          // }
        }
      },
      theme: {
        mode: 'light'
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '70%',
          },
          track: {
            background: '#f2f2f2',
          },
        },
      },
      labels: ["Cricket"],
      legend: {
        labels: {
          colors: themeColor
        }
      },
    };
  }


}
