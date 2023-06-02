import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
interface Breadcrumb {
  label: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private theme = new BehaviorSubject<string>('');
  public newTheme = this.theme.asObservable();

  private header = new BehaviorSubject<string>('');
  public headerNewColor = this.header.asObservable();


  private breadcrumbsSubject: BehaviorSubject<Breadcrumb[]> = new BehaviorSubject<Breadcrumb[]>([]);
  public breadcrumbs$: Observable<Breadcrumb[]> = this.breadcrumbsSubject.asObservable();

  //Imagen en Full Screen
  private isFullScreenSource = new BehaviorSubject<boolean>(false);
  isFullScreen$ = this.isFullScreenSource.asObservable();

  private fullscreenImageUrlSource = new BehaviorSubject<string>('');
  fullscreenImageUrl$ = this.fullscreenImageUrlSource.asObservable();
  //Fin Imagen en Full Screen

  constructor(private router: Router) {
    this.setBreadcrumb();
  }

  public getBreadcrumbs$(): Observable<Breadcrumb[]> {
    return this.breadcrumbs$;
  }

  public changeTheme(theme: string): void {
    this.theme.next(theme);
  }

  public changeHeaderColor(color: string): void {
    this.header.next(color);
  }

  //Imagen en Full Screen
  setIsFullScreen(isFullScreen: boolean) {
    this.isFullScreenSource.next(isFullScreen);
  }

  setFullscreenImageUrl(fullscreenImageUrl: string) {
    this.fullscreenImageUrlSource.next(fullscreenImageUrl);
  }
  //Fin Imagen en Full Screen

 setBreadcrumb() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.router.routerState.root.snapshot),
      map((route: ActivatedRouteSnapshot) => {
        const breadcrumbs: Breadcrumb[] = [];
        while (route) {
          if (route.data && route.data['breadcrumb']) {
            const url = route.pathFromRoot
              .map(v => v.url.map(segment => segment.toString()).join('/'))
              .filter(path => path !== '')
              .join('/');
            const breadcrumb: Breadcrumb = {
              label: route.data['breadcrumb'],
              url: `/${url}`
            };
            breadcrumbs.push(breadcrumb);
          }
          route = route.firstChild!;
        }
        return breadcrumbs;
      })
    ).subscribe(breadcrumbs => {
      this.breadcrumbsSubject.next(breadcrumbs);
    });
  }
}