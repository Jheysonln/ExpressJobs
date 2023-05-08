import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexYAxis, ApexPlotOptions, ApexDataLabels, ApexTitleSubtitle, ApexLegend, ApexFill, ApexTooltip, ChartComponent } from 'ng-apexcharts';
import { Subscription, interval } from 'rxjs';
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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild("chartAreaPurple", { static: false }) chartAreaPurple!: ChartComponent;
  public chartOptionsAreaPurple?: Partial<ChartOptions> | any;
  @ViewChild("chartAreaInfo", { static: false }) chartAreaInfo!: ChartComponent;
  public chartOptionsBarInfo?: Partial<ChartOptions> | any;
  @ViewChild("chartAreaYellow", { static: false }) chartAreaYellow!: ChartComponent;
  public chartOptionsAreaYellow?: Partial<ChartOptions> | any;
  @ViewChild("chartAreaRed", { static: false }) chartAreaRed!: ChartComponent;
  public chartOptionsBarRed?: Partial<ChartOptions> | any;
  @ViewChild("chartAreaGreen", { static: false }) chartAreaGreen!: ChartComponent;
  public chartOptionsAreaGreen?: Partial<ChartOptions> | any;
  @ViewChild("chartAreaPink", { static: false }) chartAreaPink!: ChartComponent;
  public chartOptionsAreaPink?: Partial<ChartOptions> | any;
  @ViewChild("chartBarPrimary", { static: false }) chartBarPrimary!: ChartComponent;
  public chartOptionsBarPrimary?: Partial<ChartOptions> | any;
  @ViewChild("chartCircle", { static: false }) chartCircle!: ChartComponent;
  public chartOptionsCircle?: Partial<ChartOptions> | any;
  @ViewChild("chartPolarArea", { static: false }) chartPolarArea!: ChartComponent;
  public chartOptionsPolarArea?: Partial<ChartOptions> | any;
  @ViewChild("chartAreaPurple2", { static: false }) chartAreaPurple2!: ChartComponent;
  public chartOptionsAreaPurple2?: Partial<ChartOptions> | any;
  @ViewChild("chartAreaInfo2", { static: false }) chartAreaInfo2!: ChartComponent;
  public chartOptionsBarInfo2?: Partial<ChartOptions> | any;
  @ViewChild("chartAreaGreen2", { static: false }) chartAreaGreen2!: ChartComponent;
  public chartOptionsAreaGreen2?: Partial<ChartOptions> | any;

  chargeMaps: boolean = false;
  options?: google.maps.MapOptions;
  markers: any;

  valueChartSpinner = 0;
  loadingChartSpinner = true;

  constructor(private appService: AppService, private breakpointObserver: BreakpointObserver, private cdr: ChangeDetectorRef, private router: Router) {
  }

  ngOnInit(): void {
    this.appService.newTheme.subscribe((theme) => this.loadCharts(theme));
    this.getMaps();
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
    this.cdr.detectChanges();
  }


  setCharts(themeColor: string,speedChart:number) {
    this.loadingChartSpinner = false;
    this.valueChartSpinner = 0;
    this.chartOptionsAreaPurple = {
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100]
        }
      ],
      colors: ["#6f42c1"],
      chart: {
        type: "area",
        width: "100%",
        height: 80,
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
      stroke: {
        curve: "smooth"
      },
      fill: {
        opacity: 0.3
      },
      yaxis: {
        min: 0
      },
      tooltip: {
        theme: "dark",
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function (seriesName: any) {
              return "";
            }
          }
        },
        marker: {
          show: false
        }
      }
    };

    this.chartOptionsAreaYellow = {
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100]
        }
      ],
      colors: ["#ffc107"],
      chart: {
        type: "area",
        height: 80,
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
      stroke: {
        curve: "smooth"
      },
      fill: {
        opacity: 0.3
      },
      yaxis: {
        min: 0
      },
      tooltip: {
        theme: "dark",
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function (seriesName: any) {
              return "";
            }
          }
        },
        marker: {
          show: false
        }
      }
    };

    this.chartOptionsAreaGreen = {
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100]
        }
      ],
      colors: ["#198754"],
      chart: {
        type: "area",
        height: 80,
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
      stroke: {
        curve: "smooth"
      },
      fill: {
        opacity: 0.3
      },
      yaxis: {
        min: 0
      },
      tooltip: {
        theme: "dark",
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function (seriesName: any) {
              return "";
            }
          }
        },
        marker: {
          show: false
        }
      }
    };

    this.chartOptionsBarRed = {
      series: [
        {
          name: "Net Profit",
          data: [40, 24, 55, 50, 30, 40, 24, 55, 20]
        }
      ],
      colors: ["#dc3545"],
      chart: {
        type: "bar",
        height: 80,
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
      plotOptions: {
        bar: {
          columnWidth: "55%",
          endingShape: "rounded"
        }
      },
      tooltip: {
        theme: "dark",
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function (seriesName: any) {
              return "";
            }
          }
        },
        marker: {
          show: false
        }
      }
    };

    this.chartOptionsBarInfo = {
      series: [
        {
          name: "Net Profit",
          data: [40, 24, 55, 50, 30, 40, 24, 55, 20]
        }
      ],
      colors: ["#0dcaf0"],
      chart: {
        type: "bar",
        height: 80,
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
      plotOptions: {
        bar: {
          columnWidth: "55%",
          endingShape: "rounded"
        }
      },
      tooltip: {
        theme: "dark",
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function (seriesName: any) {
              return "";
            }
          }
        },
        marker: {
          show: false
        }
      }
    };

    this.chartOptionsAreaPink = {
      series: [
        {
          name: "series1",
          color: "#d63384",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: "series2",
          color: "#c8508c",
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ],
      legend: {
        labels: {
          colors: themeColor
        }
      },
      theme: {
        mode: 'light'
      },
      colors: "#d63384",
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: true
        },
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
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ]
      },
      tooltip: {
        theme: "dark",
        fixed: {
          enabled: false
        },
        x: {
          format: "dd/MM/yy HH:mm"
        },
        y: {
          title: {
            formatter: function (seriesName: any) {
              return "";
            }
          }
        },
        marker: {
          show: false
        }
      }
    };

    this.chartOptionsBarPrimary = {
      series: [
        {
          name: "series1",
          color: "#0d6efd",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: "series2",
          color: "#0dcaf0",
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ],
      theme: {
        mode: 'light'
      },
      colors: "#d63384",
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: true
        },
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
      legend: {
        labels: {
          colors: themeColor
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ]
      },
      tooltip: {
        theme: "dark",
        fixed: {
          enabled: false
        },
        x: {
          format: "dd/MM/yy HH:mm"
        },
        y: {
          title: {
            formatter: function (seriesName: any) {
              return "";
            }
          }
        },
        marker: {
          show: false
        }
      }
    };

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

    this.chartOptionsPolarArea = {
      series: [42, 39, 35, 29, 26],
      chart: {
        width: "100%",
        type: 'polarArea',
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
        },
      },
      fill: {
        opacity: 1
      },
      stroke: {
        width: 1,
        colors: undefined
      },
      yaxis: {
        show: false
      },
      legend: {
        position: 'bottom',
        fontWeight: 400,
        labels: {
          colors: themeColor,
        }
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 3,
            strokeColor: '#f2f2f2',
          }
        },
      },
      theme: {
        mode: 'light',
        monochrome: {
          shadeTo: 'dark',
          shadeIntensity: 0.6
        }
      },
    };
    this.chartOptionsAreaPurple2 = {
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100]
        }
      ],
      colors: ["#6f42c1"],
      chart: {
        type: "area",
        width: "100%",
        height: 80,
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
      stroke: {
        curve: "smooth"
      },
      fill: {
        opacity: 0.3
      },
      yaxis: {
        min: 0
      },
      tooltip: {
        theme: "dark",
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function (seriesName: any) {
              return "";
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    this.chartOptionsBarInfo2 = {
      series: [
        {
          name: "Net Profit",
          data: [40, 24, 55, 50, 30, 40, 24, 55, 20]
        }
      ],
      colors: ["#0dcaf0"],
      chart: {
        type: "bar",
        height: 80,
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
      plotOptions: {
        bar: {
          columnWidth: "55%",
          endingShape: "rounded"
        }
      },
      tooltip: {
        theme: "dark",
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function (seriesName: any) {
              return "";
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    this.chartOptionsAreaGreen2 = {
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100]
        }
      ],
      colors: ["#198754"],
      chart: {
        type: "area",
        height: 80,
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
      stroke: {
        curve: "smooth"
      },
      fill: {
        opacity: 0.3
      },
      yaxis: {
        min: 0
      },
      tooltip: {
        theme: "dark",
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function (seriesName: any) {
              return "";
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
  }

  getMaps() {
    this.chargeMaps = true;
    this.options = {
      center: { lat: -12.185800090331304, lng: -77.01390461534498 },
      zoom: 10,
      // clickableIcons:true,
      // disableDefaultUI:true,
      // draggable:true,
      // streetViewControl:true,
      mapTypeId: 'hybrid'
    };
    // mark : google.maps.Marker({ position: , map: this.map });
    this.markers = [
      {
        position: {
          lat: -12.185800090331304,
          lng: -77.01390461534498
        },
        label: "A",
        draggable: true,
        visible: false,
        opacity: 0.7
      }
    ];
  }
}
