import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { interval, Subscription } from 'rxjs';
import { AppService } from 'src/app/services/app.service';
import { ChartOptions } from '../analytics/analytics.component';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss']
})
export class EcommerceComponent implements OnInit {
  @ViewChild("hospital") hospital!: ChartComponent;
  public chartOptionsHospital: Partial<ChartOptions> | any;
  @ViewChild("appointments") appointments!: ChartComponent;
  public chartOptionsAppointments: Partial<ChartOptions> | any;
  @ViewChild("surgery") surgery!: ChartComponent;
  public chartOptionsSurgery: Partial<ChartOptions> | any;
  @ViewChild("report") report!: ChartComponent;
  public chartOptionsReport: Partial<ChartOptions> | any;
  @ViewChild("cost") cost!: ChartComponent;
  public chartOptionsCost: Partial<ChartOptions> | any;

  valueChartSpinner = 0;
  loadingChartSpinner = true;

  constructor(private breakpointObserver: BreakpointObserver, private appService: AppService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
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
    this.cdr.detectChanges();
  }

  setCharts(themeColor: string, speedChart:number) {
    this.loadingChartSpinner = false;
    this.valueChartSpinner = 0;
    this.chartOptionsHospital = {
      series: [{
        name: 'Consultations',
        data: [440, 505, 414, 671, 227, 613, 901, 352, 752, 320, 257, 160]
      }, {
        name: 'Patients',
        data: [230, 420, 350, 270, 430, 320, 570, 310, 220, 220, 120, 100]
      }],
      chart: {
        foreColor: themeColor,
        type: 'bar',
        height: 320,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
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
        // dropShadow: {
        //   enabled: true,
        //   top: 3,
        //   left: 14,
        //   blur: 4,
        //   opacity: 0.1,
        // }
      },
      theme: {
        mode: 'light'
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: -25,
        labels: {
          colors: themeColor
        }
      },
      markers: {
        size: 4,
        // colors: ["#007bff"],
        // strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
          size: 7,
        }
      },
      grid: {
        show: true,
        borderColor: '#ededed',
        strokeDashArray: 4,
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 3,
        curve: 'smooth'
      },
      colors: ["#265ed7", "#fe6555"],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        theme: "dark",
        fixed: {
          enabled: false
        }
      }
    };
    this.chartOptionsAppointments = {
      chart: {
        type: 'bar',
        width: 170,
        height: 65,
        zoom: {
          enabled: false
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
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          gradientToColors: ['#fff'],
          shadeIntensity: 1,
          type: 'vertical',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        },
      },
      colors: ["#fff"],
      series: [{
        name: 'Appointments',
        data: [25, 66, 41, 59, 25, 44, 52, 36, 20, 21]
      }],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '22%',
          //endingShape: 'rounded'
        },
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
    this.chartOptionsSurgery = {
      chart: {
        type: 'bar',
        width: 170,
        height: 65,
        zoom: {
          enabled: false
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
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          gradientToColors: ['#fff'],
          shadeIntensity: 1,
          type: 'vertical',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        },
      },
      colors: ["#fff"],
      series: [{
        name: 'Appointments',
        data: [25, 66, 41, 59, 25, 44, 52, 36, 20, 21]
      }],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '22%',
          //endingShape: 'rounded'
        },
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
    this.chartOptionsReport = {
      series: [44, 55, 41, 17],
      chart: {
        foreColor: themeColor,
        height: 320,
        type: 'donut',
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
      theme: {
        mode: 'light'
      },
      legend: {
        position: 'bottom',
        show: true,
        labels: {
          colors: themeColor
        }
      },
      plotOptions: {
        pie: {
          customScale: 0.8,
          donut: {
            size: '80%'
          }
        }
      },
      colors: ["#504da6", "#ffc200", "#6fd1f6", "#6f42c1"],
      dataLabels: {
        enabled: false
      },
      labels: ['Flue', 'Covid-19', 'Diabetis', 'Colds'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            height: 300
          },
          legend: {
            position: 'bottom'
          },
          plotOptions: {
            pie: {
              customScale: 1,
            }
          },
        }
      }]
    };
    this.chartOptionsCost = {
      series: [{
        name: 'Avg Treatment Costs',
        data: [440, 505, 414, 671, 427, 613, 901, 257, 160]
      }],
      chart: {
        foreColor: themeColor,
        type: 'bar',
        height: 260,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
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
        // dropShadow: {
        //   enabled: false,
        //   top: 3,
        //   left: 14,
        //   blur: 4,
        //   opacity: 0.10,
        // },
        sparkline: {
          enabled: false
        }
      },
      theme: {
        mode: 'light'
      },
      legend: {
        labels: {
          colors: themeColor
        }
      },
      grid: {
        show: true,
        borderColor: '#ededed',
        strokeDashArray: 4,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '22%',
          endingShape: 'rounded'
        },
      },
      markers: {
        size: 4,
        // colors: ["#007bff"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
          size: 7,
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 0,
        curve: 'smooth'
      },
      colors: ["#8833ff"],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      },
      fill: {
        opacity: 1
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

    }
  }
}
