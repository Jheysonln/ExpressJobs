import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AppService } from 'src/app/data/services/app.service';

interface Breadcrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  
  breadcrumbs: Breadcrumb[] = [];
  private subscription!: Subscription;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.subscription = this.appService.getBreadcrumbs$().subscribe(breadcrumbs => {
      this.breadcrumbs = breadcrumbs;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}