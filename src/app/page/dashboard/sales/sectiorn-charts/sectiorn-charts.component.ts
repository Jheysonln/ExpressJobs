import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewChild } from '@angular/core';
import { utcFormat } from 'd3';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexLegend, ApexPlotOptions, ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis, ChartComponent } from 'ng-apexcharts';
import { interval, Observable, Subscription } from 'rxjs';
import { AppService } from 'src/app/services/app.service';

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
  selector: 'app-sectiorn-charts',
  templateUrl: './sectiorn-charts.component.html',
  styleUrls: ['./sectiorn-charts.component.scss']
})
export class SectiornChartsComponent implements OnInit {

  @ViewChild("chartAreaRed", { static: false }) chartAreaRed!: ChartComponent;
  public chartOptionsAreaRed?: Partial<ChartOptions> | any;
  @ViewChild("chartAreaPurple", { static: false }) chartAreaPurple!: ChartComponent;
  public chartOptionsAreaPurple?: Partial<ChartOptions> | any;
  @ViewChild("chartAreaYellow", { static: false }) chartAreaYellow!: ChartComponent;
  public chartOptionsAreaYellow?: Partial<ChartOptions> | any;
  @ViewChild("chartAreaGreen", { static: false }) chartAreaGreen!: ChartComponent;
  public chartOptionsAreaGreen?: Partial<ChartOptions> | any;

  valueChartSpinner = 0;
  loadingChartSpinner = true;

  constructor(private breakpointObserver: BreakpointObserver,private appService: AppService,private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.appService.newTheme.subscribe((theme) => this.loadCharts(theme));
  }

  loadCharts(theme: string) {
    if (theme === "") return;
    this.loadingChartSpinner = true;
    let speedChart = 0;
    const isMovil = this.breakpointObserver.isMatched('(max-width: 768px)');
    if (isMovil) {
      const subs$: Subscription = interval(200).subscribe(res => {
        this.valueChartSpinner = this.valueChartSpinner + 45;
        if (this.valueChartSpinner === 135) {
          subs$.unsubscribe();
          speedChart = 120;
          this.setCharts(speedChart);
        }
      });
    }
    else {
      speedChart = 400;
      this.setCharts(speedChart);
    }
    this.cdr.detectChanges();
  }


  setCharts(speedChart:number) {
    this.loadingChartSpinner = false;
    this.valueChartSpinner = 0;
    this.chartOptionsAreaRed = {
      series: [{
        name: 'Total Orders',
        data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257]
      }],
      chart: {
        type: 'area',
        height: 65,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        dropShadow: {
          enabled: true,
          top: 3,
          left: 14,
          blur: 4,
          opacity: 0.12,
          color: '#f41127',
        },
        sparkline: {
          enabled: true
        },
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
        },
      },
      markers: {
        size: 0,
        colors: ["#f41127"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
          size: 7,
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '45%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2.4,
        curve: 'smooth'
      },
      colors: ["#f41127"],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        theme: 'dark',
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function (seriesName: any) {
              return ''
            }
          }
        },
        marker: {
          show: false
        }
      }
    }
    this.chartOptionsAreaPurple = {
      series: [{
        name: 'Total Income',
        data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257]
      }],
      chart: {
        type: 'area',
        height: 65,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        dropShadow: {
          enabled: true,
          top: 3,
          left: 14,
          blur: 4,
          opacity: 0.12,
          color: '#8833ff',
        },
        sparkline: {
          enabled: true
        },
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
      markers: {
        size: 0,
        colors: ["#8833ff"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
          size: 7,
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '45%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2.4,
        curve: 'smooth'
      },
      colors: ["#8833ff"],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        theme: 'dark',
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function (seriesName: any) {
              return ''
            }
          }
        },
        marker: {
          show: false
        }
      }
    }
    this.chartOptionsAreaYellow = {
      series: [{
        name: 'Total Users',
        data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257]
      }],
      chart: {
        type: 'area',
        height: 65,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        dropShadow: {
          enabled: true,
          top: 3,
          left: 14,
          blur: 4,
          opacity: 0.12,
          color: '#ffb207',
        },
        sparkline: {
          enabled: true
        },
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
      markers: {
        size: 0,
        colors: ["#ffb207"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
          size: 7,
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '45%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2.4,
        curve: 'smooth'
      },
      colors: ["#ffb207"],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        theme: 'dark',
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function (seriesName: any) {
              return ''
            }
          }
        },
        marker: {
          show: false
        }
      }
    }
    this.chartOptionsAreaGreen = {
      series: [{
        name: 'Comments',
        data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257]
      }],
      chart: {
        type: 'area',
        height: 65,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        dropShadow: {
          enabled: true,
          top: 3,
          left: 14,
          blur: 4,
          opacity: 0.12,
          color: '#29cc39',
        },
        sparkline: {
          enabled: true
        },
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
      markers: {
        size: 0,
        colors: ["#29cc39"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
          size: 7,
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '45%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2.4,
        curve: 'smooth'
      },
      colors: ["#29cc39"],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        theme: 'dark',
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function (seriesName: any) {
              return ''
            }
          }
        },
        marker: {
          show: false
        }
      }
    }
  }

}
