import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private theme = new BehaviorSubject<string>('');
  public newTheme = this.theme.asObservable();

  private header = new BehaviorSubject<string>('');
  public headerNewColor = this.header.asObservable();

  private sidebar = new BehaviorSubject<string>('');
  public sidebarNewColor = this.sidebar.asObservable();

  constructor() { }

  public changeTheme(theme:string): void  {
    this.theme.next(theme);
  }

  public changeHeaderColor(color:string): void  {
    this.header.next(color);
  }

  public changeSidebarColor(color:string): void  {
    this.sidebar.next(color);
  }

}
