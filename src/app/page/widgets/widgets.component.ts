import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { ChartComponent } from 'ng-apexcharts';
import { interval, Subscription } from 'rxjs';
import { AppService } from 'src/app/services/app.service';
import { ChartOptions } from '../dashboard/analytics/analytics.component';
declare var $: any;

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {
  @ViewChild("totalUser") totalUser!: ChartComponent;
  public chartOptionsTotalUser: Partial<ChartOptions> | any;
  @ViewChild("views") views!: ChartComponent;
  public chartOptionsViews: Partial<ChartOptions> | any;
  @ViewChild("sessionDuration") sessionDuration!: ChartComponent;
  public chartOptionsSessionDuration: Partial<ChartOptions> | any;
  @ViewChild("bounceRate") bounceRate!: ChartComponent;
  public chartOptionsBounceRate: Partial<ChartOptions> | any;

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
    this.chartOptionsTotalUser = {
      series: [{
        name: 'Total Users',
        data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257]
      }],
      chart: {
        type: 'line',
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
          color: '#17a00e',
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
        colors: ["#17a00e"],
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
      colors: ["#17a00e"],
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
    };
    this.chartOptionsViews = {
      series: [{
        name: 'Page Views',
        data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257]
      }],
      chart: {
        type: 'bar',
        height: 65,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        // dropShadow: {
        //   enabled: true,
        //   top: 3,
        //   left: 14,
        //   blur: 4,
        //   opacity: 0.12,
        //   color: '#f41127',
        // },
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
          columnWidth: '35%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 0,
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
            formatter: function (seriesName:any) {
              return ''
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    this.chartOptionsSessionDuration = {
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
          color: '#0d6efd',
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
        colors: ["#0d6efd"],
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
      colors: ["#0d6efd"],
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
            formatter: function (seriesName:any) {
              return ''
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    this.chartOptionsBounceRate = {
      series: [{
        name: 'Bounce Rate',
        data: [240, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 257]
      }],
      chart: {
        type: 'bar',
        height: 65,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        // dropShadow: {
        //   enabled: true,
        //   top: 3,
        //   left: 14,
        //   blur: 4,
        //   opacity: 0.12,
        //   color: '#ffb207',
        // },
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
          columnWidth: '35%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 0,
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
            formatter: function (seriesName:any) {
              return ''
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
  }

  resizeWidthCharts() {
    //Renderizamos el width de los charts < 768px no tomaba el 100% del div padre
    setTimeout(() => {
      this.totalUser.updateOptions({ chart: { width: 1 } }),
      this.views.updateOptions({ chart: { width: 1 } }),
      this.sessionDuration.updateOptions({ chart: { width: 1 } }),
      this.bounceRate.updateOptions({ chart: { width: 1 } })
    }, 0)
    setTimeout(() => {
      this.totalUser.updateOptions({ chart: { width: '100%' } }),
      this.views.updateOptions({ chart: { width: '100%' } }),
      this.sessionDuration.updateOptions({ chart: { width: '100%' } }),
      this.bounceRate.updateOptions({ chart: { width: '100%' } })
    }, 500)
  }
}
